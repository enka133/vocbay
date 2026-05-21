import { useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  Clock3,
  Eye,
  Layers3,
  RotateCcw,
  Search,
} from "lucide-react";
import { normalizeArabicForKey } from "@vocbay/core/arabic";
import {
  buildStudyQueue,
  formatDueDistance,
  getCardReviewState,
  getCardStatus,
  getDeckStats,
  gradeCardReview,
  previewRating,
  ratingLabels,
  type Rating,
  type ReviewState,
} from "./scheduler";
import { vocabularyCards, type VocabularyCard } from "./vocabulary";

const REVIEW_STATE_KEY = "vocbay.ankiReviewState.v1";
const LEGACY_STATE_KEY = "vocbay.studyStats.v1";

type Screen = "deck" | "study" | "browser" | "complete";

const fallbackCard = vocabularyCards[0]!;

export function App() {
  const [screen, setScreen] = useState<Screen>("deck");
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewState, setReviewState] = useState<ReviewState>(() => loadReviewState());
  const [studyQueue, setStudyQueue] = useState<VocabularyCard[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [chapterFilter, setChapterFilter] = useState<number | "all">("all");
  const [clock, setClock] = useState(() => Date.now());

  useEffect(() => {
    localStorage.setItem(REVIEW_STATE_KEY, JSON.stringify(reviewState));
  }, [reviewState]);

  useEffect(() => {
    const timer = window.setInterval(() => setClock(Date.now()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  const deckStats = useMemo(() => getDeckStats(vocabularyCards, reviewState, clock), [reviewState, clock]);
  const studyPreview = useMemo(() => buildStudyQueue(vocabularyCards, reviewState, clock), [reviewState, clock]);
  const currentCard = studyQueue[currentIndex] ?? studyPreview[0] ?? fallbackCard;
  const currentState = getCardReviewState(reviewState, currentCard.id, clock);
  const currentStatus = getCardStatus(reviewState[currentCard.id], clock);
  const visibleCards = useMemo(
    () => filterCards(vocabularyCards, reviewState, searchTerm, chapterFilter, clock),
    [chapterFilter, clock, reviewState, searchTerm],
  );
  const chapters = useMemo(() => [...new Set(vocabularyCards.map((card) => card.chapter))], []);
  const sessionProgress = studyQueue.length ? `${Math.min(currentIndex + 1, studyQueue.length)} / ${studyQueue.length}` : "0 / 0";

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target?.tagName === "INPUT" || target?.tagName === "TEXTAREA") {
        return;
      }

      if (screen !== "study") {
        return;
      }

      if ((event.key === " " || event.key === "Enter") && !isAnswerShown) {
        event.preventDefault();
        setIsAnswerShown(true);
        return;
      }

      if (!isAnswerShown) {
        return;
      }

      const ratingByKey: Record<string, Rating> = {
        "1": "again",
        "2": "hard",
        "3": "good",
        "4": "easy",
      };
      const rating = ratingByKey[event.key];

      if (rating) {
        event.preventDefault();
        gradeCurrentCard(rating);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentCard.id, currentIndex, isAnswerShown, screen, studyQueue.length]);

  function startStudy() {
    const queue = buildStudyQueue(vocabularyCards, reviewState, Date.now());

    setStudyQueue(queue);
    setCurrentIndex(0);
    setIsAnswerShown(false);
    setClock(Date.now());
    setScreen(queue.length ? "study" : "complete");
  }

  function gradeCurrentCard(rating: Rating) {
    const now = Date.now();
    setReviewState((state) => gradeCardReview(state, currentCard.id, rating, now));
    setClock(now);

    if (currentIndex + 1 >= studyQueue.length) {
      setScreen("complete");
      setIsAnswerShown(false);
      return;
    }

    setCurrentIndex((index) => index + 1);
    setIsAnswerShown(false);
  }

  function resetProgress() {
    localStorage.removeItem(REVIEW_STATE_KEY);
    localStorage.removeItem(LEGACY_STATE_KEY);
    setReviewState({});
    setStudyQueue([]);
    setCurrentIndex(0);
    setIsAnswerShown(false);
    setScreen("deck");
    setClock(Date.now());
  }

  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">VocBay</p>
          <h1>Bayna Book One</h1>
        </div>
        <div className="header-actions">
          <button className="icon-button" type="button" aria-label="Open deck browser" onClick={() => setScreen("browser")}>
            <BookOpen size={20} aria-hidden="true" />
          </button>
          <button className="icon-button danger" type="button" aria-label="Reset progress" onClick={resetProgress}>
            <RotateCcw size={20} aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className={`app-layout ${screen === "study" ? "study-mode" : ""}`}>
        <DeckPanel stats={deckStats} queueSize={studyPreview.length} onStudy={startStudy} onBrowse={() => setScreen("browser")} />

        <section className="review-surface" aria-live="polite">
          {screen === "deck" || screen === "browser" ? (
            <DeckHome stats={deckStats} queueSize={studyPreview.length} nextCard={studyPreview[0] ?? fallbackCard} onStudy={startStudy} />
          ) : null}

          {screen === "study" ? (
            <StudyCard
              key={currentCard.id}
              card={currentCard}
              cardState={currentState}
              cardStatus={currentStatus}
              isAnswerShown={isAnswerShown}
              progress={sessionProgress}
              now={clock}
              onReveal={() => setIsAnswerShown(true)}
              onGrade={gradeCurrentCard}
            />
          ) : null}

          {screen === "complete" ? (
            <CompleteState reviewedCount={studyQueue.length} stats={deckStats} onStudy={startStudy} onBrowse={() => setScreen("browser")} />
          ) : null}
        </section>

        {screen === "study" ? null : (
          <DeckBrowser
            cards={visibleCards}
            chapters={chapters}
            chapterFilter={chapterFilter}
            now={clock}
            reviewState={reviewState}
            searchTerm={searchTerm}
            onChapterFilter={setChapterFilter}
            onSearch={setSearchTerm}
          />
        )}
      </div>
    </main>
  );
}

function DeckPanel({
  stats,
  queueSize,
  onStudy,
  onBrowse,
}: {
  stats: ReturnType<typeof getDeckStats>;
  queueSize: number;
  onStudy: () => void;
  onBrowse: () => void;
}) {
  return (
    <aside className="deck-panel">
      <div className="deck-title">
        <Layers3 size={20} aria-hidden="true" />
        <div>
          <h2>Arabic Vocab</h2>
          <p data-testid="deck-total">{stats.total} cards</p>
        </div>
      </div>

      <div className="deck-counts">
        <StatTile label="Due" value={stats.due} tone="due" />
        <StatTile label="New" value={stats.newCards} tone="new" />
        <StatTile label="Learning" value={stats.learning} tone="learning" />
        <StatTile label="Review" value={stats.review} tone="review" />
      </div>

      <button className="primary-action" type="button" onClick={onStudy} disabled={queueSize === 0}>
        <CheckCircle2 size={18} aria-hidden="true" />
        Study now
      </button>
      <button className="secondary-action" type="button" onClick={onBrowse}>
        <BookOpen size={18} aria-hidden="true" />
        Browse
      </button>
    </aside>
  );
}

function DeckHome({
  stats,
  queueSize,
  nextCard,
  onStudy,
}: {
  stats: ReturnType<typeof getDeckStats>;
  queueSize: number;
  nextCard: VocabularyCard;
  onStudy: () => void;
}) {
  return (
    <div className="home-panel">
      <div className="home-copy">
        <p className="eyebrow">Deck</p>
        <h2>Reviews first. New cards after.</h2>
      </div>

      <div className="home-grid">
        <MetricCard label="Queue" value={queueSize} detail="available now" />
        <MetricCard label="Mature" value={stats.mature} detail="21d interval" />
        <MetricCard label="Total" value={stats.total} detail="Book One import" />
      </div>

      <div className="next-card-preview">
        <span>Next</span>
        <p dir="rtl" lang="ar">
          {nextCard.target}
        </p>
        <strong>{nextCard.answer}</strong>
      </div>

      <button className="primary-action hero-action" type="button" onClick={onStudy} disabled={queueSize === 0}>
        <CheckCircle2 size={18} aria-hidden="true" />
        Study now
      </button>
    </div>
  );
}

function StudyCard({
  card,
  cardState,
  cardStatus,
  isAnswerShown,
  progress,
  now,
  onReveal,
  onGrade,
}: {
  card: VocabularyCard;
  cardState: ReturnType<typeof getCardReviewState>;
  cardStatus: string;
  isAnswerShown: boolean;
  progress: string;
  now: number;
  onReveal: () => void;
  onGrade: (rating: Rating) => void;
}) {
  const targetKey = normalizeArabicForKey(card.target);

  return (
    <article className={`study-card ${isAnswerShown ? "answer-shown" : ""}`}>
      <div className="study-meta">
        <span data-testid="session-progress">{progress}</span>
        <span>Chapter {card.chapter}</span>
        {card.formRole ? <span>{formatFormRole(card.formRole)}</span> : null}
        <span>{cardStatus}</span>
      </div>

      <div className="front-side">
        <p className="prompt-text">{card.prompt}</p>
        <p className="arabic-sentence" dir="rtl" lang="ar">
          {renderArabicWithHighlight(card)}
        </p>
        <p className="key-line">
          <code>{targetKey}</code>
        </p>
      </div>

      {isAnswerShown ? (
        <>
          <AnswerPanel card={card} />
          <div className="grade-grid" aria-label="Grade this card">
            {(["again", "hard", "good", "easy"] as Rating[]).map((rating) => {
              const preview = previewRating(cardState, rating, now);
              return (
                <button className={`grade-button ${rating}`} key={rating} type="button" onClick={() => onGrade(rating)}>
                  <span>{ratingLabels[rating]}</span>
                  <strong>{formatDueDistance(preview.dueAt, now)}</strong>
                </button>
              );
            })}
          </div>
        </>
      ) : (
        <button className="reveal-action" type="button" onClick={onReveal}>
          <Eye size={18} aria-hidden="true" />
          Show answer
        </button>
      )}
    </article>
  );
}

function AnswerPanel({ card }: { card: VocabularyCard }) {
  return (
    <div className="answer-panel">
      <div>
        <p className="answer-label">Back</p>
        <strong>{card.answer}</strong>
      </div>
      <p className="translation">{card.detail}</p>

      <dl>
        {card.singular ? <Fact label="Singular" value={card.singular} /> : null}
        {card.plural ? <Fact label="Plural" value={card.plural} /> : null}
        {card.forms?.past ? <Fact label="Past" value={card.forms.past} /> : null}
        {card.forms?.present ? <Fact label="Present" value={card.forms.present} /> : null}
        {card.forms?.command ? <Fact label="Command" value={card.forms.command} /> : null}
        {card.forms?.masdar ? <Fact label="Masdar" value={card.forms.masdar} /> : null}
        {card.requiredPreposition ? <Fact label="Preposition" value={card.requiredPreposition} /> : null}
      </dl>

      {card.translation ? <p className="translation">{card.translation}</p> : null}
    </div>
  );
}

function CompleteState({
  reviewedCount,
  stats,
  onStudy,
  onBrowse,
}: {
  reviewedCount: number;
  stats: ReturnType<typeof getDeckStats>;
  onStudy: () => void;
  onBrowse: () => void;
}) {
  const remaining = stats.due + stats.newCards;

  return (
    <div className="complete-state">
      <CheckCircle2 size={34} aria-hidden="true" />
      <div>
        <h2>Session complete</h2>
        <p data-testid="reviewed-count">{reviewedCount} cards reviewed.</p>
      </div>
      <div className="complete-actions">
        <button className="primary-action" type="button" onClick={onStudy} disabled={remaining === 0}>
          <Clock3 size={18} aria-hidden="true" />
          Study now
        </button>
        <button className="secondary-action" type="button" onClick={onBrowse}>
          <BookOpen size={18} aria-hidden="true" />
          Browse
        </button>
      </div>
    </div>
  );
}

function DeckBrowser({
  cards,
  chapters,
  chapterFilter,
  now,
  reviewState,
  searchTerm,
  onChapterFilter,
  onSearch,
}: {
  cards: VocabularyCard[];
  chapters: number[];
  chapterFilter: number | "all";
  now: number;
  reviewState: ReviewState;
  searchTerm: string;
  onChapterFilter: (chapter: number | "all") => void;
  onSearch: (value: string) => void;
}) {
  return (
    <aside className="browser-panel" aria-label="Deck browser">
      <div className="browser-header">
        <div>
          <p className="eyebrow">Cards</p>
          <h2>Browser</h2>
        </div>
        <BarChart3 size={20} aria-hidden="true" />
      </div>

      <label className="search-box">
        <Search size={16} aria-hidden="true" />
        <input value={searchTerm} onChange={(event) => onSearch(event.target.value)} placeholder="Search deck" />
      </label>

      <div className="chapter-tabs" aria-label="Chapter filter">
        <button type="button" className={chapterFilter === "all" ? "active" : ""} onClick={() => onChapterFilter("all")}>
          All
        </button>
        {chapters.map((chapter) => (
          <button
            type="button"
            key={chapter}
            className={chapterFilter === chapter ? "active" : ""}
            onClick={() => onChapterFilter(chapter)}
          >
            Ch {chapter}
          </button>
        ))}
      </div>

      <div className="card-list">
        {cards.map((card) => {
          const state = reviewState[card.id];
          return (
            <article className="browser-card" key={card.id}>
              <div>
                <p dir="rtl" lang="ar">
                  {card.target}
                </p>
                <strong>{card.formRole ? `${card.answer} · ${formatFormRole(card.formRole)}` : card.answer}</strong>
              </div>
              <div className="browser-card-meta">
                <span>{getCardStatus(state, now)}</span>
                {card.formRole ? <span>{formatFormRole(card.formRole)}</span> : null}
                <span>{state ? formatDueDistance(state.dueAt, now) : "new"}</span>
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
}

function StatTile({ label, value, tone }: { label: string; value: number; tone: string }) {
  return (
    <article className={`stat-tile ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}

function MetricCard({ label, value, detail }: { label: string; value: number; detail: string }) {
  return (
    <article className="metric-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </article>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd dir="rtl" lang="ar">
        {value}
      </dd>
    </div>
  );
}

function renderArabicWithHighlight(card: VocabularyCard) {
  const [before, after] = card.arabic.split(card.target);

  if (before === undefined || after === undefined) {
    return card.arabic;
  }

  return (
    <>
      {before}
      <mark>{card.target}</mark>
      {after}
    </>
  );
}

function filterCards(
  cards: VocabularyCard[],
  reviewState: ReviewState,
  searchTerm: string,
  chapterFilter: number | "all",
  now: number,
) {
  const normalizedSearch = normalizeArabicForKey(searchTerm).toLowerCase();

  return cards.filter((card) => {
    if (chapterFilter !== "all" && card.chapter !== chapterFilter) {
      return false;
    }

    if (!normalizedSearch) {
      return true;
    }

    const state = reviewState[card.id];
    const searchable = [
      normalizeArabicForKey(card.target),
      normalizeArabicForKey(card.arabic),
      card.answer.toLowerCase(),
      card.formRole ?? "",
      card.kind,
      getCardStatus(state, now).toLowerCase(),
    ].join(" ");

    return searchable.includes(normalizedSearch);
  });
}

function formatFormRole(role: NonNullable<VocabularyCard["formRole"]>) {
  const labels: Record<NonNullable<VocabularyCard["formRole"]>, string> = {
    past: "Past",
    present: "Present",
    command: "Command",
    masdar: "Masdar",
  };

  return labels[role];
}

function loadReviewState(): ReviewState {
  try {
    const raw = localStorage.getItem(REVIEW_STATE_KEY);
    return raw ? (JSON.parse(raw) as ReviewState) : {};
  } catch {
    return {};
  }
}

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  Clock3,
  Eye,
  Flame,
  Layers3,
  Search,
  Sparkles,
  Trophy,
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
import { getAnswerMeaning } from "./formMeanings";
import {
  applyReviewReward,
  createInitialPlayerState,
  getLevelProgress,
  getRankInfo,
  hydratePlayerState,
  type PlayerState,
} from "./rewards";
import { vocabularyCards, type VocabularyCard } from "./vocabulary";

const REVIEW_STATE_KEY = "vocbay.ankiReviewState.v1";
const PLAYER_STATE_KEY = "vocbay.playerState.v1";
const BROWSER_CARD_LIMIT = 180;

type Screen = "deck" | "study" | "browser" | "complete";
type RewardFeedback = {
  id: number;
  xpGained: number;
  message: string;
  streak: number;
};

const fallbackCard = vocabularyCards[0]!;

export function App() {
  const [screen, setScreen] = useState<Screen>("deck");
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewState, setReviewState] = useState<ReviewState>(() => loadReviewState());
  const [playerState, setPlayerState] = useState<PlayerState>(() => loadPlayerState());
  const [studyQueue, setStudyQueue] = useState<VocabularyCard[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [chapterFilter, setChapterFilter] = useState<number | "all">("all");
  const [clock, setClock] = useState(() => Date.now());
  const [rewardFeedback, setRewardFeedback] = useState<RewardFeedback | null>(null);
  const [revealedAt, setRevealedAt] = useState<number | null>(null);
  const deferredSearchTerm = useDeferredValue(searchTerm);

  useEffect(() => {
    localStorage.setItem(REVIEW_STATE_KEY, JSON.stringify(reviewState));
  }, [reviewState]);

  useEffect(() => {
    localStorage.setItem(PLAYER_STATE_KEY, JSON.stringify(playerState));
  }, [playerState]);

  useEffect(() => {
    const timer = window.setInterval(() => setClock(Date.now()), 30_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!rewardFeedback) {
      return;
    }

    const timer = window.setTimeout(() => setRewardFeedback(null), 190);
    return () => window.clearTimeout(timer);
  }, [rewardFeedback]);

  useEffect(() => {
    setRevealedAt(isAnswerShown ? Date.now() : null);
  }, [isAnswerShown]);

  const deckStats = useMemo(() => getDeckStats(vocabularyCards, reviewState, clock), [reviewState, clock]);
  const studyPreview = useMemo(() => buildStudyQueue(vocabularyCards, reviewState, clock), [reviewState, clock]);
  const currentCard = studyQueue[currentIndex] ?? studyPreview[0] ?? fallbackCard;
  const currentState = getCardReviewState(reviewState, currentCard.id, clock);
  const visibleCards = useMemo(
    () => (screen === "browser" ? filterCards(vocabularyCards, reviewState, deferredSearchTerm, chapterFilter, clock) : []),
    [chapterFilter, clock, deferredSearchTerm, reviewState, screen],
  );
  const chapters = useMemo(() => [...new Set(vocabularyCards.map((card) => card.chapter))], []);

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
    const responseLatencyMs = revealedAt ? now - revealedAt : 0;
    const reward = applyReviewReward(playerState, rating, now);

    setPlayerState(reward.state);
    if (reward.isSuccess) {
      setRewardFeedback({
        id: now,
        xpGained: reward.xpGained,
        message: reward.message,
        streak: reward.state.streak,
      });
    }

    setReviewState((state) => gradeCardReview(state, currentCard.id, rating, now, responseLatencyMs));
    setClock(now);

    if (currentIndex + 1 >= studyQueue.length) {
      setScreen("complete");
      setIsAnswerShown(false);
      return;
    }

    setCurrentIndex((index) => index + 1);
    setIsAnswerShown(false);
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
        </div>
      </header>

      <div
        className={`app-layout screen-${screen} ${screen === "study" ? "study-mode" : ""} ${
          screen === "browser" ? "browser-mode" : ""
        }`}
      >
        <DeckPanel stats={deckStats} onBrowse={() => setScreen("browser")} />

        <section className="review-surface" aria-live="polite">
          {screen === "deck" || screen === "browser" ? (
            <DeckHome
              stats={deckStats}
              playerState={playerState}
              queueSize={studyPreview.length}
              nextCard={studyPreview[0] ?? fallbackCard}
              onStudy={startStudy}
            />
          ) : null}

          {screen === "study" ? (
            <StudyCard
              key={currentCard.id}
              card={currentCard}
              cardState={currentState}
              isAnswerShown={isAnswerShown}
              now={clock}
              onReveal={() => setIsAnswerShown(true)}
              onGrade={gradeCurrentCard}
            />
          ) : null}

          {screen === "complete" ? (
            <CompleteState
              reviewedCount={studyQueue.length}
              stats={deckStats}
              playerState={playerState}
              onStudy={startStudy}
              onBrowse={() => setScreen("browser")}
            />
          ) : null}
        </section>

        {screen === "browser" ? (
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
        ) : null}
      </div>

      {rewardFeedback ? <RewardBurst key={rewardFeedback.id} feedback={rewardFeedback} /> : null}
    </main>
  );
}

function DeckPanel({
  stats,
  onBrowse,
}: {
  stats: ReturnType<typeof getDeckStats>;
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

      <button className="secondary-action" type="button" onClick={onBrowse}>
        <BookOpen size={18} aria-hidden="true" />
        Browse
      </button>
    </aside>
  );
}

function DeckHome({
  stats,
  playerState,
  queueSize,
  nextCard,
  onStudy,
}: {
  stats: ReturnType<typeof getDeckStats>;
  playerState: PlayerState;
  queueSize: number;
  nextCard: VocabularyCard;
  onStudy: () => void;
}) {
  return (
    <div className="home-panel">
      <div className="home-copy">
        <p className="eyebrow">Today</p>
        <h2>{queueSize > 0 ? "Start your queue" : "No cards due"}</h2>
      </div>

      <RankStrip playerState={playerState} />

      <div className="next-card-preview">
        <div className="next-card-meta">
          <span>Next</span>
          <span>Chapter {nextCard.chapter}</span>
          {nextCard.formRole ? <span>{formatFormRole(nextCard.formRole)}</span> : null}
        </div>
        <p dir="rtl" lang="ar">
          {nextCard.target}
        </p>
        <strong>{nextCard.answer}</strong>
      </div>

      <div className="queue-strip" aria-label="Queue summary">
        <MetricPill label="Queue" value={queueSize} />
        <MetricPill label="Due" value={stats.due} />
        <MetricPill label="New" value={stats.newCards} />
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
  isAnswerShown,
  now,
  onReveal,
  onGrade,
}: {
  card: VocabularyCard;
  cardState: ReturnType<typeof getCardReviewState>;
  isAnswerShown: boolean;
  now: number;
  onReveal: () => void;
  onGrade: (rating: Rating) => void;
}) {
  const targetKey = normalizeArabicForKey(card.target);
  const masteryStep = getMasteryStep(cardState);
  const reviewCount = cardState.repetitions;
  const isNewCard = cardState.phase === "new" || reviewCount === 0;
  const chapterCards = vocabularyCards.filter((entry) => entry.chapter === card.chapter);
  const chapterTotal = chapterCards.length;
  const chapterPosition = chapterCards.findIndex((entry) => entry.id === card.id) + 1;
  const chapterRatio = chapterTotal ? chapterPosition / chapterTotal : 0;

  return (
    <article className={`study-card ${isAnswerShown ? "answer-shown" : ""}`}>
      <FamiliarityBadge isNew={isNewCard} reviewCount={reviewCount} />
      <header className="study-progress">
        <div className="study-progress-head">
          <span className="study-chapter">Chapter {card.chapter}</span>
          <span className="study-count" data-testid="session-progress">
            {chapterPosition} / {chapterTotal}
          </span>
        </div>
        <div className="study-progress-track" aria-hidden="true">
          <span style={{ transform: `scaleX(${chapterRatio})` }} />
        </div>
      </header>

      <div className="study-workspace">
        <div className="front-side">
          <p className="prompt-text">{card.prompt}</p>
          <p className="arabic-sentence" dir="rtl" lang="ar">
            {renderArabicWithHighlight(card, masteryStep)}
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
            <Eye size={20} aria-hidden="true" />
            Show answer
          </button>
        )}
      </div>
    </article>
  );
}

function AnswerPanel({ card }: { card: VocabularyCard }) {
  const facts = getAnswerFacts(card);
  const answerMeaning = getAnswerMeaning(card);

  return (
    <div className="answer-panel">
      <div>
        <strong data-testid="answer-meaning">{answerMeaning}</strong>
      </div>

      {facts.length ? (
        <dl data-testid="answer-facts">
          {facts.map((fact) => (
            <Fact key={fact.label} label={fact.label} value={fact.value} />
          ))}
        </dl>
      ) : null}

      {card.translation ? <p className="translation">{card.translation}</p> : null}
    </div>
  );
}

function getAnswerFacts(card: VocabularyCard) {
  const facts: { label: string; value: string }[] = [];

  if (card.formRole) {
    return facts;
  }

  if (card.singular) {
    facts.push({ label: "Singular", value: card.singular });
  }

  if (card.plural) {
    facts.push({ label: "Plural", value: card.plural });
  }

  return facts;
}

function CompleteState({
  reviewedCount,
  stats,
  playerState,
  onStudy,
  onBrowse,
}: {
  reviewedCount: number;
  stats: ReturnType<typeof getDeckStats>;
  playerState: PlayerState;
  onStudy: () => void;
  onBrowse: () => void;
}) {
  const remaining = stats.due + stats.newCards;

  return (
    <div className="complete-state">
      <CheckCircle2 size={34} aria-hidden="true" />
      <p className="completion-arabic" dir="rtl" lang="ar">
        ثَبَتَ
      </p>
      <div>
        <h2>Session complete</h2>
        <p data-testid="reviewed-count">{reviewedCount} cards reviewed.</p>
      </div>
      <RankStrip playerState={playerState} compact />
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

function RankStrip({ playerState, compact = false }: { playerState: PlayerState; compact?: boolean }) {
  const rank = getRankInfo(playerState.level);
  const progress = getLevelProgress(playerState.xp, playerState.level);
  const accuracy = playerState.todayReviews ? Math.round((playerState.todayCorrect / playerState.todayReviews) * 100) : 0;

  return (
    <section className={`rank-strip ${compact ? "compact" : ""}`} aria-label="Rank progress" data-testid="rank-strip">
      <div className="rank-line">
        <div>
          <span>
            <Trophy size={16} aria-hidden="true" />
            {rank.name}
          </span>
          <p>{rank.subtitle}</p>
        </div>
        <strong data-testid="player-xp">{playerState.xp} XP</strong>
      </div>
      <div className="rank-meter" aria-label={`Level ${playerState.level} progress`}>
        <span style={{ transform: `scaleX(${progress.ratio})` }} />
      </div>
      <div className="rank-stats">
        <span>
          <Flame size={14} aria-hidden="true" />
          <strong data-testid="player-streak">{playerState.streak}</strong> streak
        </span>
        <span>Lv {playerState.level}</span>
        <span>{accuracy}% today</span>
      </div>
    </section>
  );
}

function RewardBurst({ feedback }: { feedback: RewardFeedback }) {
  return (
    <div className="reward-burst" aria-hidden="true">
      <Sparkles size={16} aria-hidden="true" />
      <strong>+{feedback.xpGained} XP</strong>
      <span>{feedback.message}</span>
      <em>{feedback.streak} streak</em>
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
  const renderedCards = cards.slice(0, BROWSER_CARD_LIMIT);
  const hiddenCount = cards.length - renderedCards.length;

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

      <p className="browser-result-count">
        Showing {renderedCards.length} of {cards.length}
        {hiddenCount > 0 ? ". Search or filter to narrow." : ""}
      </p>

      <div className="card-list">
        {renderedCards.map((card) => {
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

function FamiliarityBadge({ isNew, reviewCount }: { isNew: boolean; reviewCount: number }) {
  return (
    <span
      className={`familiarity-badge ${isNew ? "is-new" : ""}`}
      data-testid="familiarity-badge"
      data-review-count={reviewCount}
      aria-label={isNew ? "New card" : `Seen ${reviewCount} times`}
      title={isNew ? "First time seeing this" : `Seen ${reviewCount}×`}
    >
      {isNew ? (
        <>
          <Sparkles size={12} aria-hidden="true" />
          New
        </>
      ) : (
        <>
          <Eye size={12} aria-hidden="true" />
          {reviewCount}
        </>
      )}
    </span>
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

function MetricPill({ label, value }: { label: string; value: number }) {
  return (
    <div className="metric-pill">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
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

function renderArabicWithHighlight(card: VocabularyCard, masteryStep: MasteryStep) {
  const [before, after] = card.arabic.split(card.target);

  if (before === undefined || after === undefined) {
    return card.arabic;
  }

  return (
    <>
      {before}
      <mark className={`mastery-${masteryStep}`} data-testid="target-mastery" data-mastery-step={masteryStep}>
        {card.target}
      </mark>
      {after}
    </>
  );
}

type MasteryStep = 0 | 20 | 40 | 60 | 80 | 100;

function getMasteryStep(state: ReturnType<typeof getCardReviewState>): MasteryStep {
  if (state.phase === "new" || state.repetitions === 0) {
    return 0;
  }

  if (state.lastRating === "again") {
    return 0;
  }

  if (state.lastRating === "hard") {
    return 20;
  }

  const intervalStep = getIntervalMasteryStep(state.intervalDays);

  if (state.lastRating === "easy") {
    return clampMasteryStep(intervalStep + 20, 60);
  }

  if (state.lastRating === "good") {
    return clampMasteryStep(intervalStep, 40);
  }

  return intervalStep;
}

function getIntervalMasteryStep(intervalDays: number): MasteryStep {
  if (intervalDays >= 21) {
    return 100;
  }

  if (intervalDays >= 7) {
    return 80;
  }

  if (intervalDays >= 4) {
    return 60;
  }

  if (intervalDays >= 1) {
    return 40;
  }

  return 20;
}

function clampMasteryStep(step: number, minimum: MasteryStep): MasteryStep {
  const rounded = Math.ceil(step / 20) * 20;
  return Math.min(100, Math.max(minimum, rounded)) as MasteryStep;
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

function loadPlayerState(): PlayerState {
  try {
    const raw = localStorage.getItem(PLAYER_STATE_KEY);
    return raw ? hydratePlayerState(JSON.parse(raw)) : createInitialPlayerState();
  } catch {
    return createInitialPlayerState();
  }
}

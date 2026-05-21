import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  Clock3,
  RotateCcw,
  Sparkles,
  Volume2,
  XCircle,
} from "lucide-react";
import { normalizeArabicForKey } from "@vocbay/core/arabic";
import { vocabularyCards, type VocabularyCard } from "./vocabulary";

const STORAGE_KEY = "vocbay.studyStats.v1";

type SprintPhase = "idle" | "reviewing" | "complete";
type Grade = "got" | "forgot";
type StudyStats = Record<string, { got: number; forgot: number; lastGrade?: Grade }>;

const sprintSize = 10;

export function App() {
  const [phase, setPhase] = useState<SprintPhase>("idle");
  const [isRevealed, setIsRevealed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stats, setStats] = useState<StudyStats>(() => loadStats());
  const [sprintQueue, setSprintQueue] = useState<VocabularyCard[]>([]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  }, [stats]);

  const plannedQueue = useMemo(() => buildQueue(stats), [stats]);
  const queue = phase === "reviewing" || phase === "complete" ? sprintQueue : plannedQueue;
  const fallbackCard = vocabularyCards[0]!;
  const currentCard = queue[currentIndex] ?? queue[0] ?? fallbackCard;
  const remaining =
    phase === "complete" ? 0 : phase === "reviewing" ? Math.max(queue.length - currentIndex, 0) : queue.length;
  const targetKey = normalizeArabicForKey(currentCard.target);
  const totalGot = Object.values(stats).reduce((sum, card) => sum + card.got, 0);
  const totalForgot = Object.values(stats).reduce((sum, card) => sum + card.forgot, 0);
  const seenCount = Object.values(stats).filter((card) => card.got + card.forgot > 0).length;

  function startSprint() {
    setSprintQueue(buildQueue(stats));
    setPhase("reviewing");
    setCurrentIndex(0);
    setIsRevealed(false);
  }

  function gradeCard(grade: Grade) {
    setStats((currentStats) => {
      const previous = currentStats[currentCard.id] ?? { got: 0, forgot: 0 };

      return {
        ...currentStats,
        [currentCard.id]: {
          got: previous.got + (grade === "got" ? 1 : 0),
          forgot: previous.forgot + (grade === "forgot" ? 1 : 0),
          lastGrade: grade,
        },
      };
    });

    if (currentIndex + 1 >= queue.length) {
      setPhase("complete");
      setIsRevealed(true);
      return;
    }

    setCurrentIndex((index) => index + 1);
    setIsRevealed(false);
  }

  function resetProgress() {
    setStats({});
    setSprintQueue([]);
    setPhase("idle");
    setCurrentIndex(0);
    setIsRevealed(false);
    localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <main className="app-shell">
      <section className="sprint-panel" aria-labelledby="daily-sprint-title">
        <div className="top-bar">
          <div>
            <p className="eyebrow">VocBay</p>
            <h1 id="daily-sprint-title">Bayna sprint</h1>
          </div>
          <button className="icon-button" aria-label="Open learning plan">
            <BookOpen size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="focus-card" aria-live="polite">
          <div className="focus-meta">
            <span className="status-pill">
              <Sparkles size={14} aria-hidden="true" />
              Chapter {currentCard.chapter}
            </span>
            <span className="retention">
              <Clock3 size={14} aria-hidden="true" />
              {phase === "reviewing" ? `${currentIndex + 1}/${queue.length}` : `${seenCount}/${vocabularyCards.length}`}
            </span>
          </div>

          {phase === "complete" ? (
            <div className="complete-state">
              <CheckCircle2 size={30} aria-hidden="true" />
              <div>
                <h2>Sprint complete</h2>
                <p>
                  {queue.length} cards reviewed. Got: {totalGot}. Forgot: {totalForgot}.
                </p>
              </div>
            </div>
          ) : (
            <CardPrompt card={currentCard} targetKey={targetKey} />
          )}

          {phase === "reviewing" ? (
            <div className="review-panel">
              {isRevealed ? (
                <AnswerPanel card={currentCard} />
              ) : (
                <button className="reveal-action" onClick={() => setIsRevealed(true)}>
                  <Volume2 size={18} aria-hidden="true" />
                  Reveal answer
                </button>
              )}

              {isRevealed ? (
                <div className="answer-actions" aria-label="Grade this card">
                  <button className="secondary-action" onClick={() => gradeCard("forgot")}>
                    <XCircle size={18} aria-hidden="true" />
                    Forgot
                  </button>
                  <button className="primary-action compact" onClick={() => gradeCard("got")}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    Got it
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="sprint-grid" aria-label="Sprint queue summary">
          <article className="metric">
            <span>Deck</span>
            <strong>{vocabularyCards.length}</strong>
            <small>real Bayna cards</small>
          </article>
          <article className="metric">
            <span>Seen</span>
            <strong>{seenCount}</strong>
            <small>saved on this device</small>
          </article>
          <article className="metric">
            <span>Now</span>
            <strong>{remaining}</strong>
            <small>cards in sprint</small>
          </article>
        </div>

        {phase === "reviewing" ? (
          <button className="secondary-action wide" onClick={resetProgress}>
            <RotateCcw size={18} aria-hidden="true" />
            Reset all progress
          </button>
        ) : (
          <div className="action-stack">
            <button className="primary-action" onClick={startSprint}>
              <CheckCircle2 size={18} aria-hidden="true" />
              Start learning vocab
            </button>
            {seenCount > 0 ? (
              <button className="secondary-action wide" onClick={resetProgress}>
                <RotateCcw size={18} aria-hidden="true" />
                Reset progress
              </button>
            ) : null}
          </div>
        )}
      </section>
    </main>
  );
}

function CardPrompt({ card, targetKey }: { card: VocabularyCard; targetKey: string }) {
  return (
    <>
      <p className="prompt-text">{card.prompt}</p>
      <p className="arabic-sentence" dir="rtl" lang="ar">
        {renderArabicWithHighlight(card)}
      </p>
      <p className="hint">
        Target key: <code>{targetKey}</code>
      </p>
    </>
  );
}

function AnswerPanel({ card }: { card: VocabularyCard }) {
  return (
    <div className="answer-panel">
      <p className="answer-label">Answer</p>
      <strong>{card.answer}</strong>
      <p className="translation">{card.detail}</p>

      <dl>
        {card.singular ? (
          <div>
            <dt>Singular</dt>
            <dd dir="rtl" lang="ar">
              {card.singular}
            </dd>
          </div>
        ) : null}
        {card.plural ? (
          <div>
            <dt>Plural</dt>
            <dd dir="rtl" lang="ar">
              {card.plural}
            </dd>
          </div>
        ) : null}
        {card.forms?.past ? (
          <div>
            <dt>Past</dt>
            <dd dir="rtl" lang="ar">
              {card.forms.past}
            </dd>
          </div>
        ) : null}
        {card.forms?.present ? (
          <div>
            <dt>Present</dt>
            <dd dir="rtl" lang="ar">
              {card.forms.present}
            </dd>
          </div>
        ) : null}
        {card.forms?.command ? (
          <div>
            <dt>Command</dt>
            <dd dir="rtl" lang="ar">
              {card.forms.command}
            </dd>
          </div>
        ) : null}
        {card.requiredPreposition ? (
          <div>
            <dt>Preposition</dt>
            <dd dir="rtl" lang="ar">
              {card.requiredPreposition}
            </dd>
          </div>
        ) : null}
      </dl>

      {card.translation ? <p className="translation">{card.translation}</p> : null}
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

function buildQueue(stats: StudyStats) {
  const weakCards = vocabularyCards.filter((card) => {
    const cardStats = stats[card.id];
    return cardStats?.lastGrade === "forgot";
  });
  const unseenCards = vocabularyCards.filter((card) => !stats[card.id]);
  const reviewCards = vocabularyCards.filter((card) => stats[card.id]?.lastGrade === "got");
  const queue = [...weakCards, ...unseenCards, ...reviewCards];

  return queue.slice(0, sprintSize);
}

function loadStats(): StudyStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StudyStats) : {};
  } catch {
    return {};
  }
}

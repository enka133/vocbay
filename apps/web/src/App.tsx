import { useMemo, useState } from "react";
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

const targetWord = "حَيِّ";
const sprintCard = {
  chapter: "Chapter 3",
  sentence: "أَسْكُنُ فِي حَيِّ الْجَامِعَةِ",
  target: targetWord,
  answer: "Area, district",
  singular: "حَيّ",
  plural: "أَحْيَاءُ",
  translation: "I live in the university district.",
};

const sprintItems = [
  { label: "Warm-up", value: "5", detail: "high-hesitation cards" },
  { label: "Due", value: "12", detail: "targeting 88% retention" },
  { label: "New", value: "4", detail: "Chapter 3 nouns" },
];

type SprintPhase = "idle" | "reviewing" | "complete";

export function App() {
  const [phase, setPhase] = useState<SprintPhase>("idle");
  const [isRevealed, setIsRevealed] = useState(false);
  const targetKey = useMemo(() => normalizeArabicForKey(targetWord), []);

  function startSprint() {
    setPhase("reviewing");
    setIsRevealed(false);
  }

  function finishCard() {
    setPhase("complete");
    setIsRevealed(true);
  }

  function resetSprint() {
    setPhase("idle");
    setIsRevealed(false);
  }

  return (
    <main className="app-shell">
      <section className="sprint-panel" aria-labelledby="daily-sprint-title">
        <div className="top-bar">
          <div>
            <p className="eyebrow">VocBay</p>
            <h1 id="daily-sprint-title">Today&apos;s sprint</h1>
          </div>
          <button className="icon-button" aria-label="Open learning plan">
            <BookOpen size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="focus-card" aria-live="polite">
          <div className="focus-meta">
            <span className="status-pill">
              <Sparkles size={14} aria-hidden="true" />
              {sprintCard.chapter}
            </span>
            <span className="retention">
              <Clock3 size={14} aria-hidden="true" />
              88%
            </span>
          </div>

          {phase === "complete" ? (
            <div className="complete-state">
              <CheckCircle2 size={30} aria-hidden="true" />
              <div>
                <h2>Sprint complete</h2>
                <p>1 review logged in this local demo sprint.</p>
              </div>
            </div>
          ) : (
            <>
              <p className="arabic-sentence" dir="rtl" lang="ar">
                أَسْكُنُ فِي <mark>{sprintCard.target}</mark> الْجَامِعَةِ
              </p>
              <p className="hint">
                Target key: <code>{targetKey}</code>
              </p>
            </>
          )}

          {phase === "reviewing" ? (
            <div className="review-panel">
              {isRevealed ? (
                <div className="answer-panel">
                  <p className="answer-label">Answer</p>
                  <strong>{sprintCard.answer}</strong>
                  <dl>
                    <div>
                      <dt>Singular</dt>
                      <dd dir="rtl" lang="ar">
                        {sprintCard.singular}
                      </dd>
                    </div>
                    <div>
                      <dt>Plural</dt>
                      <dd dir="rtl" lang="ar">
                        {sprintCard.plural}
                      </dd>
                    </div>
                  </dl>
                  <p className="translation">{sprintCard.translation}</p>
                </div>
              ) : (
                <button className="reveal-action" onClick={() => setIsRevealed(true)}>
                  <Volume2 size={18} aria-hidden="true" />
                  Reveal answer
                </button>
              )}

              {isRevealed ? (
                <div className="answer-actions" aria-label="Grade this card">
                  <button className="secondary-action" onClick={finishCard}>
                    <XCircle size={18} aria-hidden="true" />
                    Forgot
                  </button>
                  <button className="primary-action compact" onClick={finishCard}>
                    <CheckCircle2 size={18} aria-hidden="true" />
                    Got it
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="sprint-grid" aria-label="Sprint queue summary">
          {sprintItems.map((item) => (
            <article key={item.label} className="metric">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <small>{item.detail}</small>
            </article>
          ))}
        </div>

        {phase === "idle" ? (
          <button className="primary-action" onClick={startSprint}>
            <CheckCircle2 size={18} aria-hidden="true" />
            Start focus sprint
          </button>
        ) : (
          <button className="secondary-action wide" onClick={resetSprint}>
            <RotateCcw size={18} aria-hidden="true" />
            Reset sprint
          </button>
        )}
      </section>
    </main>
  );
}

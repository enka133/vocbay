import { BookOpen, CheckCircle2, Clock3, Sparkles } from "lucide-react";
import { normalizeArabicForKey } from "@vocbay/core/arabic";

const targetWord = "حَيِّ";

const sprintItems = [
  { label: "Warm-up", value: "5", detail: "high-hesitation cards" },
  { label: "Due", value: "12", detail: "targeting 88% retention" },
  { label: "New", value: "4", detail: "Chapter 3 nouns" },
];

export function App() {
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

        <div className="focus-card">
          <div className="focus-meta">
            <span className="status-pill">
              <Sparkles size={14} aria-hidden="true" />
              Chapter 3
            </span>
            <span className="retention">
              <Clock3 size={14} aria-hidden="true" />
              88%
            </span>
          </div>
          <p className="arabic-sentence" dir="rtl" lang="ar">
            أَسْكُنُ فِي <mark>{targetWord}</mark> الْجَامِعَةِ
          </p>
          <p className="hint">
            Target key: <code>{normalizeArabicForKey(targetWord)}</code>
          </p>
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

        <button className="primary-action">
          <CheckCircle2 size={18} aria-hidden="true" />
          Start focus sprint
        </button>
      </section>
    </main>
  );
}

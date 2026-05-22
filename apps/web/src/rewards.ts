import type { Rating } from "./scheduler";

export interface PlayerState {
  xp: number;
  level: number;
  streak: number;
  bestStreak: number;
  totalReviews: number;
  todayReviews: number;
  todayCorrect: number;
  lastStudyDate: string;
}

export interface RewardResult {
  state: PlayerState;
  xpGained: number;
  isSuccess: boolean;
  message: string;
}

export interface RankInfo {
  name: string;
  subtitle: string;
}

const ratingXp: Record<Rating, number> = {
  again: 0,
  hard: 4,
  good: 10,
  easy: 14,
};

const ranks: Array<{ minLevel: number; info: RankInfo }> = [
  { minLevel: 12, info: { name: "Bayna Reader", subtitle: "strong recall" } },
  { minLevel: 8, info: { name: "Pattern Hunter", subtitle: "forms locking in" } },
  { minLevel: 5, info: { name: "Word Builder", subtitle: "steady memory" } },
  { minLevel: 3, info: { name: "Sprint Learner", subtitle: "daily momentum" } },
  { minLevel: 1, info: { name: "New Reader", subtitle: "start clean" } },
];

export function createInitialPlayerState(now = Date.now()): PlayerState {
  return {
    xp: 0,
    level: 1,
    streak: 0,
    bestStreak: 0,
    totalReviews: 0,
    todayReviews: 0,
    todayCorrect: 0,
    lastStudyDate: getStudyDateKey(now),
  };
}

export function hydratePlayerState(value: unknown, now = Date.now()): PlayerState {
  if (!value || typeof value !== "object") {
    return createInitialPlayerState(now);
  }

  const partial = value as Partial<PlayerState>;
  const xp = sanitizeInteger(partial.xp);
  const level = calculateLevel(xp);
  const lastStudyDate = typeof partial.lastStudyDate === "string" ? partial.lastStudyDate : getStudyDateKey(now);
  const isSameStudyDate = lastStudyDate === getStudyDateKey(now);

  return {
    xp,
    level,
    streak: sanitizeInteger(partial.streak),
    bestStreak: sanitizeInteger(partial.bestStreak),
    totalReviews: sanitizeInteger(partial.totalReviews),
    todayReviews: isSameStudyDate ? sanitizeInteger(partial.todayReviews) : 0,
    todayCorrect: isSameStudyDate ? sanitizeInteger(partial.todayCorrect) : 0,
    lastStudyDate: isSameStudyDate ? lastStudyDate : getStudyDateKey(now),
  };
}

export function applyReviewReward(previous: PlayerState, rating: Rating, now = Date.now()): RewardResult {
  const current = hydratePlayerState(previous, now);
  const passed = rating !== "again";
  const isSuccess = rating === "good" || rating === "easy";
  const streak = passed ? current.streak + 1 : 0;
  const streakBonus = isSuccess && streak > 0 && streak % 5 === 0 ? 5 : 0;
  const xpGained = ratingXp[rating] + streakBonus;
  const xp = current.xp + xpGained;

  const state: PlayerState = {
    ...current,
    xp,
    level: calculateLevel(xp),
    streak,
    bestStreak: Math.max(current.bestStreak, streak),
    totalReviews: current.totalReviews + 1,
    todayReviews: current.todayReviews + 1,
    todayCorrect: current.todayCorrect + (passed ? 1 : 0),
  };

  return {
    state,
    xpGained,
    isSuccess,
    message: streakBonus ? `${streak} streak` : isSuccess ? "Locked" : passed ? "Counted" : "Again",
  };
}

export function getRankInfo(level: number): RankInfo {
  return ranks.find((rank) => level >= rank.minLevel)?.info ?? ranks.at(-1)!.info;
}

export function getLevelProgress(xp: number, level: number) {
  const currentLevelXp = getLevelThreshold(level);
  const nextLevelXp = getLevelThreshold(level + 1);
  const earned = Math.max(0, xp - currentLevelXp);
  const needed = Math.max(1, nextLevelXp - currentLevelXp);

  return {
    earned,
    needed,
    ratio: Math.min(1, earned / needed),
  };
}

function calculateLevel(xp: number) {
  let level = 1;

  while (xp >= getLevelThreshold(level + 1)) {
    level += 1;
  }

  return level;
}

function getLevelThreshold(level: number) {
  return Math.floor((level - 1) ** 2 * 90);
}

function sanitizeInteger(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) && value > 0 ? Math.floor(value) : 0;
}

function getStudyDateKey(now: number) {
  const date = new Date(now);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

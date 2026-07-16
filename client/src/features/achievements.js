/* ═══════════════════════════════════════════
   ACHIEVEMENTS MODULE
   Definitions + engine + notification
   ═══════════════════════════════════════════ */

import { showAchievementToast } from './achievementNotification.js';

/* ── STORAGE KEY ── */
const STORAGE_KEY = 'ehub_achievements';

/* ── ACHIEVEMENT DEFINITIONS ── */
const ACHIEVEMENTS = [
  // ── Practice ──
  { id: 'first-steps',        title: 'First Steps',       desc: 'Complete your first sentence',                    icon: '🌱', category: 'practice' },
  { id: 'getting-started',    title: 'Getting Started',   desc: 'Complete 10 sentences',                           icon: '📝', category: 'practice' },
  { id: 'dedicated-learner',  title: 'Dedicated Learner', desc: 'Complete 100 sentences',                          icon: '📚', category: 'practice' },
  { id: 'grammar-master',     title: 'Grammar Master',    desc: 'Complete 500 sentences',                          icon: '👑', category: 'practice' },

  // ── Session Streak ──
  { id: 'streak-5',           title: 'On Fire',           desc: 'Get a streak of 5 correct answers',               icon: '🔥', category: 'streak' },
  { id: 'streak-10',          title: 'Unstoppable',       desc: 'Get a streak of 10 correct answers',              icon: '⚡', category: 'streak' },
  { id: 'streak-25',          title: 'Legendary',         desc: 'Get a streak of 25 correct answers',              icon: '💎', category: 'streak' },

  // ── Tense Mastery ──
  { id: 'master-present-simple',             title: 'Present Simple Master',       desc: 'Complete all Present Simple sentences',             icon: '📗', category: 'mastery' },
  { id: 'master-present-continuous',         title: 'Present Continuous Master',   desc: 'Complete all Present Continuous sentences',         icon: '📘', category: 'mastery' },
  { id: 'master-present-perfect',            title: 'Present Perfect Master',      desc: 'Complete all Present Perfect sentences',            icon: '📙', category: 'mastery' },
  { id: 'master-present-perfect-continuous', title: 'Present Perfect Cont. Master',desc: 'Complete all Present Perfect Continuous sentences', icon: '📕', category: 'mastery' },
  { id: 'master-past-simple',                title: 'Past Simple Master',          desc: 'Complete all Past Simple sentences',                icon: '📗', category: 'mastery' },
  { id: 'master-past-continuous',            title: 'Past Continuous Master',      desc: 'Complete all Past Continuous sentences',            icon: '📘', category: 'mastery' },
  { id: 'master-past-perfect',               title: 'Past Perfect Master',         desc: 'Complete all Past Perfect sentences',               icon: '📙', category: 'mastery' },
  { id: 'master-past-perfect-continuous',    title: 'Past Perfect Cont. Master',   desc: 'Complete all Past Perfect Continuous sentences',    icon: '📕', category: 'mastery' },
  { id: 'master-future-simple',              title: 'Future Simple Master',        desc: 'Complete all Future Simple sentences',              icon: '📗', category: 'mastery' },
  { id: 'master-future-continuous',          title: 'Future Continuous Master',    desc: 'Complete all Future Continuous sentences',          icon: '📘', category: 'mastery' },
  { id: 'master-future-perfect',             title: 'Future Perfect Master',       desc: 'Complete all Future Perfect sentences',             icon: '📙', category: 'mastery' },
  { id: 'master-future-perfect-continuous',  title: 'Future Perfect Cont. Master', desc: 'Complete all Future Perfect Continuous sentences',  icon: '📕', category: 'mastery' },

  // ── Exploration ──
  { id: 'polyglot',           title: 'Polyglot',          desc: 'Practice all 12 tenses at least once',            icon: '🌍', category: 'exploration', secret: true },
  { id: 'scholar',            title: 'Scholar',           desc: 'Read the theory for all 12 tenses',               icon: '🎓', category: 'exploration', secret: true },
  { id: 'week-warrior',       title: 'Week Warrior',      desc: 'Maintain a 7-day daily streak',                   icon: '📅', category: 'exploration', secret: true },
  { id: 'monthly-champion',   title: 'Monthly Champion',  desc: 'Maintain a 30-day daily streak',                  icon: '🏅', category: 'exploration', secret: true },

  // ── Games ──
  { id: 'first-game',         title: 'Let\'s Play',       desc: 'Play your first game',                            icon: '🎮', category: 'game' },
  { id: 'game-explorer',      title: 'Game Explorer',     desc: 'Play all 9 game types',                           icon: '🕹️', category: 'game' },
  { id: 'high-scorer',        title: 'High Scorer',       desc: 'Get a perfect score on any game',                icon: '🏆', category: 'game' },
];

/* ── TENSE IDs ── */
const TENSE_IDS = [
  'present-simple', 'present-continuous', 'present-perfect', 'present-perfect-continuous',
  'past-simple', 'past-continuous', 'past-perfect', 'past-perfect-continuous',
  'future-simple', 'future-continuous', 'future-perfect', 'future-perfect-continuous',
];

const TENSE_NAMES = [
  'Present Simple', 'Present Continuous', 'Present Perfect', 'Present Perfect Continuous',
  'Past Simple', 'Past Continuous', 'Past Perfect', 'Past Perfect Continuous',
  'Future Simple', 'Future Continuous', 'Future Perfect', 'Future Perfect Continuous',
];

/* ── ENGINE ── */

function getUnlocked() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function persistUnlocked(ids) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(ids)); } catch { /* ignore */ }
}

function getAllAchievements() {
  const unlocked = getUnlocked();
  return ACHIEVEMENTS.map(a => ({ ...a, unlocked: unlocked.includes(a.id) }));
}

function getStats() {
  const unlocked = getUnlocked();
  return {
    unlocked: unlocked.length,
    total: ACHIEVEMENTS.length,
    lastUnlocked: unlocked.length > 0 ? unlocked[unlocked.length - 1] : null,
    recent: unlocked.slice(-5).reverse(),
  };
}

function unlock(id) {
  const unlocked = getUnlocked();
  if (unlocked.includes(id)) return;
  unlocked.push(id);
  persistUnlocked(unlocked);

  const achievement = ACHIEVEMENTS.find(a => a.id === id);
  if (achievement) {
    showAchievementToast(achievement);
  }

  // Save to Supabase if available
  try {
    import('../lib/hybridStorage.js').then(({ saveAchievement }) => {
      if (saveAchievement) saveAchievement(id);
    });
  } catch { /* ignore */ }
}

/* ── CONDITION CHECKERS ── */

function computeTotalCompleted() {
  try {
    const raw = localStorage.getItem('anagramGame_progress');
    if (!raw) return 0;
    const all = JSON.parse(raw);
    let total = 0;
    Object.values(all).forEach(p => { total += p.completed || 0; });
    return total;
  } catch { return 0; }
}

function getTenseCompletionStatus() {
  const status = {};
  TENSE_NAMES.forEach((name, i) => {
    const id = TENSE_IDS[i];
    let formsCompleted = 0;
    ['affirmative', 'negative', 'questions'].forEach(form => {
      try {
        const key = `${name}.${form}`;
        const raw = localStorage.getItem('anagramGame_progress');
        if (raw) {
          const all = JSON.parse(raw);
          if (all[key] && all[key].completed > 0) formsCompleted++;
        }
      } catch { /* ignore */ }
    });
    status[id] = formsCompleted >= 3;
  });
  return status;
}

function getTensesPracticed() {
  const practiced = [];
  TENSE_NAMES.forEach((name, i) => {
    const id = TENSE_IDS[i];
    let hasPractice = false;
    ['affirmative', 'negative', 'questions'].forEach(form => {
      try {
        const key = `${name}.${form}`;
        const raw = localStorage.getItem('anagramGame_progress');
        if (raw) {
          const all = JSON.parse(raw);
          if (all[key] && (all[key].score || 0) > 0) hasPractice = true;
        }
      } catch { /* ignore */ }
    });
    if (hasPractice) practiced.push(id);
  });
  return practiced;
}

export function check(ctx) {
  const unlocked = getUnlocked();
  const totalCompleted = ctx.totalCompleted || computeTotalCompleted();
  const tenseCompletion = getTenseCompletionStatus();
  const tensesPracticed = ctx.tensesPracticed || getTensesPracticed();
  const allGames = ctx.allGames || [];

  ACHIEVEMENTS.forEach(a => {
    if (unlocked.includes(a.id)) return;
    let earned = false;

    switch (a.id) {
      // Practice
      case 'first-steps':
        earned = ctx.type === 'sentence-complete' && (ctx.state?.completed || 0) >= 1;
        break;
      case 'getting-started':
        earned = totalCompleted >= 10;
        break;
      case 'dedicated-learner':
        earned = totalCompleted >= 100;
        break;
      case 'grammar-master':
        earned = totalCompleted >= 500;
        break;

      // Streak
      case 'streak-5':
        earned = (ctx.state?.streak || 0) >= 5;
        break;
      case 'streak-10':
        earned = (ctx.state?.streak || 0) >= 10;
        break;
      case 'streak-25':
        earned = (ctx.state?.streak || 0) >= 25;
        break;

      // Tense mastery
      case 'master-present-simple':
      case 'master-present-continuous':
      case 'master-present-perfect':
      case 'master-present-perfect-continuous':
      case 'master-past-simple':
      case 'master-past-continuous':
      case 'master-past-perfect':
      case 'master-past-perfect-continuous':
      case 'master-future-simple':
      case 'master-future-continuous':
      case 'master-future-perfect':
      case 'master-future-perfect-continuous':
        earned = tenseCompletion[a.id.replace('master-', '')] === true;
        break;

      // Exploration
      case 'polyglot':
        earned = tensesPracticed.length >= 12;
        break;
      case 'scholar':
        // Checked via localStorage tracking of theory visits
        try {
          const theoryVisits = JSON.parse(localStorage.getItem('ehub_theory_visits') || '[]');
          earned = theoryVisits.length >= 12;
        } catch { earned = false; }
        break;
      case 'week-warrior':
        // Check daily streak from Supabase or localStorage
        try {
          const raw = localStorage.getItem('ehub_daily_streak');
          earned = raw && parseInt(raw) >= 7;
        } catch { earned = false; }
        break;
      case 'monthly-champion':
        try {
          const raw = localStorage.getItem('ehub_daily_streak');
          earned = raw && parseInt(raw) >= 30;
        } catch { earned = false; }
        break;

      // Games
      case 'first-game':
        earned = ctx.type === 'game-score';
        break;
      case 'game-explorer':
        earned = allGames.length >= 9;
        break;
      case 'high-scorer':
        earned = ctx.type === 'game-score' && ctx.score >= 100;
        break;
    }

    if (earned) unlock(a.id);
  });
}

export function initAchievements() {
  // On page load, check cumulative achievements
  const totalCompleted = computeTotalCompleted();
  const tensesPracticed = getTensesPracticed();

  check({
    type: 'init',
    state: {},
    totalCompleted,
    tensesPracticed,
    allGames: [],
  });

  // Track theory visits for scholar achievement
  const tense = window.PAGE_TENSE;
  if (tense && tense !== 'Hub') {
    try {
      const visits = JSON.parse(localStorage.getItem('ehub_theory_visits') || '[]');
      if (!visits.includes(tense)) {
        visits.push(tense);
        localStorage.setItem('ehub_theory_visits', JSON.stringify(visits));
      }
    } catch { /* ignore */ }
  }
}

export { ACHIEVEMENTS, getUnlocked, getAllAchievements, getStats };

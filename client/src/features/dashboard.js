/* ═══════════════════════════════════════════
   ENGLISH LEARNING DASHBOARD
   Comprehensive progress tracking & CEFR assessment
   ═══════════════════════════════════════════ */

import { loadAllTenseProgress, loadGameScores, loadSpacedRepetition, loadBookmarks, getUserStats } from '../lib/hybridStorage.js';
import { getAllAchievements, getStats as getAchievementStats } from './achievements.js';

// ═══════════════════════════════════════════
// CONSTANTS
// ═══════════════════════════════════════════

const TENSE_ORDER = [
  "Present Simple", "Present Continuous", "Present Perfect", "Present Perfect Continuous",
  "Past Simple", "Past Continuous", "Past Perfect", "Past Perfect Continuous",
  "Future Simple", "Future Continuous", "Future Perfect", "Future Perfect Continuous",
];

const FORMS = ["affirmative", "negative", "questions"];
const FORM_LABELS = { affirmative: "Affirmative", negative: "Negative", questions: "Questions" };

const GAME_NAMES = {
  anagram: "Anagram Game",
  verbTense: "Verb Tense Challenge",
  errorCorrection: "Error Correction",
  wordOrder: "Word Order",
  preposition: "Preposition Challenge",
  unscramble: "Sentence Unscramble",
  adjectiveOrder: "Adjective Order",
  adverbPlacement: "Adverb Placement",
  clauseIdentification: "Clause Identification",
};

// CEFR Level definitions
const CEFR_LEVELS = [
  { level: "A1", label: "Beginner", color: "#ef4444", min: 0, max: 15, description: "Can understand and use familiar everyday expressions and very basic phrases." },
  { level: "A2", label: "Elementary", color: "#f97316", min: 16, max: 30, description: "Can understand sentences and frequently used expressions related to areas of most immediate relevance." },
  { level: "B1", label: "Intermediate", color: "#eab308", min: 31, max: 50, description: "Can understand the main points of clear standard input on familiar matters regularly encountered." },
  { level: "B2", label: "Upper Intermediate", color: "#22c55e", min: 51, max: 70, description: "Can understand the main ideas of complex text on both concrete and abstract topics." },
  { level: "C1", label: "Advanced", color: "#3b82f6", min: 71, max: 85, description: "Can understand a wide range of demanding, longer texts, and recognize implicit meaning." },
  { level: "C2", label: "Proficiency", color: "#8b5cf6", min: 86, max: 100, description: "Can understand with ease virtually everything heard or read." },
];

// Grammar topics
const GRAMMAR_TOPICS = [
  { id: "tenses", label: "English Tenses", icon: "⏰", weight: 30 },
  { id: "clauses", label: "Clauses", icon: "🔗", weight: 20 },
  { id: "prepositions", label: "Prepositions", icon: "📍", weight: 15 },
  { id: "conjunctions", label: "Conjunctions", icon: "🔗", weight: 10 },
  { id: "adjective-positions", label: "Adjective Positions", icon: "📏", weight: 10 },
  { id: "adverb-positions", label: "Adverb Positions", icon: "📍", weight: 10 },
  { id: "phrasal-verbs", label: "Phrasal Verbs", icon: "💬", weight: 20 },
  { id: "idiomatic-expressions", label: "Idioms", icon: "🎭", weight: 15 },
];

// ═══════════════════════════════════════════
// DATA COLLECTION
// ═══════════════════════════════════════════

function collectAllData() {
  const tenseProgress = loadAllTenseProgress();
  const gameProgress = loadGameScores();
  const srData = loadSpacedRepetition();
  const bookmarks = loadBookmarks();
  
  // Calculate tense stats
  const tenseStats = { totalScore: 0, totalCompleted: 0, totalAttempts: 0, perTense: {} };
  TENSE_ORDER.forEach(tense => {
    tenseStats.perTense[tense] = { score: 0, completed: 0, attempts: 0, forms: {} };
    FORMS.forEach(form => {
      const key = `${tense}.${form}`;
      const data = tenseProgress[key] || {};
      const s = data.score || 0;
      const c = data.completed ? 1 : 0;
      const a = data.attempts || 0;
      tenseStats.perTense[tense].score += s;
      tenseStats.perTense[tense].completed += c;
      tenseStats.perTense[tense].attempts += a;
      tenseStats.perTense[tense].forms[form] = { score: s, completed: c, attempts: a };
      tenseStats.totalScore += s;
      tenseStats.totalCompleted += c;
      tenseStats.totalAttempts += a;
    });
  });

  // Calculate game stats
  const gameStats = { totalScore: 0, totalGames: 0, games: {} };
  Object.entries(gameProgress).forEach(([game, data]) => {
    gameStats.totalScore += data.totalScore || 0;
    gameStats.totalGames += data.gamesPlayed || 0;
    gameStats.games[game] = {
      name: GAME_NAMES[game] || game,
      bestScore: data.bestScore || 0,
      totalScore: data.totalScore || 0,
      gamesPlayed: data.gamesPlayed || 0,
      avgScore: data.gamesPlayed > 0 ? Math.round((data.totalScore || 0) / data.gamesPlayed) : 0,
    };
  });

  // Calculate vocabulary stats
  const vocabStats = { totalWords: 0, mastered: 0, learning: 0, newWords: 0, reviewDue: 0 };
  Object.values(srData).forEach(item => {
    vocabStats.totalWords++;
    if (item.correctCount >= 5) vocabStats.mastered++;
    else if (item.correctCount > 0) vocabStats.learning++;
    else vocabStats.newWords++;
    if (item.nextReview && new Date(item.nextReview) <= new Date()) vocabStats.reviewDue++;
  });

  // Calculate CEFR score
  const cefrScore = calculateCEFRScore(tenseStats, gameStats, vocabStats, bookmarks.length);

  return { tenseStats, gameStats, vocabStats, bookmarks, srData, cefrScore };
}

// ═══════════════════════════════════════════
// CEFR LEVEL CALCULATION
// ═══════════════════════════════════════════

function calculateCEFRScore(tenseStats, gameStats, vocabStats, bookmarkCount) {
  let score = 0;

  // Tenses (40% weight)
  const tenseCompletion = tenseStats.totalCompleted;
  const maxTenses = TENSE_ORDER.length * 3 * 10; // 12 tenses * 3 forms * 10 points each
  const tenseScore = Math.min((tenseCompletion / 10) * 40, 40);
  score += tenseScore;

  // Games (25% weight)
  const gameScore = Math.min((gameStats.totalGames / 20) * 25, 25);
  score += gameScore;

  // Vocabulary (20% weight)
  const vocabScore = Math.min((vocabStats.mastered / 30) * 20, 20);
  score += vocabScore;

  // Engagement (15% weight)
  const engagementScore = Math.min(((bookmarkCount + tenseStats.totalAttempts) / 50) * 15, 15);
  score += engagementScore;

  // Determine CEFR level
  let level = CEFR_LEVELS[0];
  for (const l of CEFR_LEVELS) {
    if (score >= l.min && score <= l.max) {
      level = l;
      break;
    }
  }

  return { score: Math.round(score), level, allLevels: CEFR_LEVELS };
}

// ═══════════════════════════════════════════
// UI COMPONENTS
// ═══════════════════════════════════════════

function createStatCard(value, label, color, icon) {
  return `
    <div class="dash-stat-card">
      <div class="dash-stat-icon" style="background:${color}20;color:${color}">${icon}</div>
      <div class="dash-stat-value" style="color:${color}">${value}</div>
      <div class="dash-stat-label">${label}</div>
    </div>
  `;
}

function createProgressBar(value, label, color, showPercent = true) {
  const pct = Math.min(Math.round(value), 100);
  return `
    <div class="dash-progress">
      <div class="dash-progress-header">
        <span class="dash-progress-label">${label}</span>
        ${showPercent ? `<span class="dash-progress-value">${pct}%</span>` : ''}
      </div>
      <div class="dash-progress-bar">
        <div class="dash-progress-fill" style="width:${pct}%;background:${color}"></div>
      </div>
    </div>
  `;
}

function createCEFRGauge(score, level) {
  const circumference = 2 * Math.PI * 60;
  const offset = circumference - (score / 100) * circumference;
  
  return `
    <div class="dash-cefr-gauge">
      <svg viewBox="0 0 140 140" class="dash-cefr-svg">
        <circle cx="70" cy="70" r="60" fill="none" stroke="var(--color-border)" stroke-width="12"/>
        <circle cx="70" cy="70" r="60" fill="none" stroke="${level.color}" stroke-width="12"
          stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"
          stroke-linecap="round" transform="rotate(-90 70 70)"/>
      </svg>
      <div class="dash-cefr-center">
        <div class="dash-cefr-level">${level.level}</div>
        <div class="dash-cefr-score">${score}%</div>
      </div>
    </div>
  `;
}

function createTenseHeatmap(tenseStats) {
  let html = '<div class="dash-heatmap">';
  
  TENSE_ORDER.forEach(tense => {
    const ts = tenseStats.perTense[tense];
    const totalPossible = 3 * 100; // 3 forms * 100 points
    const pct = Math.min(Math.round((ts.score / totalPossible) * 100), 100);
    const intensity = pct / 100;
    const hue = 120; // Green
    const saturation = 70;
    const lightness = 95 - (intensity * 40); // 95 = very light, 55 = dark
    
    html += `
      <div class="dash-heatmap-cell" style="background:hsl(${hue},${saturation}%,${lightness}%)" title="${tense}: ${pct}%">
        <div class="dash-heatmap-label">${tense.replace(' ', '\n')}</div>
        <div class="dash-heatmap-value">${pct}%</div>
      </div>
    `;
  });
  
  html += '</div>';
  return html;
}

function createRadarChart(tenseStats, gameStats, vocabStats) {
  // Simplified radar as a bar chart
  const categories = [
    { label: "Tenses", value: Math.min((tenseStats.totalCompleted / 36) * 100, 100), icon: "⏰" },
    { label: "Vocabulary", value: Math.min((vocabStats.mastered / 30) * 100, 100), icon: "📚" },
    { label: "Games", value: Math.min((gameStats.totalGames / 50) * 100, 100), icon: "🎮" },
    { label: "Phrasal Verbs", value: Math.min((vocabStats.totalWords / 20) * 100, 100), icon: "💬" },
    { label: "Accuracy", value: vocabStats.totalWords > 0 ? Math.round((vocabStats.mastered / vocabStats.totalWords) * 100) : 0, icon: "🎯" },
  ];

  let html = '<div class="dash-radar">';
  categories.forEach(cat => {
    const color = cat.value >= 70 ? "var(--color-success)" : cat.value >= 40 ? "var(--color-primary)" : "var(--color-accent)";
    html += `
      <div class="dash-radar-item">
        <div class="dash-radar-label">${cat.icon} ${cat.label}</div>
        <div class="dash-radar-bar">
          <div class="dash-radar-fill" style="width:${cat.value}%;background:${color}"></div>
        </div>
        <div class="dash-radar-value">${Math.round(cat.value)}%</div>
      </div>
    `;
  });
  html += '</div>';
  return html;
}

// ═══════════════════════════════════════════
// MAIN RENDER
// ═══════════════════════════════════════════

export function renderDashboard(container) {
  const data = collectAllData();
  const { tenseStats, gameStats, vocabStats, bookmarks, cefrScore } = data;
  const allAchievements = getAllAchievements();
  const achStats = getAchievementStats();

  const html = `
    <div class="dashboard">
      <div class="dash-header">
        <h1 class="dash-title">📊 English Learning Dashboard</h1>
        <p class="dash-subtitle">Track your progress and discover your CEFR level</p>
      </div>

      <!-- CEFR Level Card -->
      <div class="dash-card dash-cefr-card">
        <div class="dash-cefr-content">
          ${createCEFRGauge(cefrScore.score, cefrScore.level)}
          <div class="dash-cefr-info">
            <h2 class="dash-cefr-title">Your English Level: <span style="color:${cefrScore.level.color}">${cefrScore.level.level} - ${cefrScore.level.label}</span></h2>
            <p class="dash-cefr-desc">${cefrScore.level.description}</p>
            <div class="dash-cefr-progress">
              ${cefrScore.allLevels.map(l => `
                <div class="dash-cefr-level ${l.level === cefrScore.level.level ? 'active' : ''}" style="--level-color:${l.color}" onclick="window.__showCEFRDetail('${l.level}')" data-level="${l.level}">
                  <span class="dash-cefr-level-label">${l.level}</span>
                  <span class="dash-cefr-level-name">${l.label}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Overview -->
      <div class="dash-stats-grid">
        ${createStatCard(tenseStats.totalScore, "Total Score", "var(--color-primary)", "🏆")}
        ${createStatCard(tenseStats.totalCompleted, "Sentences Built", "var(--color-success)", "✅")}
        ${createStatCard(gameStats.totalGames, "Games Played", "var(--color-accent)", "🎮")}
        ${createStatCard(vocabStats.mastered, "Words Mastered", "var(--color-info)", "📚")}
        ${createStatCard(bookmarks.length, "Bookmarks", "var(--color-warning)", "⭐")}
        ${createStatCard(vocabStats.reviewDue, "Due for Review", "var(--color-error)", "🔄")}
      </div>

      <!-- Achievements -->
      <div class="dash-card dash-achievements">
        <div class="dash-achievements-header">
          <h3 class="dash-card-title" style="margin:0;">🏆 Achievements</h3>
          <span class="achievement-counter">${achStats.unlocked} / ${achStats.total} unlocked</span>
        </div>
        <div class="achievement-grid">
          ${allAchievements.map(a => `
            <div class="achievement-badge ${a.unlocked ? 'unlocked' : 'locked'}${a.secret && !a.unlocked ? ' secret' : ''}" title="${a.unlocked ? a.desc : '🔒 Keep learning to unlock this achievement'}">
              <span class="achievement-badge-icon">${a.icon}</span>
              <span class="achievement-badge-title">${a.title}</span>
              <span class="achievement-badge-desc">${a.desc}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Skills Overview -->
      <div class="dash-card">
        <h3 class="dash-card-title">🎯 Skills Overview</h3>
        ${createRadarChart(tenseStats, gameStats, vocabStats)}
      </div>

      <!-- Tense Progress Heatmap -->
      <div class="dash-card">
        <h3 class="dash-card-title">⏰ Tense Mastery Heatmap</h3>
        <p class="dash-card-desc">Green intensity shows your mastery level for each tense</p>
        ${createTenseHeatmap(tenseStats)}
      </div>

      <!-- Detailed Tense Progress -->
      <div class="dash-card">
        <h3 class="dash-card-title">📝 Detailed Tense Progress</h3>
        <div class="dash-tense-grid">
          ${TENSE_ORDER.map(tense => {
            const ts = tenseStats.perTense[tense];
            const totalPossible = 3 * 100;
            const pct = Math.min(Math.round((ts.score / totalPossible) * 100), 100);
            const color = pct >= 70 ? "var(--color-success)" : pct >= 40 ? "var(--color-primary)" : "var(--color-accent)";
            return `
              <div class="dash-tense-item">
                <div class="dash-tense-header">
                  <span class="dash-tense-name">${tense}</span>
                  <span class="dash-tense-score">${pct}%</span>
                </div>
                <div class="dash-tense-bar">
                  <div class="dash-tense-fill" style="width:${pct}%;background:${color}"></div>
                </div>
                <div class="dash-tense-forms">
                  ${FORMS.map(form => {
                    const f = ts.forms[form];
                    const formPct = Math.min(f.score, 100);
                    return `<span class="dash-tense-form ${formPct > 0 ? 'completed' : ''}">${FORM_LABELS[form]}: ${formPct}%</span>`;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Game Performance -->
      <div class="dash-card">
        <h3 class="dash-card-title">🎮 Game Performance</h3>
        ${Object.keys(gameStats.games).length === 0 ? 
          '<p class="dash-empty">No game data yet. Play some games to see your stats!</p>' :
          `<div class="dash-games-grid">
            ${Object.entries(gameStats.games).map(([game, data]) => `
              <div class="dash-game-card">
                <div class="dash-game-name">${data.name}</div>
                <div class="dash-game-stats">
                  <div class="dash-game-stat">
                    <span class="dash-game-stat-value">${data.bestScore}</span>
                    <span class="dash-game-stat-label">Best</span>
                  </div>
                  <div class="dash-game-stat">
                    <span class="dash-game-stat-value">${data.gamesPlayed}</span>
                    <span class="dash-game-stat-label">Played</span>
                  </div>
                  <div class="dash-game-stat">
                    <span class="dash-game-stat-value">${data.avgScore}</span>
                    <span class="dash-game-stat-label">Avg</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>`
        }
      </div>

      <!-- Vocabulary Progress -->
      <div class="dash-card">
        <h3 class="dash-card-title">📚 Vocabulary Progress</h3>
        <div class="dash-vocab-stats">
          <div class="dash-vocab-stat">
            <div class="dash-vocab-circle mastered">
              <span>${vocabStats.mastered}</span>
            </div>
            <span class="dash-vocab-label">Mastered</span>
          </div>
          <div class="dash-vocab-stat">
            <div class="dash-vocab-circle learning">
              <span>${vocabStats.learning}</span>
            </div>
            <span class="dash-vocab-label">Learning</span>
          </div>
          <div class="dash-vocab-stat">
            <div class="dash-vocab-circle new">
              <span>${vocabStats.newWords}</span>
            </div>
            <span class="dash-vocab-label">New</span>
          </div>
        </div>
        ${vocabStats.totalWords > 0 ? `
          <div class="dash-vocab-progress">
            ${createProgressBar((vocabStats.mastered / vocabStats.totalWords) * 100, "Mastery Rate", "var(--color-success)")}
          </div>
        ` : ''}
      </div>

      <!-- Learning Recommendations -->
      <div class="dash-card">
        <h3 class="dash-card-title">💡 Recommendations</h3>
        <div class="dash-recommendations">
          ${generateRecommendations(tenseStats, gameStats, vocabStats, cefrScore)}
        </div>
      </div>
    </div>
  `;

  if (container) {
    container.innerHTML = html;
    return undefined;
  }
  return html;
}

// ═══════════════════════════════════════════
// RECOMMENDATIONS
// ═══════════════════════════════════════════

function generateRecommendations(tenseStats, gameStats, vocabStats, cefrScore) {
  const recs = [];
  
  // Check weak tenses
  const weakTenses = TENSE_ORDER.filter(tense => {
    const ts = tenseStats.perTense[tense];
    const pct = (ts.score / 300) * 100;
    return pct < 50;
  });
  
  if (weakTenses.length > 0) {
    recs.push({
      icon: "⏰",
      title: "Practice Weak Tenses",
      desc: `Focus on: ${weakTenses.slice(0, 3).join(', ')}`,
      link: "/grammar/present-simple.html"
    });
  }
  
  // Check vocabulary
  if (vocabStats.reviewDue > 0) {
    recs.push({
      icon: "🔄",
      title: "Review Vocabulary",
      desc: `You have ${vocabStats.reviewDue} words due for review`,
      link: "/dictionary/"
    });
  }
  
  // Check games
  if (gameStats.totalGames < 10) {
    recs.push({
      icon: "🎮",
      title: "Play More Games",
      desc: "Games help reinforce what you've learned",
      link: "/games/game-anagram.html"
    });
  }
  
  // Level up suggestions
  if (cefrScore.score < 50) {
    recs.push({
      icon: "📖",
      title: "Study Grammar Theory",
      desc: "Read the theory sections to understand rules better",
      link: "/grammar/present-simple.html"
    });
  }
  
  // Phrasal verbs
  if (vocabStats.totalWords < 20) {
    recs.push({
      icon: "💬",
      title: "Learn Phrasal Verbs",
      desc: "Essential for natural English communication",
      link: "/grammar/phrasal-verbs.html"
    });
  }
  
  if (recs.length === 0) {
    recs.push({
      icon: "🌟",
      title: "Great Progress!",
      desc: "Keep up the excellent work!",
      link: null
    });
  }
  
  return recs.map(rec => `
    <div class="dash-rec-item">
      <div class="dash-rec-icon">${rec.icon}</div>
      <div class="dash-rec-content">
        <div class="dash-rec-title">${rec.title}</div>
        <div class="dash-rec-desc">${rec.desc}</div>
      </div>
      ${rec.link ? `<a href="${rec.link}" class="dash-rec-link">Go →</a>` : ''}
    </div>
  `).join('');
}

// ═══════════════════════════════════════════
// CEFR DETAIL MODAL
// ═══════════════════════════════════════════

function showCEFRDetail(level) {
  const cefrData = {
    A1: {
      label: "Beginner", color: "#ef4444",
      description: "Can understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type.",
      skills: ["Introduce yourself", "Ask and answer basic questions", "Understand simple instructions", "Fill in forms with personal details"],
      grammar: ["Simple present tense", "Basic word order", "Articles (a, an, the)", "Simple negation"],
      vocab: ["1,000-2,000 words", "Common everyday vocabulary", "Basic greetings and numbers"],
      canDo: ["Describe yourself and others", "Order food and drinks", "Make simple purchases", "Understand simple signs"]
    },
    A2: {
      label: "Elementary", color: "#f97316",
      description: "Can understand sentences and frequently used expressions related to areas of most immediate relevance.",
      skills: ["Communicate in simple tasks", "Describe your background", "Handle simple transactions", "Understand short texts"],
      grammar: ["Past simple tense", "Comparatives and superlatives", "Modal verbs (can, must)", "Present continuous"],
      vocab: ["2,000-3,000 words", "Work and school vocabulary", "Shopping and travel phrases"],
      canDo: ["Write short, simple notes", "Describe experiences and events", "Talk about daily routines", "Understand short emails"]
    },
    B1: {
      label: "Intermediate", color: "#eab308",
      description: "Can understand the main points of clear standard input on familiar matters regularly encountered in work, school, leisure.",
      skills: ["Deal with most travel situations", "Produce simple connected text", "Describe experiences and events", "Give reasons and explanations"],
      grammar: ["Present perfect", "Conditionals (first, second)", "Passive voice basics", "Reported speech"],
      vocab: ["3,000-4,000 words", "Abstract topics", "Idiomatic expressions"],
      canDo: ["Write personal letters", "Understand TV shows (simple)", "Participate in discussions", "Understand news headlines"]
    },
    B2: {
      label: "Upper Intermediate", color: "#22c55e",
      description: "Can understand the main ideas of complex text on both concrete and abstract topics, including technical discussions in their field.",
      skills: ["Interact with fluency", "Produce clear text on various subjects", "Examine viewpoints", "Understand extended speech"],
      grammar: ["All tense forms", "Complex conditionals", "Advanced passive", "Phrasal verbs mastery"],
      vocab: ["4,000-6,000 words", "Technical vocabulary", "Nuanced meanings"],
      canDo: ["Understand most TV programs", "Read articles and reports", "Write detailed texts", "Debate on familiar topics"]
    },
    C1: {
      label: "Advanced", color: "#3b82f6",
      description: "Can understand a wide range of demanding, longer texts, and recognize implicit meaning. Expresses ideas fluently and spontaneously.",
      skills: ["Express yourself fluently", "Use language flexibly", "Understand implicit meaning", "Produce clear, well-structured text"],
      grammar: ["Complex sentence structures", "Advanced reported speech", "Nuanced tense usage", "Formal vs informal registers"],
      vocab: ["6,000-8,000 words", "Specialized vocabulary", "Figurative language"],
      canDo: ["Understand complex written texts", "Express yourself fluently", "Use language for professional purposes", "Write detailed, well-structured texts"]
    },
    C2: {
      label: "Proficiency", color: "#8b5cf6",
      description: "Can understand with ease virtually everything heard or read. Summarize information from different sources, reconstructing arguments in a coherent presentation.",
      skills: ["Near-native fluency", "Understand any spoken/written text", "Express yourself precisely", "Recognize cultural nuances"],
      grammar: ["Mastery of all structures", "Subtle grammatical distinctions", "Stylistic variations", "Literary language"],
      vocab: ["8,000+ words", "Full range of vocabulary", "Idiomatic and colloquial expressions"],
      canDo: ["Understand any type of spoken language", "Read any written text easily", "Express yourself fluently and precisely", "Distinguish subtle meanings"]
    }
  };

  const data = cefrData[level];
  if (!data) return;

  // Get user's current level from dashboard data
  const tenseStats = { totalScore: 0, totalCompleted: 0 };
  const gameStats = { totalGames: 0 };
  const vocabStats = { mastered: 0 };
  
  try {
    const stored = localStorage.getItem('anagramGame_progress');
    if (stored) {
      const all = JSON.parse(stored);
      Object.values(all).forEach(p => {
        tenseStats.totalScore += p.score || 0;
        tenseStats.totalCompleted += p.completed ? 1 : 0;
      });
    }
  } catch (e) {}

  // Create modal
  const modal = document.createElement('div');
  modal.className = 'cefr-modal-overlay';
  modal.innerHTML = `
    <div class="cefr-modal">
      <div class="cefr-modal-header" style="background:${data.color}">
        <div class="cefr-modal-level">${level}</div>
        <div class="cefr-modal-info">
          <h2 class="cefr-modal-title">${data.label}</h2>
          <p class="cefr-modal-desc">${data.description}</p>
        </div>
        <button class="cefr-modal-close" onclick="this.closest('.cefr-modal-overlay').remove()">✕</button>
      </div>
      
      <div class="cefr-modal-body">
        <div class="cefr-modal-section">
          <h3 class="cefr-section-title">🎯 Can-Do Statements</h3>
          <ul class="cefr-list">
            ${data.canDo.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <div class="cefr-modal-section">
          <h3 class="cefr-section-title">📝 Key Grammar</h3>
          <div class="cefr-tags">
            ${data.grammar.map(item => `<span class="cefr-tag grammar">${item}</span>`).join('')}
          </div>
        </div>

        <div class="cefr-modal-section">
          <h3 class="cefr-section-title">📚 Vocabulary</h3>
          <div class="cefr-tags">
            ${data.vocab.map(item => `<span class="cefr-tag vocab">${item}</span>`).join('')}
          </div>
        </div>

        <div class="cefr-modal-section">
          <h3 class="cefr-section-title">💬 Key Skills</h3>
          <ul class="cefr-list">
            ${data.skills.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <div class="cefr-modal-section">
          <h3 class="cefr-section-title">📖 Study Resources</h3>
          <div class="cefr-resources">
            <a href="/grammar/present-simple.html" class="cefr-resource-link">Grammar Lessons</a>
            <a href="/games/game-anagram.html" class="cefr-resource-link">Practice Games</a>
            <a href="/dictionary/" class="cefr-resource-link">Dictionary</a>
            <a href="/grammar/phrasal-verbs.html" class="cefr-resource-link">Phrasal Verbs</a>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  
  // Close on overlay click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });

  // Close on escape
  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', handleEsc);
    }
  };
  document.addEventListener('keydown', handleEsc);
}

// ═══════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════

export function initDashboard() {
  const container = document.getElementById("dashboardContainer");
  if (!container) return;
  
  // Global function for CEFR level click
  window.__showCEFRDetail = showCEFRDetail;
  
  renderDashboard(container);
}

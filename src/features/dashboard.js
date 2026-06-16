/* ═══════════════════════════════════════════
   PROGRESS DASHBOARD MODULE
   ═══════════════════════════════════════════ */

/**
 * Reads all localStorage progress data and renders a visual dashboard
 * with stats per tense and per game, including progress bars.
 * @module features/dashboard
 */

const STORAGE_KEY = "anagramGame_progress";
const GAME_STORAGE_KEY = "englishGames_progress";
const SR_STORAGE_KEY = "spacedRepetition";

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
};

/**
 * Reads all tense progress from localStorage.
 * @returns {Object} Map of tense.form keys to progress objects
 */
function readTenseProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

/**
 * Reads all game progress from localStorage.
 * @returns {Object} Map of game names to score/stats objects
 */
function readGameProgress() {
  try {
    const raw = localStorage.getItem(GAME_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

/**
 * Reads spaced repetition data from localStorage.
 * @returns {Object} SR data with wrong answers, review counts, etc.
 */
function readSpacedRepetition() {
  try {
    const raw = localStorage.getItem(SR_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

/**
 * Calculates aggregate stats across all tenses.
 * @param {Object} tenseProgress - All tense progress data
 * @returns {Object} Aggregated stats: totalScore, totalCompleted, totalAttempts, perTense
 */
function calculateTenseStats(tenseProgress) {
  const stats = {
    totalScore: 0,
    totalCompleted: 0,
    totalAttempts: 0,
    perTense: {},
  };

  TENSE_ORDER.forEach(tense => {
    stats.perTense[tense] = { score: 0, completed: 0, attempts: 0, forms: {} };
    FORMS.forEach(form => {
      const key = `${tense}.${form}`;
      const data = tenseProgress[key] || {};
      const s = data.score || 0;
      const c = data.completed || 0;
      const a = data.attempts || 0;
      stats.perTense[tense].score += s;
      stats.perTense[tense].completed += c;
      stats.perTense[tense].attempts += a;
      stats.perTense[tense].forms[form] = { score: s, completed: c, attempts: a };
      stats.totalScore += s;
      stats.totalCompleted += c;
      stats.totalAttempts += a;
    });
  });

  return stats;
}

/**
 * Creates a progress bar element.
 * @param {number} value - Current value (0-100)
 * @param {string} label - Label text
 * @param {string} [color] - Optional CSS color override
 * @returns {HTMLElement} The progress bar container element
 */
function createProgressBar(value, label, color) {
  const pct = Math.min(Math.round(value), 100);
  const container = document.createElement("div");
  container.style.cssText = "margin-bottom:12px;";

  const header = document.createElement("div");
  header.style.cssText = "display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;";

  const labelEl = document.createElement("span");
  labelEl.style.cssText = "font-size:13px;font-weight:600;";
  labelEl.textContent = label;

  const valueEl = document.createElement("span");
  valueEl.style.cssText = "font-size:12px;color:var(--color-text-muted);";
  valueEl.textContent = `${pct}%`;

  header.appendChild(labelEl);
  header.appendChild(valueEl);

  const barBg = document.createElement("div");
  barBg.style.cssText = "background:var(--color-border);border-radius:99px;height:8px;overflow:hidden;";

  const barFill = document.createElement("div");
  barFill.style.cssText = `background:${color || "var(--color-primary)"};height:100%;width:${pct}%;border-radius:99px;transition:width 0.5s ease;`;
  barFill.dataset.pct = String(pct);

  barBg.appendChild(barFill);
  container.appendChild(header);
  container.appendChild(barBg);

  return container;
}

/**
 * Renders the full dashboard HTML into a container element.
 * @param {HTMLElement} [container] - Container to render into. If not provided, returns HTML string.
 * @returns {string|undefined} HTML string if no container provided, otherwise undefined
 */
export function renderDashboard(container) {
  const tenseProgress = readTenseProgress();
  const gameProgress = readGameProgress();
  const srData = readSpacedRepetition();
  const tenseStats = calculateTenseStats(tenseProgress);

  const maxPerTense = 50;
  const totalPossibleTenses = TENSE_ORDER.length * 3 * maxPerTenses;

  const cardStyle = "background:var(--color-surface);border:1px solid var(--color-border);border-radius:var(--radius-lg);padding:20px;margin-bottom:20px;";
  const titleStyle = "font-size:16px;font-weight:700;color:var(--color-text);margin:0 0 16px;border-bottom:2px solid var(--color-primary);padding-bottom:8px;";

  const html = `
    <div class="dashboard" style="max-width:900px;margin:0 auto;">
      <h2 style="font-size:22px;font-weight:800;color:var(--color-text);margin:0 0 24px;text-align:center;">📊 Learning Dashboard</h2>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:24px;">
        <div style="${cardStyle}text-align:center;">
          <p style="font-size:28px;font-weight:800;color:var(--color-primary);margin:0;">${tenseStats.totalScore}</p>
          <p style="font-size:12px;color:var(--color-text-muted);margin:4px 0 0;">Total Score</p>
        </div>
        <div style="${cardStyle}text-align:center;">
          <p style="font-size:28px;font-weight:800;color:var(--color-success);margin:0;">${tenseStats.totalCompleted}</p>
          <p style="font-size:12px;color:var(--color-text-muted);margin:4px 0 0;">Sentences Completed</p>
        </div>
        <div style="${cardStyle}text-align:center;">
          <p style="font-size:28px;font-weight:800;color:var(--color-accent);margin:0;">${tenseStats.totalAttempts}</p>
          <p style="font-size:12px;color:var(--color-text-muted);margin:4px 0 0;">Total Attempts</p>
        </div>
        <div style="${cardStyle}text-align:center;">
          <p style="font-size:28px;font-weight:800;color:var(--color-warning);margin:0;">${Object.keys(gameProgress).length}</p>
          <p style="font-size:12px;color:var(--color-text-muted);margin:4px 0 0;">Games Played</p>
        </div>
      </div>

      <div style="${cardStyle}">
        <h3 style="${titleStyle}">📝 Sentence Builder Progress</h3>
        <p style="font-size:13px;color:var(--color-text-muted);margin:0 0 16px;">Score per tense (across all three forms)</p>
        ${TENSE_ORDER.map(tense => {
          const ts = tenseStats.perTense[tense];
          const pct = Math.min(Math.round((ts.completed / (3 * maxPerTenses)) * 100), 100);
          const color = pct >= 80 ? "var(--color-success)" : pct >= 40 ? "var(--color-primary)" : "var(--color-accent)";
          return createProgressBar(pct, tense, color).outerHTML;
        }).join("")}
      </div>

      <div style="${cardStyle}">
        <h3 style="${titleStyle}">🎮 Game Scores</h3>
        ${Object.keys(gameProgress).length === 0 ? '<p style="font-size:13px;color:var(--color-text-muted);">No game data yet. Play some games to see your scores here!</p>' : `
          <table class="theory-table" style="margin-bottom:0;">
            <thead><tr><th>Game</th><th>Best Score</th><th>Total Score</th><th>Games Played</th><th>Avg per Game</th></tr></thead>
            <tbody>
              ${Object.entries(gameProgress).map(([game, data]) => {
                const name = GAME_NAMES[game] || game;
                const avg = data.gamesPlayed > 0 ? Math.round(data.totalScore / data.gamesPlayed) : 0;
                return `<tr>
                  <td><strong>${name}</strong></td>
                  <td>${data.bestScore}</td>
                  <td>${data.totalScore}</td>
                  <td>${data.gamesPlayed}</td>
                  <td>${avg}</td>
                </tr>`;
              }).join("")}
            </tbody>
          </table>
        `}
      </div>

      <div style="${cardStyle}">
        <h3 style="${titleStyle}">🔄 Spaced Repetition</h3>
        ${Object.keys(srData).length === 0 ? '<p style="font-size:13px;color:var(--color-text-muted);">No review data yet. Keep practicing and wrong answers will be tracked here.</p>' : (() => {
          const wrongCount = Object.values(srData).filter(d => d.wrongCount > 0).length;
          const reviewDue = Object.values(srData).filter(d => {
            if (!d.nextReview) return false;
            return new Date(d.nextReview) <= new Date();
          }).length;
          return `
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;">
              <div style="text-align:center;padding:12px;background:var(--color-bg-secondary);border-radius:8px;">
                <p style="font-size:24px;font-weight:700;color:var(--color-error);margin:0;">${wrongCount}</p>
                <p style="font-size:11px;color:var(--color-text-muted);margin:4px 0 0;">Items with errors</p>
              </div>
              <div style="text-align:center;padding:12px;background:var(--color-bg-secondary);border-radius:8px;">
                <p style="font-size:24px;font-weight:700;color:var(--color-warning);margin:0;">${reviewDue}</p>
                <p style="font-size:11px;color:var(--color-text-muted);margin:4px 0 0;">Due for review</p>
              </div>
            </div>
          `;
        })()}
      </div>

      <div style="${cardStyle}">
        <h3 style="${titleStyle}">📈 Tense Form Breakdown</h3>
        <div style="overflow-x:auto;">
          <table class="theory-table" style="margin-bottom:0;">
            <thead><tr><th>Tense</th><th>Affirmative</th><th>Negative</th><th>Questions</th><th>Total</th></tr></thead>
            <tbody>
              ${TENSE_ORDER.map(tense => {
                const ts = tenseStats.perTense[tense];
                return `<tr>
                  <td><strong>${tense}</strong></td>
                  <td>${ts.forms.affirmative.completed}</td>
                  <td>${ts.forms.negative.completed}</td>
                  <td>${ts.forms.questions.completed}</td>
                  <td><strong>${ts.completed}</strong></td>
                </tr>`;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>`;

  if (container) {
    container.innerHTML = html;
    return undefined;
  }
  return html;
}

/**
 * Initializes the dashboard by rendering it into the #dashboardContainer element.
 * If the element doesn't exist, does nothing.
 */
export function initDashboard() {
  const container = document.getElementById("dashboardContainer");
  if (!container) return;
  renderDashboard(container);
}

/* ═══════════════════════════════════════════
   PHRASAL VERBS & IDIOMS RENDERER
   ═══════════════════════════════════════════ */

// Wait for data to load
function waitForData(callback, maxAttempts = 50) {
  let attempts = 0;
  const check = () => {
    attempts++;
    if (typeof window.PHRASAL_VERBS_500 !== "undefined" || typeof window.IDIOMS_500 !== "undefined") {
      callback();
    } else if (attempts < maxAttempts) {
      setTimeout(check, 100);
    }
  };
  check();
}

// ── Phrasal Verbs Theory Renderer ──
function renderPhrasalVerbTheory() {
  const data = window.PHRASAL_VERBS_500 || [];
  if (!data.length) return '<p style="color:var(--color-text-muted);">Loading phrasal verbs...</p>';

  // Group by particle
  const byParticle = {};
  data.forEach(pv => {
    const parts = pv.phrasal.split(" ");
    const particle = parts[parts.length - 1];
    if (!byParticle[particle]) byParticle[particle] = [];
    byParticle[particle].push(pv);
  });

  let html = `
    <div class="theory-card">
      <h2 class="theory-title">💬 Phrasal Verbs</h2>
      <p class="theory-intro">Phrasal verbs are combinations of a verb + particle (preposition or adverb) that create a new meaning. They are extremely common in everyday English.</p>
      <div class="theory-stats">
        <span class="stat-badge">${data.length} Phrasal Verbs</span>
        <span class="stat-badge">${Object.keys(byParticle).length} Particles</span>
      </div>
    </div>

    <div class="theory-card">
      <h3 class="theory-subtitle">Types of Phrasal Verbs</h3>
      <div class="theory-grid">
        <div class="theory-item">
          <span class="theory-icon">✅</span>
          <div>
            <strong>Separable</strong>
            <p>Object can go between verb and particle: "Turn off the light" → "Turn the light off" → "Turn it off"</p>
          </div>
        </div>
        <div class="theory-item">
          <span class="theory-icon">🔒</span>
          <div>
            <strong>Inseparable</strong>
            <p>Object must come after: "Look after her" ✓ | "Look her after" ✗</p>
          </div>
        </div>
        <div class="theory-item">
          <span class="theory-icon">🎯</span>
          <div>
            <strong>Intransitive</strong>
            <p>No object needed: "Wake up", "Show up", "Break down"</p>
          </div>
        </div>
      </div>
    </div>

    <div class="theory-card">
      <h3 class="theory-subtitle">Most Common Phrasal Verbs by Particle</h3>
  `;

  // Show top particles
  const topParticles = ["up", "down", "out", "off", "on", "away", "back", "over", "into", "with"];
  topParticles.forEach(particle => {
    const verbs = byParticle[particle];
    if (!verbs || !verbs.length) return;

    html += `
      <div class="pv-particle-section">
        <h4 class="pv-particle-title">
          <span class="pv-particle-badge">+ ${particle}</span>
          <span class="pv-particle-count">${verbs.length} verbs</span>
        </h4>
        <div class="pv-list">
    `;

    verbs.slice(0, 15).forEach(pv => {
      html += `
        <div class="pv-item">
          <div class="pv-phrasal">${pv.phrasal}</div>
          <div class="pv-meaning">${pv.meaning}</div>
          <div class="pv-example">${pv.example}</div>
        </div>
      `;
    });

    if (verbs.length > 15) {
      html += `<div class="pv-more">+ ${verbs.length - 15} more...</div>`;
    }

    html += `</div></div>`;
  });

  html += `</div>`;

  // Add quiz section
  html += `
    <div class="theory-card">
      <h3 class="theory-subtitle">📝 Quick Quiz</h3>
      <div class="quiz-section" id="pvQuiz">
        <div class="quiz-question" data-qid="0">
          <p class="quiz-q-text">Which is the correct form with a pronoun?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-selected="0">Pick up it</button>
            <button class="quiz-option" data-selected="1">Pick it up ✓</button>
          </div>
          <div class="quiz-feedback" id="pvQuizFeedback0"></div>
        </div>
        <div class="quiz-score">Score: <span id="pvQuizScore">0</span>/5</div>
      </div>
    </div>
  `;

  return html;
}

// ── Idiomatic Expressions Theory Renderer ──
function renderIdiomaticExpressionTheory() {
  const data = window.IDIOMS_500 || [];
  if (!data.length) return '<p style="color:var(--color-text-muted);">Loading idioms...</p>';

  // Group by category
  const byCategory = {};
  data.forEach(idiom => {
    const cat = idiom.category || "other";
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(idiom);
  });

  let html = `
    <div class="theory-card">
      <h2 class="theory-title">🎭 Idiomatic Expressions</h2>
      <p class="theory-intro">Idioms are fixed expressions whose meaning cannot be deduced from the literal meaning of individual words. They are essential for natural, fluent English.</p>
      <div class="theory-stats">
        <span class="stat-badge">${data.length} Idioms</span>
        <span class="stat-badge">${Object.keys(byCategory).length} Categories</span>
      </div>
    </div>
  `;

  // Category icons and colors
  const categoryInfo = {
    time: { icon: "⏰", label: "Time", color: "#3b82f6" },
    emotions: { icon: "😊", label: "Emotions", color: "#ec4899" },
    business: { icon: "💼", label: "Business", color: "#10b981" },
    body: { icon: "🦴", label: "Body Parts", color: "#f59e0b" },
    everyday: { icon: "💬", label: "Everyday", color: "#8b5cf6" },
    food: { icon: "🍽️", label: "Food & Drink", color: "#ef4444" },
    nature: { icon: "🌿", label: "Nature", color: "#22c55e" },
    money: { icon: "💰", label: "Money", color: "#fbbf24" },
    other: { icon: "📚", label: "Other", color: "#6b7280" },
  };

  // Render each category
  Object.entries(byCategory).forEach(([category, idioms]) => {
    const info = categoryInfo[category] || categoryInfo.other;

    html += `
      <div class="theory-card">
        <h3 class="theory-subtitle">
          <span style="color:${info.color}">${info.icon}</span> ${info.label}
          <span class="id-count-badge">${idioms.length}</span>
        </h3>
        <div class="id-list">
    `;

    idioms.forEach(idiom => {
      html += `
        <div class="id-item">
          <div class="id-idiom">${idiom.idiom}</div>
          <div class="id-meaning">${idiom.meaning}</div>
          <div class="id-example">${idiom.example}</div>
        </div>
      `;
    });

    html += `</div></div>`;
  });

  // Add quiz section
  html += `
    <div class="theory-card">
      <h3 class="theory-subtitle">📝 Quick Quiz</h3>
      <div class="quiz-section" id="ieQuiz">
        <div class="quiz-question" data-qid="0">
          <p class="quiz-q-text">Which idiom means "very easy"?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-selected="0">Piece of cake ✓</button>
            <button class="quiz-option" data-selected="1">Cold feet</button>
            <button class="quiz-option" data-selected="2">Break a leg</button>
            <button class="quiz-option" data-selected="3">Under the weather</button>
          </div>
          <div class="quiz-feedback" id="ieQuizFeedback0"></div>
        </div>
        <div class="quiz-score">Score: <span id="ieQuizScore">0</span>/5</div>
      </div>
    </div>
  `;

  return html;
}

// Export to window
window.__renderPhrasalVerbTheory = renderPhrasalVerbTheory;
window.__renderIdiomaticExpressionTheory = renderIdiomaticExpressionTheory;

/* ═══════════════════════════════════════════
   GRAMMAR RENDERERS MODULE
   Phrasal Verbs, Idioms, Tenses, Sentence Types
   ═══════════════════════════════════════════ */

// Wikipedia API helper
const WIKI_API = "https://en.wikipedia.org/api/rest_v1/page/summary";

async function fetchWiki(term) {
  try {
    const resp = await fetch(`${WIKI_API}/${encodeURIComponent(term)}`);
    if (!resp.ok) return null;
    return await resp.json();
  } catch { return null; }
}

function wikiCard(data, term) {
  if (!data || !data.extract) return '';
  const img = data.thumbnail?.source;
  const url = data.content_urls?.desktop?.page;
  return `
    <div class="wiki-card">
      <div class="wiki-header">
        <span class="wiki-icon">📚</span>
        <span class="wiki-term">${term}</span>
      </div>
      <div class="wiki-body">
        ${img ? `<img src="${img}" alt="${term}" class="wiki-thumb" loading="lazy" />` : ''}
        <p class="wiki-extract">${data.extract}</p>
      </div>
      ${url ? `<a href="${url}" target="_blank" rel="noopener" class="wiki-link">Read more on Wikipedia →</a>` : ''}
    </div>
  `;
}

// ── Phrasal Verbs Theory Renderer ──
async function renderPhrasalVerbTheory() {
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

  // Group by type
  const byType = { separable: [], inseparable: [], intransitive: [], 'three-word': [] };
  data.forEach(pv => {
    const type = (pv.type || 'separable').toLowerCase();
    if (byType[type]) byType[type].push(pv);
    else byType.separable.push(pv);
  });

  // Fetch Wikipedia info for phrasal verbs and particles
  const [wikiData, upWiki, downWiki, outWiki] = await Promise.all([
    fetchWiki("Phrasal_verb"),
    fetchWiki("English_phrasal_verbs_(up)"),
    fetchWiki("English_phrasal_verbs_(down)"),
    fetchWiki("English_phrasal_verbs_(out)")
  ]);

  // Particle meanings
  const particleMeanings = {
    up: { meaning: "completion, increase, or direction", icon: "⬆️", examples: ["finish up", "cheer up", "stand up"] },
    down: { meaning: "reduction, decrease, or lower position", icon: "⬇️", examples: ["calm down", "turn down", "break down"] },
    out: { meaning: "extinction, distribution, or completion", icon: "🔚", examples: ["find out", "give out", "run out"] },
    off: { meaning: "separation, departure, or completion", icon: "👋", examples: ["take off", "put off", "set off"] },
    on: { meaning: "continuation, contact, or dependence", icon: "➡️", examples: ["carry on", "turn on", "rely on"] },
    away: { meaning: "removal, distance, or continuous action", icon: "🏃", examples: ["give away", "throw away", "pass away"] },
    back: { meaning: "return, reversal, or restraint", icon: "↩️", examples: ["come back", "pay back", "hold back"] },
    over: { meaning: "excess, control, or movement", icon: "🔄", examples: ["turn over", "get over", "take over"] },
    into: { meaning: "transformation or entry", icon: "🔀", examples: ["turn into", "run into", "break into"] },
    through: { meaning: "completion or passage", icon: "✅", examples: ["get through", "go through", "look through"] }
  };

  let html = `
    <div class="theory-hero theory-hero-pv">
      <div class="theory-hero-icon">💬</div>
      <h2 class="theory-hero-title">Phrasal Verbs</h2>
      <p class="theory-hero-sub">Master verb + particle combinations used by native speakers every day</p>
      <div class="theory-hero-stats">
        <div class="hero-stat"><span class="hero-stat-num">${data.length}+</span><span class="hero-stat-label">Phrasal Verbs</span></div>
        <div class="hero-stat"><span class="hero-stat-num">${Object.keys(byParticle).length}</span><span class="hero-stat-label">Particles</span></div>
        <div class="hero-stat"><span class="hero-stat-num">4</span><span class="hero-stat-label">Types</span></div>
      </div>
    </div>

    ${wikiData ? wikiCard(wikiData, "Phrasal verb") : ''}

    <div class="theory-card">
      <h3 class="theory-section-title">🎯 What are Phrasal Verbs?</h3>
      <p class="theory-desc">A <strong>phrasal verb</strong> is a verb combined with one or more particles (prepositions or adverbs) that together create a <strong>new meaning</strong> different from the original verb. They are extremely common in spoken English.</p>
      <div class="theory-example-box">
        <div class="example-label">The magic of particles:</div>
        <div class="example-sentence">
          <span class="ex-verb">give</span> = entregar
          <span class="ex-separator">→</span>
          <span class="ex-verb">give up</span> = rendirse
          <span class="ex-separator">→</span>
          <span class="ex-verb">give away</span> = regalar
          <span class="ex-separator">→</span>
          <span class="ex-verb">give in</span> = ceder
        </div>
      </div>
      <div class="theory-warning">
        <span class="warning-icon">⚠️</span>
        <span>The meaning of a phrasal verb is usually <strong>NOT</strong> predictable from the individual words. You must learn them as units!</span>
      </div>
    </div>

    <div class="theory-card">
      <h3 class="theory-section-title">Types of Phrasal Verbs</h3>
      <div class="pv-types-grid">
        <div class="pv-type-card separable">
          <div class="pv-type-header">
            <span class="pv-type-icon">✅</span>
            <h4>Separable</h4>
            <span class="pv-type-count">${byType.separable.length} verbs</span>
          </div>
          <p>Object can go <strong>between</strong> verb and particle OR after it.</p>
          <div class="pv-type-example">
            <code>"Turn off the light"</code> ✓
            <code>"Turn the light off"</code> ✓
            <code>"Turn it off"</code> ✓
          </div>
          <p class="pv-type-note">⚠️ Pronouns MUST go between: <code>"Turn it off"</code> ✓ <code>"Turn off it"</code> ✗</p>
          <div class="pv-type-verbs">
            ${byType.separable.slice(0, 5).map(pv => `<span class="pv-inline-verb">${pv.phrasal}</span>`).join('')}
          </div>
        </div>
        <div class="pv-type-card inseparable">
          <div class="pv-type-header">
            <span class="pv-type-icon">🔒</span>
            <h4>Inseparable</h4>
            <span class="pv-type-count">${byType.inseparable.length} verbs</span>
          </div>
          <p>Object MUST come <strong>after</strong> the particle. Cannot be separated.</p>
          <div class="pv-type-example">
            <code>"Look after her"</code> ✓
            <code>"Look her after"</code> ✗
          </div>
          <p class="pv-type-note">💡 Always keep verb + particle together</p>
          <div class="pv-type-verbs">
            ${byType.inseparable.slice(0, 5).map(pv => `<span class="pv-inline-verb">${pv.phrasal}</span>`).join('')}
          </div>
        </div>
        <div class="pv-type-card intransitive">
          <div class="pv-type-header">
            <span class="pv-type-icon">🎯</span>
            <h4>Intransitive</h4>
            <span class="pv-type-count">${byType.intransitive.length} verbs</span>
          </div>
          <p>No object needed. Complete meaning on its own.</p>
          <div class="pv-type-example">
            <code>"Wake up"</code> •
            <code>"Show up"</code> •
            <code>"Break down"</code>
          </div>
          <p class="pv-type-note">🎯 Used without an object</p>
          <div class="pv-type-verbs">
            ${byType.intransitive.slice(0, 5).map(pv => `<span class="pv-inline-verb">${pv.phrasal}</span>`).join('')}
          </div>
        </div>
        <div class="pv-type-card three-word">
          <div class="pv-type-header">
            <span class="pv-type-icon">🔗</span>
            <h4>Three-Word</h4>
            <span class="pv-type-count">${byType['three-word'].length} verbs</span>
          </div>
          <p>Verb + two particles. Fixed structure.</p>
          <div class="pv-type-example">
            <code>"Look forward to"</code> •
            <code>"Get away with"</code>
          </div>
          <p class="pv-type-note">📚 Always three parts together</p>
          <div class="pv-type-verbs">
            ${byType['three-word'].slice(0, 5).map(pv => `<span class="pv-inline-verb">${pv.phrasal}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <div class="theory-card">
      <h3 class="theory-section-title">Particle Power: How Particles Change Meaning</h3>
      <p class="theory-desc">Each particle adds a specific "flavor" to the verb. Understanding particles helps you guess meanings!</p>
      <div class="pv-particle-meanings-grid">
  `;

  // Render particle meanings
  Object.entries(particleMeanings).forEach(([particle, info]) => {
    const count = byParticle[particle]?.length || 0;
    html += `
      <div class="pv-particle-meaning-card">
        <div class="pv-pm-header">
          <span class="pv-pm-icon">${info.icon}</span>
          <span class="pv-pm-particle">+ ${particle}</span>
          <span class="pv-pm-count">${count}</span>
        </div>
        <p class="pv-pm-meaning">${info.meaning}</p>
        <div class="pv-pm-examples">
          ${info.examples.map(ex => `<code>${ex}</code>`).join('')}
        </div>
      </div>
    `;
  });

  html += `</div></div>`;

  // Add Wikipedia cards for specific particles
  if (upWiki || downWiki || outWiki) {
    html += `
      <div class="theory-card">
        <h3 class="theory-section-title">📚 Learn More from Wikipedia</h3>
        <div class="pv-wiki-grid">
          ${upWiki ? wikiCard(upWiki, "Phrasal verbs (up)") : ''}
          ${downWiki ? wikiCard(downWiki, "Phrasal verbs (down)") : ''}
          ${outWiki ? wikiCard(outWiki, "Phrasal verbs (out)") : ''}
        </div>
      </div>
    `;
  }

  // Main phrasal verbs by particle
  html += `
    <div class="theory-card">
      <h3 class="theory-section-title">Most Common Phrasal Verbs by Particle</h3>
      <p class="theory-desc">Click on a particle to see all phrasal verbs with that particle.</p>
  `;

  // Show top particles with expandable sections
  const topParticles = ["up", "down", "out", "off", "on", "away", "back", "over", "into", "with", "through", "around"];
  topParticles.forEach(particle => {
    const verbs = byParticle[particle];
    if (!verbs || !verbs.length) return;
    const info = particleMeanings[particle] || { meaning: "", icon: "📌" };

    html += `
      <div class="pv-particle-section">
        <h4 class="pv-particle-title">
          <span class="pv-particle-badge">${info.icon} + ${particle}</span>
          <span class="pv-particle-count">${verbs.length} verbs</span>
        </h4>
        <p class="pv-particle-desc">${info.meaning}</p>
        <div class="pv-grid">
    `;

    verbs.slice(0, 12).forEach(pv => {
      html += `
        <div class="pv-card">
          <div class="pv-card-phrasal">${pv.phrasal}</div>
          <div class="pv-card-meaning">${pv.meaning}</div>
          <div class="pv-card-example">${pv.example}</div>
          ${pv.type ? `<div class="pv-card-type">${pv.type}</div>` : ''}
        </div>
      `;
    });

    if (verbs.length > 12) {
      html += `<div class="pv-more-btn">+ ${verbs.length - 12} more...</div>`;
    }

    html += `</div></div>`;
  });

  html += `</div>`;
  return html;
}

// ── Idiomatic Expressions Theory Renderer ──
async function renderIdiomaticExpressionTheory() {
  const data = window.IDIOMS_500 || [];
  if (!data.length) return '<p style="color:var(--color-text-muted);">Loading idioms...</p>';

  // Group by category
  const byCategory = {};
  data.forEach(idiom => {
    const cat = idiom.category || "other";
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push(idiom);
  });

  // Category info
  const categoryInfo = {
    time: { icon: "⏰", label: "Time", color: "#3b82f6", gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)" },
    emotions: { icon: "😊", label: "Emotions", color: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #be185d)" },
    business: { icon: "💼", label: "Business", color: "#10b981", gradient: "linear-gradient(135deg, #10b981, #047857)" },
    body: { icon: "🦴", label: "Body Parts", color: "#f59e0b", gradient: "linear-gradient(135deg, #f59e0b, #d97706)" },
    everyday: { icon: "💬", label: "Everyday", color: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)" },
    food: { icon: "🍽️", label: "Food & Drink", color: "#ef4444", gradient: "linear-gradient(135deg, #ef4444, #dc2626)" },
    nature: { icon: "🌿", label: "Nature", color: "#22c55e", gradient: "linear-gradient(135deg, #22c55e, #16a34a)" },
    money: { icon: "💰", label: "Money", color: "#fbbf24", gradient: "linear-gradient(135deg, #fbbf24, #f59e0b)" },
    other: { icon: "📚", label: "Other", color: "#6b7280", gradient: "linear-gradient(135deg, #6b7280, #4b5563)" },
  };

  // Fetch Wikipedia info
  const wikiData = await fetchWiki("Idiom");

  let html = `
    <div class="theory-hero theory-hero-idiom">
      <div class="theory-hero-icon">🎭</div>
      <h2 class="theory-hero-title">Idiomatic Expressions</h2>
      <p class="theory-hero-sub">Learn fixed expressions that native speakers use naturally</p>
      <div class="theory-hero-stats">
        <div class="hero-stat"><span class="hero-stat-num">${data.length}+</span><span class="hero-stat-label">Idioms</span></div>
        <div class="hero-stat"><span class="hero-stat-num">${Object.keys(byCategory).length}</span><span class="hero-stat-label">Categories</span></div>
      </div>
    </div>

    ${wikiData ? wikiCard(wikiData, "Idiom") : ''}

    <div class="theory-card">
      <h3 class="theory-section-title">🎯 What are Idioms?</h3>
      <p class="theory-desc">An <strong>idiom</strong> is a fixed expression whose meaning cannot be deduced from the literal meaning of its individual words. You must learn them as whole units.</p>
      <div class="theory-example-box">
        <div class="example-label">Example:</div>
        <div class="example-sentence">
          "It's raining cats and dogs" ≠ Lluvia de gatos y perros
          <br>= <strong>Llueve a cántaros</strong> (It's raining heavily)
        </div>
      </div>
      <div class="theory-warning">
        <span class="warning-icon">⚠️</span>
        <span>Most idioms are grammatically fixed. Don't change the words! "Piece of cake" = easy, but "slice of cake" ≠ easy.</span>
      </div>
    </div>
  `;

  // Render each category
  Object.entries(byCategory).forEach(([category, idioms]) => {
    const info = categoryInfo[category] || categoryInfo.other;

    html += `
      <div class="theory-card">
        <h3 class="theory-section-title" style="background:${info.gradient};-webkit-background-clip:text;-webkit-text-fill-color:transparent;">
          ${info.icon} ${info.label}
          <span class="id-count-badge" style="background:${info.color}20;color:${info.color}">${idioms.length}</span>
        </h3>
        <div class="id-grid">
    `;

    idioms.forEach(idiom => {
      html += `
        <div class="id-card">
          <div class="id-card-idiom">${idiom.idiom}</div>
          <div class="id-card-meaning">${idiom.meaning}</div>
          <div class="id-card-example">${idiom.example}</div>
        </div>
      `;
    });

    html += `</div></div>`;
  });

  return html;
}

// Export to window
window.__renderPhrasalVerbTheory = renderPhrasalVerbTheory;
window.__renderIdiomaticExpressionTheory = renderIdiomaticExpressionTheory;

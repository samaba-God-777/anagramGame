/* ═══════════════════════════════════════════
   SIDEBAR MODULE
   Uses hybrid storage (localStorage + Supabase)
   ═══════════════════════════════════════════ */

import { loadGrammarProgress, loadBookmarks, isBookmarked } from './hybridStorage.js';

function getProgress() {
  return loadGrammarProgress();
}

function getBookmarks() {
  return loadBookmarks();
}

const SIDEBAR_STRUCTURE = [
  { type: "link", icon: "🏠", label: "Home", href: "/" },
  { type: "link", icon: "📖", label: "Dictionary", href: "/dictionary/index.html" },
  { type: "section", icon: "📚", label: "Grammar", children: [
    { type: "group", icon: "📖", label: "English Tenses", href: "/grammar/present-simple.html", isTense: true, forms: ["Affirmative","Negative","Questions"] },
    { type: "group", icon: "🔗", label: "Clauses", href: "/grammar/clauses.html", children: [
      { label: "Noun Clauses", href: "/grammar/noun-clauses.html" },
      { label: "Adjective Clauses", href: "/grammar/adjective-clauses.html" },
      { label: "Adverb Clauses", href: "/grammar/adverb-clauses.html" },
    ]},
    { type: "link", icon: "📍", label: "Prepositions", href: "/grammar/prepositions.html" },
    { type: "link", icon: "🔗", label: "Conjunctions", href: "/grammar/conjunctions.html" },
    { type: "link", icon: "📏", label: "Adjective Positions", href: "/grammar/adjective-positions.html" },
    { type: "link", icon: "📍", label: "Adverb Positions", href: "/grammar/adverb-positions.html" },
    { type: "link", icon: "💬", label: "Phrasal Verbs", href: "/grammar/phrasal-verbs.html" },
    { type: "link", icon: "🎭", label: "Idiomatic Expressions", href: "/grammar/idiomatic-expressions.html" },
  ]},
  { type: "section", icon: "🎯", label: "My Progress", children: [
    { type: "link", icon: "📊", label: "Dashboard", href: "/games/dashboard.html" },
    { type: "stats" },
  ]},
  { type: "section", icon: "🎮", label: "Games", children: [
    { type: "link", icon: "💬", label: "Phrasal Verbs Game", href: "/games/game-phrasal-verbs.html" },
    { type: "link", icon: "🎭", label: "Idioms Game", href: "/games/game-idioms.html" },
    { type: "link", icon: "🔗", label: "Conjunctions Game", href: "/games/game-conjunctions.html" },
    { type: "link", icon: "💬", label: "AI Conversation", href: "/games/game-conversation.html" },
    { type: "link", icon: "🔤", label: "Anagram Game", href: "/games/game-anagram.html" },
    { type: "link", icon: "📝", label: "Sentence Unscramble", href: "/games/game-unscramble.html" },
    { type: "link", icon: "🔍", label: "Error Correction", href: "/games/game-error-correction.html" },
    { type: "link", icon: "⏰", label: "Verb Tense Challenge", href: "/games/game-verb-tense.html" },
    { type: "link", icon: "📏", label: "Word Order Challenge", href: "/games/game-word-order.html" },
    { type: "link", icon: "📍", label: "Preposition Challenge", href: "/games/game-preposition.html" },
    { type: "link", icon: "📏", label: "Adjective Order", href: "/games/game-adjective-order.html" },
    { type: "link", icon: "📍", label: "Adverb Placement", href: "/games/game-adverb-placement.html" },
    { type: "link", icon: "🔗", label: "Clause Identification", href: "/games/game-clause-identification.html" },
    { type: "link", icon: "🇪🇺", label: "CEFR Anagram", href: "/cefr.html" },
  ]},
  { type: "link", icon: "🎯", label: "Daily Challenge", href: "/games/daily-challenge.html", divider: true },
];

function tenseToFilename(tense) {
  return tense.toLowerCase().replace(/\s+/g, '-') + '.html';
}

function expandTenseGroup(sidebarNav, isTensePage) {
  if (!sidebarNav || !isTensePage) return;
  const tg = sidebarNav.querySelector('.tense-group[data-tense-group="tenses"]');
  if (tg) tg.classList.add("open");
}

function getProgressBadge(href) {
  const progress = getProgress();
  const lessonId = href.split("/").pop()?.replace(".html", "");
  if (!lessonId) return "";
  const p = progress[lessonId];
  if (!p) return "";
  if (p.completed) return '<span class="sidebar-badge done">✅</span>';
  if (p.lastAccess) return '<span class="sidebar-badge progress">📖</span>';
  return "";
}

function getBookmarkIcon(href) {
  const lessonId = href.split("/").pop()?.replace(".html", "");
  return isBookmarked(lessonId) ? "⭐" : "";
}

function buildGlobalSidebar(state, isTensePage) {
  const sidebarNav = document.getElementById("sidebarNav");
  if (!sidebarNav) return;
  sidebarNav.innerHTML = "";
  const pagePath = window.location.pathname.split("/").pop() || "index.html";

  SIDEBAR_STRUCTURE.forEach(item => {
    if (item.type === "link") {
      const a = document.createElement("a");
      a.className = "sidebar-link" + (item.divider ? " sidebar-link-divider" : "");
      a.href = item.href;
      const badge = getProgressBadge(item.href);
      const bookmark = getBookmarkIcon(item.href);
      a.innerHTML = `<span class="sidebar-link-icon">${item.icon}</span><span class="sidebar-link-text">${item.label}</span>${badge}${bookmark ? `<span class="sidebar-bookmark">${bookmark}</span>` : ""}`;
      if (a.href.endsWith(pagePath)) a.classList.add("active");
      sidebarNav.appendChild(a);
    } else if (item.type === "section") {
      const section = document.createElement("div"); section.className = "sidebar-section";
      const header = document.createElement("div"); header.className = "sidebar-section-header";
      header.innerHTML = `<span class="sidebar-link-icon">${item.icon}</span><span class="sidebar-link-text">${item.label}</span><span class="sidebar-section-arrow">▾</span>`;
      header.addEventListener("click", () => { section.classList.toggle("open"); });
      section.appendChild(header);
      const children = document.createElement("div"); children.className = "sidebar-children";

      item.children.forEach(child => {
        if (child.type === "stats") {
          // Progress stats panel
          const statsDiv = document.createElement("div"); statsDiv.className = "sidebar-stats";
          const progress = getProgress();
          const bookmarks = getBookmarks();
          const total = 22; // Total grammar lessons
          const completed = Object.values(progress).filter(p => p.completed).length;
          const percent = Math.round((completed / total) * 100);
          statsDiv.innerHTML = `
            <div class="sidebar-stats-content">
              <div class="sidebar-stat-row">
                <span class="sidebar-stat-label">Completed</span>
                <span class="sidebar-stat-value">${completed}/${total}</span>
              </div>
              <div class="sidebar-stat-bar">
                <div class="sidebar-stat-fill" style="width: ${percent}%"></div>
              </div>
              <div class="sidebar-stat-row">
                <span class="sidebar-stat-label">Bookmarks</span>
                <span class="sidebar-stat-value">⭐ ${bookmarks.length}</span>
              </div>
            </div>
          `;
          children.appendChild(statsDiv);
        } else if (child.type === "group") {
          const group = document.createElement("div"); group.className = "tense-group"; group.dataset.tenseGroup = child.isTense ? "tenses" : "";
          const gh = document.createElement("div"); gh.className = "tense-header";
          const gt = document.createElement("button"); gt.className = "tense-title"; gt.dataset.tense = child.isTense ? child.label : "";
          const gts = document.createElement("span"); gts.className = "tense-title-text";
          const badge = getProgressBadge(child.href);
          gts.innerHTML = `<span class="sidebar-link-icon" style="font-size:12px;margin-right:4px;">${child.icon}</span>${child.label}${badge}`;
          const gta = document.createElement("span"); gta.className = "tense-title-arrow"; gta.textContent = "▾";
          gt.appendChild(gts); gt.appendChild(gta);
          const gl = document.createElement("a"); gl.className = "tense-page-link"; gl.href = child.href; gl.textContent = "↗"; gl.title = `Open page`; gl.rel = "noopener";
          gh.appendChild(gt); gh.appendChild(gl);

          if (child.isTense && isTensePage) {
            const gf = document.createElement("div"); gf.className = "tense-forms";
            child.forms.forEach(form => {
              const fb = document.createElement("button"); fb.className = "form-btn"; fb.textContent = form; fb.dataset.tense = state.currentTense; fb.dataset.form = form.toLowerCase();
              gf.appendChild(fb);
            });
            group.appendChild(gh); group.appendChild(gf);
            gt.addEventListener("click", (e) => { e.stopPropagation(); showTheory(state.currentTense); });
          } else {
            group.appendChild(gh);
            gt.addEventListener("click", (e) => {
              e.stopPropagation();
              if (child.isTense && isTensePage) showTheory(state.currentTense);
              else window.location.href = child.href;
            });
          }

          if (child.children) {
            const subChildren = document.createElement("div"); subChildren.className = "sidebar-children sidebar-sub";
            child.children.forEach(sub => {
              const sa = document.createElement("a"); sa.className = "sidebar-link sidebar-sub-link"; sa.href = sub.href;
              const subBadge = getProgressBadge(sub.href);
              sa.innerHTML = `<span class="sidebar-link-text" style="font-size:12px;">${sub.label}</span>${subBadge}`;
              if (sa.href.endsWith(pagePath)) sa.classList.add("active");
              subChildren.appendChild(sa);
            });
            group.appendChild(subChildren);
          }

          children.appendChild(group);
        } else if (child.type === "link") {
          const ca = document.createElement("a"); ca.className = "sidebar-link"; ca.href = child.href;
          const badge = getProgressBadge(child.href);
          const bookmark = getBookmarkIcon(child.href);
          ca.innerHTML = `<span class="sidebar-link-icon">${child.icon}</span><span class="sidebar-link-text">${child.label}</span>${badge}${bookmark ? `<span class="sidebar-bookmark">${bookmark}</span>` : ""}`;
          if (ca.href.endsWith(pagePath)) ca.classList.add("active");
          children.appendChild(ca);
        }
      });
      section.appendChild(children);
      sidebarNav.appendChild(section);
    }
  });

  expandTenseGroup(sidebarNav, isTensePage);
  updateSidebarActive(state, isTensePage);
}

function updateSidebarActive(state, isTensePage) {
  const sidebarNav = document.getElementById("sidebarNav");
  if (!sidebarNav) return;
  if (isTensePage) {
    sidebarNav.querySelectorAll(".tense-title").forEach(el => el.classList.toggle("active", el.dataset.tense === state.currentTense));
    sidebarNav.querySelectorAll(".form-btn").forEach(el => el.classList.toggle("active", el.dataset.tense === state.currentTense && el.dataset.form === state.currentForm));
    sidebarNav.querySelectorAll(".tense-group").forEach(g => {
      const t = g.querySelector(".tense-title");
      if (t && t.dataset.tense === state.currentTense) { g.classList.add("open"); t.setAttribute("aria-expanded", "true"); }
      else if (t) { g.classList.remove("open"); t.setAttribute("aria-expanded", "false"); }
    });
  }
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  if(sidebar){sidebar.classList.remove("open");sidebarOverlay?.classList.remove("visible");}
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  if(sidebar){sidebar.classList.toggle("open");sidebarOverlay?.classList.toggle("visible");}
}

export { SIDEBAR_STRUCTURE, tenseToFilename, expandTenseGroup, buildGlobalSidebar, updateSidebarActive, closeSidebar, toggleSidebar };

export function initBreadcrumbs() {
  const path = window.location.pathname;
  const segments = path.split('/').filter(Boolean);
  
  if (segments.length === 0 || (segments.length === 1 && segments[0] === 'index.html')) return;
  
  const nav = document.createElement('nav');
  nav.className = 'breadcrumb-nav';
  nav.setAttribute('aria-label', 'Breadcrumb');
  
  const crumbs = [{ label: 'Home', href: '/' }];
  
  if (segments[0] === 'grammar') {
    crumbs.push({ label: 'Grammar', href: '/grammar/' });
    const page = segments[1]?.replace('.html', '') || '';
    const names = {
      'present-simple': 'Present Simple', 'present-continuous': 'Present Continuous',
      'present-perfect': 'Present Perfect', 'present-perfect-continuous': 'Present Perfect Continuous',
      'past-simple': 'Past Simple', 'past-continuous': 'Past Continuous',
      'past-perfect': 'Past Perfect', 'past-perfect-continuous': 'Past Perfect Continuous',
      'future-simple': 'Future Simple', 'future-continuous': 'Future Continuous',
      'future-perfect': 'Future Perfect', 'future-perfect-continuous': 'Future Perfect Continuous',
      'clauses': 'Clauses', 'noun-clauses': 'Noun Clauses', 'adjective-clauses': 'Adjective Clauses',
      'adverb-clauses': 'Adverb Clauses', 'prepositions': 'Prepositions', 'conjunctions': 'Conjunctions',
      'adjective-positions': 'Adjective Positions', 'adverb-positions': 'Adverb Positions',
      'phrasal-verbs': 'Phrasal Verbs', 'idiomatic-expressions': 'Idiomatic Expressions',
    };
    crumbs.push({ label: names[page] || page, href: path });
  } else if (segments[0] === 'games') {
    crumbs.push({ label: 'Games', href: '/games/' });
    const page = segments[1]?.replace('.html', '') || '';
    const names = {
      'game-anagram': 'Anagram', 'game-unscramble': 'Sentence Unscramble',
      'game-error-correction': 'Error Correction', 'game-verb-tense': 'Verb Tense Challenge',
      'game-word-order': 'Word Order', 'game-preposition': 'Preposition Challenge',
      'game-adjective-order': 'Adjective Order', 'game-adverb-placement': 'Adverb Placement',
      'game-clause-identification': 'Clause Identification', 'daily-challenge': 'Daily Challenge',
    };
    crumbs.push({ label: names[page] || page, href: path });
  } else if (segments[0] === 'dictionary') {
    crumbs.push({ label: 'Dictionary', href: '/dictionary/' });
  }
  
  nav.innerHTML = crumbs.map((c, i) => 
    i < crumbs.length - 1 
      ? `<a href="${c.href}" class="breadcrumb-link">${c.label}</a><span class="breadcrumb-sep" aria-hidden="true">›</span>`
      : `<span class="breadcrumb-current" aria-current="page">${c.label}</span>`
  ).join('');
  
  const style = document.createElement('style');
  style.textContent = `
    .breadcrumb-nav { padding:10px 28px; font-size:12px; color:var(--color-text-muted); background:var(--color-surface); border-bottom:1px solid var(--color-border); }
    .breadcrumb-link { color:var(--color-primary); text-decoration:none; font-weight:500; }
    .breadcrumb-link:hover { text-decoration:underline; }
    .breadcrumb-sep { margin:0 6px; color:var(--color-text-muted); }
    .breadcrumb-current { color:var(--color-text-secondary); font-weight:600; }
  `;
  document.head.appendChild(style);
  
  const mainContent = document.querySelector('.main-content');
  if (mainContent) mainContent.insertBefore(nav, mainContent.firstChild);
}

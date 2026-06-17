/* ═══════════════════════════════════════════
   THEME MODULE
   ═══════════════════════════════════════════ */

function initTheme() {
  const saved = localStorage.getItem("sb-theme");
  if(saved==="dark"||saved==="light") document.documentElement.setAttribute("data-theme",saved);
  else if(window.matchMedia("(prefers-color-scheme:dark)").matches) document.documentElement.setAttribute("data-theme","dark");
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme");
  const next = cur==="dark"?"light":"dark";
  document.documentElement.setAttribute("data-theme",next);
  localStorage.setItem("sb-theme",next);
}

function setAccentColor(color, bg, glow) {
  const r = document.documentElement.style;
  r.setProperty('--lv', color);
  r.setProperty('--lvb', bg);
  r.setProperty('--lvg', glow);
}

function resetAccentColor() {
  const r = document.documentElement.style;
  r.removeProperty('--lv');
  r.removeProperty('--lvb');
  r.removeProperty('--lvg');
}

export { initTheme, toggleTheme, setAccentColor, resetAccentColor };

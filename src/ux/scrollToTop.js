export function initScrollToTop() {
  const btn = document.createElement('button');
  btn.className = 'scroll-to-top';
  btn.innerHTML = '↑';
  btn.setAttribute('aria-label', 'Scroll to top');
  btn.style.cssText = `
    position:fixed; bottom:24px; right:24px; width:44px; height:44px;
    border-radius:50%; background:var(--color-primary); color:#fff;
    border:none; cursor:pointer; font-size:18px; font-weight:700;
    display:none; align-items:center; justify-content:center;
    box-shadow:0 4px 14px rgba(79,70,229,0.3); z-index:90;
    transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1);
  `;
  document.body.appendChild(btn);
  
  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
  }, { passive: true });
  
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'translateY(-3px) scale(1.1)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
}

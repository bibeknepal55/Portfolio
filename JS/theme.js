(() => {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');

  const saved = localStorage.getItem('theme') || 'light';
  root.setAttribute('data-theme', saved);
  if (btn) btn.innerHTML = `<span>${saved === 'dark' ? '☀️' : '🌙'}</span>`;

  if (btn) {
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      btn.innerHTML = `<span>${next === 'dark' ? '☀️' : '🌙'}</span>`;
    });
  }
})();

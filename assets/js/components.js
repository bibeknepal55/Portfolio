(() => {
  // ── Determine active page ──────────────────────────────────────────────────
  const page = window.location.pathname.split('/').pop() || 'index.html';

  const navLinks = [
    { href: 'index.html',      label: 'Home' },
    { href: 'skills.html',     label: 'Skills' },
    { href: 'projects.html',   label: 'Projects' },
    { href: 'experience.html', label: 'Experience' },
    { href: 'about.html',      label: 'About' },
    { href: 'contact.html',    label: 'Contact' },
  ];

  const linksHTML = navLinks
    .map(l => `<a href="${l.href}"${page === l.href ? ' class="active"' : ''}>${l.label}</a>`)
    .join('\n      ');

  // ── Inject Navbar ──────────────────────────────────────────────────────────
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  navbar.innerHTML = `
    <a href="index.html" class="logo">Bibek<span>.</span></a>
    <nav class="nav-links">
      ${linksHTML}
    </nav>
    <div class="navbar-right">
      <button class="theme-toggle" id="theme-toggle" title="Toggle theme"><span>🌙</span></button>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;
  document.body.prepend(navbar);

  // ── Mobile nav drawer ──────────────────────────────────────────────────────
  const mobileNav = document.createElement('div');
  mobileNav.className = 'mobile-nav';
  mobileNav.id = 'mobile-nav';
  mobileNav.innerHTML = linksHTML;
  document.body.insertBefore(mobileNav, document.body.children[1]);

  const hamburger = document.getElementById('hamburger');
  hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
    });
  });

  // ── Inject Footer ──────────────────────────────────────────────────────────
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="footer-logo">Bibek<span>.</span></span>
        <p>Building things that matter, one line at a time.</p>
        <div class="footer-social">
          <a href="https://linkedin.com/in/bibeknepal55" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.985V9h3.102v1.561h.046c.432-.818 1.487-1.681 3.061-1.681 3.274 0 3.878 2.155 3.878 4.958v6.614zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zm1.554 13.019H3.783V9h3.108v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://github.com/bibeknepal55" target="_blank" rel="noopener noreferrer" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
          <a href="mailto:bibeknepal2060@gmail.com" title="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
          <a href="https://wa.me/9779847370247" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-links">
        <h4>Quick Links</h4>
        <a href="index.html">Home</a>
        <a href="skills.html">Skills</a>
        <a href="projects.html">Projects</a>
        <a href="experience.html">Experience</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="footer-links">
        <h4>Connect</h4>
        <a href="https://linkedin.com/in/bibeknepal55" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/bibeknepal55" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://wa.me/9779847370247" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a href="mailto:bibeknepal2060@gmail.com">bibeknepal2060@gmail.com</a>
        <a href="contact.html">Contact</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 <span>Bibek Nepal</span></p>
    </div>
  `;
  document.body.appendChild(footer);

  // ── Theme toggle ───────────────────────────────────────────────────────────
  const btn = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('theme') || 'dark';
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

  // ── Fix reverse tabnabbing on all external links ───────────────────────────
  document.querySelectorAll('a[target="_blank"]').forEach(a => {
    a.setAttribute('rel', 'noopener noreferrer');
  });
})();

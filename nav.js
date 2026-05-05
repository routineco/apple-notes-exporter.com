/* nav.js — works with file:// and http:// */
(function () {
    const DL_URL = 'https://github.com/routineco/apple-notes-exporter/releases/download/1.0.0/Apple.Notes.Exporter-1.0.0-arm64.dmg';

    /* Detect subfolder depth so links are always relative */
    const inPages = window.location.pathname.indexOf('/pages/') !== -1
                 || window.location.href.indexOf('/pages/') !== -1;
    const ROOT = inPages ? '../' : './';
    function p(path) { return ROOT + path; }

    const NAV_HTML = `
<nav class="top-bar" role="navigation" aria-label="Main navigation">
  <div class="nav-left">
    <a href="${p('index.html')}" class="nav-brand">Apple Notes Exporter</a>
    <ul class="nav-links" role="list">
      <li>
        <button class="nav-link" aria-expanded="false" aria-haspopup="true" data-dropdown="formats">
          Export formats
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="nav-dropdown" id="dropdown-formats" role="menu">
          <a href="${p('pages/apple-notes-to-pdf.html')}" class="dropdown-item" role="menuitem">
            <span class="dropdown-item-icon">📄</span>
            <span class="dropdown-item-text"><span class="dropdown-item-title">Apple Notes to PDF</span><span class="dropdown-item-desc">Archive or print any note as PDF</span></span>
          </a>
          <a href="${p('pages/apple-notes-to-obsidian.html')}" class="dropdown-item" role="menuitem">
            <span class="dropdown-item-icon">✍️</span>
            <span class="dropdown-item-text"><span class="dropdown-item-title">Apple Notes to Obsidian</span><span class="dropdown-item-desc">Export to Markdown for your vault</span></span>
          </a>
          <a href="${p('pages/icloud-notes-exporter.html')}" class="dropdown-item" role="menuitem">
            <span class="dropdown-item-icon">☁️</span>
            <span class="dropdown-item-text"><span class="dropdown-item-title">iCloud Notes Exporter</span><span class="dropdown-item-desc">Export all your iCloud notes</span></span>
          </a>
        </div>
      </li>
      <li>
        <button class="nav-link" aria-expanded="false" aria-haspopup="true" data-dropdown="platforms">
          Switch platform
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="nav-dropdown" id="dropdown-platforms" role="menu">
          <a href="${p('pages/apple-notes-to-google-keep.html')}" class="dropdown-item" role="menuitem">
            <span class="dropdown-item-icon">🟡</span>
            <span class="dropdown-item-text"><span class="dropdown-item-title">Apple Notes to Google Keep</span><span class="dropdown-item-desc">Move your notes to Google Keep</span></span>
          </a>
          <a href="${p('pages/apple-notes-to-android.html')}" class="dropdown-item" role="menuitem">
            <span class="dropdown-item-icon">🤖</span>
            <span class="dropdown-item-text"><span class="dropdown-item-title">Apple Notes to Android</span><span class="dropdown-item-desc">Switch to Android without losing notes</span></span>
          </a>
          <a href="${p('pages/apple-notes-to-windows.html')}" class="dropdown-item" role="menuitem">
            <span class="dropdown-item-icon">🖥️</span>
            <span class="dropdown-item-text"><span class="dropdown-item-title">Apple Notes to Windows</span><span class="dropdown-item-desc">Open your notes on any Windows PC</span></span>
          </a>
        </div>
      </li>
      <li>
        <button class="nav-link" aria-expanded="false" aria-haspopup="true" data-dropdown="blog">
          Guides
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M2 4l4 4 4-4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="nav-dropdown" id="dropdown-blog" role="menu">
          <a href="${p('pages/how-to-export-apple-notes.html')}" class="dropdown-item" role="menuitem">
            <span class="dropdown-item-icon">📖</span>
            <span class="dropdown-item-text"><span class="dropdown-item-title">How to export Apple Notes</span><span class="dropdown-item-desc">Complete step-by-step guide</span></span>
          </a>
          <a href="${p('pages/apple-notes-alternatives.html')}" class="dropdown-item" role="menuitem">
            <span class="dropdown-item-icon">🔍</span>
            <span class="dropdown-item-text"><span class="dropdown-item-title">Best Apple Notes alternatives</span><span class="dropdown-item-desc">Obsidian, Notion, Bear and more</span></span>
          </a>
        </div>
      </li>
    </ul>
  </div>
  <div class="nav-right">
    <a href="https://github.com/routineco/apple-notes-exporter" target="_blank" rel="noopener noreferrer" class="github-link">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
      GitHub
    </a>
    <a href="${DL_URL}" class="nav-download-btn">
      <img src="${p('assets/icons/macos.svg')}" alt="" width="13" height="13">
      Download
    </a>
    <button class="nav-hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="nav-mobile">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-mobile" id="nav-mobile" aria-hidden="true">
  <p class="mobile-section-title">Export formats</p>
  <a href="${p('pages/apple-notes-to-pdf.html')}" class="mobile-link">📄 Apple Notes to PDF</a>
  <a href="${p('pages/apple-notes-to-obsidian.html')}" class="mobile-link">✍️ Apple Notes to Obsidian</a>
  <a href="${p('pages/icloud-notes-exporter.html')}" class="mobile-link">☁️ iCloud Notes Exporter</a>
  <p class="mobile-section-title">Switch platform</p>
  <a href="${p('pages/apple-notes-to-google-keep.html')}" class="mobile-link">🟡 Apple Notes to Google Keep</a>
  <a href="${p('pages/apple-notes-to-android.html')}" class="mobile-link">🤖 Apple Notes to Android</a>
  <a href="${p('pages/apple-notes-to-windows.html')}" class="mobile-link">🖥️ Apple Notes to Windows</a>
  <p class="mobile-section-title">Guides</p>
  <a href="${p('pages/how-to-export-apple-notes.html')}" class="mobile-link">📖 How to export Apple Notes</a>
  <a href="${p('pages/apple-notes-alternatives.html')}" class="mobile-link">🔍 Best Apple Notes alternatives</a>
  <div class="mobile-cta">
    <a href="${DL_URL}" class="download-button" style="justify-content:center;">
      <img src="${p('assets/icons/macos.svg')}" alt="" width="14" height="14">
      Download for Mac — Free
    </a>
    <a href="https://github.com/routineco/apple-notes-exporter" target="_blank" class="github-link" style="justify-content:center;">GitHub</a>
  </div>
</div>`;

    document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

    /* ── Nav dropdowns & hamburger init immediately (nav is already in DOM) ── */
    document.querySelectorAll('[data-dropdown]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const dd = document.getElementById('dropdown-' + btn.dataset.dropdown);
            const isOpen = dd.classList.contains('open');
            closeAll();
            if (!isOpen) { dd.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
        });
    });

    document.addEventListener('click', closeAll);

    function closeAll() {
        document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
        document.querySelectorAll('[data-dropdown]').forEach(b => b.setAttribute('aria-expanded', 'false'));
    }

    const hamburger = document.querySelector('.nav-hamburger');
    const mobileMenu = document.getElementById('nav-mobile');
    hamburger.addEventListener('click', () => {
        const open = mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', String(open));
        mobileMenu.setAttribute('aria-hidden', String(!open));
        document.body.style.overflow = open ? 'hidden' : '';
    });

    /* ── FAQ & Lightbox: wait for full page DOM ── */
    document.addEventListener('DOMContentLoaded', function () {

    /* ── FAQ ── */
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach(el => {
                el.classList.remove('open');
                el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            if (!isOpen) { item.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
        });
    });

    /* ── Lightbox ── */
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const lightboxImage = document.getElementById('lightboxImage');
    const indicators = document.querySelectorAll('.indicator');
    const images = [p('assets/screenshots/1.png'), p('assets/screenshots/2.png'), p('assets/screenshots/3.png'), p('assets/screenshots/4.png')];
    let idx = 0;

    document.querySelectorAll('.gallery-item').forEach((item, i) => {
        item.addEventListener('click', () => { idx = i; show(idx); lightbox.classList.add('active'); document.body.style.overflow = 'hidden'; });
    });

    document.getElementById('lightboxClose').addEventListener('click', close);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) close(); });
    document.getElementById('lightboxPrev').addEventListener('click', () => { idx = (idx - 1 + images.length) % images.length; show(idx); });
    document.getElementById('lightboxNext').addEventListener('click', () => { idx = (idx + 1) % images.length; show(idx); });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') { idx = (idx - 1 + images.length) % images.length; show(idx); }
        if (e.key === 'ArrowRight') { idx = (idx + 1) % images.length; show(idx); }
    });

    let tx = 0;
    lightbox.addEventListener('touchstart', (e) => { tx = e.changedTouches[0].screenX; });
    lightbox.addEventListener('touchend', (e) => {
        const d = tx - e.changedTouches[0].screenX;
        if (Math.abs(d) > 50) { idx = d > 0 ? (idx + 1) % images.length : (idx - 1 + images.length) % images.length; show(idx); }
    });

    indicators.forEach((ind, i) => { ind.addEventListener('click', () => { idx = i; show(i); }); });

    function show(i) {
        lightboxImage.src = images[i];
        lightboxImage.alt = 'Apple Notes Exporter screenshot ' + (i + 1);
        indicators.forEach((ind, j) => ind.classList.toggle('active', j === i));
    }

    function close() { lightbox.classList.remove('active'); document.body.style.overflow = ''; }

    }); /* end DOMContentLoaded */
})();

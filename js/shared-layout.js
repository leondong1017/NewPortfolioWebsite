/**
 * Shared Layout - Loads header and footer partials
 * Works with HTTP server. For file:// protocol, uses embedded fallback.
 */
(function () {
    const headerHTML = `<header class="site-header">
    <div class="logo">
        <div class="logo-icon"></div>
        <span>ASSET_314159</span>
    </div>
    <button type="button" class="menu-toggle" aria-expanded="false" aria-controls="site-nav" aria-label="Open main menu">
        <i class="ri-menu-2-line menu-toggle__icon menu-toggle__icon--open" aria-hidden="true"></i>
        <i class="ri-close-line menu-toggle__icon menu-toggle__icon--close" aria-hidden="true"></i>
    </button>
    <div class="nav-backdrop" aria-hidden="true" tabindex="-1"></div>
    <nav id="site-nav" class="site-nav" aria-label="Main navigation">
        <ul class="site-nav__list">
            <li class="site-nav__item site-nav__item--lang">
                <button type="button" class="lang-toggle" aria-label="Switch language" title="Switch language">
                    <i class="ri-translate-2" aria-hidden="true"></i>
                </button>
            </li>
            <li class="site-nav__item"><a href="index.html#about" data-i18n="nav.about">About</a></li>
            <li class="site-nav__item"><a href="index.html#work" data-i18n="nav.work">My Work</a></li>
            <li class="site-nav__item"><a href="index.html#contact" data-i18n="nav.contact">Contact</a></li>
        </ul>
    </nav>
</header>`;

    const footerHTML = `<footer>
    <p data-i18n="footer.line1">SAMARITAN SYSTEM UI v4.0.2 // DESIGNED BY ASSET_314159</p>
    <p data-i18n="footer.line2">© 2026 ALL RIGHTS RESERVED. SURVEILLANCE ACTIVE.</p>
</footer>`;

    function notifyLayoutReady() {
        window.dispatchEvent(new CustomEvent('layoutready'));
    }

    function injectPartials() {
        const headerMount = document.getElementById('header-mount');
        const footerMount = document.getElementById('footer-mount');
        if (headerMount) headerMount.outerHTML = headerHTML;
        if (footerMount) footerMount.outerHTML = footerHTML;
        notifyLayoutReady();
    }

    function loadFromPartials() {
        Promise.all([
            fetch('partials/header.html').then((r) => (r.ok ? r.text() : Promise.reject())),
            fetch('partials/footer.html').then((r) => (r.ok ? r.text() : Promise.reject())),
        ])
            .then(([header, footer]) => {
                const headerMount = document.getElementById('header-mount');
                const footerMount = document.getElementById('footer-mount');
                if (headerMount) headerMount.outerHTML = header.trim();
                if (footerMount) footerMount.outerHTML = footer.trim();
                notifyLayoutReady();
            })
            .catch(() => {
                injectPartials();
            });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadFromPartials);
    } else {
        loadFromPartials();
    }
})();

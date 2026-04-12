/**
 * Mobile nav, language toggle, layout + i18n wiring.
 */
(function () {
    let layoutReadyHandled = false;

    function syncMenuToggleAria() {
        const menuToggle = document.querySelector('.menu-toggle');
        if (!menuToggle || !window.PortfolioI18n) return;
        const open = document.body.classList.contains('nav-open');
        const loc = PortfolioI18n.getLocale();
        const nav = PortfolioI18n.STRINGS[loc].nav;
        menuToggle.setAttribute('aria-label', open ? nav.menuClose : nav.menuOpen);
        menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    function setNavOpen(open) {
        document.body.classList.toggle('nav-open', open);
        syncMenuToggleAria();
    }

    function closeNav() {
        setNavOpen(false);
    }

    function initNav() {
        const menuToggle = document.querySelector('.menu-toggle');
        const backdrop = document.querySelector('.nav-backdrop');
        const nav = document.getElementById('site-nav');
        const langToggle = document.querySelector('.lang-toggle');

        menuToggle?.addEventListener('click', () => {
            setNavOpen(!document.body.classList.contains('nav-open'));
        });

        backdrop?.addEventListener('click', closeNav);

        nav?.querySelectorAll('a[href*="#"]').forEach((a) => {
            a.addEventListener('click', closeNav);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeNav();
        });

        langToggle?.addEventListener('click', () => {
            PortfolioI18n.toggleLocale();
        });

        syncMenuToggleAria();
    }

    function onLayoutReady() {
        if (layoutReadyHandled) return;
        layoutReadyHandled = true;

        if (window.PortfolioI18n) {
            PortfolioI18n.applyLocale(PortfolioI18n.getLocale());
        }

        initNav();
    }

    window.addEventListener('layoutready', onLayoutReady);
})();

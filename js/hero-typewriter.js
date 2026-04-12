/**
 * Hero terminal typewriter (.hero-modules) — loops; respects i18n + prefers-reduced-motion.
 */
(function () {
    const el = document.querySelector('.hero-modules');
    if (!el || !window.PortfolioI18n) return;

    const timers = [];
    let charIndex = 0;

    function clearTimers() {
        while (timers.length) {
            clearTimeout(timers.pop());
        }
    }

    function prefersReducedMotion() {
        return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    function getSourceText() {
        const loc = PortfolioI18n.getLocale();
        const t = PortfolioI18n.STRINGS[loc]?.hero?.modulesTypewriter;
        return typeof t === 'string' ? t : '';
    }

    function escapeHtml(s) {
        return s
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function renderTypingSlice(slice) {
        const withBr = escapeHtml(slice).replace(/\n/g, '<br>');
        el.innerHTML =
            withBr + '<span class="hero-modules__cursor" aria-hidden="true">▍</span>';
    }

    function showStaticFull() {
        const full = getSourceText();
        el.innerHTML = escapeHtml(full).replace(/\n/g, '<br>');
    }

    function schedule(fn, ms) {
        timers.push(setTimeout(fn, ms));
    }

    function runLoop() {
        clearTimers();
        if (prefersReducedMotion()) {
            showStaticFull();
            return;
        }

        const fullText = getSourceText();
        if (!fullText) {
            el.textContent = '';
            return;
        }

        charIndex = 0;

        function typeNext() {
            if (prefersReducedMotion()) {
                showStaticFull();
                return;
            }

            const text = getSourceText();

            if (charIndex >= text.length) {
                renderTypingSlice(text);
                schedule(() => {
                    charIndex = 0;
                    el.innerHTML = '';
                    typeNext();
                }, 2200);
                return;
            }

            const ch = text[charIndex];
            charIndex += 1;
            renderTypingSlice(text.slice(0, charIndex));
            const delay = ch === '\n' ? 220 : 38;
            schedule(typeNext, delay);
        }

        typeNext();
    }

    function onLocaleApplied() {
        runLoop();
    }

    window.addEventListener('localeapplied', onLocaleApplied);

    try {
        window
            .matchMedia('(prefers-reduced-motion: reduce)')
            .addEventListener('change', runLoop);
    } catch (e) {
        window
            .matchMedia('(prefers-reduced-motion: reduce)')
            .addListener(runLoop);
    }

    /* First run when main.js applyLocale fires via layoutready → localeapplied */
})();

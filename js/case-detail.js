/**
 * Hydrates case.html from ?p=1..6 using PortfolioI18n work + caseDetail.
 */
(function () {
    const root = document.querySelector('.case-detail-root');
    if (!root || !window.PortfolioI18n) return;

    const params = new URLSearchParams(window.location.search);
    const raw = parseInt(params.get('p'), 10);
    const caseIndex = raw >= 1 && raw <= 6 ? raw : 0;
    const key = caseIndex ? 'p' + caseIndex : '';

    function redirectHome() {
        window.location.replace('index.html#work');
    }

    if (!caseIndex) {
        redirectHome();
        return;
    }

    const elRecord = document.getElementById('case-record');
    const elTitle = document.getElementById('case-title');
    const elDesc = document.getElementById('case-desc');
    const elMeta = document.getElementById('case-page-meta');
    const elImg = document.getElementById('case-hero-img');
    const elBody = document.getElementById('case-body');
    const elTech = document.getElementById('case-tech');

    function hydrate() {
        const loc = PortfolioI18n.getLocale();
        const S = PortfolioI18n.STRINGS[loc];
        const work = S.work[key];
        const detail = S.caseDetail[key];
        if (!work || !detail) {
            redirectHome();
            return;
        }

        document.title = work.title + ' — Leon Dong';

        if (elMeta && S.casePage) elMeta.textContent = S.casePage.meta;
        if (elRecord) elRecord.textContent = detail.record;
        if (elTitle) elTitle.textContent = work.title;
        if (elDesc) elDesc.textContent = work.desc;
        if (elImg) {
            elImg.src = detail.image;
            elImg.alt = work.title;
        }
        if (elBody) elBody.innerHTML = detail.bodyHtml;

        if (elTech) {
            elTech.innerHTML = '';
            (detail.tech || []).forEach((t) => {
                const span = document.createElement('span');
                span.textContent = t;
                elTech.appendChild(span);
            });
        }
    }

    window.addEventListener('localeapplied', hydrate);
    window.addEventListener('layoutready', () => {
        requestAnimationFrame(hydrate);
    });

    requestAnimationFrame(hydrate);
})();

/**
 * Full-page EN / ZH strings for portfolio.
 */
(function () {
    const STORAGE_KEY = 'portfolio-locale';

    const STRINGS = {
        en: {
            nav: {
                about: 'About',
                work: 'My Work',
                contact: 'Contact',
                menuOpen: 'Open main menu',
                menuClose: 'Close main menu',
                langAria: 'Switch language',
            },
            hero: {
                statusHtml: 'System Status: <span>ONLINE</span>',
                bio: 'Full Stack Developer & UI Engineer based in Sector 4. Specializing in secure architecture, data visualization, and minimalist digital experiences. Currently monitoring the network for anomalies.',
                modulesHtml:
                    '&gt; ACCESSING ARCHIVES...<br>&gt; LOADING MODULES: [REACT] [THREE.JS] [PYTHON] [TENSORFLOW]',
                modulesTypewriter:
                    '> ACCESSING ARCHIVES...\n> LOADING MODULES: [REACT] [THREE.JS] [PYTHON] [TENSORFLOW]',
            },
            work: {
                title: 'Case Files',
                metaRecords: 'TOTAL_RECORDS: 006',
                metaClass: 'CLASSIFICATION: PUBLIC',
                p1: {
                    title: 'Neural Net Visualizer',
                    desc: 'Real-time visualization of machine learning algorithms processing large datasets. Features interactive 3D nodes.',
                },
                p2: {
                    title: 'Secure Crypto Wallet',
                    desc: 'Encrypted decentralized application for asset management with biometric authentication protocols.',
                },
                p3: {
                    title: 'Smart City Interface',
                    desc: 'Urban monitoring dashboard for tracking traffic flow, energy consumption, and emergency response times.',
                },
                p4: {
                    title: 'Observability Pipeline',
                    desc: 'Distributed tracing and log aggregation for high-throughput services with anomaly alerts.',
                },
                p5: {
                    title: 'Design System Kit',
                    desc: 'Token-driven component library with accessibility audits and documentation as code.',
                },
                p6: {
                    title: 'Edge API Gateway',
                    desc: 'Rate limiting, auth, and routing layer for microservices with zero-downtime deploy hooks.',
                },
            },
            contact: {
                title: 'Establish Uplink',
                metaEnc: 'ENCRYPTION: ENABLED',
                metaChan: 'CHANNEL: SECURE',
                labelEmail: 'Primary Frequency (Email)',
                labelLoc: 'Signal Source (Location)',
                labelSocial: 'Social Nodes',
                location: 'Shanghai [31.2304° N, 121.4737° E]',
                disclaimerHtml:
                    'CAUTION: ALL COMMUNICATIONS ARE MONITORED.<br>UNAUTHORIZED ACCESS ATTEMPTS WILL BE LOGGED.<br>SYSTEM ID: 9283-XJ-22',
            },
            form: {
                labelName: 'Identity',
                labelCoord: 'Coordinates / Email',
                labelMsg: 'Transmission Content',
                phName: 'ENTER NAME',
                phCoord: 'ENTER CONTACT INFO',
                phMsg: 'ENTER MESSAGE',
                submit: 'Transmit Data',
            },
            footer: {
                line1: 'SAMARITAN SYSTEM UI v4.0.2 // DESIGNED BY ASSET_314159',
                line2: '© 2026 ALL RIGHTS RESERVED. SURVEILLANCE ACTIVE.',
            },
            casePage: {
                back: '← Return to case files',
                meta: 'FILE_STATUS: DECRYPTED',
            },
            caseDetail: {
                p1: {
                    record: '#001_ALPHA',
                    image: 'https://picsum.photos/id/29/1200/675',
                    tech: ['WEBGL', 'PYTHON', 'D3.JS'],
                    bodyHtml:
                        '<p>Interactive WebGL canvas streams tensor activations as a navigable 3D graph. Custom shaders highlight convergence paths while D3 bridges 2D legend and time sliders.</p><p>Python workers preprocess batches on the server; the client focuses on frame pacing and GPU-friendly buffers for datasets up to tens of millions of points.</p>',
                },
                p2: {
                    record: '#002_BETA',
                    image: 'https://picsum.photos/id/48/1200/675',
                    tech: ['REACT', 'SOLIDITY', 'RUST'],
                    bodyHtml:
                        '<p>Non-custodial flow built around account abstraction and hardware-backed keys. React shell orchestrates signing requests with clear risk states before any chain interaction.</p><p>Solidity modules enforce upgradeable but audited patterns; a Rust sidecar handles performance-critical crypto and proof verification off the hot path.</p>',
                },
                p3: {
                    record: '#003_GAMMA',
                    image: 'https://picsum.photos/id/180/1200/675',
                    tech: ['VUE', 'NODE.JS', 'IOT'],
                    bodyHtml:
                        '<p>City ops dashboard aggregates telemetry from traffic loops, substations, and incident tickets into a single dark-mode command surface tuned for 24/7 rooms.</p><p>Node ingestion layers normalize vendor-specific feeds; Vue components prioritize scan-friendly density and keyboard-first drill-down for operators.</p>',
                },
                p4: {
                    record: '#004_DELTA',
                    image: 'https://picsum.photos/id/96/1200/675',
                    tech: ['GO', 'KAFKA', 'GRAFANA'],
                    bodyHtml:
                        '<p>Trace IDs propagate from edge proxies through async workers; Kafka retains ordered spans for replay when SLO burn rates spike.</p><p>Go services expose RED metrics with low-cardinality labels. Grafana boards encode runbook links next to each panel to shorten incident response.</p>',
                },
                p5: {
                    record: '#005_EPSILON',
                    image: 'https://picsum.photos/id/24/1200/675',
                    tech: ['REACT', 'STORYBOOK', 'TOKENS'],
                    bodyHtml:
                        '<p>Design tokens drive color, type, and spacing across web surfaces. Storybook documents every state including error and loading with visual regression gates in CI.</p><p>Components ship with accessibility notes and prop tables generated from TypeScript so designers and engineers share one contract.</p>',
                },
                p6: {
                    record: '#006_ZETA',
                    image: 'https://picsum.photos/id/52/1200/675',
                    tech: ['NGINX', 'JWT', 'K8S'],
                    bodyHtml:
                        '<p>Edge gateway terminates TLS, enforces JWT scopes, and applies per-tenant rate limits before traffic hits mesh services.</p><p>Kubernetes rollouts use readiness probes tied to config propagation so new routes never receive traffic until backends acknowledge the latest policy bundle.</p>',
                },
            },
        },
        zh: {
            nav: {
                about: '关于',
                work: '作品',
                contact: '联系',
                menuOpen: '打开主菜单',
                menuClose: '关闭主菜单',
                langAria: '切换语言',
            },
            hero: {
                statusHtml: '系统状态：<span>在线</span>',
                bio: '驻第四扇区的全栈开发者与 UI 工程师。专注安全架构、数据可视化与极简数字体验。当前持续监测网络异常。',
                modulesHtml:
                    '&gt; 正在访问档案...<br>&gt; 加载模块：[REACT] [THREE.JS] [PYTHON] [TENSORFLOW]',
                modulesTypewriter:
                    '> 正在访问档案...\n> 加载模块：[REACT] [THREE.JS] [PYTHON] [TENSORFLOW]',
            },
            work: {
                title: '案例卷宗',
                metaRecords: '总记录数：006',
                metaClass: '密级：公开',
                p1: {
                    title: '神经网络可视化',
                    desc: '大规模数据集上机器学习算法的实时可视化，含可交互 3D 节点。',
                },
                p2: {
                    title: '加密数字钱包',
                    desc: '去中心化资产管理应用，支持生物特征认证协议。',
                },
                p3: {
                    title: '智慧城市界面',
                    desc: '城市运行监控面板：交通流、能耗与应急响应时间。',
                },
                p4: {
                    title: '可观测性流水线',
                    desc: '面向高吞吐服务的分布式追踪与日志聚合，含异常告警。',
                },
                p5: {
                    title: '设计系统套件',
                    desc: '基于 Design Token 的组件库，配套无障碍审计与文档即代码。',
                },
                p6: {
                    title: '边缘 API 网关',
                    desc: '微服务的限流、鉴权与路由层，支持零停机部署钩子。',
                },
            },
            contact: {
                title: '建立上行链路',
                metaEnc: '加密：已启用',
                metaChan: '信道：安全',
                labelEmail: '主频率（邮箱）',
                labelLoc: '信号源（位置）',
                labelSocial: '社交节点',
                location: '上海 [31.2304° N, 121.4737° E]',
                disclaimerHtml:
                    '注意：所有通讯均受监控。<br>未授权访问尝试将被记录。<br>系统编号：9283-XJ-22',
            },
            form: {
                labelName: '身份标识',
                labelCoord: '坐标 / 邮箱',
                labelMsg: '传输内容',
                phName: '输入姓名',
                phCoord: '输入联系方式',
                phMsg: '输入消息',
                submit: '发送数据',
            },
            footer: {
                line1: 'SAMARITAN SYSTEM UI v4.0.2 // 设计资产 ASSET_314159',
                line2: '© 2026 保留所有权利。监控运行中。',
            },
            casePage: {
                back: '← 返回案例卷宗',
                meta: '档案状态：已解密',
            },
            caseDetail: {
                p1: {
                    record: '#001_ALPHA',
                    image: 'https://picsum.photos/id/29/1200/675',
                    tech: ['WEBGL', 'PYTHON', 'D3.JS'],
                    bodyHtml:
                        '<p>WebGL 画布将张量激活渲染为可漫游的 3D 图；自定义着色器标出收敛路径，D3 负责二维图例与时间轴联动。</p><p>Python 在服务端做批处理；客户端专注帧率与 GPU 友好缓冲，以支撑数千万级点的交互浏览。</p>',
                },
                p2: {
                    record: '#002_BETA',
                    image: 'https://picsum.photos/id/48/1200/675',
                    tech: ['REACT', 'SOLIDITY', 'RUST'],
                    bodyHtml:
                        '<p>非托管流程围绕账户抽象与硬件级密钥构建；React 壳层在每次上链前展示清晰的风险状态与签名意图。</p><p>Solidity 采用可升级且已审计模式；Rust 侧车承担性能敏感的密码运算与证明校验，避免阻塞主路径。</p>',
                },
                p3: {
                    record: '#003_GAMMA',
                    image: 'https://picsum.photos/id/180/1200/675',
                    tech: ['VUE', 'NODE.JS', 'IOT'],
                    bodyHtml:
                        '<p>城市运行面板汇聚环路交通、变电站与工单遥测，深色界面针对 7×24 指挥中心阅读优化。</p><p>Node 接入层归一化不同厂商数据流；Vue 组件强调信息密度与键盘优先的下钻，便于值班员快速定位。</p>',
                },
                p4: {
                    record: '#004_DELTA',
                    image: 'https://picsum.photos/id/96/1200/675',
                    tech: ['GO', 'KAFKA', 'GRAFANA'],
                    bodyHtml:
                        '<p>Trace ID 从边缘代理贯穿异步 Worker；Kafka 按序保留 Span，便于在 SLO 燃尽时回放。</p><p>Go 服务暴露低基数 RED 指标；Grafana 看板在面板旁嵌入运行手册链接，缩短故障处理时间。</p>',
                },
                p5: {
                    record: '#005_EPSILON',
                    image: 'https://picsum.photos/id/24/1200/675',
                    tech: ['REACT', 'STORYBOOK', 'TOKENS'],
                    bodyHtml:
                        '<p>Design Token 驱动 Web 端色彩、排版与间距；Storybook 记录含错误态、加载态在内的全部状态，并在 CI 做视觉回归。</p><p>组件附带无障碍说明与由 TypeScript 生成的属性表，设计与工程共用同一份契约。</p>',
                },
                p6: {
                    record: '#006_ZETA',
                    image: 'https://picsum.photos/id/52/1200/675',
                    tech: ['NGINX', 'JWT', 'K8S'],
                    bodyHtml:
                        '<p>边缘网关终结 TLS、校验 JWT 权限，并在流量进入网格服务前按租户限流。</p><p>K8s 滚动发布将就绪探针与配置下发绑定，只有后端确认最新策略包后新路由才接流。</p>',
                },
            },
        },
    };

    function getByPath(obj, path) {
        return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
    }

    function getStoredLocale() {
        try {
            const v = localStorage.getItem(STORAGE_KEY);
            if (v === 'zh' || v === 'en') return v;
        } catch (e) {}
        return 'en';
    }

    function setStoredLocale(locale) {
        try {
            localStorage.setItem(STORAGE_KEY, locale);
        } catch (e) {}
    }

    function applyLocale(locale) {
        if (locale !== 'en' && locale !== 'zh') locale = 'en';
        document.documentElement.lang = locale === 'zh' ? 'zh-Hans' : 'en';
        setStoredLocale(locale);

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            const val = getByPath(STRINGS[locale], key);
            if (val != null) el.textContent = val;
        });

        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const key = el.getAttribute('data-i18n-html');
            const val = getByPath(STRINGS[locale], key);
            if (val != null) el.innerHTML = val;
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            const val = getByPath(STRINGS[locale], key);
            if (val != null) el.setAttribute('placeholder', val);
        });

        const menuToggle = document.querySelector('.menu-toggle');
        if (menuToggle) {
            const open = document.body.classList.contains('nav-open');
            menuToggle.setAttribute(
                'aria-label',
                open ? STRINGS[locale].nav.menuClose : STRINGS[locale].nav.menuOpen
            );
        }

        const langBtn = document.querySelector('.lang-toggle');
        if (langBtn) {
            langBtn.setAttribute('aria-label', STRINGS[locale].nav.langAria);
            langBtn.setAttribute('title', STRINGS[locale].nav.langAria);
        }

        window.dispatchEvent(new CustomEvent('localeapplied', { detail: { locale } }));
    }

    function toggleLocale() {
        const next = getStoredLocale() === 'en' ? 'zh' : 'en';
        applyLocale(next);
        return next;
    }

    window.PortfolioI18n = {
        applyLocale,
        toggleLocale,
        getLocale: getStoredLocale,
        STRINGS,
    };
})();

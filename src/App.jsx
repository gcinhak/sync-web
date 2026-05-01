import { useEffect, useRef } from 'react';
import './index.css';

/* ── Custom cursor ── */
function Cursor() {
    const dot = useRef(null);
    const ring = useRef(null);
    useEffect(() => {
        let mx = 0,
            my = 0,
            rx = 0,
            ry = 0;
        const move = (e) => {
            mx = e.clientX;
            my = e.clientY;
            dot.current.style.left = mx + 'px';
            dot.current.style.top = my + 'px';
        };
        const tick = () => {
            rx += (mx - rx) * 0.13;
            ry += (my - ry) * 0.13;
            ring.current.style.left = rx + 'px';
            ring.current.style.top = ry + 'px';
            requestAnimationFrame(tick);
        };
        const enter = () => ring.current.classList.add('expand');
        const leave = () => ring.current.classList.remove('expand');
        document.addEventListener('mousemove', move);
        document.querySelectorAll('a,button').forEach((el) => {
            el.addEventListener('mouseenter', enter);
            el.addEventListener('mouseleave', leave);
        });
        requestAnimationFrame(tick);
    }, []);
    return (
        <>
            <div className="cursor-dot" ref={dot} />
            <div className="cursor-ring" ref={ring} />
        </>
    );
}

/* ── Scroll reveal ── */
function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll('.reveal, .tl-item');
        const obs = new IntersectionObserver(
            (entries) =>
                entries.forEach((e) => {
                    if (e.isIntersecting) e.target.classList.add('in');
                }),
            { threshold: 0.12 }
        );
        els.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);
}

/* ── Blob SVG for hero ── */
function HeroBlobs() {
    return (
        <svg
            className="blobs-layer"
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Bottom-left pink/magenta sweep */}
            <path
                d="M -80 820 C 40 700 180 750 280 830 C 380 910 440 980 260 980 C 80 980 -160 940 -80 820Z"
                fill="#FF1EA0"
                opacity="0.85"
            />
            <path
                d="M -60 870 C 80 780 240 800 320 890 C 400 980 240 1020 80 990 C -80 960 -140 960 -60 870Z"
                fill="#FF52B8"
                opacity="0.6"
            />

            {/* Top-left white sweep */}
            <path
                d="M -100 -30 C 60 50 90 240 -20 350 C -130 460 -220 270 -200 100 C -180 -70 -100 -30 -100 -30Z"
                fill="#FFFFFF"
                opacity="0.82"
            />
            <path
                d="M -130 0 C 20 80 50 200 -50 280 C -150 360 -230 250 -220 110 C -210 -30 -130 0 -130 0Z"
                fill="#F0E8FF"
                opacity="0.55"
            />

            {/* Right-side magenta blob */}
            <path
                d="M 1340 350 C 1450 300 1520 430 1490 560 C 1460 690 1360 710 1310 610 C 1260 510 1240 410 1340 350Z"
                fill="#E020C0"
                opacity="0.65"
            />

            {/* Floating coral blobs */}
            <ellipse cx="1150" cy="100" rx="70" ry="55" fill="#FF7A90" opacity="0.8" transform="rotate(-20 1150 100)" />
            <path
                d="M 1100 60 C 1140 20 1200 35 1215 80 C 1230 125 1195 150 1155 138 C 1115 126 1065 100 1100 60Z"
                fill="#FF9AB0"
                opacity="0.75"
            />

            <ellipse cx="310" cy="210" rx="52" ry="43" fill="#FF85A0" opacity="0.72" transform="rotate(15 310 210)" />
            <ellipse cx="200" cy="320" rx="34" ry="28" fill="#FFB0C0" opacity="0.62" />

            <ellipse
                cx="1300"
                cy="600"
                rx="46"
                ry="36"
                fill="#FF7090"
                opacity="0.78"
                transform="rotate(-10 1300 600)"
            />
            <ellipse cx="110" cy="560" rx="40" ry="32" fill="#FF90A8" opacity="0.68" transform="rotate(25 110 560)" />
            <ellipse cx="1360" cy="820" rx="32" ry="25" fill="#FF6088" opacity="0.72" />

            {/* Purple/lavender */}
            <ellipse cx="980" cy="175" rx="44" ry="34" fill="#C87AE8" opacity="0.68" transform="rotate(30 980 175)" />
            <path
                d="M 360 490 C 395 455 440 475 432 515 C 424 555 378 562 356 535 C 334 508 325 525 360 490Z"
                fill="#B870E0"
                opacity="0.72"
            />
            <ellipse
                cx="1100"
                cy="780"
                rx="55"
                ry="42"
                fill="#9050CC"
                opacity="0.62"
                transform="rotate(-15 1100 780)"
            />
            <ellipse cx="160" cy="680" rx="36" ry="28" fill="#C090E8" opacity="0.58" />

            {/* Green shoe hero element */}
            <ellipse cx="440" cy="820" rx="110" ry="68" fill="#3DC42A" opacity="0.9" transform="rotate(-12 440 820)" />
            <ellipse cx="442" cy="806" rx="90" ry="50" fill="#5AE040" opacity="0.85" transform="rotate(-12 442 806)" />
            <ellipse cx="448" cy="858" rx="116" ry="28" fill="#FF8C00" opacity="0.95" transform="rotate(-12 448 858)" />
            <ellipse cx="454" cy="870" rx="110" ry="20" fill="#FFFFFF" opacity="0.88" transform="rotate(-12 454 870)" />
            <path d="M 375 818 C 410 792 465 796 484 820 C 470 808 430 814 397 836Z" fill="#1A1A1A" opacity="0.88" />
            <path d="M 410 790 C 424 770 438 774 432 786 C 426 798 408 803 410 790Z" fill="#FFFFFF" opacity="0.9" />
            <path d="M 436 783 C 452 763 466 768 460 780 C 454 792 434 797 436 783Z" fill="#FFFFFF" opacity="0.85" />
            <path d="M 487 812 C 500 796 520 802 516 818 C 512 834 492 838 486 824Z" fill="#FFDD00" opacity="0.95" />

            {/* Dot clusters */}
            <circle cx="760" cy="240" r="7" fill="#FF85A0" opacity="0.78" />
            <circle cx="780" cy="258" r="5" fill="#FF85A0" opacity="0.58" />
            <circle cx="745" cy="265" r="4" fill="#FFB0C0" opacity="0.68" />
            <circle cx="765" cy="278" r="3" fill="#FF85A0" opacity="0.48" />

            <circle cx="1060" cy="490" r="6" fill="#C87AE8" opacity="0.68" />
            <circle cx="1076" cy="504" r="4" fill="#B870E0" opacity="0.52" />
            <circle cx="1048" cy="512" r="3.5" fill="#C87AE8" opacity="0.62" />

            <circle cx="285" cy="648" r="5.5" fill="#FF90A8" opacity="0.62" />
            <circle cx="302" cy="634" r="3.5" fill="#FFB0C0" opacity="0.52" />

            {/* Running figure */}
            <g transform="translate(920, 260) rotate(-5)">
                {/* Blue hair */}
                <path
                    d="M 18 -42 C 35 -55 70 -50 80 -20 C 85 -5 78 5 70 8"
                    stroke="#0066FF"
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
                />
                <path
                    d="M 70 8 C 65 18 60 30 55 50"
                    stroke="#0055EE"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                />
                {/* Head */}
                <circle cx="22" cy="-48" r="18" fill="#F5C5A0" />
                {/* Sports top */}
                <path d="M 5 -28 C 5 -28 -8 -5 -6 20 L 38 20 C 40 -5 28 -28 28 -28Z" fill="#22AA22" />
                <text
                    x="16"
                    y="5"
                    textAnchor="middle"
                    fontFamily="'Bebas Neue',sans-serif"
                    fontSize="7"
                    fontWeight="900"
                    fill="#AAFF00"
                    letterSpacing="0.5"
                >
                    SYNC
                </text>
                {/* Arms */}
                <path
                    d="M 5 -18 C -15 -8 -25 5 -20 18"
                    stroke="#1A1A1A"
                    strokeWidth="7"
                    fill="none"
                    strokeLinecap="round"
                />
                <path
                    d="M 28 -18 C 42 -5 48 8 44 20"
                    stroke="#1A1A1A"
                    strokeWidth="7"
                    fill="none"
                    strokeLinecap="round"
                />
                {/* Legs */}
                <path d="M -6 20 C -12 50 -18 80 -20 110 L -6 110 C -2 80 4 50 8 20Z" fill="#1A1A1A" />
                <path d="M 38 20 C 44 50 46 80 44 110 L 30 110 C 28 80 26 50 22 20Z" fill="#1A1A1A" />
                <line x1="-6" y1="20" x2="-18" y2="110" stroke="#9932CC" strokeWidth="2.5" />
                <line x1="38" y1="20" x2="44" y2="110" stroke="#9932CC" strokeWidth="2.5" />
                <path
                    d="M -6 110 C -20 130 -38 138 -50 132"
                    stroke="#1A1A1A"
                    strokeWidth="9"
                    fill="none"
                    strokeLinecap="round"
                />
                <path
                    d="M 44 110 C 50 138 45 155 35 162"
                    stroke="#1A1A1A"
                    strokeWidth="9"
                    fill="none"
                    strokeLinecap="round"
                />
                <ellipse cx="-52" cy="134" rx="14" ry="8" fill="#3DC42A" transform="rotate(-20 -52 134)" />
                <ellipse cx="33" cy="165" rx="14" ry="8" fill="#3DC42A" transform="rotate(10 33 165)" />
                {/* Motion lines */}
                <line
                    x1="-75"
                    y1="60"
                    x2="-48"
                    y2="58"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.65"
                />
                <line
                    x1="-80"
                    y1="74"
                    x2="-52"
                    y2="72"
                    stroke="#FFFFFF"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    opacity="0.45"
                />
                <line
                    x1="-73"
                    y1="88"
                    x2="-48"
                    y2="86"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.38"
                />
            </g>
        </svg>
    );
}

const TICKERS = [
    '웹 개발',
    '알고리즘',
    '해커톤',
    'AI / ML',
    '앱 개발',
    '오픈소스',
    '코드 리뷰',
    '팀 프로젝트',
    '스터디',
    '포트폴리오',
];

const ACTS = [
    {
        icon: '⚡',
        num: '01',
        title: '주간 스터디',
        desc: '매주 정기 모임을 통해 알고리즘, 자료구조, 최신 기술 트렌드를 함께 공부합니다.',
        tags: ['Python', 'JS', 'CS 기초'],
    },
    {
        icon: '🚀',
        num: '02',
        title: '팀 프로젝트',
        desc: '아이디어 기획부터 배포까지, 실제로 동작하는 서비스를 만들어보는 팀 프로젝트를 진행합니다.',
        tags: ['React', 'Node', 'Firebase'],
    },
    {
        icon: '🏆',
        num: '03',
        title: '해커톤 & 대회',
        desc: '교내외 해커톤 및 공모전에 팀을 이뤄 참가합니다. 경쟁이 아닌 성장을 위한 도전입니다.',
        tags: ['해커톤', '공모전', '팀워크'],
    },
    {
        icon: '🧠',
        num: '04',
        title: 'AI / 머신러닝',
        desc: 'ChatGPT부터 직접 모델 학습까지. AI 시대를 살아갈 실용적인 AI 활용 능력을 키워드립니다.',
        tags: ['PyTorch', 'OpenAI API', 'LLM'],
    },
    {
        icon: '🌐',
        num: '05',
        title: '웹/앱 개발',
        desc: '프론트엔드, 백엔드, 앱 개발까지. 선배들의 경험을 토대로 실무 스킬을 빠르게 습득하세요.',
        tags: ['React', 'Flutter', 'REST API'],
    },
    {
        icon: '💬',
        num: '06',
        title: '코드 리뷰 & 멘토링',
        desc: '선배 부원들의 1:1 코드 리뷰와 멘토링을 통해 더 나은 코드를 작성하는 방법을 배웁니다.',
        tags: ['Git', 'Clean Code', '멘토링'],
    },
];

const STATS = [
    { val: '3+', label: '활동 연도' },
    { val: '40+', label: '누적 부원' },
    { val: '12+', label: '완성 프로젝트' },
    { val: '5+', label: '수상 경력' },
];

const TL = [
    {
        date: '2026. 02',
        title: 'SYNC 창립',
        desc: '9명의 창립 멤버와 함께 정규 코딩 동아리로 출발했습니다.',
    },
    { date: '2026. 04', title: '첫 웹 서비스 출시', desc: 'MASL 웹 서비스를 출시했습니다.' },
    { date: '2026. 05', title: '체육축제 웹 서비스 출시', desc: '체육축제를 위한 웹 서비스를 출시했습니다.' },
    {
        date: '2026. 11',
        title: '전국 고등학교 동아리 소프트웨어 경진대회 금상',
        desc: '전국 규모 공모전에서 금상을 수상하며 SYNC의 이름을 알렸습니다.',
    },
    {
        date: '2027. 02',
        title: '국제 해커톤 최우수상',
        desc: '국제 해커톤에서 최우수상을 수상하며 SYNC의 이름을 세상에 알렸습니다.',
    },
    {
        date: '2027. 03',
        title: '신입 부원 모집',
        desc: '열정 있는 신입 부원을 모집합니다. 여러분의 도전을 기다립니다!',
    },
];

export default function App() {
    useReveal();

    return (
        <>
            <Cursor />

            {/* NAV */}
            <nav>
                <a href="#" className="nav-logo">
                    SYNC
                </a>
                <ul className="nav-links">
                    <li>
                        <a href="#about">소개</a>
                    </li>
                    <li>
                        <a href="#activities">활동</a>
                    </li>
                    <li>
                        <a href="#history">연혁</a>
                    </li>
                    <li>
                        <a href="#recruit">지원</a>
                    </li>
                </ul>
                <a href="#recruit" className="nav-apply">
                    지원하기
                </a>
            </nav>

            {/* HERO */}
            <section className="hero">
                <div className="hero-bg" />
                <HeroBlobs />
                <div className="grain" />
                <div className="hero-content">
                    <div className="hero-eyebrow">
                        <span className="eyebrow-dot" />
                        2025 신입 부원 모집 중
                    </div>
                    <h1 className="hero-title">SYNC</h1>
                    <p className="hero-sub">
                        코드로 세상과 연결되다.
                        <br />
                        함께 배우고, 만들고, 성장하는
                        <br />
                        <strong>코딩동아리 SYNC</strong>에 오신 것을 환영합니다.
                    </p>
                    <div className="hero-btns">
                        <a href="#recruit" className="btn-main">
                            지원서 작성하기
                        </a>
                        <a href="#activities" className="btn-ghost">
                            활동 살펴보기
                        </a>
                    </div>
                </div>
                <div className="scroll-cue">
                    <div className="scroll-line" />
                    <span>scroll</span>
                </div>
            </section>

            {/* TICKER */}
            <div className="ticker-wrap">
                <div className="ticker-inner">
                    {[...TICKERS, ...TICKERS].map((t, i) => (
                        <span className="tick-item" key={i}>
                            <span className="tick-dot">◆</span>
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            {/* ABOUT */}
            <section className="about-section" id="about">
                <div className="section-inner">
                    <div className="about-grid">
                        <div className="about-text">
                            <p className="label-tag reveal">ABOUT SYNC</p>
                            <h2 className="sec-title reveal d1">
                                코딩이 <em>취미</em>에서
                                <br />
                                <em>실력</em>이 되는 곳
                            </h2>
                            <div className="sec-body reveal d2">
                                <p>
                                    Sync는 <strong>"코드로 세상과 연결된다"</strong>는 철학으로 만들어진 코딩
                                    동아리입니다. 단순히 프로그래밍을 배우는 것을 넘어, 실제로 동작하는 서비스를 만들고
                                    팀으로 협업하는 경험을 쌓는 것을 목표로 합니다.
                                </p>
                                <p>
                                    초보자도 환영합니다. 처음 코딩을 시작하는 학생부터 심화 알고리즘을 공부하는
                                    학생까지, 모든 레벨의 부원이 함께 성장할 수 있는 커리큘럼을 운영합니다.
                                </p>
                                <p>세상과 SYNC하세요. 여러분의 아이디어가 현실이 되는 경험, SYNC에서 시작합니다.</p>
                            </div>
                        </div>
                        <div className="reveal d3">
                            <div className="about-nums">
                                {STATS.map((s, i) => (
                                    <div className="num-cell" key={i}>
                                        <div className="num-val">{s.val}</div>
                                        <div className="num-label">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ACTIVITIES */}
            <section className="activities-section" id="activities">
                <div className="section-inner">
                    <p className="label-tag reveal">ACTIVITIES</p>
                    <h2 className="sec-title reveal d1">
                        무엇을 <em>배우고</em> 무엇을 <em>만드나요?</em>
                    </h2>
                    <p className="sec-body reveal d2" style={{ maxWidth: '540px' }}>
                        Sync에서는 단순한 이론 공부를 넘어 실제로 동작하는 무언가를 만들어냅니다.
                    </p>
                    <div className="act-grid">
                        {ACTS.map((a, i) => (
                            <div className={`act-card reveal d${(i % 3) + 1}`} key={i}>
                                <span className="act-num">{a.num}</span>
                                <span className="act-icon">{a.icon}</span>
                                <h3>{a.title}</h3>
                                <p>{a.desc}</p>
                                <div className="act-tags">
                                    {a.tags.map((t, j) => (
                                        <span className="act-tag" key={j}>
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HISTORY */}
            <section className="history-section" id="history">
                <div className="section-inner">
                    <div className="history-grid">
                        <div>
                            <p className="label-tag reveal">HISTORY</p>
                            <h2 className="sec-title reveal d1">
                                우리가 걸어온
                                <br />
                                <em>발자취</em>
                            </h2>
                            <p className="sec-body reveal d2" style={{ marginTop: '1.25rem' }}>
                                작은 시작에서 출발해 꾸준히 성장해온 SYNC의 역사입니다.
                                <br />
                                앞으로의 이야기는 여러분과 함께 써 내려갈 것입니다.
                            </p>
                        </div>
                        <div className="timeline">
                            {TL.map((item, i) => (
                                <div className="tl-item" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                                    <div className="tl-dot" />
                                    <div className="tl-date">{item.date}</div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* RECRUIT */}
            <section className="recruit-section" id="recruit">
                <div className="grain" style={{ opacity: 0.09 }} />
                <div className="ring" style={{ width: '500px', height: '500px' }} />
                <div className="ring" style={{ width: '800px', height: '800px' }} />
                <div className="ring" style={{ width: '1100px', height: '1100px' }} />
                <div className="recruit-inner">
                    <p className="label-tag reveal" style={{ justifyContent: 'center' }}>
                        RECRUIT 2027
                    </p>
                    <h2 className="recruit-title reveal d1">
                        코드로
                        <br />
                        세상과 <em>SYNC</em>
                        <br />할 준비가 됐나요?
                    </h2>
                    <p className="recruit-desc reveal d2">
                        전공 지식보다 열정이 중요합니다.
                        <br />
                        코딩에 관심 있는 누구든 지원할 수 있습니다.
                    </p>
                    <div className="reveal d3">
                        <a href="#" className="recruit-btn">
                            지원서 작성하기
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                    <div className="recruit-meta reveal d4">
                        <span>📅 모집 기간: 2027. 03. 03 ~ 03. 14</span>
                        <span>📍 신암관 314호 지능형과학실</span>
                        <span>✉️ inhak@gvcs-mg.org</span>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer>
                <div className="footer-logo">
                    SYNC<em>.</em>
                </div>
                <ul className="footer-links">
                    <li>
                        <a href="#about">소개</a>
                    </li>
                    <li>
                        <a href="#activities">활동</a>
                    </li>
                    <li>
                        <a href="#history">연혁</a>
                    </li>
                    <li>
                        <a href="#recruit">지원</a>
                    </li>
                </ul>
                <p className="footer-copy">© 2026 Sync Coding Club. All rights reserved.</p>
            </footer>
        </>
    );
}

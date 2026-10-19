import { useState } from 'react';
import './index.css';

const ideas = [
  { caption: '호기심부터 시작해요.', pattern: ['0010100', '0111110', '1101011', '1111111', '0111110', '0010100', '0100010'] },
  { caption: '좋아하는 걸 같이 만들어요.', pattern: ['0110110', '1111111', '1111111', '0111110', '0011100', '0001000', '0000000'] },
  { caption: '오늘의 버그, 내일의 실력.', pattern: ['0011100', '0111110', '1101011', '1111111', '0101010', '0101010', '1000001'] },
  { caption: '다음 아이디어는 당신 차례.', pattern: ['0001000', '0101010', '0011100', '1111111', '0011100', '0101010', '0001000'] },
];

const activities = [
  { number: '01', title: 'LEARN & SHARE', subtitle: '스터디 · 알고리즘 · 리뷰와 멘토링', description: '혼자서는 어려웠던 개념도 함께라면 조금 더 쉽게. 서로의 코드를 읽고 설명하며 단단하게 기초를 쌓습니다.' },
  { number: '02', title: 'MAKE IT REAL', subtitle: '웹과 앱 개발 · 팀 프로젝트', description: '“이런 게 있으면 좋겠다”에서 실제 서비스까지. 기획, 디자인, 개발을 연결하며 우리의 아이디어를 직접 만듭니다.' },
  { number: '03', title: 'GO OFF SCRIPT', subtitle: '해커톤 · AI · 새로운 기술 실험', description: '익숙한 방법을 벗어나 새로운 도구를 만나고, 작은 실험을 시작합니다. 엉뚱한 아이디어도 일단 실행해 보는 거예요.' },
];

function CodingExperiment() {
  const [ideaIndex, setIdeaIndex] = useState(0);
  const idea = ideas[ideaIndex];

  return (
    <div className="playground" aria-label="아이디어를 바꿔 보는 작은 코딩 실험실">
      <div className="window-bar"><span className="mono">hello_sync.js</span><span className="window-dots" aria-hidden="true"><i /><i /><i /></span></div>
      <div className="window-body">
        <div className="code-pane" aria-hidden="true">
          <pre><span className="linen">01</span>{'const club = {'}<br /><span className="linen">02</span>{'  name: '}<b>"SYNC"</b>,<br /><span className="linen">03</span>{'  ideas: Infinity,'}<br /><span className="linen">04</span>{'  together: true'}<br /><span className="linen">05</span>{'};'}<br /><span className="linen">06</span><br /><span className="linen">07</span>render(<b>newIdea()</b>);</pre>
        </div>
        <div className="pixel-stage" aria-hidden="true">
          <div className="pixel-grid" id="pixel-grid">
            {Array.from(idea.pattern.join(''), (value, cell) => <span key={cell} className={value === '1' ? ((cell + ideaIndex) % 8 === 0 ? 'pink' : 'filled') : undefined} />)}
          </div>
          <span className="pixel-cursor mono">you &amp; us</span>
        </div>
      </div>
      <div className="window-footer">
        <button className="run" type="button" id="remix" onClick={() => setIdeaIndex(index => (index + 1) % ideas.length)}><span className="run-icon" aria-hidden="true">↻</span> NEW IDEA</button>
        <span className="play-status" id="play-status" role="status" aria-atomic="true">{idea.caption}</span>
      </div>
    </div>
  );
}

function Activities() {
  return (
    <section className="section wrap" id="about" aria-labelledby="about-title">
      <div className="section-label mono"><span>01 / HOW WE PLAY</span><span>LEARNING IS A TEAM SPORT.</span></div>
      <div className="section-head">
        <h2 id="about-title">TRY. BUILD.<br /><span className="thin-box">TRY AGAIN.</span></h2>
        <p>처음부터 잘할 필요는 없어요. 막히면 같이 고민하고, 새로 알게 된 건 아낌없이 공유합니다. SYNC에서는 시도하는 모든 과정이 우리의 다음 실력이 됩니다.</p>
      </div>
      <div className="activity-list">
        {activities.map(activity => <article className="activity" key={activity.number}><span className="activity-num mono">{activity.number}</span><h3>{activity.title}<span>{activity.subtitle}</span></h3><p>{activity.description}</p></article>)}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section work-section wrap" id="work" aria-labelledby="work-title">
      <div className="section-label mono"><span>02 / THINGS WE MADE</span><span>FROM “WHAT IF” TO “IT WORKS.”</span></div>
      <div className="section-head"><h2 id="work-title">IDEAS OUT.<br />CODE ON.</h2><p>우리가 만드는 건 화면 속 코드에 그치지 않습니다.<br />학교에서 만나고, 사용하고, 함께 즐기는 경험으로 이어집니다.</p></div>
      <div className="projects">
        <article className="project">
          <div className="project-art masl-art" aria-hidden="true"><div className="masl-lines" /><div className="art-top mono"><span>SYNC / PROJECT 01</span><span>WEB SERVICE</span></div><div className="masl-logo">MASL</div><div className="art-bottom"><span className="mono">AN IDEA.<br />NOW ONLINE.</span><span className="mini-code">&lt;build&gt;<br />&nbsp;&nbsp;something useful<br />&lt;/build&gt;</span></div></div>
          <div className="project-caption"><div><h3>MASL 웹서비스</h3><p>아이디어를 실제 웹서비스로 연결한 팀 프로젝트.</p></div><time className="project-date mono" dateTime="2026-04">2026.04<br />WEB SERVICE</time></div>
        </article>
        <article className="project">
          <div className="project-art sports-art" aria-hidden="true"><span className="sports-corner mono">SYNC / PROJECT 02</span><div className="sports-orbit" /><div className="sports-orbit second" /><div className="sports-word">PLAY<br /><span>AS ONE.</span></div><span className="sports-star">✳</span></div>
          <div className="project-caption"><div><h3>체육축제 웹서비스</h3><p>학교의 축제를 더 가깝게 연결하는 디지털 경험.</p></div><time className="project-date mono" dateTime="2026-05">2026.05<br />WEB SERVICE</time></div>
        </article>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">본문으로 건너뛰기</a>
      <header className="site-header" id="top">
        <div className="header-inner shell"><a className="brand" href="#top" aria-label="SYNC 처음으로"><span>{'{'}</span> SYNC <span>{'}'}</span></a><span className="header-note mono">A CODING CLUB.<br />A COLLECTIVE OF CURIOUS MINDS.</span><nav className="nav" aria-label="주요 메뉴"><a href="#about">우리의 방식</a><a href="#work">만든 것들</a><a href="#join">함께하기 ↗</a></nav></div>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-meta shell mono"><span>GVCS CODING CLUB / SYNC</span><span>DIFFERENT MINDS. ONE FREQUENCY.</span><span>EST. 2026.02</span></div>
          <div className="masthead shell"><h1 className="hero-word" id="hero-title" aria-label="SYNC"><span className="bracket" aria-hidden="true">{'{'}</span><span className="word"><span>S</span><span className="y">Y</span><span className="n">N</span><span>C</span></span><span className="bracket" aria-hidden="true">{'}'}</span></h1></div>
          <div className="hero-bottom wrap">
            <div className="hero-copy"><h2>코딩을 배우고,<br /><span>재밌는 걸</span> 만듭니다.</h2><p>작은 궁금증이 웹사이트가 되고, 함께 쓴 코드가 학교의 일상을 바꿉니다. 배우는 즐거움을 나누는 GVCS 코딩 동아리, SYNC.</p><a className="text-link" href="#about">우리는 이렇게 놀아요 <span className="arrow" aria-hidden="true">↘</span></a></div>
            <CodingExperiment />
          </div>
        </section>
        <div className="ticker" aria-hidden="true"><span>LESS SCROLL.</span><span className="asterisk">✳</span><span>MORE MAKING.</span><span className="asterisk">✳</span><span>HELLO, POSSIBILITIES.</span><span className="asterisk">✳</span><span>MADE TOGETHER.</span></div>
        <Activities />
        <Projects />
        <section className="join-section wrap" id="join" aria-labelledby="join-title">
          <div className="join-top"><span className="mono">03 / YOUR TURN</span><p>코딩이 처음이어도 괜찮아요.<br />궁금한 마음 하나면, 이미 시작할 준비 완료.</p></div>
          <h2 className="join-title" id="join-title">COME<br /><span>MAKE STUFF.</span></h2>
          <div className="join-bottom"><div className="join-contact"><span className="arrow" aria-hidden="true">↗</span><div><a href="mailto:inhak@gvcs-mg.org">inhak@gvcs-mg.org</a><p>함께하고 싶다면, 편하게 연락해 주세요.</p></div></div><p className="join-location">우리의 아이디어가 만나는 곳<br /><strong>신암관 314호 지능형과학실</strong><br />GVCS 코딩 동아리 SYNC</p></div>
          <footer className="footer mono"><span>© 2026 SYNC — BUILT ON CURIOSITY.</span><a href="#top">BACK TO TOP ↑</a></footer>
        </section>
      </main>
    </>
  );
}

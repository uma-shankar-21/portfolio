import { Reveal } from './Reveal';
import { Icon } from './Icons';

const areas = [
  { n: '01', title: 'LLM applications', copy: 'RAG, AI agents, agentic workflows and MCP integrations built for useful, grounded outcomes.' },
  { n: '02', title: 'Backend systems', copy: 'Microservices and asynchronous execution with FastAPI, Node.js, PostgreSQL and Redis.' },
  { n: '03', title: 'Product interfaces', copy: 'React and TypeScript experiences connected cleanly to the systems behind them.' },
  { n: '04', title: 'Privacy by design', copy: 'PII detection and data anonymization considered throughout AI processing and delivery.' },
];

export function About() {
  return <section className="section-wrap section-block" id="about">
    <Reveal className="section-heading-row"><div><p className="eyebrow">01 / ABOUT</p><h2>Engineering with<br /><span>the whole system in mind.</span></h2></div><p className="section-lede">I work across the AI, backend, and product layers—connecting emerging model capabilities to reliable, useful software.</p></Reveal>
    <div className="about-grid">{areas.map((area, i) => <Reveal key={area.n} delay={i * 70}><article className="about-card"><div className="about-card-top"><span>{area.n}</span><Icon name="arrow" /></div><h3>{area.title}</h3><p>{area.copy}</p></article></Reveal>)}</div>
  </section>;
}

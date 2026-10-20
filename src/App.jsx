import { useEffect, useState } from 'react';
import { profile, projects, jobs, skills, education } from './data.js';

function Hero() {
  const lines = [
    `{`,
    `  "name": "${profile.name}",`,
    `  "role": "${profile.role}",`,
    `  "stack": [${profile.stack.map((s) => `"${s}"`).join(', ')}],`,
    `  "open_to_work": true`,
    `}`,
  ];
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return setShown(lines.length);
    if (shown >= lines.length) return;
    const t = setTimeout(() => setShown((n) => n + 1), 260);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <header className="hero">
      <div className="req" aria-hidden="true">
        <span className="verb">GET</span> /developers/rahul-sharma
      </div>
      <div className="status">
        <span className="ok">200 OK</span>
        <span className="muted">application/json</span>
      </div>
      <pre className="resp" aria-label={`${profile.name}, ${profile.role}`}>
        {lines.slice(0, shown).join('\n')}
        <span className="caret" />
      </pre>
      <p className="lede">{profile.summary}</p>
      <div className="actions">
        <a className="btn primary" href={profile.resume} download>Download resume</a>
        <a className="btn" href={`mailto:${profile.email}`}>Email me</a>
      </div>
    </header>
  );
}

function Projects() {
  return (
    <section id="work">
      <h2>Projects</h2>
      <ul className="rows">
        {projects.map((p) => (
          <li key={p.name} className="row">
            <div>
              <h3>{p.name}</h3>
              <p className="muted">{p.kind}</p>
            </div>
            <div>
              <p>{p.text}</p>
              <p className="tags">{p.tech.join(', ')}</p>
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer">View live site</a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <ol className="timeline">
        {jobs.map((j) => (
          <li key={j.org}>
            <p className="muted">{j.when}</p>
            <h3>{j.title}, {j.org}</h3>
            <p>{j.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <dl className="skills">
        {skills.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <h3 className="sub">Education</h3>
      <p>{education.degree}, {education.school}. {education.detail}.</p>
      <p className="muted">{education.certs.join(' · ')}</p>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact">
      <h2>Contact</h2>
      <p>
        <a href={`mailto:${profile.email}`}>{profile.email}</a><br />
        <a href={`tel:${profile.phone}`}>{profile.phone}</a>
      </p>
      <p>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>{' '}
        <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}

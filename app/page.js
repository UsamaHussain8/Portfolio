import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import Reveal from "@/components/Reveal";

const GITHUB_URL = "https://github.com/UsamaHussain8";
const LINKEDIN_URL = "https://www.linkedin.com/in/usama-hussain-a3855a166";
const EMAIL = "usamahussain00@gmail.com";
const WHATSAPP = "https://wa.me/923113110438";

const skills = [
  "Software Engineering",
  "Backend Development",
  "Desktop Apps",
  "REST APIs",
  "Java",
  "JavaFX",
  "Spring Boot",
  "Python",
  "Django",
  "FastAPI",
  "Pandas",
  "SQL",
  "Machine Learning",
  "RAG",
  "Model Context Protocol (MCP)",
  "Version Control",
  "AI-Assisted Development",
  "Problem Solving",
];

const projects = [
  {
    title: "Fake News Detection",
    description:
      "A fake news detector built with Graph Neural Networks and LSTM. It takes the news content, the profiles of users interacting with it, and their sentiment to classify credibility.",
    tags: ["PyTorch", "TensorFlow", "TensorBoard", "GNN", "LSTM"],
  },
  {
    title: "EasyBuy E-Commerce Platform",
    description:
      "An e-commerce platform that helps users buy and sell second-hand items, with a clean, responsive interface and a robust backend.",
    tags: ["Python", "Django", "PostgreSQL", "Alpine.js", "Tailwind CSS"],
  },
  {
    title: "Finance History Tracker",
    description:
      "A tool that reads bank statements for a month or fiscal year, extracts transactions, and stores them plus a summary in Excel for expense tracking, summarization and monitoring.",
    tags: ["Python", "Pandas", "Excel", "Automation"],
  },
];

// ---- Inline SVG icons ----
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.575.106.785-.25.785-.556 0-.274-.01-1.002-.015-1.967-3.196.695-3.872-1.54-3.872-1.54-.523-1.33-1.277-1.684-1.277-1.684-1.043-.714.08-.699.08-.699 1.153.08 1.76 1.184 1.76 1.184 1.026 1.758 2.693 1.25 3.35.955.104-.743.401-1.25.73-1.538-2.552-.29-5.236-1.276-5.236-5.68 0-1.255.448-2.28 1.183-3.084-.119-.29-.513-1.46.112-3.043 0 0 .966-.31 3.165 1.178a10.98 10.98 0 0 1 2.88-.388c.977.004 1.962.132 2.882.388 2.197-1.488 3.162-1.178 3.162-1.178.627 1.583.233 2.753.114 3.043.737.804 1.182 1.829 1.182 3.084 0 4.415-2.688 5.386-5.248 5.671.413.355.78 1.056.78 2.129 0 1.537-.014 2.776-.014 3.153 0 .309.207.668.79.555A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 5L2 7" />
  </svg>
);

const WhatsappIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <header className="nav">
        <div className="wrap nav-inner">
          <div className="brand">
            Usama<span>.</span>
          </div>
          <div className="nav-right">
            <nav className="nav-links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <Reveal>
            <span className="eyebrow">Backend &amp; AI Engineer</span>
            <h1>
              Hi, I&apos;m <span className="grad">Usama Hussain</span>
              <br />I build products that solve real problems.
            </h1>
            <p className="lead">
              A backend-focused software engineer passionate about creating scalable
              products and building AI workflows, agents and systems. I care about clean
              architecture and turning ideas into things people actually use.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#projects">
                View My Work
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get In Touch
              </a>
              <div className="socials">
                <a className="social-btn" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GithubIcon />
                </a>
                <a className="social-btn" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
                <a className="social-btn" href={`mailto:${EMAIL}`} aria-label="Email">
                  <MailIcon />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="portrait-wrap">
            <Image
              className="portrait"
              src="/my_formalish.png"
              alt="Portrait of Usama Hussain"
              width={280}
              height={280}
              priority
            />
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="wrap">
          <Reveal className="section-head">
            <h2>About Me</h2>
            <div className="bar" />
          </Reveal>
          <div className="about-grid">
            <Reveal as="p">
              I&apos;m a backend-focused software engineer who enjoys building products that
              help solve people&apos;s problems. I&apos;m curious about creating scalable systems and
              designing AI workflows, agents, and Retrieval-Augmented Generation pipelines.
            </Reveal>
            <Reveal as="p" delay={100}>
              When I&apos;m not coding, you&apos;ll find me watching football, tech videos, and anime,
              or diving into documentaries about nature and the crucial chapters of human
              history. Based in Islamabad, always open to interesting problems and
              collaborations.
            </Reveal>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ background: "var(--bg-soft)" }}>
        <div className="wrap">
          <Reveal className="section-head">
            <h2>Skills &amp; Technologies</h2>
            <div className="bar" />
          </Reveal>
          <Reveal className="skills-wrap">
            {skills.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="wrap">
          <Reveal className="section-head">
            <h2>Projects</h2>
            <div className="bar" />
          </Reveal>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <Reveal className="card" key={project.title} delay={i * 110}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ background: "var(--bg-soft)" }}>
        <div className="wrap">
          <Reveal className="section-head">
            <h2>Get In Touch</h2>
            <div className="bar" />
          </Reveal>
          <div className="contact-grid">
            <Reveal as="a" className="contact-card" href={`mailto:${EMAIL}`}>
              <div className="icon">
                <MailIcon />
              </div>
              <div>
                <div className="label">Email</div>
                <div className="value">{EMAIL}</div>
              </div>
            </Reveal>

            <Reveal as="a" className="contact-card" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" delay={80}>
              <div className="icon">
                <GithubIcon />
              </div>
              <div>
                <div className="label">GitHub</div>
                <div className="value">UsamaHussain8</div>
              </div>
            </Reveal>

            <Reveal as="a" className="contact-card" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" delay={160}>
              <div className="icon">
                <LinkedinIcon />
              </div>
              <div>
                <div className="label">LinkedIn</div>
                <div className="value">usama-hussain</div>
              </div>
            </Reveal>

            <Reveal as="a" className="contact-card" href={WHATSAPP} target="_blank" rel="noopener noreferrer" delay={240}>
              <div className="icon">
                <WhatsappIcon />
              </div>
              <div>
                <div className="label">WhatsApp</div>
                <div className="value">+92 311 3110438</div>
              </div>
            </Reveal>

            <Reveal className="contact-card" style={{ cursor: "default" }} delay={320}>
              <div className="icon">
                <PinIcon />
              </div>
              <div>
                <div className="label">Location</div>
                <div className="value">Islamabad, Pakistan</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="wrap footer-inner">
          <div>&copy; {new Date().getFullYear()} Usama Hussain. Built with Next.js.</div>
          <div className="socials">
            <a className="social-btn" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon />
            </a>
            <a className="social-btn" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a className="social-btn" href={`mailto:${EMAIL}`} aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

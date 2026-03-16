import { useState } from "react";
import "./Portfolio.css";

const portfolio = {
  name: "Andrew Falberg",
  title: "Aspiring Software Developer",
  bio: "Currently employed at Fair Way Vision, where I'm building practical experience in software development. Deeply interested in Cloud Architecture and Cybersecurity. I enjoy thinking about how systems are built, secured, and scaled. Always learning, always building.",
  email: "andrew1falberg@gmail.com",
  github: "github.com/Venomuos997",
  linkedin: "https://www.linkedin.com/in/andrew-falberg/",
  experiences: [
    {
      company: "Fair Way Vision",
      role: "Software Developer",
      period: "May 2025 – Present",
      description:
        "Contributing to mobile application development and dedicated hardware video streaming service. Working across the stack to deliver features and improve workflows.",
      stack: ["React Native", "TypeScript", "Python Flask", "C++"],
    },
    {
      company: "Nuboe.com",
      role: "Project Manager",
      period: "January 2025 – May 2025",
      description:
        "Pursuing certifications and hands-on projects in AWS cloud infrastructure and cybersecurity fundamentals. Building home lab environments to practice threat modeling and network security.",
      stack: ["AWS", "Linux", "Python", "Networking", "Terraform"],
    },
    {
      company: "Self-Directed Learning",
      role: "Cloud & Security Focus",
      period: "2025 November – Present",
      description:
        "Pursuing certifications and hands-on projects in AWS cloud infrastructure and cybersecurity fundamentals. Currently Obtained AWS Developer Associates Certificate",
      stack: ["AWS", "Linux", "Python", "Networking"],
    },
  ],
  techStack: [
    { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "C++", "Java", "PHP"] },
    { category: "Frontend", items: ["React", "HTML/CSS", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Flask", "Sping Boot", "Laravel"] },
    { category: "Cloud & Infra", items: ["AWS", "Docker", "Linux"] },
    { category: "Security", items: ["Network Security", "Threat Modeling"] },
    { category: "Tools", items: ["Git", "VS Code", "Postman", "Figma"] },
  ],
  projects: [
    {
      name: "Falberg STEM Acadmey Website",
      status: "Live",
      description:
        "A lightweight web page designed to showcase services provided by Falberg STEM Academy. Additional contact point with automated email response service.",
      tags: ["React", "JS", "Node.js"],
      link: "https://falbergstem.com",
    },
    {
      name: "Dev Portfolio",
      status: "Live",
      description:
        "This portfolio: A clean React with TypeScript site to showcase experience and projects. Focused on readability and performance.",
      tags: ["React", "TypeScript"],
      link: "https://github.com/Venomuos997/AFalberg.github.io",
    },
    {
      name: "Cloud Home Lab",
      status: "In Progress",
      description:
        "A personal AWS environment for practicing cloud architecture patterns. Exploring VPC design, IAM best practices, and infrastructure-as-code with Terraform.",
      tags: ["AWS", "Terraform", "Linux", "Networking"],
      link: undefined,
    },
  ],
};

const statusColor: Record<string, string> = {
  Live: "var(--accent)",
  "In Progress": "var(--muted-text)",
  Planned: "#888",
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<"experience" | "projects">("experience");

  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="avatar-wrap">
            <div className="avatar">

              <img src="/andrew_falberg.jfif" alt={portfolio.name} />
            </div>
          </div>
          <div className="hero-text">
            <p className="eyebrow">Portfolio</p>
            <h1 className="hero-name">{portfolio.name}</h1>
            <p className="hero-role">{portfolio.title} · Fair Way Vision</p>
            <p className="hero-bio">{portfolio.bio}</p>
            <div className="links">
              <a className="link" href={`mailto:${portfolio.email}`}>↗ Email</a>
              <a className="link" href={`https://${portfolio.github}`} target="_blank" rel="noreferrer">↗ GitHub</a>
              <a className="link" href={`https://${portfolio.linkedin}`} target="_blank" rel="noreferrer">↗ LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <div className="tabs">
        <div className="tab-list">
          <button
            className={`tab-btn ${activeSection === "experience" ? "active" : ""}`}
            onClick={() => setActiveSection("experience")}
          >
            Experience
          </button>
          <button
            className={`tab-btn ${activeSection === "projects" ? "active" : ""}`}
            onClick={() => setActiveSection("projects")}
          >
            Projects
          </button>
        </div>

        {/* EXPERIENCE PANEL */}
        {activeSection === "experience" && (
          <div>
            <div className="exp-grid">
              {portfolio.experiences.map((exp) => (
                <div className="exp-card" key={exp.company}>
                  <div className="exp-meta">
                    <p className="exp-period">{exp.period}</p>
                    <p className="exp-company">{exp.company}</p>
                    <p className="exp-role">{exp.role}</p>
                  </div>
                  <div>
                    <p className="exp-desc">{exp.description}</p>
                    <div className="tag-row">
                      {exp.stack.map((t) => (
                        <span className="tag" key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="stack-section">
              <p className="section-label">Tech Stack</p>
              <div className="stack-grid">
                {portfolio.techStack.map((cat) => (
                  <div className="stack-card" key={cat.category}>
                    <p className="stack-cat">{cat.category}</p>
                    <div className="stack-items">
                      {cat.items.map((item) => (
                        <span className="stack-item" key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PROJECTS PANEL */}
        {activeSection === "projects" && (
          <div className="projects-grid">
            {portfolio.projects.map((proj) => (
              <a
                className="project-card"
                href={proj.link}
                key={proj.name}
              >
                <div className="project-header">
                  <span className="project-name">{proj.name}</span>
                  <span
                    className="project-status"
                    style={{ color: statusColor[proj.status] ?? "var(--muted-text)" }}
                  >
                    {proj.status}
                  </span>
                </div>
                <p className="project-desc">{proj.description}</p>
                <div className="tag-row">
                  {proj.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className="footer">
        {/* <span className="footer-name">{portfolio.name}</span>
        <span className="footer-copy">© {new Date().getFullYear()}</span> */}
      </footer>

    </div>
  );
}

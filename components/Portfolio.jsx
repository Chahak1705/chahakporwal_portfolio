"use client";

import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, Mail, Phone, ArrowUpRight, Menu, X, Sun, Moon, ChevronLeft, ChevronRight, Link as LinkIcon } from "lucide-react";
import SkillIcon from "./SkillIcon";
import {
  profile,
  stats,
  infoCards,
  experience,
  education,
  projects,
  skills,
  navLinks,
} from "@/data/resume";


import Reveal from "./Reveal";
import CountUp from "./CountUp";
import Timeline from "./Timeline";
import ProjectsGrid from "./ProjectsGrid";
import SkillBar from "./SkillBar";
import ContactForm from "./ContactForm";
import { Database, Code2} from "lucide-react";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const scrollRef = useRef(null);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {                                 
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

const scrollProjects = (dir) => {
  if (!scrollRef.current) return;
  scrollRef.current.scrollBy({ left: dir * 380, behavior: "smooth" });
};
  // scroll progress + navbar state
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(pct);
      setScrolled(h.scrollTop > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  // active section highlighting
  useEffect(() => {

  const handleMouseMove = (e) => {
    document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
  };
  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div id="scroll-progress" style={{ width: `${progress}%` }} />
      <div id="scroll-progress" style={{ width: `${progress}%` }} />
<nav id="navbar" className={scrolled ? "scrolled" : ""}>
  <a href="#hero" className="nav-logo">
    Chahak Porwal
  </a>
  <ul className="nav-links">
    {navLinks.map((l) => (
      <li key={l.href}>
        <a href={l.href} className={activeSection === l.href.slice(1) ? "active" : ""}>
          {l.label}
        </a>
      </li>
    ))}
  </ul>
  <div id="scroll-progress" style={{ width: `${progress}%` }} />
  <div className="nav-right">
    <a href={profile.resume} download className="nav-resume-pill">
      Resume <ArrowUpRight size={13} />
    </a>
    <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme">
      {darkMode ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  </div>
  <button className="nav-toggle" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
    <Menu />
  </button>
</nav>

      <div id="mobile-menu" className={menuOpen ? "open" : ""}>
        <button id="mobile-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
          <X />
        </button>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>

{/* HERO */}
<section id="hero">
  <div className="container hero-inner hero-minimal">
    <div className="hero-row">
      <div className="hero-left">
        <h1 className="hero-title-mono">
  hi.<br />
  i&apos;m<br />
  {profile.name.split(" ")[0].toLowerCase()}.
</h1>

        <p className="hero-sub-mono">
          An aspiring software/backend developer passionate about solving real problems.
        </p>

        <a href="#contact" className="btn btn-say-hi">
          <span className="arrow">→</span> say hi
        </a>
      </div>

      <div className="hero-right">
        <div className="hero-photo">
          {profile.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={profile.photo} alt={profile.name} />
          ) : (
            <span>
              {profile.name
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
</section>

{/* ABOUT */}
<section id="about">
  <div className="container">
    <Reveal className="eyebrow">About Me</Reveal>
    <Reveal className="about-text-minimal">
  <h2 className="about-lead">
    I&apos;m <span className="about-name-highlight">{profile.name}</span>,
    a final-year CS student building clean, scalable backend systems.
  </h2>

  <p>
    I&apos;m currently pursuing my B.Tech in Computer Science
    Engineering at Mody University Of Science and Technology, specializing in backend and
    full-stack development turning ideas into functional systems
    using modern technologies.
  </p>
  <p>
    Outside of coding, I&apos;m passionate about traveling, writing,
    and exploring new ideas.
  </p>
    </Reveal>
  </div>
</section>
{/* EDUCATION */}
<section id="education">
  <div className="container">
    <Reveal className="eyebrow">Education</Reveal>
    <div className="exp-list">
      {education.map((ed) => (
        <Reveal className="exp-row" key={ed.degree}>
          <div className="exp-main">
            <h3 className="exp-org-main">{ed.org}</h3>
            <div className="exp-role-sub">{ed.degree}</div>
            <p className="exp-bullet">{ed.detail}</p>
          </div>
          <div className="exp-side">
            <span className="exp-date">{ed.date}</span>
            <span className="exp-location">{ed.location}</span>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
{/* EXPERIENCE */}
<section id="experience">
  <div className="container">
    <Reveal className="eyebrow">Work Experience</Reveal>
    <div className="exp-list">
        {experience.map((e, index) => (
  <Reveal className="exp-row" key={e.org + e.role}>
          <div className="exp-main">
            <h3 className="exp-org-main">{e.org}</h3>
            <div className="exp-role-sub">{e.role}</div>
            {e.bullets.map((b, i) => (
              <p className="exp-bullet" key={i}>
                {b}
              </p>
            ))}
          </div>
          <div className="exp-side">
            <span className="exp-date">{e.date}</span>
            <span className="exp-location">{e.location}</span>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>


{/* PROJECTS */}
<section id="projects">
  <div className="container">
    <Reveal className="eyebrow">Projects</Reveal>
    <div className="projects-carousel-wrap">
      <div className="projects-carousel-track" ref={scrollRef}>
        {projects.map((p) => (
          <Reveal className="project-circle-card" key={p.id}>
            <div className="project-logo-circle">
  {p.logo ? (
    <>
      <img src={p.logo} alt="" className="logo-bg" />
      <img src={p.logo} alt={p.title} className="logo-main" />
    </>
  ) : (
    <span>{p.title.charAt(0)}</span>
  )}
</div>

            <h3 className="project-circle-title" style={{ color: "var(--accent-1)" }}>
              {p.title}
            </h3>

            <div className="project-tech-label">Tech Stack</div>
            <div className="project-tech-row">
              {p.techIcons.map((t) => (
                <span className="project-tech-icon" key={t}>
                  <SkillIcon icon={t} size={18} />
                </span>
              ))}
            </div>

            <p className="project-circle-desc">{p.desc}</p>

            <div className="project-circle-links">
              <a href={p.repo} target="_blank" rel="noopener" aria-label="GitHub">
                <Github size={18} />
              </a>
              {p.demo && p.demo !== "#" && (
                <a href={p.demo} target="_blank" rel="noopener" aria-label="Live link">
                  <LinkIcon size={18} />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="carousel-nav">
        <button aria-label="Previous" onClick={() => scrollProjects(-1)}>
          <ChevronLeft size={18} />
        </button>
        <button aria-label="Next" onClick={() => scrollProjects(1)}>
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  </div>
</section>
      {/* SKILLS */}
<section id="skills">
  <div className="container">
    <Reveal className="eyebrow">Skills</Reveal>
    <div className="skills-icon-grid">
      {skills.map((s) => (
        <Reveal className="skill-tile" key={s.name}>
          <div className="skill-tile-icon">
            <SkillIcon icon={s.icon} size={28} />
          </div>
          <div className="skill-tile-name">{s.name}</div>
        </Reveal>
      ))}
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <Reveal className="eyebrow">Contact</Reveal>
          <div className="contact-wrap">
            <Reveal className="contact-links">
              <a className="contact-row" href={`mailto:${profile.email}`}>
                <span className="l">
                  <Mail size={18} />
                  {profile.email}
                </span>
                <span className="r">
                  <ArrowUpRight size={16} />
                </span>
              </a>
              <a className="contact-row" href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>
                <span className="l">
                  <Phone size={18} />
                  {profile.phone}
                </span>
                <span className="r">
                  <ArrowUpRight size={16} />
                </span>
              </a>
              <a className="contact-row" href={profile.github} target="_blank" rel="noopener">
                <span className="l">
                  <Github size={18} />
                  GitHub
                </span>
                <span className="r">
                  <ArrowUpRight size={16} />
                </span>
              </a>
              <a className="contact-row" href={profile.linkedin} target="_blank" rel="noopener">
                <span className="l">
                  <Linkedin size={18} />
                  LinkedIn
                </span>
                <span className="r">
                  <ArrowUpRight size={16} />
                </span>
              </a>
            </Reveal>
            <Reveal>
              <ContactForm email={profile.email} />
            </Reveal>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-row">
          <span className="fmono">© 2026 {profile.name}</span>
          <a href="#hero" className="back-top fmono">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}

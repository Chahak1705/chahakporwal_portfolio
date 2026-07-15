"use client";

import { useState } from "react";
import { Github, ExternalLink, Boxes, BrainCircuit, ScanFace } from "lucide-react";

const icons = {
  "college-discovery": Boxes,
  "healthguard-ai": BrainCircuit,
  "face-attendance": ScanFace,
};

const filters = [
  { key: "all", label: "All" },
  { key: "fullstack", label: "Full-Stack" },
  { key: "ai", label: "AI & ML" },
];

export default function ProjectsGrid({ projects }) {
  const [active, setActive] = useState("all");
  const visible = projects.filter((p) => active === "all" || p.category === active);

  return (
    <>
      <div className="filters reveal in">
        {filters.map((f) => (
          <button
            key={f.key}
            className={`filter-btn ${active === f.key ? "active" : ""}`}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visible.map((p) => {
          const Icon = icons[p.id] || Boxes;
          return (
            <div className="project-card reveal in" key={p.id}>
              <div className="project-banner">
                <Icon size={36} strokeWidth={1.4} />
              </div>
              <div className="project-body">
                <div className="project-title">{p.title}</div>
                <div className="project-period">{p.period}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="badges">
                  {p.stack.map((s) => (
                    <span className="badge" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a className="project-link" href={p.repo} title="Add your repo URL">
                    <Github size={14} /> Code
                  </a>
                  <a className="project-link" href={p.demo} title="Add your live demo URL">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
                <details className="project-details">
                  <summary>Full breakdown</summary>
                  <ul>
                    {p.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

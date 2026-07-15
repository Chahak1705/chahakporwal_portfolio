"use client";

import { useEffect, useRef, useState } from "react";

export default function SkillBar({ name, pct }) {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(pct);
          obs.unobserve(el);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div className="skill-row" ref={ref}>
      <div className="skill-top">
        <span className="name">{name}</span>
        <span className="pct">{pct}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

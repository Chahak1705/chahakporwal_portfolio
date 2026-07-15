"use client";

import { useEffect, useRef, useState } from "react";

function TimelineItem({ item }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`tl-item reveal ${inView ? "in" : ""}`} ref={ref}>
      <div className="tl-dot" />
      <div className="tl-card">
        <div className="tl-top">
          <span className="tl-role">{item.role}</span>
          <span className="tl-date">{item.date}</span>
        </div>
        <div className="tl-org">{item.org}</div>
        {item.bullets.length > 0 && (
          <ul>
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Timeline({ items }) {
  const timelineRef = useRef(null);
  const [fillPct, setFillPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = timelineRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.85;
      const total = rect.height + vh * 0.3;
      const progressed = start - rect.top;
      const pct = Math.max(0, Math.min(1, progressed / total));
      setFillPct(pct * 100);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="timeline" ref={timelineRef}>
      <div className="timeline-fill" style={{ height: `${fillPct}%` }} />
      {items.map((item, i) => (
        <TimelineItem item={item} key={i} />
      ))}
    </div>
  );
}

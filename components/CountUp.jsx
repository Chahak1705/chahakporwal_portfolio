"use client";

import { useEffect, useRef, useState } from "react";

export default function CountUp({ count, decimals = 0, suffix = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const dur = 1400;
        const t0 = performance.now();
        function tick(t) {
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay((count * eased).toFixed(decimals));
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        obs.unobserve(el);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [count, decimals]);

  return (
    <div className="stat-num" ref={ref}>
      {display}
      {suffix}
    </div>
  );
}

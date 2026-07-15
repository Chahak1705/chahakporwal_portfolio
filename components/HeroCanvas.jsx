"use client";

import { useEffect, useRef } from "react";

const blobs = [
  { x: 0.2, y: 0.3, r: 260, c: "91,108,255", dx: 0.00012, dy: 0.00009, t: 0 },
  { x: 0.8, y: 0.6, r: 220, c: "124,247,196", dx: -0.0001, dy: 0.00013, t: 100 },
  { x: 0.5, y: 0.85, r: 180, c: "91,108,255", dx: 0.00008, dy: -0.00011, t: 200 },
];

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let W, H, raf;

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function draw(time) {
      ctx.clearRect(0, 0, W, H);
      blobs.forEach((b) => {
        const x = (b.x + Math.sin(time * b.dx + b.t) * 0.08) * W;
        const y = (b.y + Math.cos(time * b.dy + b.t) * 0.08) * H;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, b.r);
        grad.addColorStop(0, `rgba(${b.c},.16)`);
        grad.addColorStop(1, `rgba(${b.c},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas id="hero-canvas" ref={canvasRef} />;
}

"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  pulse: number;
  pulseSpeed: number;
}

// Single color family — indigo shades only for cohesion
const COLORS = ["#6366f1", "#4f46e5", "#4338ca", "#818cf8"];

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let nodes: Node[] = [];

    function resize() {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx!.scale(dpr, dpr);
    }

    function init() {
      resize();
      const count = Math.min(25, Math.floor(window.innerWidth / 60));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: prefersReduced ? 0 : (Math.random() - 0.5) * 0.2,
        vy: prefersReduced ? 0 : (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 1.5 + 1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: prefersReduced ? 0 : 0.008 + Math.random() * 0.012,
      }));
    }

    function draw() {
      if (!ctx) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        a.pulse += a.pulseSpeed;

        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        const pulseRadius = node.radius + Math.sin(node.pulse) * 0.5;

        // Subtle glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius * 3, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, pulseRadius * 3
        );
        glow.addColorStop(0, node.color + "12");
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = node.color + "60";
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener("resize", init);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-30"
      aria-hidden="true"
    />
  );
}

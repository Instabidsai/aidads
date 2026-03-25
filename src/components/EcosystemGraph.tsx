"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import { typeColors, type Company } from "@/lib/data";

interface Props {
  companies: Company[];
  connections: [string, string][];
  onSelectCompany: (c: Company | null) => void;
  selectedCompany: Company | null;
}

interface GraphNode {
  company: Company;
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
}

export function EcosystemGraph({
  companies,
  connections,
  onSelectCompany,
  selectedCompany,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<GraphNode[]>([]);
  const hoveredRef = useRef<string | null>(null);
  const [dimensions, setDimensions] = useState({ w: 800, h: 500 });

  const initNodes = useCallback(() => {
    const w = dimensions.w;
    const h = dimensions.h;
    const cx = w / 2;
    const cy = h / 2;

    // Place nodes in a circle with platform in center
    const platformNodes = companies.filter((c) => c.type === "platform");
    const otherNodes = companies.filter((c) => c.type !== "platform");

    const nodes: GraphNode[] = [];

    // Platform nodes in inner ring
    platformNodes.forEach((c, i) => {
      const angle = (i / platformNodes.length) * Math.PI * 2 - Math.PI / 2;
      const radius = Math.min(w, h) * 0.15;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      nodes.push({
        company: c,
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: 0,
        vy: 0,
        targetX: x,
        targetY: y,
      });
    });

    // Other nodes in outer ring
    otherNodes.forEach((c, i) => {
      const angle = (i / otherNodes.length) * Math.PI * 2 - Math.PI / 2;
      const radius = Math.min(w, h) * 0.35;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      nodes.push({
        company: c,
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: 0,
        vy: 0,
        targetX: x,
        targetY: y,
      });
    });

    nodesRef.current = nodes;
  }, [companies, dimensions]);

  useEffect(() => {
    const container = canvasRef.current?.parentElement;
    if (!container) return;
    const obs = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setDimensions({ w: width, h: Math.min(500, width * 0.6) });
    });
    obs.observe(container);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    initNodes();
  }, [initNodes]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    canvas.width = dimensions.w * dpr;
    canvas.height = dimensions.h * dpr;
    canvas.style.width = dimensions.w + "px";
    canvas.style.height = dimensions.h + "px";
    ctx.scale(dpr, dpr);

    function getNodeByName(name: string) {
      return nodesRef.current.find((n) => n.company.name === name);
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, dimensions.w, dimensions.h);

      const nodes = nodesRef.current;

      // Spring force toward target
      for (const node of nodes) {
        const dx = node.targetX - node.x;
        const dy = node.targetY - node.y;
        node.vx += dx * 0.01;
        node.vy += dy * 0.01;
        node.vx *= 0.92;
        node.vy *= 0.92;
        node.x += node.vx;
        node.y += node.vy;
      }

      // Draw connections
      for (const [fromName, toName] of connections) {
        const from = getNodeByName(fromName);
        const to = getNodeByName(toName);
        if (!from || !to) continue;

        const isHighlighted =
          hoveredRef.current === fromName || hoveredRef.current === toName;

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = isHighlighted
          ? "rgba(99, 102, 241, 0.4)"
          : "rgba(99, 102, 241, 0.08)";
        ctx.lineWidth = isHighlighted ? 1.5 : 0.5;
        ctx.stroke();
      }

      // Draw nodes
      for (const node of nodes) {
        const color = typeColors[node.company.type];
        const isHovered = hoveredRef.current === node.company.name;
        const isSelected = selectedCompany?.name === node.company.name;
        const nodeRadius = 6 + node.company.agents * 0.8;
        const displayRadius = isHovered || isSelected ? nodeRadius * 1.3 : nodeRadius;

        // Glow
        const glow = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, displayRadius * 3
        );
        glow.addColorStop(0, color + (isHovered ? "30" : "15"));
        glow.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(node.x, node.y, displayRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Node circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, displayRadius, 0, Math.PI * 2);
        ctx.fillStyle = color + (isHovered ? "cc" : "88");
        ctx.fill();

        // Border
        if (isHovered || isSelected) {
          ctx.strokeStyle = color;
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Label
        ctx.font = `${isHovered ? "600" : "500"} ${isHovered ? "12" : "10"}px Inter, sans-serif`;
        ctx.fillStyle = isHovered ? "#e8e8ed" : "#8888a0";
        ctx.textAlign = "center";
        ctx.fillText(node.company.name, node.x, node.y + displayRadius + 14);
      }

      animId = requestAnimationFrame(draw);
    }

    // Mouse interaction
    function handleMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      let found = false;
      for (const node of nodesRef.current) {
        const dx = mx - node.x;
        const dy = my - node.y;
        const radius = 6 + node.company.agents * 0.8;
        if (dx * dx + dy * dy < (radius + 10) * (radius + 10)) {
          hoveredRef.current = node.company.name;
          canvas!.style.cursor = "pointer";
          onSelectCompany(node.company);
          found = true;
          break;
        }
      }
      if (!found) {
        hoveredRef.current = null;
        canvas!.style.cursor = "default";
        onSelectCompany(null);
      }
    }

    canvas.addEventListener("mousemove", handleMouseMove);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dimensions, connections, selectedCompany, onSelectCompany]);

  return (
    <div className="w-full">
      <canvas
        ref={canvasRef}
        className="w-full rounded-lg"
        style={{ height: dimensions.h }}
      />
    </div>
  );
}

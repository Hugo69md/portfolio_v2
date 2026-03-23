import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, TrendingUp, Plug, FileSpreadsheet, Server, Brain, Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { Spider, PythonLogo } from '@/components/CustomIcons';
import { profileData, categories, projects } from '@/data/mock';

const ICON_MAP = {
  BarChart3, TrendingUp, Plug, FileSpreadsheet, Server, Brain, Spider, PythonLogo
};

// ─── Neural Network Canvas ───────────────────────────────────────────────
const useNeuralNetwork = (canvasRef, containerRef) => {
  const nodesRef = useRef([]);
  const animFrameRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let width, height;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── Create 100 nodes ──
    const NODE_COUNT = 100;
    const nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // base position for drifting
        baseX: 0,
        baseY: 0,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        phase: Math.random() * Math.PI * 2
      });
      nodes[i].baseX = nodes[i].x;
      nodes[i].baseY = nodes[i].y;
    }
    nodesRef.current = nodes;

    const CONNECTION_DIST = 130;
    const MOUSE_ATTRACT_DIST = 200;
    const MOUSE_GLOW_DIST = 220;
    const ATTRACT_STRENGTH = 0.04;
    const RETURN_STRENGTH = 0.008;
    const DAMPING = 0.95;

    // Colors
    const DARK_YELLOW = { r: 160, g: 140, b: 30 };      // muted dark yellow
    const LIGHT_GREEN = { r: 74, g: 222, b: 128 };       // #4ade80

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mouseOnCanvas = mx > -5000;

      // ── Update physics ──
      for (const node of nodes) {
        const dxMouse = mx - node.x;
        const dyMouse = my - node.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (mouseOnCanvas && distMouse < MOUSE_ATTRACT_DIST) {
          // Attract toward mouse
          const force = (1 - distMouse / MOUSE_ATTRACT_DIST) * ATTRACT_STRENGTH;
          node.vx += dxMouse * force;
          node.vy += dyMouse * force;
        } else {
          // Gently drift back toward base + floating
          const t = Date.now() * 0.0005 + node.phase;
          const floatX = Math.sin(t) * 30;
          const floatY = Math.cos(t * 0.7) * 20;
          const targetX = node.baseX + floatX;
          const targetY = node.baseY + floatY;
          node.vx += (targetX - node.x) * RETURN_STRENGTH;
          node.vy += (targetY - node.y) * RETURN_STRENGTH;
        }

        node.vx *= DAMPING;
        node.vy *= DAMPING;
        node.x += node.vx;
        node.y += node.vy;

        // Soft boundary
        if (node.x < 10) node.vx += 0.1;
        if (node.x > width - 10) node.vx -= 0.1;
        if (node.y < 10) node.vy += 0.1;
        if (node.y > height - 10) node.vy -= 0.1;
      }

      // ── Draw connections ──
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            // Check if either node is near mouse
            const d1 = Math.sqrt((nodes[i].x - mx) ** 2 + (nodes[i].y - my) ** 2);
            const d2 = Math.sqrt((nodes[j].x - mx) ** 2 + (nodes[j].y - my) ** 2);
            const nearMouse = mouseOnCanvas && (d1 < MOUSE_GLOW_DIST || d2 < MOUSE_GLOW_DIST);

            const alpha = (1 - dist / CONNECTION_DIST) * (nearMouse ? 0.35 : 0.12);
            const c = nearMouse ? LIGHT_GREEN : DARK_YELLOW;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`;
            ctx.lineWidth = nearMouse ? 0.8 : 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // ── Draw nodes ──
      for (const node of nodes) {
        const dxM = node.x - mx;
        const dyM = node.y - my;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);
        const nearMouse = mouseOnCanvas && distM < MOUSE_GLOW_DIST;
        const proximity = nearMouse ? 1 - distM / MOUSE_GLOW_DIST : 0;

        // Interpolate color: dark yellow → green based on proximity
        const r = DARK_YELLOW.r + (LIGHT_GREEN.r - DARK_YELLOW.r) * proximity;
        const g = DARK_YELLOW.g + (LIGHT_GREEN.g - DARK_YELLOW.g) * proximity;
        const b = DARK_YELLOW.b + (LIGHT_GREEN.b - DARK_YELLOW.b) * proximity;

        const nodeAlpha = 0.5 + proximity * 0.4;
        const nodeRadius = node.radius * (1 + proximity * 0.6);

        // Glow (gradient allowed here per user)
        if (nearMouse && proximity > 0.2) {
          const glowRadius = nodeRadius * (4 + proximity * 4);
          const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowRadius);
          glow.addColorStop(0, `rgba(${LIGHT_GREEN.r}, ${LIGHT_GREEN.g}, ${LIGHT_GREEN.b}, ${proximity * 0.25})`);
          glow.addColorStop(1, `rgba(${LIGHT_GREEN.r}, ${LIGHT_GREEN.g}, ${LIGHT_GREEN.b}, 0)`);
          ctx.beginPath();
          ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${nodeAlpha})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [canvasRef, containerRef]);

  return mouseRef;
};

// ─── Landing Page ────────────────────────────────────────────────────────
const Landing = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const pageRef = useRef(null);
  const artifactRef = useRef(null);
  const [artifactSize, setArtifactSize] = useState({ width: 600, height: 400 });
  const [hoveredCategory, setHoveredCategory] = useState(null);

  useEffect(() => {
    const update = () => {
      if (artifactRef.current) {
        const r = artifactRef.current.getBoundingClientRect();
        setArtifactSize({ width: r.width, height: r.height });
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Neural network lives in the middle zone
  const nnContainerRef = useRef(null);
  const mouseRef = useNeuralNetwork(canvasRef, nnContainerRef);

  const handleMouseMove = useCallback((e) => {
    const rect = nnContainerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  }, [mouseRef]);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 };
  }, [mouseRef]);

  const handleIconClick = (categoryId) => {
    navigate(`/projects?category=${categoryId}`);
  };

  const artifactRadius = Math.min(artifactSize.width * 0.38, artifactSize.height * 0.42);
  const centerX = artifactSize.width / 2;
  const centerY = artifactSize.height / 2;

  return (
    <div ref={pageRef} className="relative min-h-screen bg-[#050505] overflow-hidden flex flex-col">

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-5">
        <div className="font-mono text-xs text-green-500/50 tracking-widest uppercase">
          Portfolio_v2.4
        </div>
        <div className="flex gap-1">
          {['Profile', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => navigate(`/${item.toLowerCase()}`)}
              className="px-5 py-2 text-sm font-mono tracking-wider text-gray-400 border border-gray-800 hover:border-green-500/50 hover:text-green-400 transition-colors duration-300 bg-black/40 backdrop-blur-sm"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Title */}
      <div className="relative z-10 text-center mt-2 mb-1">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none uppercase"
          style={{
            fontFamily: "'Alte Haas Grotesk Bold', 'Arial Black', sans-serif",
            fontWeight: 900,
            color: '#e5e5e5',
            textShadow: '0 0 40px rgba(34, 197, 94, 0.08)'
          }}
        >
          Data Engineering
          <br />
          <span style={{ color: '#22c55e' }}>Solutions</span>
        </h1>
      </div>

      {/* ── Neural Network + Artifact Zone ── */}
      <div
        ref={nnContainerRef}
        className="relative z-10 flex-1"
        style={{ minHeight: '300px' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Canvas for neural network */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />

        {/* Icon Artifact Layer */}
        <div ref={artifactRef} className="absolute inset-0 z-10 pointer-events-none">
          {/* Orbit rings */}
          <div
            className="absolute border border-green-500/8 rounded-full"
            style={{
              left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)',
              width: artifactRadius * 2 + 20,
              height: artifactRadius * 2 + 20
            }}
          />
          <div
            className="absolute border border-green-500/[0.03] rounded-full"
            style={{
              left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)',
              width: artifactRadius * 2.5,
              height: artifactRadius * 2.5
            }}
          />

          {/* Center label */}
          <div className="absolute text-center" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <div className="font-mono text-xs text-green-500/40 tracking-[0.3em] uppercase mb-1">
              {hoveredCategory ? categories.find(c => c.id === hoveredCategory)?.name : 'Explore'}
            </div>
            <div className="font-mono text-[10px] text-gray-600">
              {hoveredCategory
                ? `${projects.filter(p => p.category === hoveredCategory).length} projects`
                : `${projects.length} total projects`
              }
            </div>
          </div>

          {/* Icon Buttons */}
          {categories.map((cat, idx) => {
            const angle = (idx / categories.length) * Math.PI * 2 - Math.PI / 2;
            const IconComponent = ICON_MAP[cat.icon];
            const ix = centerX + Math.cos(angle) * artifactRadius;
            const iy = centerY + Math.sin(angle) * artifactRadius;
            const isHovered = hoveredCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => handleIconClick(cat.id)}
                onMouseEnter={() => setHoveredCategory(cat.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="absolute pointer-events-auto group"
                style={{
                  left: `${ix}px`,
                  top: `${iy}px`,
                  transform: `translate(-50%, -50%) scale(${isHovered ? 1.15 : 1})`,
                  transition: 'transform 0.3s ease'
                }}
                title={cat.name}
              >
                <div className={`relative flex items-center justify-center w-14 h-14 rounded-lg border transition-colors duration-300 ${
                  isHovered
                    ? 'border-green-400 bg-green-500/10 shadow-[0_0_20px_rgba(34,197,94,0.25)]'
                    : 'border-gray-700/60 bg-[#0a0a0a]/80 hover:border-green-500/40'
                }`}>
                  {IconComponent && (
                    <IconComponent className={`w-6 h-6 transition-colors duration-300 ${isHovered ? 'text-green-300' : 'text-green-500/70'}`} />
                  )}
                </div>
                <span className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono tracking-wider transition-opacity duration-300 ${
                  isHovered ? 'opacity-100 text-green-400' : 'opacity-0 text-green-500/50'
                }`}>
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Projects Ticker */}
      <div className="relative z-10 mb-2">
        <div className="flex items-center gap-2 px-8 mb-3">
          <div className="h-px flex-1 bg-green-500/10" />
          <span className="font-mono text-[10px] text-green-500/30 tracking-[0.3em] uppercase">Featured</span>
          <div className="h-px flex-1 bg-green-500/10" />
        </div>
        <div className="flex gap-4 px-8 overflow-x-auto pb-2 scrollbar-hide">
          {projects.filter(p => p.featured).map((project) => {
            const IconComp = ICON_MAP[categories.find(c => c.id === project.category)?.icon];
            return (
              <button
                key={project.id}
                onClick={() => navigate(`/projects?category=${project.category}`)}
                className="flex-shrink-0 group flex items-center gap-3 px-4 py-3 border border-gray-800/50 hover:border-green-500/30 bg-[#0a0a0a]/60 backdrop-blur-sm transition-colors duration-300"
              >
                {IconComp && <IconComp className="w-4 h-4 text-green-500/40 group-hover:text-green-400 transition-colors" />}
                <span className="font-mono text-xs text-gray-500 group-hover:text-gray-300 transition-colors whitespace-nowrap">
                  {project.title}
                </span>
                <ArrowUpRight className="w-3 h-3 text-gray-700 group-hover:text-green-400 transition-colors" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800/50 px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-mono text-sm text-gray-400 tracking-wider">{profileData.name}</div>
            <div className="font-mono text-[10px] text-gray-600 mt-0.5">{profileData.email}</div>
          </div>
          <div className="flex items-center gap-4">
            <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-400 transition-colors duration-300">
              <Github className="w-4 h-4" />
            </a>
            <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-400 transition-colors duration-300">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={profileData.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-400 transition-colors duration-300">
              <Twitter className="w-4 h-4" />
            </a>
            <a href={`mailto:${profileData.email}`} className="text-gray-600 hover:text-green-400 transition-colors duration-300">
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <div className="font-mono text-[10px] text-gray-700">
            &copy; {new Date().getFullYear()} // Built with data
          </div>
        </div>
      </footer>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Landing;

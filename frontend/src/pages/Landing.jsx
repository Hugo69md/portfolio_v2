import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, TrendingUp, Plug, FileSpreadsheet, Server, Brain, Github, Linkedin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { Spider, PythonLogo } from '@/components/CustomIcons';
import { profileData, categories, projects } from '@/data/mock';

const ICON_MAP = {
  BarChart3, TrendingUp, Plug, FileSpreadsheet, Server, Brain, Spider, PythonLogo
};

// ─── Neural Network Canvas (Full-page background) ───────────────────────
const useNeuralNetwork = (canvasRef, containerRef) => {
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

    // ── 150 nodes, all interactive ──
    const NODE_COUNT = 150;
    const nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: 0, baseY: 0,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        phase: Math.random() * Math.PI * 2
      });
      nodes[i].baseX = nodes[i].x;
      nodes[i].baseY = nodes[i].y;
    }

    const CONNECTION_DIST = 120;
    // Previous was 20/22, up by 60%: 20*1.6=32, 22*1.6≈35
    const MOUSE_ATTRACT_DIST = 32;
    const MOUSE_GLOW_DIST = 35;
    const ATTRACT_STRENGTH = 0.004;
    const RETURN_STRENGTH = 0.008;
    const DAMPING = 0.95;

    const DARK_YELLOW = { r: 160, g: 140, b: 30 };
    const LIGHT_GREEN = { r: 74, g: 222, b: 128 };

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
          const force = (1 - distMouse / MOUSE_ATTRACT_DIST) * ATTRACT_STRENGTH;
          node.vx += dxMouse * force;
          node.vy += dyMouse * force;
        } else {
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

        const r = DARK_YELLOW.r + (LIGHT_GREEN.r - DARK_YELLOW.r) * proximity;
        const g = DARK_YELLOW.g + (LIGHT_GREEN.g - DARK_YELLOW.g) * proximity;
        const b = DARK_YELLOW.b + (LIGHT_GREEN.b - DARK_YELLOW.b) * proximity;

        const nodeAlpha = 0.5 + proximity * 0.4;
        const nodeRadius = node.radius * (1 + proximity * 0.6);

        // Glow (gradient allowed only for this)
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

// Helper: get all category icons for a project
const getCategoryIcons = (project) => {
  return (project.categories || []).map(catId => {
    const cat = categories.find(c => c.id === catId);
    return cat ? { ...cat, IconComp: ICON_MAP[cat.icon] } : null;
  }).filter(Boolean);
};

// ─── Landing Page ────────────────────────────────────────────────────────
const Landing = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const nnContainerRef = useRef(null);
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

  const mouseRef = useNeuralNetwork(canvasRef, nnContainerRef);

  const handleMouseMove = useCallback((e) => {
    const rect = nnContainerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
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

  const isHovering = hoveredCategory !== null;
  const hoveredCatObj = hoveredCategory ? categories.find(c => c.id === hoveredCategory) : null;
  const hoveredCount = hoveredCategory ? projects.filter(p => (p.categories || []).includes(hoveredCategory)).length : 0;

  return (
    <div
      className="relative min-h-screen bg-[#050505] overflow-hidden flex flex-col"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* ── Neural Network Background Layer (covers everything except footer) ── */}
      <div
        ref={nnContainerRef}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ bottom: '52px' }}
      >
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>

      {/* ═══════════════ Content Layer (z-10, above canvas) ═══════════════ */}

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

      {/* ── Artifact Icon Zone ── */}
      <div ref={artifactRef} className="relative z-10 flex-1" style={{ minHeight: '320px' }}>

        {/* Center label — glows only when hovering a category */}
        <div className="absolute text-center pointer-events-none" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <div
            className="font-mono text-xs tracking-[0.3em] uppercase mb-1 transition-all duration-300"
            style={{
              color: isHovering ? '#4ade80' : 'rgba(34,197,94,0.4)',
              textShadow: isHovering ? '0 0 12px rgba(74,222,128,0.5), 0 0 24px rgba(74,222,128,0.2)' : 'none'
            }}
          >
            {isHovering ? hoveredCatObj?.name : 'Explore'}
          </div>
          <div
            className="font-mono text-[10px] transition-all duration-300"
            style={{
              color: isHovering ? '#9ca3af' : '#4b5563',
              textShadow: isHovering ? '0 0 8px rgba(74,222,128,0.15)' : 'none'
            }}
          >
            {isHovering
              ? `${hoveredCount} project${hoveredCount !== 1 ? 's' : ''}`
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
              className="absolute group"
              style={{
                left: `${ix}px`,
                top: `${iy}px`,
                transform: `translate(-50%, -50%) scale(${isHovered ? 1.15 : 1})`,
                transition: 'transform 0.3s ease'
              }}
              title={cat.name}
            >
              {/* Square contour — visible only on hover, 50% more opaque than NN */}
              <div className={`relative flex items-center justify-center w-14 h-14 rounded-lg border transition-all duration-300 ${
                isHovered
                  ? 'border-green-500/40 bg-[#050505]/75 text-green-300'
                  : 'border-transparent bg-transparent text-green-500/60 hover:border-gray-700/40 hover:bg-[#050505]/75 hover:text-green-400/80'
              }`}
                style={{
                  filter: isHovered ? 'drop-shadow(0 0 8px rgba(74,222,128,0.4))' : 'none'
                }}
              >
                {IconComponent && (
                  <IconComponent className="w-7 h-7" />
                )}
              </div>
              <span className={`absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono tracking-wider transition-opacity duration-300 ${
                isHovered ? 'opacity-100 text-green-400' : 'opacity-0 text-green-500/50'
              }`}>
                {cat.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Spacer to prevent icon overlap with featured */}
      <div className="h-14" />

      {/* Featured Projects Ticker */}
      <div className="relative z-10 mb-2">
        <div className="flex items-center gap-2 px-8 mb-3">
          <div className="h-px flex-1 bg-green-500/10" />
          <span className="font-mono text-[10px] text-green-500/30 tracking-[0.3em] uppercase">Featured</span>
          <div className="h-px flex-1 bg-green-500/10" />
        </div>
        <div className="flex gap-4 px-8 overflow-x-auto pb-2 scrollbar-hide">
          {projects.filter(p => p.featured).map((project) => {
            const catIcons = getCategoryIcons(project);
            return (
              <button
                key={project.id}
                onClick={() => { window.scrollTo(0, 0); navigate(`/project/${project.id}`); }}
                className="flex-shrink-0 group flex items-start gap-3 px-4 py-3 border border-gray-800/50 hover:border-green-500/30 bg-[#0a0a0a]/60 backdrop-blur-sm transition-colors duration-300 text-left max-w-[300px]"
              >
                <div className="flex items-center gap-1 mt-0.5 flex-shrink-0">
                  {catIcons.map(({ id, IconComp }) => (
                    IconComp && <IconComp key={id} className="w-3.5 h-3.5 text-green-500/40 group-hover:text-green-400 transition-colors" />
                  ))}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-xs text-gray-400 group-hover:text-gray-200 transition-colors whitespace-nowrap truncate">
                      {project.title}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-gray-700 group-hover:text-green-400 transition-colors flex-shrink-0" />
                  </div>
                  <p className="font-mono text-[10px] text-gray-600 mt-1 leading-relaxed line-clamp-2">
                    {project.shortDesc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer — sits above the neural network, has its own solid bg */}
      <footer className="relative z-10 border-t border-gray-800/50 px-8 py-4 bg-[#050505]">
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
            <a href={`mailto:${profileData.email}`} className="text-gray-600 hover:text-green-400 transition-colors duration-300">
              <Mail className="w-4 h-4" />
            </a>
            <a href={`tel:${profileData.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-green-400 transition-colors duration-300">
              <Phone className="w-4 h-4" />
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
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </div>
  );
};

export default Landing;

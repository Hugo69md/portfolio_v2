import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, TrendingUp, Globe, Plug, FileSpreadsheet, Cog, Code, Brain, Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { profileData, categories, projects } from '@/data/mock';

const ICON_MAP = {
  BarChart3, TrendingUp, Globe, Plug, FileSpreadsheet, Cog, Code, Brain
};

// Neural Network Background Canvas
const useNeuralNetwork = (canvasRef, dimensions) => {
  const nodesRef = useRef([]);
  const animFrameRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { width, height } = dimensions;
    canvas.width = width;
    canvas.height = height;

    const nodeCount = Math.min(140, Math.floor((width * height) / 10000));
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.5 + 0.5,
        brightness: Math.random() * 0.5 + 0.2
      });
    }
    nodesRef.current = nodes;

    const connectionDist = Math.min(width, height) * 0.12;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const opacity = (1 - dist / connectionDist) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 197, 94, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw mouse proximity connections (green, slightly brighter)
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      for (let i = 0; i < nodes.length; i++) {
        const dx = nodes[i].x - mx;
        const dy = nodes[i].y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < connectionDist * 1.5) {
          const opacity = (1 - dist / (connectionDist * 1.5)) * 0.2;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(74, 222, 128, ${opacity})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mx, my);
          ctx.stroke();
        }
      }

      // Draw nodes
      for (const node of nodes) {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34, 197, 94, ${node.brightness})`;
        ctx.fill();

        // Subtle glow (radial is fine for canvas, not CSS gradient)
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3);
        glow.addColorStop(0, `rgba(34, 197, 94, ${node.brightness * 0.12})`);
        glow.addColorStop(1, 'rgba(34, 197, 94, 0)');
        ctx.fillStyle = glow;
        ctx.fill();

        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        node.brightness = 0.2 + Math.sin(Date.now() * 0.001 + node.x * 0.01) * 0.15;
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [canvasRef, dimensions]);

  return mouseRef;
};

const Landing = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const artifactRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [artifactSize, setArtifactSize] = useState({ width: 600, height: 400 });
  const [hoveredCategory, setHoveredCategory] = useState(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
      if (artifactRef.current) {
        const aRect = artifactRef.current.getBoundingClientRect();
        setArtifactSize({ width: aRect.width, height: aRect.height });
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const mouseRef = useNeuralNetwork(canvasRef, dimensions);

  const handleMouseMove = useCallback((e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
  }, [mouseRef]);

  const handleIconClick = (categoryId) => {
    navigate(`/projects?category=${categoryId}`);
  };

  const artifactRadius = Math.min(artifactSize.width, artifactSize.height) * 0.38;
  const centerX = artifactSize.width / 2;
  const centerY = artifactSize.height / 2;

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] overflow-hidden flex flex-col"
      onMouseMove={handleMouseMove}
    >
      {/* Neural Network Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.7 }}
      />

      {/* Vignette overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, #050505 80%)' }}
      />

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
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
          className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none"
          style={{
            fontFamily: "'Alte Haas Grotesk Bold', 'Arial Black', sans-serif",
            fontWeight: 900,
            color: '#e5e5e5',
            textShadow: '0 0 40px rgba(34, 197, 94, 0.08)'
          }}
        >
          Data Engineering
          <br />
          <span style={{ color: '#22c55e' }}>
            Solutions
          </span>
        </h1>
      </div>

      {/* Central Interactive Artifact */}
      <div ref={artifactRef} className="relative z-10 flex-1 flex items-center justify-center" style={{ minHeight: '300px' }}>

        {/* Orbit rings */}
        <div
          className="absolute border border-green-500/10 rounded-full pointer-events-none"
          style={{
            left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            width: artifactRadius * 2 + 20,
            height: artifactRadius * 2 + 20
          }}
        />
        <div
          className="absolute border border-green-500/5 rounded-full pointer-events-none"
          style={{
            left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            width: artifactRadius * 2.5,
            height: artifactRadius * 2.5
          }}
        />

        {/* Center pulse */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 60, height: 60,
            backgroundColor: 'rgba(34,197,94,0.04)',
            boxShadow: '0 0 60px rgba(34,197,94,0.06)',
            animation: 'pulse-glow 4s ease-in-out infinite'
          }}
        />

        {/* Icon Buttons - positioned relative to artifact center */}
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
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
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

        {/* Center label */}
        <div className="absolute text-center pointer-events-none" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
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

      {/* Animations */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.15); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Landing;

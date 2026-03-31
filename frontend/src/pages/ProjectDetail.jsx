import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BarChart3, TrendingUp, Plug, FileSpreadsheet, Server, Brain, Calendar, Tag } from 'lucide-react';
import { Spider, PythonLogo } from '@/components/CustomIcons';
import { projects, categories } from '@/data/mock';

const ICON_MAP = {
  BarChart3, TrendingUp, Plug, FileSpreadsheet, Server, Brain, Spider, PythonLogo
};

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-center">
          <div className="font-mono text-sm text-gray-500 mb-4">Project not found</div>
          <button
            onClick={() => navigate('/projects')}
            className="font-mono text-xs text-green-400 hover:text-green-300 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  const projectCats = (project.categories || [])
    .map(catId => categories.find(c => c.id === catId))
    .filter(Boolean);

  const currentIndex = projects.findIndex(p => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300">

      {/* Header */}
      <div className="border-b border-gray-800/50 px-8 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Projects
          </button>
          <div className="flex gap-1">
            {['Profile', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => navigate(`/${item.toLowerCase()}`)}
                className={`px-5 py-2 text-sm font-mono tracking-wider border transition-all duration-300 bg-black/40 ${
                  item === 'Projects'
                    ? 'border-green-500/40 text-green-400'
                    : 'border-gray-800 text-gray-400 hover:border-green-500/50 hover:text-green-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-4xl mx-auto px-8 py-12">

        {/* Title Block */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            {projectCats.map(cat => {
              const IconComp = ICON_MAP[cat.icon];
              return (
                <button
                  key={cat.id}
                  onClick={() => navigate(`/projects?category=${cat.id}`)}
                  className="flex items-center gap-1.5 px-2.5 py-1 border border-gray-800/50 hover:border-green-500/30 transition-colors"
                >
                  {IconComp && <IconComp className="w-3 h-3 text-green-500/60" />}
                  <span className="font-mono text-[10px] text-green-500/50 tracking-wider uppercase">{cat.name}</span>
                </button>
              );
            })}
          </div>

          <h1
            className="text-3xl md:text-4xl tracking-tight mb-4"
            style={{
              fontFamily: "'Alte Haas Grotesk Bold', 'Arial Black', sans-serif",
              fontWeight: 900,
              color: '#d4d4d4'
            }}
          >
            {project.title}
          </h1>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 text-gray-600">
              <Calendar className="w-3.5 h-3.5" />
              <span className="font-mono text-xs">{project.year}</span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <Tag className="w-3.5 h-3.5 text-gray-600" />
              {project.tags.map(tag => (
                <span key={tag} className="font-mono text-[10px] text-gray-500 px-2 py-0.5 border border-gray-800/40 bg-gray-900/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── 3 Sections ── */}
        <div className="space-y-16">

          {/* 01 — Context */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-sm text-gray-500 tracking-[0.3em] uppercase">Context</span>
              <div className="h-px flex-1 bg-gray-800/50" />
              <span
                className="font-mono text-xs tracking-widest"
                style={{ color: '#4db9eb' }}
              >
                01
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">
              {project.context}
            </p>
          </section>

          {/* 02 — The Project */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-sm text-gray-500 tracking-[0.3em] uppercase">The Project</span>
              <div className="h-px flex-1 bg-gray-800/50" />
              <span
                className="font-mono text-xs tracking-widest"
                style={{ color: '#4db9eb' }}
              >
                02
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-3xl mb-6">
              {project.projectDetail}
            </p>
            {/* Project Image */}
            <div className="relative overflow-hidden border border-gray-800/40">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover"
                style={{ filter: 'brightness(0.7) saturate(0.8)' }}
                loading="lazy"
              />
              {/* Scanline overlay for digital feel */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
                }}
              />
              {/* Bottom edge glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                style={{ background: 'linear-gradient(to top, #050505, transparent)' }}
              />
            </div>
          </section>

          {/* 03 — Results */}
          <section>
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-sm text-gray-500 tracking-[0.3em] uppercase">Results</span>
              <div className="h-px flex-1 bg-gray-800/50" />
              <span
                className="font-mono text-xs tracking-widest"
                style={{ color: '#4db9eb' }}
              >
                03
              </span>
            </div>
            <p className="text-sm text-green-400/80 leading-relaxed max-w-3xl">
              {project.results}
            </p>
          </section>

        </div>

        {/* ── Navigation between projects ── */}
        <div className="mt-20 pt-8 border-t border-gray-800/40 flex items-center justify-between">
          {prevProject ? (
            <button
              onClick={() => { window.scrollTo(0, 0); navigate(`/project/${prevProject.id}`); }}
              className="group flex items-center gap-2 font-mono text-xs text-gray-600 hover:text-green-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="max-w-[200px] truncate">{prevProject.title}</span>
            </button>
          ) : <span />}

          {nextProject ? (
            <button
              onClick={() => { window.scrollTo(0, 0); navigate(`/project/${nextProject.id}`); }}
              className="group flex items-center gap-2 font-mono text-xs text-gray-600 hover:text-green-400 transition-colors"
            >
              <span className="max-w-[200px] truncate">{nextProject.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : <span />}
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;

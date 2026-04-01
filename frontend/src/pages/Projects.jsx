import React, { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { BarChart3, TrendingUp, Plug, FileSpreadsheet, Server, Brain, ArrowLeft, ExternalLink, Filter } from 'lucide-react';
import { Spider, PythonLogo } from '@/components/CustomIcons';
import { projects, categories } from '@/data/mock';

const ICON_MAP = {
  BarChart3, TrendingUp, Plug, FileSpreadsheet, Server, Brain, Spider, PythonLogo
};

const ProjectCard = ({ project, index, onClick }) => {
  const projectCats = (project.categories || []).map(catId => categories.find(c => c.id === catId)).filter(Boolean);

  return (
    <div
      onClick={onClick}
      className="group border border-gray-800/60 bg-black/40 backdrop-blur-sm hover:border-green-500/30 transition-all duration-500 cursor-pointer"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Header — show all category icons */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800/40">
        <div className="flex items-center gap-2 flex-wrap">
          {projectCats.map((cat) => {
            const IconComp = ICON_MAP[cat.icon];
            return (
              <div key={cat.id} className="flex items-center gap-1">
                {IconComp && <IconComp className="w-3.5 h-3.5 text-green-500/60" />}
                <span className="font-mono text-[10px] text-green-500/50 tracking-wider uppercase">{cat.name}</span>
              </div>
            );
          })}
        </div>
        <span className="font-mono text-[10px] text-gray-600 flex-shrink-0 ml-2">{project.year}</span>
      </div>

      {/* Body */}
      <div className="px-5 py-4">
        <h3 className="font-mono text-sm text-gray-200 group-hover:text-green-400 transition-colors duration-300 mb-2">
          {project.title}
        </h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-[10px] font-mono text-gray-500 border border-gray-800/60 bg-gray-900/30">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-gray-800/40 flex items-center justify-between">
        {project.featured && (
          <span className="text-[10px] font-mono text-green-500/50 tracking-wider uppercase">Featured</span>
        )}
        {!project.featured && <span />}
        <button className="flex items-center gap-1.5 text-[10px] font-mono text-gray-600 group-hover:text-[#4db9eb] transition-colors">
          View Details <ExternalLink className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeFilter, setActiveFilter] = useState(initialCategory);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter(p => (p.categories || []).includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-black">
    <div className="min-h-screen bg-[#050505] text-gray-300 max-w-6xl mx-auto">
      {/* Header */}
      <div className="border-b border-gray-800/50 px-8 py-6">
        <div>
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back
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

        <h1
          className="text-3xl md:text-4xl tracking-tight mb-2"
          style={{
            fontFamily: "'Alte Haas Grotesk Bold', 'Arial Black', sans-serif",
            fontWeight: 900,
            color: '#d4d4d4'
          }}
        >
          Projects
        </h1>
        <p className="font-mono text-xs text-gray-600">
          {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          {activeFilter !== 'all' ? ` in ${categories.find(c => c.id === activeFilter)?.name}` : ''}
        </p>
        </div>
      </div>

      {/* Filters */}
      <div className="px-8 py-4 border-b border-gray-800/30">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
          <Filter className="w-3.5 h-3.5 text-gray-600 flex-shrink-0" />
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 text-[11px] font-mono tracking-wider border transition-all duration-300 flex-shrink-0 ${
              activeFilter === 'all'
                ? 'border-[#4db9eb]/40 text-[#4db9eb] bg-[#4db9eb]/5'
                : 'border-gray-800/50 text-gray-600 hover:text-gray-400 hover:border-gray-700'
            }`}
          >
            All
          </button>
          {categories.map((cat) => {
            const IconComp = ICON_MAP[cat.icon];
            const count = projects.filter(p => (p.categories || []).includes(cat.id)).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono tracking-wider border transition-all duration-300 flex-shrink-0 ${
                  activeFilter === cat.id
                    ? 'border-[#4db9eb]/40 text-[#4db9eb] bg-[#4db9eb]/5'
                    : 'border-gray-800/50 text-gray-600 hover:text-gray-400 hover:border-gray-700'
                }`}
              >
                {IconComp && <IconComp className="w-3 h-3" />}
                {cat.name}
                <span className="text-[9px] text-gray-700 ml-0.5">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} onClick={() => { window.scrollTo(0, 0); navigate(`/project/${project.id}`); }} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="font-mono text-sm text-gray-600">No projects found in this category.</div>
          </div>
        )}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </div>
    </div>
  );
};

export default Projects;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Mail, Github, Linkedin, Twitter, Briefcase, GraduationCap, ChevronRight } from 'lucide-react';
import { profileData } from '@/data/mock';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
    <div className="min-h-screen bg-[#050505] text-gray-300 max-w-6xl mx-auto">
      {/* Header */}
      <div className="border-b border-gray-800/50 px-8 py-6">
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
                  item === 'Profile'
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

      <div className="px-8 py-12">
        {/* Profile Header */}
        <div className="mb-16">
          <h1
            className="text-3xl md:text-4xl tracking-tight mb-3"
            style={{
              fontFamily: "'Alte Haas Grotesk Bold', 'Arial Black', sans-serif",
              fontWeight: 900,
              color: '#d4d4d4'
            }}
          >
            {profileData.name}
          </h1>
          <div className="font-mono text-sm text-green-400/70 mb-4 tracking-wider">
            {profileData.title}
          </div>
          <p className="text-sm text-gray-500 max-w-2xl leading-relaxed mb-6">
            {profileData.bio}
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <MapPin className="w-3.5 h-3.5" /> {profileData.location}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Mail className="w-3.5 h-3.5" /> {profileData.email}
            </div>
            <div className="flex items-center gap-3">
              <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-400 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={profileData.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-16">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Briefcase className="w-3.5 h-3.5 text-green-500/40" />
                <span className="font-mono text-[10px] text-green-500/40 tracking-[0.3em] uppercase">Experience</span>
                <div className="h-px flex-1 bg-green-500/10" />
              </div>
              <div className="space-y-6">
                {profileData.experience.map((exp) => (
                  <div key={exp.id} className="group border-l-2 border-gray-800 hover:border-green-500/40 pl-5 transition-colors duration-300">
                    <div className="font-mono text-xs text-gray-200 mb-0.5">{exp.role}</div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[11px] text-green-400/60">{exp.company}</span>
                      <span className="text-[10px] text-gray-700">|</span>
                      <span className="text-[10px] text-gray-600 font-mono">{exp.period}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <GraduationCap className="w-3.5 h-3.5 text-green-500/40" />
                <span className="font-mono text-[10px] text-green-500/40 tracking-[0.3em] uppercase">Education</span>
                <div className="h-px flex-1 bg-green-500/10" />
              </div>
              <div className="space-y-4">
                {profileData.education.map((edu) => (
                  <div key={edu.degree} className="flex items-center justify-between border border-gray-800/40 px-5 py-3 hover:border-green-500/20 transition-colors">
                    <div>
                      <div className="font-mono text-xs text-gray-300">{edu.degree}</div>
                      <div className="text-[11px] text-gray-600">{edu.school}</div>
                    </div>
                    <span className="font-mono text-[10px] text-gray-700">{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm text-gray-400 border border-gray-800 hover:border-green-500/50 hover:text-green-400 transition-all duration-300 bg-black/40"
          >
            View Projects <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;

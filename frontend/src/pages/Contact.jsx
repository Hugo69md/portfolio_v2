import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Mail, Phone, Github, Linkedin, Twitter, Copy, Check } from 'lucide-react';
import { profileData } from '@/data/mock';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      toast({ title: 'Copied!', description: `${text} copied to clipboard.` });
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300">
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
                  item === 'Contact'
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

      <div className="max-w-4xl mx-auto px-8 py-12">
        <h1
          className="text-4xl md:text-5xl tracking-tight mb-3"
          style={{
            fontFamily: "'Alte Haas Grotesk Bold', 'Arial Black', sans-serif",
            fontWeight: 900,
            color: '#d4d4d4'
          }}
        >
          Get in Touch
        </h1>
        <p className="font-mono text-base text-gray-500 tracking-[0.3em] uppercase mb-4 leading-relaxed">
          Have a project in mind? Let's discuss how data can drive your decisions.
        </p>
        {/* Line below subtitle */}
        <div className="h-px bg-gray-800/50 mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Location */}
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-green-500/50 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-mono text-[10px] text-green-500/40 tracking-wider uppercase mb-1">Location</div>
                <div className="text-sm text-gray-400">{profileData.location}</div>
              </div>
            </div>

            {/* Email — click to copy */}
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#4db9eb', opacity: 0.5 }} />
              <div>
                <div className="font-mono text-[10px] tracking-wider uppercase mb-1" style={{ color: 'rgba(77,185,235,0.4)' }}>Email</div>
                <button
                  onClick={() => copyToClipboard(profileData.email, 'email')}
                  className="group flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  <span>{profileData.email}</span>
                  {copiedField === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-gray-700 group-hover:text-green-400 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone — click to copy */}
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#4db9eb', opacity: 0.5 }} />
              <div>
                <div className="font-mono text-[10px] tracking-wider uppercase mb-1" style={{ color: 'rgba(77,185,235,0.4)' }}>Phone</div>
                <button
                  onClick={() => copyToClipboard(profileData.phone, 'phone')}
                  className="group flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                >
                  <span>{profileData.phone}</span>
                  {copiedField === 'phone' ? (
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-gray-700 group-hover:text-green-400 transition-colors" />
                  )}
                </button>
              </div>
            </div>

            <div className="h-px bg-gray-800/50" />

            {/* Connect */}
            <div>
              <div className="font-mono text-[10px] text-green-500/40 tracking-wider uppercase mb-3">Connect</div>
              <div className="flex items-center gap-4">
                <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
                  <Github className="w-4 h-4" />
                  <span className="font-mono text-xs">GitHub</span>
                </a>
                <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  <span className="font-mono text-xs">LinkedIn</span>
                </a>
                <a href={profileData.social.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
                  <Twitter className="w-4 h-4" />
                  <span className="font-mono text-xs">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Terminal-style decoration */}
          <div>
            <div className="border border-gray-800/40 bg-black/30 p-6 font-mono text-[11px]">
              <div className="text-green-500/50 mb-1">$ whoami</div>
              <div className="text-gray-400 mb-3">{profileData.name.toLowerCase().replace(' ', '.')}</div>
              <div className="text-green-500/50 mb-1">$ cat status.txt</div>
              <div className="text-gray-400 mb-3">Available for freelance & consulting</div>
              <div className="text-green-500/50 mb-1">$ cat skills.txt</div>
              <div className="text-gray-400 mb-3">Python, SQL, Data Pipelines, ML, APIs</div>
              <div className="text-green-500/50 mb-1">$ echo $RESPONSE_TIME</div>
              <div className="text-gray-400 mb-3">{'<'} 24 hours</div>
              <div className="text-green-500/50">$ _<span className="animate-pulse">|</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

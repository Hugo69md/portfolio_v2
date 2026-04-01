import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Mail, Phone, Github, Linkedin, Copy, Check } from 'lucide-react';
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
    <div className="min-h-screen bg-black">
    <div className="min-h-screen bg-[#050505] text-gray-300 max-w-5xl mx-auto">
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

      <div className="px-8 py-8">
        <h1
          className="text-3xl md:text-4xl tracking-tight mb-3"
          style={{
            fontFamily: "'Alte Haas Grotesk Bold', 'Arial Black', sans-serif",
            fontWeight: 900,
            color: '#d4d4d4'
          }}
        >
          Get in Touch
        </h1>
        <p className="font-mono text-sm text-gray-500 tracking-[0.3em] uppercase mb-4 leading-relaxed">
          Have a project in mind? Let's discuss how data can drive your decisions.
        </p>
        <div className="h-px bg-gray-800/50 mb-10" />

        {/* Contact Info + Terminal side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
          {/* Left: Location, Email, Phone */}
          <div className="space-y-7">
            {/* Location */}
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-green-500/50 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-mono text-[10px] text-green-500/40 tracking-wider uppercase mb-1">Location</div>
                <div className="text-sm text-gray-400">{profileData.location}</div>
              </div>
            </div>

            {/* Email — click clipboard to copy */}
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-green-500/50 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-mono text-[10px] text-green-500/40 tracking-wider uppercase mb-1">Email</div>
                <div className="flex items-center gap-2">
                  <a href={`mailto:${profileData.email}`} className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                    {profileData.email}
                  </a>
                  <button
                    onClick={() => copyToClipboard(profileData.email, 'email')}
                    className="group"
                    title="Copy to clipboard"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-gray-700 transition-colors" style={{ color: undefined }} onMouseEnter={(e) => e.currentTarget.style.color = '#4db9eb'} onMouseLeave={(e) => e.currentTarget.style.color = ''} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Phone — click clipboard to copy */}
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-green-500/50 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-mono text-[10px] text-green-500/40 tracking-wider uppercase mb-1">Phone</div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400 hover:text-green-400 transition-colors cursor-default">
                    {profileData.phone}
                  </span>
                  <button
                    onClick={() => copyToClipboard(profileData.phone, 'phone')}
                    className="group"
                    title="Copy to clipboard"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-gray-700 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#4db9eb'} onMouseLeave={(e) => e.currentTarget.style.color = ''} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Terminal */}
          <div>
            <div className="border border-gray-800/40 bg-black/30 p-6 font-mono text-[11px] h-full">
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

        {/* Connect — centered, no Twitter, added Mail and Phone */}
        <div className="text-center">
          <div className="h-px bg-gray-800/50 mb-8" />
          <div className="font-mono text-[10px] text-green-500/40 tracking-wider uppercase mb-4">Connect</div>
          <div className="flex items-center justify-center gap-6">
            <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
              <Github className="w-4 h-4" />
              <span className="font-mono text-xs">GitHub</span>
            </a>
            <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
              <Linkedin className="w-4 h-4" />
              <span className="font-mono text-xs">LinkedIn</span>
            </a>
            <a href={`mailto:${profileData.email}`} className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="font-mono text-xs">Mail</span>
            </a>
            <a href={`tel:${profileData.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-mono text-xs">Phone</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;

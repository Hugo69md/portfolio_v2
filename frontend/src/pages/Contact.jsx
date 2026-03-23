import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, MapPin, Mail, Phone, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { profileData, contactMessages } from '@/data/mock';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: 'Error', description: 'Please fill in all required fields.', variant: 'destructive' });
      return;
    }
    setSending(true);
    // Mock: save to local array
    setTimeout(() => {
      contactMessages.push({
        ...formData,
        id: Date.now().toString(),
        timestamp: new Date().toISOString()
      });
      setSending(false);
      setSent(true);
      toast({ title: 'Message sent!', description: 'Thank you for reaching out. I will get back to you soon.' });
    }, 1200);
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
        <p className="font-mono text-base text-white mb-12 leading-relaxed">
          Have a project in mind? Let's discuss how data can drive your decisions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-green-500/50 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-mono text-[10px] text-green-500/40 tracking-wider uppercase mb-1">Location</div>
                  <div className="text-sm text-gray-400">{profileData.location}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-green-500/50 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-mono text-[10px] text-green-500/40 tracking-wider uppercase mb-1">Email</div>
                  <a href={`mailto:${profileData.email}`} className="text-sm text-gray-400 hover:text-green-400 transition-colors">
                    {profileData.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-green-500/50 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-mono text-[10px] text-green-500/40 tracking-wider uppercase mb-1">Phone</div>
                  <div className="text-sm text-gray-400">{profileData.phone}</div>
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-800/50" />

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

            {/* Terminal-style decoration */}
            <div className="border border-gray-800/40 bg-black/30 p-4 font-mono text-[10px]">
              <div className="text-green-500/50 mb-1">$ whoami</div>
              <div className="text-gray-400 mb-2">{profileData.name.toLowerCase().replace(' ', '.')}</div>
              <div className="text-green-500/50 mb-1">$ cat status.txt</div>
              <div className="text-gray-400 mb-2">Available for freelance & consulting</div>
              <div className="text-green-500/50">$ _<span className="animate-pulse">|</span></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="font-mono text-lg text-gray-300 mb-2">Message Sent</h3>
                <p className="text-sm text-gray-500 mb-6">Thank you for reaching out. I'll respond within 24 hours.</p>
                <button
                  onClick={() => { setSent(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                  className="font-mono text-xs text-green-400/60 hover:text-green-400 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[10px] text-green-500/40 tracking-wider uppercase mb-2 block">Name *</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Your name"
                      className="bg-black/40 border-gray-800 text-gray-300 font-mono text-sm placeholder:text-gray-700 focus:border-green-500/40 focus:ring-green-500/20"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] text-green-500/40 tracking-wider uppercase mb-2 block">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your@email.com"
                      className="bg-black/40 border-gray-800 text-gray-300 font-mono text-sm placeholder:text-gray-700 focus:border-green-500/40 focus:ring-green-500/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[10px] text-green-500/40 tracking-wider uppercase mb-2 block">Subject</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    placeholder="Project inquiry"
                    className="bg-black/40 border-gray-800 text-gray-300 font-mono text-sm placeholder:text-gray-700 focus:border-green-500/40 focus:ring-green-500/20"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-green-500/40 tracking-wider uppercase mb-2 block">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="bg-black/40 border-gray-800 text-gray-300 font-mono text-sm placeholder:text-gray-700 focus:border-green-500/40 focus:ring-green-500/20 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center gap-2 px-6 py-3 font-mono text-sm tracking-wider border border-green-500/40 text-green-400 hover:bg-green-500/10 transition-all duration-300 disabled:opacity-50"
                >
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-green-400/30 border-t-green-400 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

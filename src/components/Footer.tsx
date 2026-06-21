import React, { useState } from 'react';
import { CV_DATA } from '../data';
import { Mail, Phone, MapPin, Send, MessageSquareText, Loader2, Github, Linkedin, Instagram, CheckCircle, XCircle, Download } from 'lucide-react';

const socialIcons = {
  Github: <Github className="w-4 h-4" />,
  Linkedin: <Linkedin className="w-4 h-4" />,
  Instagram: <Instagram className="w-4 h-4" />
};

export const Footer = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('idle');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CV_DATA.email}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Contact Request from ${formState.name}`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#020202] mt-24 py-24 relative overflow-hidden" id="contact">
      {/* Background Glyph Elements */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-white/5" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

        {/* Left: Contact Info & Status */}
        <div className="flex flex-col">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-8 uppercase tracking-tight">
            Connect<span className="text-zinc-700">_</span>
          </h2>

          <p className="text-zinc-400 font-light max-w-md mb-16 text-lg leading-relaxed">
            Open to full-time roles & freelance opportunities. Send a message to get in touch.
          </p>

          <div className="space-y-12">
            <ul className="space-y-6 font-mono text-sm text-zinc-400">
              <li className="flex items-center"><Mail className="w-4 h-4 mr-4 text-white" /> <a href={`mailto:${CV_DATA.email}`} className="hover:text-white transition-colors uppercase">{CV_DATA.email}</a></li>
              <li className="flex items-center"><Phone className="w-4 h-4 mr-4 text-white" /> {CV_DATA.phone}</li>
              <li className="flex items-center"><MapPin className="w-4 h-4 mr-4 text-white" /> <span className="uppercase">{CV_DATA.location}</span></li>
            </ul>

            <div className="flex gap-6">
              {CV_DATA.socials?.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {socialIcons[social.icon as keyof typeof socialIcons]}
                </a>
              ))}
            </div>

            <div>
              <a href="/resume.pdf" download="Seth_Lokou_Resume.pdf" className="inline-flex items-center px-6 py-3 rounded-xl border border-white/20 hover:bg-white/5 uppercase tracking-widest text-xs text-white font-mono hover-lift transition-all">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex flex-col justify-end">
          <div className="bg-[#020202] border border-white/10 p-8 md:p-12 relative group">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/30" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/30" />

            <div className="flex items-center space-x-3 mb-10">
              <MessageSquareText className="w-5 h-5 text-white/50" />
              <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-white">Compose Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                  className="peer w-full bg-transparent border-b border-white/20 pb-2 text-white font-mono focus:outline-none focus:border-white transition-colors rounded-none px-0 placeholder-transparent"
                  placeholder="Name"
                />
                <label htmlFor="name" className="absolute left-0 -top-4 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 peer-placeholder-shown:top-0 peer-placeholder-shown:text-xs peer-placeholder-shown:text-zinc-500 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-white transition-all">Name</label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                  className="peer w-full bg-transparent border-b border-white/20 pb-2 text-white font-mono focus:outline-none focus:border-white transition-colors rounded-none px-0 placeholder-transparent"
                  placeholder="Email"
                />
                <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 peer-placeholder-shown:top-0 peer-placeholder-shown:text-xs peer-placeholder-shown:text-zinc-500 peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-white transition-all">Email</label>
              </div>

              <div className="relative pt-2">
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                  className="peer w-full bg-transparent border-b border-white/20 pb-2 text-white font-mono focus:outline-none focus:border-white transition-colors rounded-none px-0 resize-none placeholder-transparent"
                  placeholder="Message"
                />
                <label htmlFor="message" className="absolute left-0 -top-2 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 peer-placeholder-shown:top-2 peer-placeholder-shown:text-xs peer-placeholder-shown:text-zinc-500 peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-white transition-all">Message</label>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-white text-black font-mono uppercase tracking-[0.2em] text-xs px-6 py-4 flex items-center justify-between hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed group/btn mt-4"
              >
                <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                {isSending ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-start text-green-400 text-xs font-mono mt-4">
                  <CheckCircle className="w-4 h-4 mr-2 shrink-0" />
                  <span>Message sent successfully!</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center text-red-400 text-xs font-mono mt-4">
                  <XCircle className="w-4 h-4 mr-2 shrink-0" />
                  <span>Failed to send message. Please try again.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-6 mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-mono tracking-widest uppercase border-t border-white/5 relative z-10 gap-6">
        <p>Copyright © 2026 and designed by SETHCODES</p>

        <p className="flex items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 mr-2" />

        </p>
      </div>
    </footer>
  );
};

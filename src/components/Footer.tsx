import React, { useState } from 'react';
import { CV_DATA } from '../data';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, CheckCircle, XCircle, Download, Loader2 } from 'lucide-react';

const socialIcons: Record<string, React.ReactNode> = {
  Github: <Github className="w-5 h-5" />,
  Linkedin: <Linkedin className="w-5 h-5" />,
  Instagram: <Instagram className="w-5 h-5" />,
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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _subject: `New Contact Request from ${formState.name}`,
        }),
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
    <footer className="footer relative overflow-hidden" id="contact">
      {/* CTA Marquee */}
      <div className="marquee-cta">
        <a href={`mailto:${CV_DATA.email}`} className="marquee-track">
          <div className="animate-marquee">
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="marquee-child-item">
                  <div className="text-6xl md:text-8xl font-bold uppercase tracking-tight">Contact Me</div>
                </div>
                <div className="marquee-child-item">
                  <div className="dot" />
                </div>
                <div className="marquee-child-item">
                  <div className="text-6xl md:text-8xl font-bold uppercase tracking-tight">Hire Me</div>
                </div>
                <div className="marquee-child-item">
                  <div className="dot" />
                </div>
              </React.Fragment>
            ))}
          </div>
        </a>
      </div>

      <div className="max-w-[890px] mx-auto px-4 md:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div className="flex flex-col">
            <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-8">
              Connect<span className="text-white/20">_</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-md mb-16">
              Open to full-time roles & freelance opportunities. Send a message to get in touch.
            </p>

            <div className="space-y-12">
              <ul className="space-y-6 text-sm text-white/70 uppercase tracking-widest">
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-4 text-white" />
                  <a href={`mailto:${CV_DATA.email}`} className="hover:text-j-primary transition-colors">
                    {CV_DATA.email}
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-4 text-white" />
                  {CV_DATA.phone}
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-4 text-white" />
                  {CV_DATA.location}
                </li>
              </ul>

              <div className="flex gap-4">
                {CV_DATA.socials?.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-j-primary hover:border-j-primary transition-colors"
                    aria-label={social.name}
                  >
                    {socialIcons[social.icon]}
                  </a>
                ))}
              </div>

              <div>
                <a
                  href="/resume.pdf"
                  download="Seth_Lokou_Resume.pdf"
                  className="j-pill inline-flex"
                >
                  <span className="text-body-1 text">Download CV</span>
                  <span className="icon">
                    <Download className="w-5 h-5" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex flex-col justify-end">
            <div className="j-card p-8 md:p-12">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-2 h-2 rounded-full bg-j-primary" />
                <h3 className="text-sm uppercase tracking-[0.2em] text-white/70">Compose Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="j-input"
                    placeholder="Name"
                  />
                  <label htmlFor="name" className="absolute left-0 -top-4 text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="j-input"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-4 text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Email
                  </label>
                </div>

                <div className="relative pt-2">
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="j-input resize-none"
                    placeholder="Message"
                  />
                  <label htmlFor="message" className="absolute left-0 -top-2 text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-white text-black font-bold uppercase tracking-[0.2em] text-xs px-6 py-4 flex items-center justify-between hover:bg-j-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                  {isSending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>

                {status === 'success' && (
                  <div className="flex items-start text-green-400 text-xs mt-4">
                    <CheckCircle className="w-4 h-4 mr-2 shrink-0" />
                    <span>Message sent successfully!</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center text-red-400 text-xs mt-4">
                    <XCircle className="w-4 h-4 mr-2 shrink-0" />
                    <span>Failed to send message. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[890px] mx-auto px-4 md:px-6 lg:px-8 py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 uppercase tracking-widest gap-4">
        <p>Copyright © 2026 and designed by SETHCODES</p>
        <p className="flex items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40 mr-2" />
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

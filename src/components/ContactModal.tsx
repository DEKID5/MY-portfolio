import React, { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

export const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleHashChange = () => {
      setIsOpen(window.location.hash === '#compose');
    };
    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const close = () => {
    window.location.hash = '';
    setIsOpen(false);
    setTimeout(() => setStatus('idle'), 300); // Reset after animation
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    
    // Web3Forms Access Key
    // Web3Forms Access Key
    formData.append("access_key", "2b6774d9-49fa-4793-a85c-016ea1681aa3"); 

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      
      if (data.success) {
        setStatus('success');
        setTimeout(close, 3000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-matias-card border border-white/10 w-full max-w-lg rounded-3xl p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={close}
          className="absolute top-6 right-6 text-white/50 hover:text-[#ccff00] transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="text-3xl font-bold mb-2">Send a Message</h3>
        <p className="text-white/50 mb-8">Fill out the form below and it will be sent directly to my email.</p>

        {status === 'success' ? (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full matias-bg-accent flex items-center justify-center mb-4">
              <Send size={28} className="text-black ml-[-2px] mt-[2px]" />
            </div>
            <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
            <p className="text-white/50">I will get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input type="hidden" name="subject" value="New Contact Message from Portfolio" />
            <input type="hidden" name="from_name" value="Your Portfolio Website" />
            
            <div>
              <label htmlFor="name" className="block text-sm text-white/60 mb-2 tracking-widest uppercase">Your Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                required
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm text-white/60 mb-2 tracking-widest uppercase">Your Email</label>
              <input 
                type="email" 
                name="email" 
                id="email"
                required
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-white/60 mb-2 tracking-widest uppercase">Message</label>
              <textarea 
                name="message" 
                id="message" 
                required
                rows={4}
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#ccff00] transition-colors resize-none"
                placeholder="Hello, I would like to talk about..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="matias-btn w-full mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center gap-2"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
              {status !== 'submitting' && <Send size={18} />}
            </button>
            
            {status === 'error' && (
              <p className="text-red-500 text-sm text-center mt-2">There was an error sending your message. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

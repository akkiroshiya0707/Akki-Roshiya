import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Youtube, Twitter, ArrowUp, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="section-padding bg-bg border-t border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 mb-20 md:mb-32">
          <div className="lg:col-span-5 space-y-8 md:space-y-10">
            <a href="#" className="text-display text-2xl md:text-3xl tracking-[0.4em] hover:text-accent transition-all duration-500 group inline-block">
              AR<span className="text-accent group-hover:text-white transition-colors">.</span>
            </a>
            <p className="text-muted text-base md:text-lg font-light leading-relaxed max-w-sm">
              I craft visual narratives focused on clarity and professional storytelling for brands and commercials.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
            <div className="space-y-6 md:space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Navigation</h4>
              <ul className="space-y-3 md:space-y-4">
                {['Work', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-muted hover:text-accent text-sm font-light transition-all duration-500 hover:translate-x-2 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Studio</h4>
              <ul className="space-y-4 md:space-y-6">
                <li className="flex items-start gap-3 text-muted text-sm font-light">
                  <MapPin size={16} className="text-accent shrink-0" />
                  <span>Ahmedabad, India <br /> Worldwide</span>
                </li>
                <li className="flex items-center gap-3 text-muted text-sm font-light">
                  <Mail size={16} className="text-accent shrink-0" />
                  <a href="mailto:akkiroshiya77@gmail.com" className="hover:text-accent transition-colors">akkiroshiya77@gmail.com</a>
                </li>
              </ul>
            </div>

            <div className="hidden md:block space-y-8">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">Availability</h4>
              <p className="text-muted text-sm font-light leading-relaxed">
                Available for projects <br /> & collaborations worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted/50 font-bold">
            © {new Date().getFullYear()} Akki Roshiya Studio. All Rights Reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold text-muted hover:text-accent transition-all duration-500 group"
          >
            Back to top <ArrowUp size={16} className="group-hover:-translate-y-2 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-bg">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=2070"
          alt="Cinematic Background"
          className="h-full w-full object-cover scale-105 animate-slow-zoom"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/60 to-bg z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-transparent z-10 opacity-80" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full container-custom flex flex-col justify-center">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-10 bg-accent shadow-[0_0_10px_rgba(255,106,0,0.5)]" />
            <span className="text-accent uppercase tracking-[0.6em] text-[10px] font-bold">
              Cinematographer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="h1 mb-8 tracking-tight"
          >
            AKKI <br />
            <span className="text-muted/40 hover:text-accent transition-colors duration-1000 cursor-default">ROSHIYA</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="text-muted text-base md:text-lg font-light tracking-wide max-w-lg mb-4 leading-relaxed"
          >
            Cinematographer focused on impactful visual storytelling for brands, events, and commercials.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="text-accent/60 text-[10px] uppercase tracking-[0.4em] font-bold mb-10"
          >
            Based in Ahmedabad, India
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="flex flex-wrap items-center gap-10"
          >
            <motion.a 
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-4 px-12 py-5 bg-accent text-white rounded-minimal overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,106,0,0.4)]"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 text-[11px] uppercase tracking-[0.4em] font-bold">VIEW WORK</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Watermark Logo */}
      <div className="absolute bottom-12 left-12 z-20 hidden md:block opacity-20 hover:opacity-100 transition-opacity duration-1000">
        <span className="text-display text-4xl tracking-[0.4em]">AR.</span>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 right-12 z-20 flex flex-col items-center gap-6"
      >
        <span className="text-[9px] uppercase tracking-[0.6em] font-bold text-muted rotate-90 origin-right translate-x-4">
          Scroll to explore
        </span>
        <div className="h-24 w-[1px] bg-gradient-to-b from-white/20 via-accent to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 96] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white/40"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-surface/30 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] pointer-events-none" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative aspect-square overflow-hidden rounded-minimal border border-white/5"
          >
            <img
              key="profile-image-v3"
              src="https://lh3.googleusercontent.com/d/1ZrVdyy7wJqjdhOHFXuzYtFshBWEIM9Cs"
              alt="Akki Roshiya - Cinematographer"
              className="w-full h-full object-cover transition-all duration-1000 relative z-0"
              referrerPolicy="no-referrer"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://drive.google.com/uc?export=view&id=1ZrVdyy7wJqjdhOHFXuzYtFshBWEIM9Cs";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-8 left-8">
              <span className="text-accent text-[8px] uppercase tracking-[0.6em] font-bold block mb-2">Based in</span>
              <span className="text-display text-xl">Ahmedabad, India</span>
            </div>
          </motion.div>

          {/* Text Side */}
          <div className="lg:col-span-7 space-y-8 md:space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-10 bg-accent/50" />
                <span className="text-accent uppercase tracking-[0.6em] text-[10px] font-bold">
                  The Vision
                </span>
              </div>
              <h2 className="h2">
                Crafting <br />
                <span className="text-muted/40">Visual Identity</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted text-base md:text-lg font-light leading-relaxed max-w-2xl">
              <p>
                I am a cinematographer based in Ahmedabad, India, specializing in visual storytelling for commercials, events, and brand films. My approach is defined by technical precision, creative lighting, and a commitment to capturing the essence of every project.
              </p>
              <p>
                With experience across diverse production environments, I focus on delivering high-quality cinematic visuals that resonate with audiences. I believe in the power of a well-composed frame and the impact of authentic storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

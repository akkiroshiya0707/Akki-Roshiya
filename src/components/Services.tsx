import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';

const Services = () => {
  return (
    <section id="services" className="section-padding bg-bg relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
          <div className="lg:col-span-5">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-10 bg-accent/50" />
                <span className="text-accent uppercase tracking-[0.6em] text-[10px] font-bold">
                  Expertise
                </span>
              </div>
              <h2 className="h2">
                What <br />
                <span className="text-muted/40">I Do</span>
              </h2>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-10 md:space-y-16">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="group border-b border-white/5 pb-10 md:pb-16 relative"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-accent font-mono text-xs">0{index + 1}</span>
                  <h3 className="h3 group-hover:text-accent transition-all duration-700">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted text-sm md:text-base font-light leading-relaxed max-w-2xl ml-auto text-right">
                  {service.description}
                </p>
                
                {/* Subtle Hover Glow */}
                <div className="absolute -inset-x-6 -inset-y-4 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-700 pointer-events-none rounded-minimal" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

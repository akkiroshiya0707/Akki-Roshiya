import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-ink text-ivory overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-editorial overflow-hidden aspect-[4/3]"
            >
              <img 
                src="https://images.unsplash.com/photo-1492691523567-61723c275df1?auto=format&fit=crop&q=80&w=800" 
                alt="Studio setup"
                className="w-full h-full object-cover grayscale opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Quote size={80} className="text-accent opacity-50" />
              </div>
            </motion.div>
          </div>

          <div className="space-y-12">
            <h2 className="text-display text-6xl">recognition</h2>
            
            <div className="space-y-16">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative pl-12 border-l-2 border-accent/30"
                >
                  <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-sm">{t.author}</h4>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';
import { motion } from 'motion/react';
import { EXHIBITIONS } from '../constants';
import { Ticket } from 'lucide-react';

const Exhibitions = () => {
  return (
    <section id="exhibitions" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-20 overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-20"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="text-[6vw] text-display opacity-10">exhibitions.</span>
            ))}
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {EXHIBITIONS.map((ex, i) => (
            <motion.div
              key={ex.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white p-8 md:p-12 rounded-3xl border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 hover:bg-ink hover:text-ivory transition-all duration-500"
            >
              <div className="flex items-center gap-8">
                <span className="text-gray-300 group-hover:text-gray-600 font-mono text-sm">0{i + 1}</span>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic">
                    {ex.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-12 text-right">
                <div className="text-center md:text-right">
                  <p className="text-[10px] uppercase tracking-widest font-bold group-hover:text-accent transition-colors">
                    {ex.location}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{ex.date}</p>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full border border-ink group-hover:border-ivory text-[10px] uppercase tracking-widest font-bold flex items-center gap-2"
                >
                  <Ticket size={14} />
                  Buy Ticket
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exhibitions;

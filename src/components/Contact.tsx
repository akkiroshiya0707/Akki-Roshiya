import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding bg-bg relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-10 bg-accent/50" />
                <span className="text-accent uppercase tracking-[0.6em] text-[10px] font-bold">
                  Get in Touch
                </span>
              </div>
              <h2 className="h2">
                Let's talk <br />
                <span className="text-muted/40">Business</span>
              </h2>
              <p className="text-muted text-base md:text-lg font-light tracking-wide max-w-md">
                Have a project in mind? Let’s talk.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-minimal bg-surface flex items-center justify-center text-accent group-hover:shadow-[0_0_20px_rgba(255,106,0,0.2)] transition-all duration-500">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-accent text-[8px] uppercase tracking-[0.4em] font-bold block mb-1">Email</span>
                  <a href="mailto:akkiroshiya77@gmail.com" className="text-lg md:text-xl hover:text-accent transition-colors">akkiroshiya77@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-minimal bg-surface flex items-center justify-center text-accent group-hover:shadow-[0_0_20px_rgba(255,106,0,0.2)] transition-all duration-500">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-accent text-[8px] uppercase tracking-[0.4em] font-bold block mb-1">Location</span>
                  <p className="text-lg md:text-xl">Ahmedabad, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-7 bg-surface/30 backdrop-blur-sm p-8 md:p-12 rounded-minimal border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-muted ml-1">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none transition-colors text-base font-light"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-muted ml-1">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none transition-colors text-base font-light"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.4em] font-bold text-muted ml-1">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:border-accent outline-none transition-colors text-base font-light resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-accent text-white rounded-minimal text-[11px] uppercase tracking-[0.5em] font-bold hover:shadow-[0_0_30px_rgba(255,106,0,0.4)] transition-all duration-500 flex items-center justify-center gap-4 group"
              >
                {submitted ? 'Message Sent' : 'Send Inquiry'} 
                {!submitted && <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />}
              </button>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold text-center mt-4"
                >
                  Thank you. I'll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

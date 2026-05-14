import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0B0F19]">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 font-bold uppercase tracking-widest text-sm">
              Connect
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Let's Build Together</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Looking for a dedicated Cloud/DevOps intern? I'm open to opportunities and exciting projects. Let's start a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
          
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6 flex flex-col justify-center"
          >
             <a href="mailto:avitiwari5103@gmail.com" className="block">
                <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:-translate-y-1 hover:border-primary-500/30 transition-all cursor-pointer overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                     <FiMail className="w-6 h-6" />
                   </div>
                   <div>
                     <span className="block text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-1">Email</span>
                     <span className="text-lg font-medium text-slate-900 dark:text-white">avitiwari5103@gmail.com</span>
                   </div>
                </div>
             </a>

             <a href="tel:+919116834707" className="block">
                <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:-translate-y-1 hover:border-accent-500/30 transition-all cursor-pointer overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="w-14 h-14 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center text-accent-600 dark:text-accent-400 group-hover:scale-110 transition-transform">
                     <FiPhone className="w-6 h-6" />
                   </div>
                   <div>
                     <span className="block text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-1">Phone</span>
                     <span className="text-lg font-medium text-slate-900 dark:text-white">+91 9116834707</span>
                   </div>
                </div>
             </a>

             <div className="glass-card p-6 rounded-2xl flex items-center gap-6 group hover:-translate-y-1 transition-all overflow-hidden relative border border-white/40 dark:border-slate-700/50">
                <div className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:scale-110 transition-transform">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase mb-1">Location</span>
                  <span className="text-lg font-medium text-slate-900 dark:text-white">Jaipur, Rajasthan, India</span>
                </div>
             </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form className="glass-card p-8 md:p-12 rounded-3xl h-full flex flex-col gap-8 relative border-white/60 dark:border-slate-700/50 backdrop-blur-2xl bg-white/80 dark:bg-[#111827]/80" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 px-0 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="absolute left-0 top-3 text-slate-500 dark:text-slate-400 text-lg transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary-500 peer-valid:-top-4 peer-valid:text-sm cursor-text">Your Name</label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-700 px-0 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-accent-500 dark:focus:border-accent-500 transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute left-0 top-3 text-slate-500 dark:text-slate-400 text-lg transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-accent-500 peer-valid:-top-4 peer-valid:text-sm cursor-text">Your Email</label>
                </div>
              </div>

              <div className="relative group flex-grow">
                <textarea 
                  id="message" 
                  required
                  className="w-full h-full min-h-[150px] bg-transparent border-b-2 border-slate-300 dark:border-slate-700 px-0 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-primary-500 transition-colors peer resize-none"
                  placeholder=" "
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-3 text-slate-500 dark:text-slate-400 text-lg transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-primary-500 peer-valid:-top-4 peer-valid:text-sm cursor-text">How can I help you?</label>
              </div>

              <button 
                type="submit"
                className="group relative w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold text-lg overflow-hidden transition-all shadow-xl shadow-slate-900/20 dark:shadow-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                  Send Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

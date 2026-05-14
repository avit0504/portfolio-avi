import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6 border border-primary-100 dark:border-primary-800/50 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Available for Internships
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              Hi, I'm <br />
              <span className="text-gradient block mt-2">Avi Tiwari.</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-6">
              Cloud & DevOps Engineer
            </h2>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-10">
              Passionate about building scalable cloud infrastructure, mastering Docker & Kubernetes, and automating deployment workflows. Currently honing my skills at Regex Software.
            </p>

            <div className="flex flex-wrap gap-5 items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold overflow-hidden transition-all shadow-xl shadow-slate-900/20 dark:shadow-white/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 glass-card rounded-xl font-semibold text-slate-800 dark:text-white hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Abstract Hero Graphic */}
        <div className="hidden lg:flex lg:col-span-4 justify-center items-center relative h-full pointer-events-none">
           <motion.div 
             animate={{ 
               y: [0, -20, 0],
               rotate: [0, 5, -5, 0]
             }}
             transition={{ 
               duration: 6, 
               repeat: Infinity,
               ease: "easeInOut" 
             }}
             className="relative w-72 h-72"
           >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-accent-500 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-80 blur-xl"></div>
              <div className="absolute inset-2 glass-card rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border-2 border-white/40 dark:border-white/10 z-10 flex items-center justify-center">
                 <div className="w-32 h-32 bg-gradient-to-br from-white to-transparent dark:from-white/20 rounded-full opacity-30"></div>
              </div>
           </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border-2 border-slate-400 dark:border-slate-600 flex justify-center p-1"
        >
          <div className="w-1 h-3 bg-primary-500 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

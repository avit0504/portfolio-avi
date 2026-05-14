import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 font-bold uppercase tracking-widest text-sm">
              Path
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Experience & Education</h2>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Glowing animated timeline line */}
          <div className="absolute left-4 md:left-[50%] top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-800 -translate-x-1/2"></div>
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-[50%] top-0 w-[2px] bg-gradient-to-b from-primary-500 to-accent-500 -translate-x-1/2 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          ></motion.div>

          <div className="space-y-24">
            {/* Experience Item */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, type: "spring" }}
                className="absolute left-4 md:left-[50%] top-6 w-5 h-5 rounded-full bg-slate-900 dark:bg-white border-4 border-primary-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] -translate-x-1/2 z-10"
              ></motion.div>
              
              <div className="md:grid md:grid-cols-2 gap-8 items-center pl-12 md:pl-0">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="md:text-right md:pr-12 mb-4 md:mb-0"
                >
                  <span className="text-primary-600 dark:text-primary-400 font-bold tracking-wider text-sm block uppercase mb-1">September 2025 – Present</span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Regex Software, Jaipur</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="md:pl-12"
                >
                  <div className="glass-card p-8 rounded-2xl border border-primary-500/20 relative group hover:-translate-y-1 transition-transform duration-300">
                     <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                     <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">AWS & DevOps Trainee Intern</h3>
                     <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                       Learning AWS cloud services, Docker, Kubernetes, Linux, deployment workflows, cloud infrastructure, and DevOps fundamentals with hands-on practical exposure.
                     </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Education Item */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
                className="absolute left-4 md:left-[50%] top-6 w-5 h-5 rounded-full bg-slate-900 dark:bg-white border-4 border-accent-500 shadow-[0_0_15px_rgba(139,92,246,0.5)] -translate-x-1/2 z-10"
              ></motion.div>
              
              <div className="md:grid md:grid-cols-2 gap-8 items-center pl-12 md:pl-0">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="md:text-right md:pr-12 md:col-start-1 md:row-start-1 mb-4 md:mb-0"
                >
                  <div className="glass-card p-8 rounded-2xl border border-accent-500/20 relative group hover:-translate-y-1 transition-transform duration-300">
                     <div className="absolute inset-0 bg-gradient-to-bl from-accent-500/5 to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                     <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">BCA</h3>
                     <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                       Bachelor of Computer Applications. Foundational studies in computer science, programming, and software development.
                     </p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className="md:pl-12 md:col-start-2 md:row-start-1"
                >
                  <span className="text-accent-600 dark:text-accent-400 font-bold tracking-wider text-sm block uppercase mb-1">Completed</span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Mohanlal Sukhadia University, Udaipur</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

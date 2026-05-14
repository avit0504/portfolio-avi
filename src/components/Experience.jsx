import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience & Education</h2>
        </motion.div>

        <div className="space-y-12">
          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-0"
          >
            <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
              <div className="md:col-span-2 mb-4 md:mb-0 md:text-right hidden md:block">
                <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm block">September 2025 – Present</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm">Regex Software, Jaipur</span>
              </div>
              
              <div className="relative md:col-span-3 pb-8 md:pb-0 border-l-2 md:border-l-0 md:border-l-none border-slate-200 dark:border-slate-800 pl-8 md:pl-0 md:before:hidden before:absolute before:left-[-9px] before:top-1 before:w-4 before:h-4 before:bg-white dark:before:bg-slate-900 before:border-4 before:border-primary-500 before:rounded-full">
                <div className="md:hidden mb-2">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm block">September 2025 – Present</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Regex Software, Jaipur</span>
                </div>
                
                <div className="glass-card p-6 rounded-2xl md:relative md:before:absolute md:before:left-[-41px] md:before:top-6 md:before:w-4 md:before:h-4 md:before:bg-white dark:md:before:bg-slate-900 md:before:border-4 md:before:border-primary-500 md:before:rounded-full md:border-l-2 md:border-slate-200 dark:md:border-slate-800 md:-ml-[33px] md:pl-[31px] md:border-t-0 md:border-r-0 md:border-b-0 md:rounded-l-none md:shadow-none md:bg-transparent dark:md:bg-transparent">
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">AWS & DevOps Trainee Intern</h3>
                   <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                     Learning AWS cloud services, Docker, Kubernetes, Linux, deployment workflows, cloud infrastructure, and DevOps fundamentals with hands-on practical exposure.
                   </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education Item */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative pl-8 md:pl-0"
          >
            <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
              <div className="md:col-span-2 mb-4 md:mb-0 md:text-right hidden md:block">
                <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm block">Completed</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm">Udaipur</span>
              </div>
              
              <div className="relative md:col-span-3 border-l-2 md:border-l-0 border-slate-200 dark:border-slate-800 pl-8 md:pl-0 md:before:hidden before:absolute before:left-[-9px] before:top-1 before:w-4 before:h-4 before:bg-white dark:before:bg-slate-900 before:border-4 before:border-slate-300 dark:before:border-slate-600 before:rounded-full">
                 <div className="md:hidden mb-2">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm block">Completed</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">Udaipur</span>
                </div>
                
                <div className="glass-card p-6 rounded-2xl md:relative md:before:absolute md:before:left-[-41px] md:before:top-6 md:before:w-4 md:before:h-4 md:before:bg-white dark:md:before:bg-slate-900 md:before:border-4 md:before:border-slate-300 dark:md:before:border-slate-600 md:before:rounded-full md:border-l-2 md:border-slate-200 dark:md:border-slate-800 md:-ml-[33px] md:pl-[31px] md:border-t-0 md:border-r-0 md:border-b-0 md:rounded-l-none md:shadow-none md:bg-transparent dark:md:bg-transparent">
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Bachelor of Computer Applications (BCA)</h3>
                   <p className="text-slate-600 dark:text-slate-400 text-sm">
                     Mohanlal Sukhadia University
                   </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

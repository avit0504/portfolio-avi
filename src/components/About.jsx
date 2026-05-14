import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
          <div className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed relative z-10">
              I am a motivated and continuously learning Cloud & DevOps intern with hands-on exposure to AWS cloud technologies, Docker, Kubernetes, Linux, and scalable deployment practices. 
              <br /><br />
              My journey in tech began with a Bachelor of Computer Applications (BCA), and I have since developed a strong interest in cloud infrastructure, automation, and modern DevOps workflows. I am dedicated to building robust, scalable systems and optimizing deployment pipelines. Currently, I am expanding my practical knowledge at Regex Software, aiming to transition into a full-time Cloud/DevOps Engineering role.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

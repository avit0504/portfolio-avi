import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiFileText } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm md:text-base">
          Welcome to my portfolio
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight"
      >
        Hi, I'm <span className="text-primary-600 dark:text-primary-500">Avi Tiwari</span>.
        <br />
        Cloud & DevOps Intern.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed"
      >
        AWS & DevOps trainee passionate about cloud infrastructure, Docker, Kubernetes, and scalable systems.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-4 text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed"
      >
        I have completed my Bachelor of Computer Applications (BCA) from Mohanlal Sukhadia University, Udaipur. Currently, I am gaining experience as an AWS and DevOps trainee intern at Regex Software, Jaipur. I am learning AWS cloud services, Docker, Kubernetes, Python, Linux, Windows, C, and HTML while building strong practical and technical skills for a future career as a Cloud/DevOps Engineer.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-primary-600/30"
        >
          View Projects <FiArrowRight />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-medium transition-colors"
        >
          Contact Me
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-300 rounded-lg font-medium transition-colors"
        >
          View Resume <FiFileText />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

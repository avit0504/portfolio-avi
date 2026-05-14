import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaDocker, FaPython, FaLinux, FaWindows, FaHtml5, FaGitAlt } from 'react-icons/fa';
import { SiKubernetes, SiGithubactions, SiC } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skills = [
  { name: "AWS", icon: <FaAws className="text-[#FF9900]" />, size: "lg", x: "-20%", y: "-10%" },
  { name: "Docker", icon: <FaDocker className="text-[#2496ED]" />, size: "lg", x: "15%", y: "-25%" },
  { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" />, size: "md", x: "30%", y: "15%" },
  { name: "Python", icon: <FaPython className="text-[#3776AB]" />, size: "md", x: "-35%", y: "20%" },
  { name: "GitHub Actions", icon: <SiGithubactions className="text-[#2088FF]" />, size: "sm", x: "10%", y: "40%" },
  { name: "Linux", icon: <FaLinux className="text-slate-800 dark:text-white" />, size: "sm", x: "-15%", y: "-40%" },
  { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, size: "sm", x: "40%", y: "-5%" },
  { name: "C", icon: <SiC className="text-[#A8B9CC]" />, size: "xs", x: "-40%", y: "-15%" },
  { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" />, size: "xs", x: "-5%", y: "25%" },
  { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" />, size: "xs", x: "-25%", y: "45%" },
  { name: "Windows", icon: <FaWindows className="text-[#0078D6]" />, size: "xs", x: "35%", y: "35%" },
];

const Skills = () => {
  const getSizeClass = (size) => {
    switch(size) {
      case 'lg': return 'text-xl px-6 py-4 border-2';
      case 'md': return 'text-lg px-5 py-3 border-2';
      case 'sm': return 'text-base px-4 py-2 border';
      case 'xs': return 'text-sm px-3 py-1.5 border';
      default: return 'text-base px-4 py-2 border';
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#080B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative z-10"
        >
          <div className="inline-block mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 font-bold uppercase tracking-widest text-sm">
              My Arsenal
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">Technologies I Use</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A constellation of tools I leverage to build, deploy, and scale robust applications.
          </p>
        </motion.div>

        <div className="relative h-[400px] md:h-[600px] w-full max-w-4xl mx-auto mt-10 hidden md:block">
          {/* Center Orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 blur-3xl opacity-20 dark:opacity-40 animate-pulse-slow pointer-events-none"></div>

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.1 
              }}
              style={{
                position: 'absolute',
                top: `calc(50% + ${skill.y})`,
                left: `calc(50% + ${skill.x})`,
              }}
              className="z-10"
            >
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4 + (index % 3), 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                className={`glass-card rounded-full flex items-center gap-3 cursor-default hover:border-primary-500/50 hover:shadow-neon transition-all duration-300 border-white/60 dark:border-slate-700/50 ${getSizeClass(skill.size)}`}
              >
                <div className="text-2xl">{skill.icon}</div>
                <span className="font-semibold text-slate-800 dark:text-slate-200 whitespace-nowrap">{skill.name}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View - Fallback to simpler flex layout since absolute positioning is tricky on small screens */}
        <div className="md:hidden flex flex-wrap justify-center gap-4 mt-8">
           {skills.map((skill, index) => (
             <motion.div
               key={`mob-${index}`}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.3, delay: index * 0.05 }}
               className="glass-card px-4 py-2 rounded-full flex items-center gap-2 border border-white/40 dark:border-slate-700/50"
             >
                <div className="text-lg">{skill.icon}</div>
                <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">{skill.name}</span>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;

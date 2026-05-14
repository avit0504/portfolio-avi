import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaDocker, FaPython, FaLinux, FaWindows, FaHtml5, FaGitAlt } from 'react-icons/fa';
import { SiKubernetes, SiGithubactions, SiC } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillsData = [
  {
    category: "Cloud",
    skills: [
      { name: "AWS EC2", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "AWS S3", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "AWS IAM", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "AWS Lambda", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "CloudFront", icon: <FaAws className="text-[#FF9900]" /> },
      { name: "DynamoDB", icon: <FaAws className="text-[#FF9900]" /> }
    ]
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
      { name: "GitHub Actions", icon: <SiGithubactions className="text-[#2088FF]" /> }
    ]
  },
  {
    category: "Programming",
    skills: [
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "C", icon: <SiC className="text-[#A8B9CC]" /> },
      { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> }
    ]
  },
  {
    category: "Tools & OS",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
      { name: "Linux", icon: <FaLinux className="text-slate-800 dark:text-white" /> },
      { name: "Windows", icon: <FaWindows className="text-[#0078D6]" /> }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to build scalable infrastructure and applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

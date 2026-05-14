import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "Cloud-Based Tiffin Delivery & Live Tracking",
    description: "A full-stack application featuring user authentication, seamless order management, and real-time delivery tracking.",
    features: [
      "RESTful Node.js/Express APIs",
      "Real-time Google Maps integration",
      "Dockerized backend services",
      "AWS cloud deployment architecture"
    ],
    tags: ["Node.js", "Express", "MongoDB", "Docker", "AWS", "Google Maps"],
    color: "from-blue-500 to-primary-500"
  },
  {
    title: "Scalable Media Processing Platform",
    subtitle: "AWS Capstone Project",
    description: "An event-driven serverless platform built entirely on AWS for automated media ingestion and AI-powered metadata extraction.",
    features: [
      "Serverless EventBridge & SQS queues",
      "Automated S3 thumbnail generation",
      "AI label detection via AWS Rekognition",
      "Global edge delivery using CloudFront"
    ],
    tags: ["AWS S3", "Lambda", "EventBridge", "DynamoDB", "Rekognition", "CloudFront"],
    color: "from-accent-500 to-purple-600"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center md:text-left"
        >
          <div className="inline-block mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 font-bold uppercase tracking-widest text-sm">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight flex items-center md:justify-start justify-center gap-4">
            Featured Work
            <div className="h-[2px] bg-slate-200 dark:bg-slate-800 flex-grow max-w-[200px] hidden md:block"></div>
          </h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="relative group">
              {/* Background ambient glow behind project */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-gradient-to-br ${project.color} opacity-5 blur-[100px] rounded-full pointer-events-none transition-opacity duration-500 group-hover:opacity-10`}></div>

              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${index % 2 !== 0 ? 'lg:rtl' : ''}`}>
                
                {/* Visual Placeholder (Replaces Image) */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`lg:col-span-7 relative ${index % 2 !== 0 ? 'lg:ltr' : ''}`}
                >
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden glass-card group-hover:shadow-glass-dark transition-all duration-500 group-hover:-translate-y-2">
                     <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 dark:opacity-40 mix-blend-overlay`}></div>
                     <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 p-8 text-center">
                        <div className={`w-20 h-20 mb-4 rounded-full bg-gradient-to-br ${project.color} opacity-50 blur-xl`}></div>
                        <p className="text-sm font-medium tracking-widest uppercase text-slate-700 dark:text-slate-400">Project Screenshot Placeholder</p>
                        <p className="text-xs mt-2 opacity-60 text-slate-600 dark:text-slate-500">Replace with actual image in the future.</p>
                     </div>
                  </div>
                </motion.div>

                {/* Project Details */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`lg:col-span-5 relative z-10 ${index % 2 !== 0 ? 'lg:ltr lg:text-right' : ''}`}
                >
                  {project.subtitle && (
                    <span className="text-accent-500 font-semibold tracking-wider text-sm block mb-2">{project.subtitle}</span>
                  )}
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    {project.title}
                  </h3>
                  
                  <div className="glass-card p-6 md:p-8 rounded-2xl mb-8 relative border-white/40 dark:border-slate-700/50 backdrop-blur-2xl bg-white/80 dark:bg-[#111827]/80">
                    <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mt-6 space-y-3 text-left">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className={`flex items-start gap-3 ${index % 2 !== 0 ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0`}></div>
                          <span className="text-slate-500 dark:text-slate-400 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`flex flex-wrap gap-3 mb-8 ${index % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`flex items-center gap-6 ${index % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                    <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors group/link">
                      <FiGithub className="w-5 h-5 group-hover/link:-translate-y-1 transition-transform" /> 
                      <span className="relative overflow-hidden">
                        Source
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary-500 -translate-x-full group-hover/link:translate-x-0 transition-transform"></span>
                      </span>
                    </a>
                    <a href="#" className="flex items-center gap-2 text-slate-500 hover:text-accent-600 dark:hover:text-accent-400 font-medium transition-colors group/link">
                      <FiExternalLink className="w-5 h-5 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" /> 
                      <span className="relative overflow-hidden">
                        Live Demo
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent-500 -translate-x-full group-hover/link:translate-x-0 transition-transform"></span>
                      </span>
                    </a>
                  </div>
                </motion.div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

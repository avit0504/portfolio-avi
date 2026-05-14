import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: "Cloud-Based Tiffin Delivery & Live Tracking Platform",
    description: "Developed a full-stack tiffin delivery application with user authentication, order management, and real-time delivery tracking.",
    features: [
      "RESTful APIs using Node.js and Express.js",
      "MongoDB database integration",
      "Live location tracking using Google Maps API",
      "Docker containerization",
      "Deployment on AWS cloud infrastructure",
      "Scalable backend architecture"
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "Docker", "AWS", "Google Maps API"]
  },
  {
    title: "Scalable Media Processing Platform",
    subtitle: "AWS Capstone Project",
    description: "Developed a scalable event-driven media processing platform on AWS for automated image ingestion and AI-based label detection.",
    features: [
      "Automated image ingestion and processing",
      "Thumbnail generation & metadata storage",
      "AI-based image label detection",
      "Global content delivery using CloudFront",
      "Event-driven serverless architecture"
    ],
    tags: ["AWS S3", "Lambda", "EC2", "SQS", "EventBridge", "DynamoDB", "Rekognition", "CloudFront"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Showcasing my practical experience in building scalable cloud solutions and full-stack applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-8 flex flex-col flex-grow relative">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-colors"></div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <span className="text-sm font-semibold text-primary-500 mb-4">{project.subtitle}</span>
                )}
                
                <p className="text-slate-600 dark:text-slate-300 mb-6 mt-3 leading-relaxed">
                  {project.description}
                </p>
                
                <ul className="mb-8 space-y-2 flex-grow">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm">
                      <span className="text-primary-500 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-700/50">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a href="#" className="p-2 text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors" aria-label="Github Repo">
                      <FiGithub className="w-5 h-5" />
                    </a>
                    <a href="#" className="p-2 text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors" aria-label="Live Demo">
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

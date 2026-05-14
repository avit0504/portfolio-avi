import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Stylized Visual Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-500 rounded-3xl transform rotate-6 opacity-20 blur-lg"></div>
              
              {/* Glass container */}
              <div className="absolute inset-0 glass-card rounded-3xl border border-white/50 dark:border-slate-700/50 overflow-hidden group">
                <div className="absolute inset-0 bg-slate-900/5 dark:bg-white/5"></div>
                <div className="absolute -inset-1/2 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>
                
                {/* Decorative code mockup inside */}
                <div className="absolute top-8 left-8 right-8 bottom-8 rounded-xl bg-slate-900/80 dark:bg-[#0B0F19]/90 backdrop-blur-md p-6 border border-slate-700/50 shadow-2xl flex flex-col font-mono text-sm">
                  <div className="flex gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-slate-300 space-y-2">
                    <p><span className="text-accent-400">const</span> <span className="text-primary-400">engineer</span> = {'{'}</p>
                    <p className="pl-4">name: <span className="text-green-400">'Avi Tiwari'</span>,</p>
                    <p className="pl-4">role: <span className="text-green-400">'Cloud & DevOps'</span>,</p>
                    <p className="pl-4">skills: [<span className="text-green-400">'AWS'</span>, <span className="text-green-400">'Docker'</span>, <span className="text-green-400">'K8s'</span>],</p>
                    <p className="pl-4">passion: <span className="text-green-400">'Scalability'</span></p>
                    <p>{'};'}</p>
                    <br/>
                    <p className="text-slate-500 italic">// Continuously learning and deploying</p>
                    <p><span className="text-accent-400">await</span> engineer.<span className="text-primary-400">deploy</span>();</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 font-bold uppercase tracking-widest text-sm">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
              Bridging the gap between <span className="italic text-slate-500 font-light">development</span> and <span className="italic text-slate-500 font-light">infrastructure</span>.
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                My journey in tech started with a Bachelor of Computer Applications (BCA), where I discovered my fascination with how applications run at scale. This curiosity led me straight into the world of Cloud computing and DevOps.
              </p>
              <p>
                Currently, as an intern at Regex Software in Jaipur, I am turning theory into practice. I spend my days working with <strong className="text-slate-900 dark:text-slate-200 font-medium">AWS services, containerizing apps with Docker, and learning the intricacies of Kubernetes</strong>.
              </p>
              <p>
                I believe that a strong DevOps culture is the backbone of any modern software team. My goal is to master the automation of deployment pipelines and the provisioning of resilient cloud infrastructure to help teams ship code faster and safer.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div>
                <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-1 hover:text-primary-500 transition-colors">1+</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Years Active</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-slate-900 dark:text-white mb-1 hover:text-accent-500 transition-colors">5+</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Core Tech</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;

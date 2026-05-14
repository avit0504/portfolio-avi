import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex gap-6 mb-6">
          <a href="https://github.com/avit0504" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            <FiGithub className="w-6 h-6" />
          </a>
          <a href="http://www.linkedin.com/in/avitiwarii" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            <FiLinkedin className="w-6 h-6" />
          </a>
          <a href="mailto:avitiwari5103@gmail.com" className="text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            <FiMail className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Avi Tiwari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

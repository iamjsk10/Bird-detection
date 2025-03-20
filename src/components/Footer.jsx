import React from 'react';
import { linkedinLogo } from '../utils/index';

const Footer = () => {
  return (
    <footer className="bg-background w-full py-4 border-t border-gray-200">
      <div className="font-nav-font flex justify-start items-center max-w-6xl mx-auto px-4 gap-4">
        {/* Email */}
        <a 
          href="mailto:jasmeet_kalsi@icloud.com" 
          className="text-primary-text text-sm hover:text-opacity-80 transition-all"
        >
          Reach out
        </a>

        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/jasmeet007/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-all"
        >
          <img 
            src={linkedinLogo} 
            alt="LinkedIn" 
            className="h-6 w-6 hover:brightness-125 transition-all" 
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
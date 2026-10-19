import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#060a14] py-12 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Exact required copyright text */}
          <div className="text-center md:text-left">
            <p className="text-slate-300">
              © 2026 Priyansh Yadav. Built with React and deployed on cloud infrastructure.
            </p>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Final-year BCA student &bull; Prayagraj, UP, India
            </p>
          </div>

          {/* Links & Back-to-top */}
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </a>

            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </a>

            <a
              href={personalInfo.links.email}
              className="text-slate-400 hover:text-[#FF9900] transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors text-xs font-mono cursor-pointer"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#FF9900]" aria-hidden="true" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Cloud, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  /*
   * =========================================================================
   * RESUME HANDLING INSTRUCTIONS FOR PRIYANSH:
   * 1. Place your real resume PDF file into the `public/` directory named `resume.pdf`
   *    (Path: `public/resume.pdf`).
   * 2. In `src/data/portfolioData.js`, update `hasResumeFile: true`.
   * 3. The button will automatically switch from placeholder mode to opening
   *    your real resume in a new tab.
   * =========================================================================
   */
  const renderResumeButton = (isMobile = false) => {
    if (personalInfo.links.hasResumeFile) {
      return (
        <a
          href={personalInfo.links.resumePath}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors border ${
            isMobile ? 'w-full justify-center py-2.5 text-sm' : ''
          } bg-[#FF9900]/10 text-[#FF9900] border-[#FF9900]/30 hover:bg-[#FF9900] hover:text-slate-950`}
        >
          <FileText className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Resume</span>
          <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" aria-hidden="true" />
        </a>
      );
    }

    return (
      <button
        type="button"
        title="Resume PDF placeholder: Place resume.pdf in public folder to enable"
        aria-label="Resume placeholder (resume.pdf not yet uploaded)"
        onClick={() => {
          alert("Resume notice: Place your 'resume.pdf' in the public/ folder and set hasResumeFile: true in src/data/portfolioData.js.");
        }}
        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
          isMobile ? 'w-full justify-center py-2.5 text-sm' : ''
        } bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white`}
      >
        <FileText className="w-3.5 h-3.5 text-[#FF9900]" aria-hidden="true" />
        <span>Resume (Placeholder)</span>
      </button>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080d1a]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Brand / Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group text-white font-bold text-lg tracking-tight hover:text-[#FF9900] transition-colors"
        >
          <span className="w-8 h-8 rounded-lg bg-[#FF9900]/10 border border-[#FF9900]/30 flex items-center justify-center text-[#FF9900] group-hover:scale-105 transition-transform">
            <Cloud className="w-4 h-4" aria-hidden="true" />
          </span>
          <span>{personalInfo.name}</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-5 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-[#FF9900] transition-colors py-1 px-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FF9900] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="pl-3 border-l border-slate-800">
            {renderResumeButton(false)}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 focus:ring-2 focus:ring-[#FF9900]"
          >
            {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer/Overlay */}
      {isOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden fixed inset-x-0 top-16 bg-[#080d1a]/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl p-6 animate-in slide-in-from-top-4"
        >
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
            <span className="text-xs uppercase font-mono tracking-wider text-slate-400">Navigation</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block px-3 py-2 rounded-lg text-slate-200 hover:text-[#FF9900] hover:bg-slate-900/80 font-medium transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-slate-800">
            {renderResumeButton(true)}
          </div>
        </div>
      )}
    </header>
  );
}

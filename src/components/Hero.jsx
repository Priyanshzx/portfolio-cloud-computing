import React from 'react';
import { Mail, MapPin, ArrowRight, Terminal } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';
import ArchitectureDiagram from './ArchitectureDiagram';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-radial-glow bg-grid-subtle"
      aria-label="Introduction and Overview"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availabilityBadge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Building Secure and <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#FF9900]">
                Scalable Solutions
              </span>{' '}
              on AWS.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.subtext}
            </p>

            {/* Location & Status Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#FF9900]" aria-hidden="true" />
                <span>{personalInfo.location}</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">&bull;</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Terminal className="w-4 h-4 text-sky-400" aria-hidden="true" />
                <span>{personalInfo.status}</span>
              </div>
            </div>

            {/* Target Roles */}
            <div className="pt-1">
              <div className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">
                Target Roles:
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-[#FF9900] text-slate-950 hover:bg-[#e08800] transition-colors shadow-lg shadow-[#FF9900]/20"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-slate-500 transition-colors"
              >
                <span>Contact Me</span>
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-3 pl-2">
                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800 transition-colors"
                  aria-label="GitHub Profile (opens in new tab)"
                >
                  <Github className="w-5 h-5" aria-hidden="true" />
                </a>

                <a
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-slate-700 hover:bg-slate-800 transition-colors"
                  aria-label="LinkedIn Profile (opens in new tab)"
                >
                  <Linkedin className="w-5 h-5" aria-hidden="true" />
                </a>

                <a
                  href={personalInfo.links.email}
                  className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#FF9900] hover:border-slate-700 hover:bg-slate-800 transition-colors"
                  aria-label={`Send email to ${personalInfo.links.emailDisplay}`}
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Illustrative AWS Architecture Graphic */}
          <div className="lg:col-span-5">
            <ArchitectureDiagram type="hero" />
          </div>

        </div>
      </div>
    </section>
  );
}

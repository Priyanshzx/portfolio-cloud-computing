import React from 'react';
import { Cloud, GitBranch, Briefcase, ShieldCheck, GraduationCap, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

export default function About() {
  const iconComponents = [Cloud, GitBranch, Briefcase];
  const iconColors = ["text-[#FF9900]", "text-sky-400", "text-emerald-400"];

  return (
    <section
      id="about"
      className="py-16 sm:py-24 border-t border-slate-800/80 bg-[#080d1a]"
      aria-label="About Priyansh Yadav"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Profile Overview"
          title="About Me"
          description="A direct look into my cloud engineering background, practical interests, and approach to building reliable systems."
        />

        {/* Primary Bio & Portrait Block */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 backdrop-blur-sm shadow-xl mb-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Profile Portrait */}
            <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center text-center">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#FF9900]/40 to-sky-500/20 blur-sm opacity-70 group-hover:opacity-100 transition-opacity" />
                <img
                  src="/priyansh.jpg"
                  alt="Priyansh Yadav - Aspiring AWS Cloud & DevOps Engineer"
                  className="relative w-48 h-56 sm:w-52 sm:h-60 object-cover object-top rounded-2xl border-2 border-slate-700/80 shadow-2xl"
                />
                <span className="absolute bottom-2 right-2 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-slate-900"></span>
                </span>
              </div>
              <div className="mt-3.5">
                <div className="text-sm font-bold text-white tracking-tight">{personalInfo.name}</div>
                <div className="text-xs text-[#FF9900] font-mono">BCA Final-Year &bull; AWS Cloud</div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="md:col-span-8 lg:col-span-9 space-y-4">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                {personalInfo.aboutText}
              </p>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  Honest Skill Disclosure: Active learner building verifiable portfolio projects
                </span>
                <span className="text-slate-400">
                  Location: {personalInfo.location}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Three Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {aboutHighlights.map((highlight, index) => {
            const Icon = iconComponents[index] || Cloud;
            const colorClass = iconColors[index] || "text-[#FF9900]";
            return (
              <div
                key={highlight.title}
                className="rounded-xl bg-slate-900/50 border border-slate-800/90 p-6 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-4">
                    <Icon className={`w-6 h-6 ${colorClass}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs font-mono text-slate-400">
                  <span>Domain #{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Education & Soft Skills from Resume */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Education Card */}
          <div className="md:col-span-7 rounded-xl bg-slate-900/50 border border-slate-800 p-6">
            <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-[#FF9900]/10 border border-[#FF9900]/30 flex items-center justify-center text-[#FF9900]">
                <GraduationCap className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Education</h3>
                <span className="text-xs text-slate-400 font-mono">Academic Background</span>
              </div>
            </div>

            <div className="space-y-4">
              {personalInfo.education?.map((item) => (
                <div key={item.institution} className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <div className="text-sm font-semibold text-white">{item.institution}</div>
                    <div className="text-xs font-mono text-slate-400">{item.period}</div>
                  </div>
                  <div className="text-xs text-slate-300">{item.degree}</div>
                  <div className="text-xs text-[#FF9900] font-mono mt-1">{item.grade}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Languages Card */}
          <div className="md:col-span-5 rounded-xl bg-slate-900/50 border border-slate-800 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">Soft Skills & Languages</h3>
                  <span className="text-xs text-slate-400 font-mono">Workplace Competencies</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {personalInfo.softSkills?.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-950/80 border border-slate-800 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1 font-mono">
              <div><strong className="text-slate-300 font-sans">English:</strong> Professional Working Proficiency</div>
              <div><strong className="text-slate-300 font-sans">Hindi:</strong> Native Proficiency</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

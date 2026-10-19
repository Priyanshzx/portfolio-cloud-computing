import React from 'react';
import { ExternalLink, BookOpen, Check, ArrowRight } from 'lucide-react';
import { Github } from './Icons';
import ArchitectureDiagram from './ArchitectureDiagram';

export default function ProjectCard({ project, onOpenCaseStudy }) {
  const statusBadgeColors = {
    'Completed': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    'In Progress': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    'Planned Architecture': 'bg-sky-500/10 text-sky-400 border-sky-500/30'
  };

  return (
    <article
      className="rounded-2xl bg-slate-900/60 border border-slate-800/90 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl"
      aria-labelledby={`project-${project.id}-title`}
    >
      <div className="p-6 sm:p-7 space-y-5">
        {/* Card Header with Status Badge */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
              statusBadgeColors[project.status] || 'bg-slate-800 text-slate-300 border-slate-700'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {project.status}
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            AWS Project
          </span>
        </div>

        {/* Project Title */}
        <h3
          id={`project-${project.id}-title`}
          className="text-xl sm:text-2xl font-bold text-white tracking-tight"
        >
          {project.title}
        </h3>

        {/* Problem Statement */}
        <div>
          <div className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-1">
            Problem
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Solution Summary */}
        <div>
          <div className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-1">
            Solution & Overview
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.solution || project.description}
          </p>
        </div>

        {/* AWS Services Used */}
        <div>
          <div className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">
            AWS Services & Tech
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.services.map((service) => (
              <span
                key={service}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-950/80 border border-[#FF9900]/20 text-slate-200"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features List */}
        <div>
          <div className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2">
            Key Architecture Features
          </div>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#FF9900] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Diagram or Illustrative Visual */}
        <div className="pt-2">
          <ArchitectureDiagram type={project.diagramType} compact />
        </div>
      </div>

      {/* Card Footer with Buttons */}
      <div className="p-5 sm:p-6 bg-slate-950/60 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {/* GitHub Button (Placeholder) */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-medium bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
            title="GitHub Repository (Placeholder URL)"
          >
            <Github className="w-3.5 h-3.5" aria-hidden="true" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" aria-hidden="true" />
          </a>

          {/* Live Demo Button (Labeled Demo coming soon) */}
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-medium bg-slate-900/60 border border-slate-800 text-slate-400 cursor-not-allowed"
            title="Live demo is coming soon for this in-progress project"
          >
            <span>{project.demoLabel}</span>
          </button>
        </div>

        {/* Case Study Modal Trigger */}
        <button
          type="button"
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-[#FF9900]/10 text-[#FF9900] border border-[#FF9900]/30 hover:bg-[#FF9900] hover:text-slate-950 transition-colors cursor-pointer"
        >
          <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, AlertCircle, Shield, Activity, DollarSign, BookOpen, Layers, CheckCircle2, Terminal } from 'lucide-react';
import { Github } from './Icons';
import ArchitectureDiagram from './ArchitectureDiagram';

export default function CaseStudyModal({ project, onClose }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    // Focus the close button when opened
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const isCompleted = project.status === 'Completed';

  const statusBadgeColors = {
    'Completed': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'In Progress': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'Planned Architecture': 'bg-sky-500/10 text-sky-400 border-sky-500/20'
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-800 bg-slate-950/70">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${
                  statusBadgeColors[project.status] || 'bg-slate-800 text-slate-300 border-slate-700'
                }`}
              >
                Status: {project.status}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Project Case Study
              </span>
            </div>
            <h2 id="case-study-title" className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study dialog"
            className="p-2 rounded-lg bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800 focus:ring-2 focus:ring-[#FF9900] transition-colors"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8 text-sm leading-relaxed">
          
          {/* Status Truthfulness Banner */}
          {!isCompleted && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs sm:text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <span className="font-semibold">Implementation Notice:</span> This project is currently marked as{' '}
                <span className="underline font-mono">{project.status}</span>. Architecture diagrams and flows represent intended and in-progress design patterns. Live deployment metrics are not claimed until verification is complete.
              </div>
            </div>
          )}

          {/* 1. Problem Statement */}
          <div>
            <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF9900]" />
              The Problem
            </h3>
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 text-slate-300">
              {project.problem}
            </div>
          </div>

          {/* 2. Architecture & Diagram */}
          <div>
            <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-[#FF9900]" aria-hidden="true" />
              Architecture Overview
            </h3>
            <p className="text-slate-300 mb-4">
              {project.architecture}
            </p>
            <div className="my-3">
              <ArchitectureDiagram type={project.diagramType} />
            </div>
          </div>

          {/* 3. AWS Services Used and Why */}
          <div>
            <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-3">
              <Terminal className="w-4 h-4 text-sky-400" aria-hidden="true" />
              AWS Services Used & Rationales
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.servicesUsedAndWhy?.map((item) => (
                <div key={item.name} className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="font-semibold text-[#FF9900] text-xs font-mono mb-1">{item.name}</div>
                  <div className="text-xs text-slate-300">{item.reason}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Security Measures */}
          <div>
            <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              Security Measures
            </h3>
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 text-slate-300">
              {project.security}
            </div>
          </div>

          {/* 5. Deployment Process */}
          <div>
            <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400" aria-hidden="true" />
              Deployment Workflow
            </h3>
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 text-slate-300 font-mono text-xs leading-relaxed">
              {project.deployment}
            </div>
          </div>

          {/* 6. Monitoring & Troubleshooting */}
          <div>
            <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-indigo-400" aria-hidden="true" />
              Monitoring and Troubleshooting
            </h3>
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 text-slate-300">
              {project.monitoring}
            </div>
          </div>

          {/* 7. Cost Considerations */}
          <div>
            <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-amber-400" aria-hidden="true" />
              Cost Considerations
            </h3>
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 text-slate-300">
              {project.cost}
            </div>
          </div>

          {/* 8. Lessons Learned */}
          <div>
            <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-pink-400" aria-hidden="true" />
              Lessons Learned
            </h3>
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 text-slate-300">
              {project.lessons}
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-5 sm:p-6 border-t border-slate-800 bg-slate-950/90 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* GitHub Placeholder */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-medium bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700"
              title="Repository link (Placeholder to be updated with real repo)"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              <span>GitHub (Placeholder)</span>
              <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" aria-hidden="true" />
            </a>

            {/* Live Demo Placeholder */}
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono font-medium bg-slate-800/50 text-slate-400 border border-slate-800 cursor-not-allowed"
              title="Live demo coming soon"
            >
              <span>{project.demoLabel}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}

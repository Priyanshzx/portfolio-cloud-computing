import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Clock } from 'lucide-react';

export default function CertificationCard({ cert }) {
  const isCompleted = cert.status === 'Completed';

  return (
    <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700/80 transition-colors">
      <div>
        {/* Status and Icon */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-[#FF9900]/10 border border-[#FF9900]/30 flex items-center justify-center text-[#FF9900]">
            <Award className="w-5 h-5" aria-hidden="true" />
          </div>
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${
              isCompleted
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
            }`}
          >
            {isCompleted ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
            {cert.status}
          </span>
        </div>

        {/* Title & Provider */}
        <h3 className="text-lg font-semibold text-white mb-1">
          {cert.title}
        </h3>
        <p className="text-xs font-mono text-[#FF9900] mb-3">
          {cert.provider}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          {cert.description}
        </p>
      </div>

      {/* Date & Verification Link Footer */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
          <span>{cert.issueDate || 'Ongoing'}</span>
        </div>

        {/* Verification Link / Placeholder */}
        <span
          className="inline-flex items-center gap-1 text-slate-400 font-mono text-[11px]"
          title="Verification link will be added upon completion"
        >
          <span>{cert.verificationLabel}</span>
          <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}

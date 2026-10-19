import React from 'react';
import { Cloud, Terminal, Code2, Network } from 'lucide-react';

export default function SkillGroup({ category, skills }) {
  const categoryIcons = {
    'AWS Cloud': <Cloud className="w-5 h-5 text-[#FF9900]" aria-hidden="true" />,
    'DevOps and Deployment': <Terminal className="w-5 h-5 text-sky-400" aria-hidden="true" />,
    'Programming and Web': <Code2 className="w-5 h-5 text-emerald-400" aria-hidden="true" />,
    'Cloud Fundamentals': <Network className="w-5 h-5 text-amber-400" aria-hidden="true" />
  };

  return (
    <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-6 hover:border-slate-700/80 transition-colors">
      <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800/80">
        <div className="w-9 h-9 rounded-lg bg-slate-800/90 border border-slate-700/70 flex items-center justify-center">
          {categoryIcons[category] || <Cloud className="w-5 h-5 text-[#FF9900]" aria-hidden="true" />}
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">
            {category}
          </h3>
          <span className="text-[11px] font-mono text-slate-400">
            {skills.length} core competencies
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-950/80 border border-slate-800 text-slate-200 hover:border-slate-600 hover:text-white transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

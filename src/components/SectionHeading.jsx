import React from 'react';

export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={`mb-12 ${center ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-[#FF9900] bg-[#FF9900]/10 border border-[#FF9900]/20`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

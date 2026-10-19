import React from 'react';
import { Info } from 'lucide-react';
import SectionHeading from './SectionHeading';
import CertificationCard from './CertificationCard';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-16 sm:py-24 border-t border-slate-800/80 bg-[#080d1a]"
      aria-label="Certifications and Continuous Learning"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials & Milestones"
          title="Certifications and Learning"
          description="Curriculum modules, cloud quest pathways, and foundational learning records currently underway."
        />

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>

        {/* Required Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-start sm:items-center gap-3">
          <Info className="w-5 h-5 text-[#FF9900] shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-slate-400">
            Certificates represent completed learning; projects demonstrate practical implementation.
          </p>
        </div>
      </div>
    </section>
  );
}

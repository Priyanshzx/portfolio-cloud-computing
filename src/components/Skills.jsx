import React from 'react';
import { Info } from 'lucide-react';
import SectionHeading from './SectionHeading';
import SkillGroup from './SkillGroup';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 border-t border-slate-800/80 bg-[#080d1a]"
      aria-label="Technical Skills"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Competencies & Tooling"
          title="Technical Skills"
          description="Cloud infrastructure, DevOps practices, networking principles, and scripting tools focused on practical implementation."
        />

        {/* 4 Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((group, index) => (
            <SkillGroup
              key={group.category}
              category={group.category}
              skills={group.skills}
              index={index}
            />
          ))}
        </div>

        {/* Required Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/40 border border-slate-800 flex items-start sm:items-center gap-3">
          <Info className="w-5 h-5 text-[#FF9900] shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
          <p className="text-xs sm:text-sm text-slate-400">
            Skills shown here represent tools and concepts I am actively learning and applying through projects.
          </p>
        </div>
      </div>
    </section>
  );
}

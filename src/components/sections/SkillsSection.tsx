import { SectionHeading } from "../common/SectionHeading";
import type { Skill } from "../../types/portfolio";

interface SkillsSectionProps {
  skills: Skill[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="py-20 lg:py-24 bg-brand-panel/30 border-y border-brand-border/40" id="skills">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <SectionHeading
          number="04"
          title="What I bring"
          subtitle="Teaching is the anchor. The rest helps the idea travel further."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="p-6 rounded-2xl bg-brand-card/60 border border-brand-border/60 hover:border-brand-accent/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white">{skill.title}</h3>
                <span className="text-sm font-mono text-brand-accent font-bold">{skill.value}%</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">{skill.note}</p>
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-accent to-brand-cyan rounded-full skill-bar"
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

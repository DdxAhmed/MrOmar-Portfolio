import { SectionHeading } from "../common/SectionHeading";
import type { Experience } from "../../types/portfolio";

interface ExperienceSectionProps {
  experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-brand-panel/30 border-y border-brand-border/40" id="experience">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <SectionHeading
          number="02"
          title="Experience"
          subtitle="Things I’ve been building. Every role has the same thread: make information easier to reach, understand, and remember."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mt-8 sm:mt-10">
          {experiences.map((item) => (
            <div
              key={item.number}
              className="timeline-item p-6 sm:p-7 rounded-2xl bg-brand-card/60 border border-brand-border/60 hover:border-brand-accent/40 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                    {item.period}
                  </span>
                  <span className="text-brand-accent font-serif text-xl font-bold opacity-75 group-hover:opacity-100 transition-opacity">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-accentLight transition-colors mb-1">
                  {item.role}
                </h3>
                <p className="text-xs text-brand-cyan font-medium mb-3">
                  {item.place}
                </p>

                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-light mb-4">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-brand-border/50">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-slate-800/80 border border-slate-700/60 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { SectionHeading } from "../common/SectionHeading";
import type { Achievement } from "../../types/portfolio";

interface ProofSectionProps {
  achievements: Achievement[];
}

export function ProofSection({ achievements }: ProofSectionProps) {
  return (
    <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20" id="proof">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <SectionHeading
          number="05"
          title="Proof points"
          subtitle="Small wins. Real momentum."
        />
        <div className="w-20 h-20 rounded-full border border-dashed border-brand-accent/50 bg-brand-accent/5 flex flex-col items-center justify-center text-center rotate-6 select-none shrink-0">
          <span className="text-[8px] font-bold tracking-widest text-brand-accent uppercase">Earned</span>
          <span className="text-xs text-white">❊</span>
          <span className="text-[8px] font-bold tracking-widest text-brand-accent uppercase">Noticed</span>
        </div>
      </div>

      <div className="divide-y divide-brand-border/60 border-y border-brand-border/60">
        {achievements.map(([title, organization, date], idx) => (
          <div
            key={title}
            className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-brand-card/30 px-4 rounded-xl transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-brand-accent font-bold">0{idx + 1}</span>
              <div>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="text-xs text-slate-400">{organization}</p>
              </div>
            </div>
            <time className="text-xs font-mono text-slate-400 sm:text-right shrink-0">{date}</time>
          </div>
        ))}
      </div>
    </section>
  );
}

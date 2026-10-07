import { SectionHeading } from "../common/SectionHeading";

export function LearningSection() {
  return (
    <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20" id="learning">
      <SectionHeading
        number="03"
        title="Learning in public"
        subtitle="The credentials matter. So does the curiosity behind them."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="p-8 rounded-2xl bg-brand-card/60 border border-brand-border/60 hover:border-brand-accent/40 transition-all flex flex-col justify-between">
          <div>
            <span className="text-2xl text-brand-accent mb-4 block">❊</span>
            <h3 className="text-base font-bold text-white mb-2">120-hour TESOL / TEFL</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Worlds TESOL Academy · Completed with distinction
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500 mt-6 pt-4 border-t border-brand-border/60">
            2025
          </span>
        </div>

        <div className="p-8 rounded-2xl bg-brand-card/60 border border-brand-border/60 hover:border-brand-accent/40 transition-all flex flex-col justify-between">
          <div>
            <span className="text-2xl text-brand-cyan mb-4 block">↗</span>
            <h3 className="text-base font-bold text-white mb-2">General Secondary Education</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Martyr Colonel Ahmed Jaber Nassar Secondary School for Boys
            </p>
          </div>
          <span className="text-xs font-mono text-slate-500 mt-6 pt-4 border-t border-brand-border/60">
            2022 — now
          </span>
        </div>

        <div className="p-8 rounded-2xl bg-brand-card/60 border border-brand-border/60 hover:border-brand-accent/40 transition-all flex flex-col justify-between">
          <div>
            <span className="text-2xl text-blue-400 mb-4 block">文</span>
            <h3 className="text-base font-bold text-white mb-2">Languages</h3>
            <div className="flex flex-wrap gap-1.5 mt-2">
              <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300">
                Arabic · Native
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300">
                English · Advanced
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300">
                Polish · Learning
              </span>
            </div>
          </div>
          <span className="text-xs font-mono text-slate-500 mt-6 pt-4 border-t border-brand-border/60">
            03
          </span>
        </div>
      </div>
    </section>
  );
}

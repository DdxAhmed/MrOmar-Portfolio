import { SectionHeading } from "../common/SectionHeading";

export function AboutSection() {
  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20" id="about-details">
      <SectionHeading number="01" title="About" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-7">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight text-white mb-5 sm:mb-6">
            I’m interested in the moment when <br />
            <span className="italic text-brand-accentLight text-glow-blue">“oh, now I see.”</span>
          </h2>
        </div>
        <div className="lg:col-span-5 text-slate-300/90 text-sm leading-relaxed space-y-3.5 font-light">
          <p className="text-base text-slate-100 font-normal">
            A student who teaches, makes things, and believes understanding should feel within reach.
          </p>
          <p>
            I’m currently pursuing secondary education while creating beginner-friendly English lessons
            and online spaces where students can practise without feeling behind. The goal is simple: make
            learning more accessible, useful, and human.
          </p>
          <p>Every small explanation can be the start of real momentum.</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-6 sm:pt-8 border-t border-brand-border/60">
        <div className="p-5 sm:p-6 rounded-2xl bg-brand-panel/50 border border-brand-border/60 hover:border-brand-accent/40 transition-colors">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-2">897</div>
          <div className="text-xs text-slate-400 font-medium">learners in community</div>
        </div>
        <div className="p-5 sm:p-6 rounded-2xl bg-brand-panel/50 border border-brand-border/60 hover:border-brand-accent/40 transition-colors">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-2">
            140<span className="text-brand-accent">+</span>
          </div>
          <div className="text-xs text-slate-400 font-medium">educational videos</div>
        </div>
        <div className="p-5 sm:p-6 rounded-2xl bg-brand-panel/50 border border-brand-border/60 hover:border-brand-accent/40 transition-colors">
          <div className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-2">
            4<span className="text-brand-accent">+</span>
          </div>
          <div className="text-xs text-slate-400 font-medium">years creating</div>
        </div>
        <div className="p-5 sm:p-6 rounded-2xl bg-brand-panel/50 border border-brand-border/60 flex items-center justify-center">
          <p className="font-handwriting text-lg sm:text-xl text-slate-300/90 leading-snug">
            A lot can happen one useful lesson at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

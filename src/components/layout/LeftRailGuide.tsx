import type { SectionItem } from "../../types/portfolio";

interface LeftRailGuideProps {
  sections: SectionItem[];
  activeSection: string;
}

export function LeftRailGuide({ sections, activeSection }: LeftRailGuideProps) {
  return (
    <aside
      className="left-rail-guide hidden lg:flex fixed left-6 top-0 bottom-0 z-40 flex-col justify-between items-center py-28 pointer-events-none select-none"
      data-purpose="vertical-navigation-rail"
    >
      <div className="rotate-180 [writing-mode:vertical-lr] text-[10px] uppercase font-semibold tracking-[0.28em] text-slate-500/80 pointer-events-auto">
        A Little About Me
      </div>
      <div className="flex flex-col items-center gap-4 pointer-events-auto" data-purpose="section-step-indicator">
        <div className="flex flex-col items-center gap-3">
          {sections.map(({ id, number }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`w-7 h-7 rounded-full text-xs font-semibold flex items-center justify-center transition-all ${
                  isActive
                    ? "border border-brand-accent/80 text-brand-accent bg-brand-accent/10 shadow-[0_0_12px_rgba(59,130,246,0.3)] scale-110"
                    : "text-slate-600 hover:text-slate-400"
                }`}
                aria-label={`Go to section ${number}`}
              >
                {number}
              </a>
            );
          })}
        </div>
      </div>
      <div className="rotate-180 [writing-mode:vertical-lr] text-[9px] uppercase font-semibold tracking-[0.25em] text-slate-600 pointer-events-auto">
        Scroll To Explore
      </div>
    </aside>
  );
}

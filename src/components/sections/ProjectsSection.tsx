import { useState } from "react";
import { SectionHeading } from "../common/SectionHeading";
import { ExternalLink } from "../common/ExternalLink";
import type { Project, ProjectCategory } from "../../types/portfolio";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [filter, setFilter] = useState<string>("All");
  const filters: string[] = ["All", "Teaching", "Community", "Video"];

  const visibleProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category.includes(filter as ProjectCategory));

  return (
    <section className="py-20 lg:py-24 bg-brand-panel/30 border-y border-brand-border/40" id="selected-work">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <SectionHeading
            number="06"
            title="Selected work"
            subtitle="Useful things on the internet."
          />
          <ExternalLink
            href="https://github.com/omarmohamed05"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white pb-1 border-b border-slate-600 hover:border-white transition-all self-start sm:self-auto"
          >
            <span>View GitHub</span>
            <span>↗</span>
          </ExternalLink>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-brand-border/60">
          <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase mr-2">
            Filter by:
          </span>
          {filters.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setFilter(opt)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                filter === opt
                  ? "bg-brand-accent text-white shadow-glow-blue"
                  : "bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              {opt}
            </button>
          ))}
          <span className="ml-auto text-xs font-mono text-slate-500">
            0{visibleProjects.length} / 0{projects.length}
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleProjects.map((p) => (
            <article
              key={p.number}
              className="project-card rounded-2xl bg-brand-card/70 border border-brand-border/70 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div
                  className={`h-40 bg-gradient-to-tr ${p.accentGradient} p-6 flex flex-col justify-between relative overflow-hidden`}
                >
                  <div className="flex justify-between items-center text-white/90 text-xs font-mono">
                    <span>{p.number} / 03</span>
                    <span className="uppercase text-[10px] tracking-wider">{p.type}</span>
                  </div>
                  <div className="text-6xl text-white select-none self-center">{p.symbol}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-300/80 leading-relaxed font-light">{p.description}</p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between border-t border-brand-border/40 mt-4">
                <div className="flex flex-wrap gap-1.5">
                  {p.category.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 rounded text-[10px] bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <ExternalLink
                  href={p.href}
                  aria-label={`Open ${p.title}`}
                  className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-brand-accent transition-colors"
                >
                  ↗
                </ExternalLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

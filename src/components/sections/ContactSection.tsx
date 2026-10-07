import { SectionHeading } from "../common/SectionHeading";
import { ExternalLink } from "../common/ExternalLink";
import type { SocialLink } from "../../types/portfolio";

interface ContactSectionProps {
  socials: SocialLink[];
  onCopyEmail: () => void;
}

export function ContactSection({ socials, onCopyEmail }: ContactSectionProps) {
  return (
    <section className="py-20 lg:py-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20" id="contact">
      <SectionHeading number="07" title="Contact" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <h2 className="text-5xl sm:text-6xl font-serif text-white leading-tight mb-4">
            Have a lesson, <br />
            idea, or <span className="italic text-brand-accentLight text-glow-blue">hello?</span>
          </h2>
          <p className="text-slate-300/80 text-sm max-w-md font-light leading-relaxed mb-8">
            I’m open to teaching opportunities, creative collaborations, and thoughtful conversations
            about making learning better.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:omarrmohamedd05@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-blue-600 text-white font-medium text-sm shadow-glow-blue transition-all"
            >
              <span>omarrmohamedd05@gmail.com</span>
              <span>↗</span>
            </a>
            <button
              type="button"
              onClick={onCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
            >
              <span>📋</span>
              <span>Copy</span>
            </button>
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-6 text-xs text-slate-400 pt-4">
          <div>
            <span className="font-mono uppercase tracking-wider text-slate-500 block mb-1">
              BASED IN
            </span>
            <p className="text-sm text-slate-200">⌖ &nbsp; Warszawa, Poland</p>
          </div>
          <div>
            <span className="font-mono uppercase tracking-wider text-slate-500 block mb-1">
              RESPONSE TIME
            </span>
            <p className="text-sm text-slate-200">Usually within 24 hours</p>
          </div>
          <div>
            <span className="font-mono uppercase tracking-wider text-slate-500 block mb-2">
              FIND ME AROUND
            </span>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <ExternalLink
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  className="w-10 h-10 rounded-xl border border-slate-700/80 bg-slate-900/60 hover:bg-brand-accent hover:border-brand-accent flex items-center justify-center text-slate-200 hover:text-white font-bold transition-all text-xs"
                >
                  {s.mark}
                </ExternalLink>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

import { CvDownloadButton } from "../common/CvDownloadButton";

export function HeroSection() {
  return (
    <main className="relative min-h-screen pt-28 lg:pt-0 flex items-center" id="about">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 w-full py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* BEGIN: HeroContentColumn (Left Column) */}
          <section className="lg:col-span-7 flex flex-col justify-center z-20 space-y-7" data-purpose="hero-bio-copy">
            {/* Eyebrow Sub-headline */}
            <div className="text-xs uppercase font-bold tracking-[0.22em] text-slate-400">
              English Tutor · Student · Creator
            </div>

            {/* Editorial Hero Main Title */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-serif tracking-tight leading-[0.92] text-white">
              English,
              <br />
              without the <br />
              <span className="italic font-normal text-brand-accentLight text-glow-blue inline-block transform hover:translate-x-1 transition-transform cursor-pointer">
                fog.
              </span>
            </h1>

            {/* Personal Statement Subcopy */}
            <p className="max-w-xl text-base sm:text-lg text-slate-300/90 leading-relaxed font-light pt-2">
              High school student, English tutor, and educational creator building clearer lessons and kinder
              online study spaces.
            </p>

            {/* Primary CTA Button Group */}
            <div className="flex flex-wrap items-center gap-4 pt-3" data-purpose="cta-buttons">
              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-blue-600 text-white font-medium text-sm shadow-glow-blue transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                href="#contact"
              >
                <span>Let's talk</span>
                <span className="text-base leading-none">↗</span>
              </a>
              <CvDownloadButton className="px-5 py-3.5 rounded-xl text-sm" />
            </div>

            {/* Geographical Location & Note Footer Item */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 text-xs text-slate-400 border-t border-brand-border/60">
              <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                <span className="text-brand-accent text-sm">✦</span> Warszawa, Poland
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="text-slate-400">Simple person. Serious about impact.</span>
            </div>
          </section>
          {/* END: HeroContentColumn */}

          {/* BEGIN: HeroVisualColumn (Right Column Card & Badges) */}
          <section
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
            data-purpose="hero-visual-card"
          >
            {/* Outer Ambient Radial Halo */}
            <div className="absolute w-96 h-96 bg-brand-accent/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
            {/* Orbital Rings Behind Card */}
            <div className="absolute w-[440px] h-[440px] rounded-full border border-blue-500/10 pointer-events-none animate-pulse-subtle -z-10"></div>
            <div className="absolute w-[500px] h-[320px] rounded-[100%] border border-cyan-400/10 -rotate-12 pointer-events-none -z-10"></div>

            {/* Main Portrait Card Container */}
            <div
              className="relative w-full max-w-[340px] sm:max-w-[370px] aspect-[4/5] rounded-3xl bg-gradient-to-b from-[#161a26] via-[#10131d] to-[#0c0e15] border border-slate-700/60 shadow-card-3d p-6 flex flex-col justify-between overflow-hidden group hover:border-brand-accent/50 transition-all duration-500"
              data-purpose="portrait-interactive-card"
            >
              {/* Background Portrait Photo */}
              <img
                src="/avatar.jpg"
                alt="Portrait of Omar Mohamed"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* Subtle vignette and bottom gradient for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080a0f] via-[#080a0f]/20 to-[#080a0f]/40 pointer-events-none z-10" />

              {/* Top Header Within Card */}
              <div className="flex items-center justify-between z-20 px-3 py-1 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/10 self-start">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_6px_#38bdf8]"></div>
                <span className="text-[10px] tracking-widest uppercase font-mono text-slate-200 font-semibold ml-2">
                  PORTFOLIO EDITION
                </span>
              </div>

              {/* Middle Spacer */}
              <div className="my-auto z-20 pointer-events-none" />

              {/* Bottom Metadata Section of the Card */}
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-slate-200 border border-white/15 px-3.5 py-2 rounded-xl z-20 bg-slate-950/60 backdrop-blur-md">
                <span className="text-white font-medium">Warszawa · 2026</span>
                <span className="text-brand-accentLight font-bold">01 / 07</span>
              </div>

              {/* Soft edge glow inside the card */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-10 bg-brand-accent/30 blur-xl rounded-full pointer-events-none z-10"></div>
            </div>

            {/* Floating Circular Badge: "TEACH ❊ CREATE" */}
            <div
              className="absolute -top-6 -right-3 sm:-right-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-brand-accent to-brand-cyan p-0.5 shadow-[0_10px_30px_rgba(59,130,246,0.6)] animate-float z-30"
              data-purpose="floating-badge"
            >
              <div className="w-full h-full rounded-full bg-blue-500 flex flex-col items-center justify-center text-white text-center p-2 backdrop-blur-sm select-none">
                <span className="text-[11px] sm:text-xs font-extrabold tracking-widest uppercase">Teach</span>
                <span className="text-base my-0.5 animate-spin-slow">❊</span>
                <span className="text-[11px] sm:text-xs font-extrabold tracking-widest uppercase">Create</span>
              </div>
            </div>

            {/* Handwritten Note at bottom left of card */}
            <div
              className="absolute -bottom-8 -left-6 sm:-left-10 z-30 flex items-center gap-2 transform -rotate-6 select-none pointer-events-none"
              data-purpose="handwritten-annotation"
            >
              <span className="font-handwriting text-xl sm:text-2xl text-slate-300/90 whitespace-nowrap drop-shadow-md">
                one clear idea
                <br />
                at a time
              </span>
              <span className="text-brand-accentLight text-xl self-end mb-1">⤷</span>
            </div>
          </section>
          {/* END: HeroVisualColumn */}
        </div>
      </div>
    </main>
  );
}

import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

const words = [
  "English, without the fog.",
  "One clear idea at a time.",
  "Teaching · Content · Community",
  "Welcome to the space.",
];

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    // Lock body scroll during preloader
    document.body.style.overflow = "hidden";

    // Progress counter animation
    const startTime = performance.now();
    const duration = 1600; // 1.6s smooth duration

    let frameId: number;

    const update = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 30) setWordIndex(0);
      else if (pct < 65) setWordIndex(1);
      else if (pct < 95) setWordIndex(2);
      else setWordIndex(3);

      if (pct < 100) {
        frameId = requestAnimationFrame(update);
      } else {
        // Reached 100%
        setTimeout(() => {
          setIsExiting(true);
          // Unlock scroll as it exits
          document.body.style.overflow = "";
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 850); // matches slide duration
        }, 250);
      }
    };

    frameId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div
      className={`preloader-overlay fixed inset-0 z-[9999] bg-[#080a0f] flex flex-col justify-between p-8 sm:p-14 select-none ${
        isExiting ? "preloader-exit" : ""
      }`}
      aria-hidden={isExiting}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-cyan/10 rounded-full blur-[80px]" />
      </div>

      {/* Top Bar Meta */}
      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
          <span className="text-white font-medium">OMAR MOHAMED</span>
        </div>
        <div>
          <span>PORTFOLIO '26</span>
        </div>
      </div>

      {/* Centerpiece: Monogram + Phrase + Laser Progress Bar */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto">
        {/* Monogram Brand */}
        <div className="flex items-center gap-2 mb-4 group">
          <span className="text-6xl sm:text-8xl font-serif font-black tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            OM
          </span>
          <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-brand-accent shadow-[0_0_18px_#3b82f6] animate-pulse mb-4 sm:mb-6" />
        </div>

        {/* Dynamic Concept Subtitle */}
        <div className="h-6 mb-8 flex items-center justify-center overflow-hidden">
          <p
            key={wordIndex}
            className="text-xs sm:text-sm font-light text-slate-300 tracking-wide transition-opacity duration-300 animate-fadeIn"
          >
            {words[wordIndex]}
          </p>
        </div>

        {/* Sleek Center Progress Bar */}
        <div className="w-56 sm:w-72 h-[2px] bg-slate-800/80 rounded-full overflow-hidden relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-brand-accent via-brand-cyan to-blue-400 transition-all duration-75 ease-out shadow-[0_0_12px_#38bdf8]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Counter readout */}
        <div className="mt-4 font-mono text-xs sm:text-sm tracking-widest text-slate-400 font-medium">
          <span className="text-white font-semibold">{String(progress).padStart(2, "0")}</span>
          <span className="text-brand-accent">%</span>
        </div>
      </div>

      {/* Bottom Bar Meta */}
      <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-slate-500">
        <div>
          <span>WARSZAWA · POLAND</span>
        </div>
        <div className="flex items-center gap-2">
          <span>INITIALIZING</span>
          <span className="animate-pulse">···</span>
        </div>
      </div>
    </div>
  );
}

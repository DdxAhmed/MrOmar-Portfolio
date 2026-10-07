import { useEffect, useState } from "react";

export function CvDownloadButton({ className = "" }: { className?: string }) {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    fetch("/Omar%20Mohamed%20CV.pdf", { method: "HEAD" })
      .then((response) => setAvailable(response.ok))
      .catch(() => setAvailable(false));
  }, []);

  if (!available) {
    return (
      <button
        type="button"
        disabled
        className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-slate-700/80 bg-slate-900/60 text-xs font-medium text-slate-400 cursor-not-allowed border-dashed ${className}`}
        title="Add public/Omar Mohamed CV.pdf to enable this download."
      >
        <span>CV PDF not included</span>
        <span className="text-slate-500">↗</span>
      </button>
    );
  }

  return (
    <a
      href="/Omar%20Mohamed%20CV.pdf"
      download="Omar Mohamed CV.pdf"
      className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-slate-700/80 bg-slate-900/60 hover:bg-slate-800/90 text-xs font-medium text-slate-200 hover:text-white transition-all duration-300 hover:border-slate-500 group ${className}`}
    >
      <span>Download my CV</span>
      <span className="text-slate-400 group-hover:text-blue-400 transition-colors">↗</span>
      <span className="text-slate-500 group-hover:text-blue-400 transition-colors text-[10px]">↓</span>
    </a>
  );
}

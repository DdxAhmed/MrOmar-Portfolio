export function Footer() {
  return (
    <footer className="py-10 border-t border-brand-border/60 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-1 font-serif text-lg text-white font-bold">
          <span>OM</span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
        </div>
        <div>Built with curiosity & clarity.</div>
        <div>© {new Date().getFullYear()} Omar Mohamed</div>
        <a
          href="#about"
          className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
        >
          <span>BACK TO TOP</span>
          <span>↑</span>
        </a>
      </div>
    </footer>
  );
}

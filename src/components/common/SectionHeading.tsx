interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ number, title, subtitle, className = "mb-10" }: SectionHeadingProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-slate-400 uppercase mb-3">
        <span className="text-brand-accent">{number}</span>
        <span className="w-8 h-[2px] bg-brand-accent rounded-full" />
        <span>{title}</span>
      </div>
      {subtitle && <p className="text-slate-400 text-sm max-w-xl font-light">{subtitle}</p>}
    </div>
  );
}

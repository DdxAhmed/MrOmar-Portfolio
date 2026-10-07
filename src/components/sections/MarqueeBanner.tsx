export function MarqueeBanner() {
  return (
    <div className="marquee-container" aria-label="Teaching, content, community">
      <div className="marquee-track" aria-hidden="true">
        {Array.from({ length: 6 }, (_, idx) => (
          <span key={idx} className="inline-flex items-center gap-6 px-6 text-xs font-extrabold tracking-widest uppercase">
            <span>TEACHING</span>
            <span className="opacity-75">❊</span>
            <span>CONTENT</span>
            <span className="opacity-75">❊</span>
            <span>COMMUNITY</span>
            <span className="opacity-75">❊</span>
          </span>
        ))}
      </div>
    </div>
  );
}

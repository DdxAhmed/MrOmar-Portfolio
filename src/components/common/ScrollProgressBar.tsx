interface ScrollProgressBarProps {
  progress: number;
}

export function ScrollProgressBar({ progress }: ScrollProgressBarProps) {
  return (
    <div
      className="scroll-progress-bar"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}

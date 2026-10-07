interface ToastProps {
  message: string | null;
}

export function Toast({ message }: ToastProps) {
  return (
    <div
      className={`toast-msg ${message ? "show" : ""}`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}

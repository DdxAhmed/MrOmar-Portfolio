import React from "react";

export function ExternalLink({
  href,
  children,
  className,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className} {...rest}>
      {children}
    </a>
  );
}

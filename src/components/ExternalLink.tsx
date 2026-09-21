"use client";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function ExternalLink({ href, children, className }: ExternalLinkProps) {
  function openInNewTab(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={openInNewTab} className={className}>
      {children}
    </a>
  );
}

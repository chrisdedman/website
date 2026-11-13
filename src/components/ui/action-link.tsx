import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * The site's button. `primary` is the filled one, used once per view at most;
 * the default is outlined.
 */
export default function ActionLink({
  href,
  children,
  external,
  variant = 'outline',
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
  variant?: 'primary' | 'outline';
}) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const className = [
    'inline-flex min-h-12 items-center gap-2 rounded-xl px-5 font-medium transition-opacity hover:opacity-85',
    variant === 'primary' ? 'bg-btn text-btn-ink' : 'border border-edge text-ink',
  ].join(' ');

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
        {children}
        <span aria-hidden="true">↗</span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

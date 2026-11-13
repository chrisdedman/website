import Link from 'next/link';
import type { ReactNode } from 'react';

import { ArrowUpRight } from './icons';

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
    'inline-flex min-h-11 items-center gap-2 rounded-lg px-5 font-semibold transition-colors',
    variant === 'primary'
      ? 'bg-btn text-btn-ink hover:bg-btn-hover'
      : 'border border-rule-strong text-ink hover:bg-raised',
  ].join(' ');

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
        {children}
        <ArrowUpRight size={14} />
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

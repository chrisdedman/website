import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * The one call-to-action treatment: a mono label over a rule that fills with
 * ink on hover. Replaces the red pill buttons, which were the loudest generic
 * element of the old design.
 */
export default function ActionLink({
  href,
  children,
  external,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const isExternal = external ?? /^https?:\/\//.test(href);
  const className =
    'group inline-flex items-center gap-2 border border-rule px-3.5 py-2 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper';

  const content = (
    <>
      {children}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
        {isExternal ? '↗' : '→'}
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
        {content}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

import Link from 'next/link';
import { Fragment } from 'react';

export type Crumb = {
  label: string;
  href?: string;
};

/** Generated from work metadata, so a category rename is a one-line change. */
export default function Breadcrumb({ trail }: { trail: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.9375rem] text-ink-faint">
        {trail.map((crumb, index) => (
          <Fragment key={`${crumb.label}-${index}`}>
            {index > 0 ? <li aria-hidden="true">/</li> : null}
            <li>
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-ink-muted">{crumb.label}</span>
              )}
            </li>
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}

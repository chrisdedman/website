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
      <ol className="label flex flex-wrap items-center gap-x-2 gap-y-1">
        {trail.map((crumb, index) => (
          <Fragment key={`${crumb.label}-${index}`}>
            {index > 0 ? <li aria-hidden="true">/</li> : null}
            <li>
              {crumb.href ? (
                <Link href={crumb.href} className="transition-colors hover:text-ink">
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

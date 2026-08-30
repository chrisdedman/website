import type { ReactNode } from 'react';

/**
 * A mono label with a hairline rule running to the right edge. This is the only
 * section heading treatment on the site, which is what makes the pages feel
 * like sheets of one document rather than unrelated screens.
 */
export default function SectionHeading({
  children,
  as: Tag = 'h2',
  aside,
}: {
  children: ReactNode;
  as?: 'h2' | 'h3';
  aside?: ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-4 border-b border-rule pb-2">
      <Tag className="label shrink-0">{children}</Tag>
      <span className="h-px grow" aria-hidden="true" />
      {aside ? <span className="label shrink-0">{aside}</span> : null}
    </div>
  );
}

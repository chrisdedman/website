import type { ReactNode } from 'react';

/**
 * A serif heading sitting on a full-width rule, as on the original site.
 * `aside` is an optional link or note set against the right edge.
 */
export default function SectionHeading({
  children,
  aside,
}: {
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-rule-strong pb-3">
      <h2 className="font-display text-heading font-semibold text-ink">{children}</h2>
      {aside}
    </div>
  );
}

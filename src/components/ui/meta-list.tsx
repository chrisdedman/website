import type { ReactNode } from 'react';

export type MetaItem = {
  term: string;
  value: ReactNode;
};

/**
 * The spec-sheet block: a mono term in a fixed left column, the value beside it.
 * Used for the "currently" rail on the home page and the header of each project.
 */
export default function MetaList({
  items,
  className = '',
}: {
  items: MetaItem[];
  className?: string;
}) {
  return (
    <dl className={`grid gap-x-6 gap-y-3 ${className}`}>
      {items.map((item) => (
        <div key={item.term} className="grid grid-cols-[5.5rem_1fr] items-baseline gap-x-4">
          <dt className="label pt-[0.2em]">{item.term}</dt>
          <dd className="text-[0.9375rem] leading-snug text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

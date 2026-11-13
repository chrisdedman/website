import type { ReactNode } from 'react';

export type MetaItem = {
  term: string;
  value: ReactNode;
};

/** Facts about a piece of work: a small label with its value underneath. */
export default function MetaList({
  items,
  className = '',
}: {
  items: MetaItem[];
  className?: string;
}) {
  return (
    <dl className={`grid gap-x-8 gap-y-5 ${className}`}>
      {items.map((item) => (
        <div key={item.term}>
          <dt className="label">{item.term}</dt>
          <dd className="mt-1 text-ink">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

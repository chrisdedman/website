import Link from 'next/link';

import type { WorkMeta } from '@/content/work/types';

/**
 * One piece of work as a card. The whole card is the link, so there is no
 * separate button to aim for.
 */
export default function WorkCard({ entry }: { entry: WorkMeta }) {
  return (
    <Link
      href={`/work/${entry.slug}`}
      className="group flex h-full flex-col rounded-xl border border-rule bg-surface p-6 transition-colors hover:border-rule-strong"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-[1.375rem] font-semibold leading-tight tracking-[-0.01em] text-ink underline-offset-4 group-hover:underline">
          {entry.title}
        </h3>
        <span className="font-mono text-[0.75rem] text-ink-faint">{entry.year}</span>
      </div>
      <p className="mt-2 text-[0.96875rem] leading-[1.55] text-ink-muted">{entry.summary}</p>
      <p className="mt-auto pt-4 font-mono text-[0.78125rem] text-ink-faint">
        {entry.stack.join(' · ')}
        {entry.interactive ? ' · runs in the browser' : ''}
      </p>
    </Link>
  );
}

export function WorkCardGrid({ entries }: { entries: WorkMeta[] }) {
  return (
    <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => (
        <li key={entry.slug}>
          <WorkCard entry={entry} />
        </li>
      ))}
    </ul>
  );
}

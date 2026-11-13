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
      className="group flex h-full flex-col gap-2.5 rounded-2xl border border-rule bg-surface p-7 shadow-card transition duration-200 hover:shadow-card-hover motion-safe:hover:-translate-y-[3px]"
    >
      <p className="text-sm text-ink-faint">{entry.stack.join(' · ')}</p>
      <h3 className="font-display text-[1.875rem] font-bold leading-[1.1] tracking-[-0.01em] text-ink">
        {entry.title}
      </h3>
      <p className="text-ink-muted">{entry.summary}</p>
      <p className="mt-auto pt-3 font-medium text-accent">
        {entry.interactive ? 'Try it' : 'Read more'}{' '}
        <span
          aria-hidden="true"
          className="inline-block transition-transform group-hover:translate-x-0.5"
        >
          →
        </span>
      </p>
    </Link>
  );
}

export function WorkCardGrid({ entries }: { entries: WorkMeta[] }) {
  return (
    <ul className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => (
        <li key={entry.slug}>
          <WorkCard entry={entry} />
        </li>
      ))}
    </ul>
  );
}

import Link from 'next/link';
import type { WorkMeta } from '@/content/work/types';

/**
 * The work index. Deliberately a list of rule-separated rows rather than a
 * card grid: every row carries stack, year and role, so the page scans as a
 * table of contents instead of a wall of equally weighted boxes.
 */
export default function WorkIndex({
  entries,
  startIndex = 0,
}: {
  entries: WorkMeta[];
  /** Continues numbering across grouped sections on the work page. */
  startIndex?: number;
}) {
  return (
    <ol className="border-b border-rule">
      {entries.map((entry, i) => (
        <li key={entry.slug} className="border-t border-rule first:border-t-0">
          <Link
            href={`/work/${entry.slug}`}
            className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-4 py-4 transition-colors hover:bg-paper-raised sm:gap-x-6 sm:py-5"
          >
            <span className="label tabular-nums transition-colors group-hover:text-accent">
              {String(startIndex + i + 1).padStart(2, '0')}
            </span>

            <span className="min-w-0">
              <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-[1.0625rem] font-semibold leading-tight tracking-[-0.01em] text-ink decoration-accent decoration-1 underline-offset-4 group-hover:underline">
                  {entry.title}
                </span>
                {entry.interactive ? (
                  <span className="label border border-rule px-1.5 py-0.5 text-accent">
                    try it
                  </span>
                ) : null}
              </span>
              <span className="mt-1.5 block max-w-[46ch] text-[0.875rem] leading-snug text-ink-muted">
                {entry.summary}
              </span>
              <span className="label mt-2 block sm:hidden">
                {entry.year} · {entry.role.toLowerCase()} · {entry.stack.join(' · ')}
              </span>
            </span>

            <span className="hidden shrink-0 text-right sm:block">
              <span className="label block text-ink-muted">{entry.stack.join(' · ')}</span>
              <span className="label mt-1.5 block tabular-nums">
                {entry.year} · {entry.role.toLowerCase()}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ArrowRight, ArrowUpRight } from '@/components/ui/icons';
import type { WorkMeta } from '@/content/work/types';

export type WorkBrowserGroup = {
  /** Sidebar heading, e.g. "Open source". */
  label: string;
  /** Singular, for the line above the selected entry's title. */
  singular: string;
  entries: WorkMeta[];
};

/**
 * All the work in one place: a list of names on the left, the selected entry
 * on the right. Below `lg` the list becomes rows of buttons above the panel,
 * so the choice and its result stay on the same screen.
 */
export default function WorkBrowser({ groups }: { groups: WorkBrowserGroup[] }) {
  const [picked, setPicked] = useState(groups[0]?.entries[0]?.slug);

  const group = groups.find((g) => g.entries.some((entry) => entry.slug === picked)) ?? groups[0];
  const entry = group?.entries.find((e) => e.slug === picked) ?? group?.entries[0];
  if (!group || !entry) return null;

  return (
    <div className="mt-10 flex flex-col gap-x-10 gap-y-6 lg:flex-row lg:items-start">
      <div className="lg:w-[16rem] lg:flex-none">
        {groups.map((g) => (
          <div key={g.label} className="[&+&]:mt-5">
            <p className="label mb-1.5 px-3">{g.label}</p>
            <ul className="flex flex-wrap gap-1 lg:block">
              {g.entries.map((item) => (
                <li key={item.slug}>
                  <button
                    type="button"
                    aria-pressed={item.slug === entry.slug}
                    onClick={() => setPicked(item.slug)}
                    className="flex min-h-11 w-full items-center justify-between gap-2.5 rounded-lg px-3 text-left text-[0.9375rem] text-ink-muted transition-colors hover:bg-panel hover:text-ink aria-pressed:bg-selected aria-pressed:font-semibold aria-pressed:text-ink"
                  >
                    <span>{item.title}</span>
                    <span className="hidden font-mono text-[0.75rem] font-normal text-ink-faint lg:inline">
                      {item.year}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <article
        aria-live="polite"
        className="min-w-0 flex-1 overflow-hidden rounded-xl border border-rule bg-surface"
      >
        {entry.cover ? (
          <Image
            key={entry.cover.src}
            src={entry.cover.src}
            alt={entry.cover.alt}
            width={entry.cover.width}
            height={entry.cover.height}
            sizes="(max-width: 1024px) 100vw, 880px"
            className="h-[clamp(12rem,30vw,20rem)] w-full border-b border-rule object-cover object-left-top"
          />
        ) : null}

        <div className="px-6 pb-7 pt-6 sm:px-8 sm:pb-8 sm:pt-7">
          <p className="font-mono text-[0.78125rem] text-ink-faint">
            {group.singular} · {entry.year}
            {entry.interactive ? ' · runs in the browser' : ''}
          </p>
          <h3 className="mt-2 font-display text-[2rem] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
            {entry.title}
          </h3>
          <p className="mt-3 max-w-[40rem] text-lg text-ink-muted">{entry.summary}</p>

          <dl className="mt-6 flex flex-wrap gap-x-12 gap-y-4 border-t border-rule pt-5">
            <div>
              <dt className="label">Role</dt>
              <dd className="mt-1 text-[0.96875rem] text-ink">{entry.role}</dd>
            </div>
            <div>
              <dt className="label">Built with</dt>
              <dd className="mt-1 text-[0.96875rem] text-ink">{entry.stack.join(', ')}</dd>
            </div>
          </dl>

          <div className="mt-7 flex flex-wrap gap-2.5">
            <Link
              href={`/work/${entry.slug}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-btn px-5 text-[0.9375rem] font-semibold text-btn-ink transition-colors hover:bg-btn-hover"
            >
              {entry.interactive ? 'Try it' : 'Read the write-up'}
              <ArrowRight />
            </Link>
            {entry.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-rule-strong px-5 text-[0.9375rem] font-semibold text-ink transition-colors hover:bg-raised"
              >
                {link.label}
                <ArrowUpRight size={14} />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

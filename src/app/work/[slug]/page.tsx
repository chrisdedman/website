import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import ActionLink from '@/components/ui/action-link';
import Breadcrumb from '@/components/ui/breadcrumb';
import Container from '@/components/ui/container';
import MetaList from '@/components/ui/meta-list';
import { getWork, kindLabels, kindLabelsSingular, work } from '@/content/work';
import { site } from '@/content/site';
import { share } from '@/lib/metadata';

type Params = { params: Promise<{ slug: string }> };

/** All entries are known at build time, so anything else is a 404, not a render. */
export const dynamicParams = false;

export function generateStaticParams() {
  return work.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWork(slug);
  if (!entry) return {};

  return {
    title: entry.title,
    description: entry.summary,
    alternates: { canonical: `${site.url}/work/${slug}` },
    ...share({
      title: `${entry.title} — ${site.shortName}`,
      description: entry.summary,
      path: `/work/${slug}`,
      type: 'article',
    }),
  };
}

export default async function WorkDetailPage({ params }: Params) {
  const { slug } = await params;
  const entry = getWork(slug);
  if (!entry) notFound();

  const { Body } = entry;
  const index = work.findIndex((item) => item.slug === slug);
  const previous = work[(index - 1 + work.length) % work.length];
  const next = work[(index + 1) % work.length];

  const meta = (
    <MetaList
      className="sm:grid-cols-2 lg:grid-cols-1"
      items={[
        { term: 'Year', value: entry.year },
        { term: 'Role', value: entry.role },
        { term: 'Stack', value: entry.stack.join(' · ') },
        { term: 'Type', value: kindLabelsSingular[entry.kind] },
      ]}
    />
  );

  const links = entry.links?.length ? (
    <div className="flex flex-wrap gap-3 lg:flex-col lg:items-start">
      {entry.links.map((link) => (
        <ActionLink key={link.href} href={link.href}>
          {link.label}
        </ActionLink>
      ))}
    </div>
  ) : null;

  return (
    <Container className="pb-8 pt-12 sm:pt-16">
      <Breadcrumb
        trail={[
          { label: 'work', href: '/work' },
          { label: kindLabels[entry.kind].toLowerCase(), href: `/work#${entry.kind}` },
          { label: entry.title },
        ]}
      />

      <header className="mt-8 border-b border-rule pb-8">
        <p className="label">
          № {String(index + 1).padStart(2, '0')} of {work.length}
        </p>
        <h1 className="mt-3 max-w-[20ch] text-title font-semibold text-ink">{entry.title}</h1>
        <p className="mt-4 max-w-[58ch] text-[1.0625rem] leading-relaxed text-ink-muted">
          {entry.summary}
        </p>
      </header>

      {/*
        Two columns from lg up: the write-up in a fixed reading measure, and
        the spec sheet in a rail that stays put while the article scrolls.
        Below lg the rail stacks above the article, where it was before.
      */}
      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,68ch)_1fr] lg:gap-16">
        <aside className="order-first lg:order-last">
          <div className="space-y-8 lg:sticky lg:top-24">
            {meta}
            {links}
          </div>
        </aside>

        <article className="prose min-w-0">
          <Body />
        </article>
      </div>

      <nav
        className="mt-20 grid gap-6 border-t border-rule pt-5 sm:grid-cols-2"
        aria-label="Adjacent entries"
      >
        <Link href={`/work/${previous.slug}`} className="group block">
          <span className="label">Previous</span>
          <span className="mt-2 flex items-baseline gap-2 text-[1.0625rem] font-semibold text-ink">
            <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            {previous.title}
          </span>
        </Link>
        <Link href={`/work/${next.slug}`} className="group block sm:text-right">
          <span className="label">Next</span>
          <span className="mt-2 flex items-baseline gap-2 text-[1.0625rem] font-semibold text-ink sm:justify-end">
            {next.title}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </Link>
      </nav>
    </Container>
  );
}

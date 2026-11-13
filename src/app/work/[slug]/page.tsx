import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import ActionLink from '@/components/ui/action-link';
import Breadcrumb from '@/components/ui/breadcrumb';
import Container from '@/components/ui/container';
import MetaList from '@/components/ui/meta-list';
import { getWork, kindLabelsSingular, work } from '@/content/work';
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
  const kind = kindLabelsSingular[entry.kind];

  return (
    <Container className="pb-24 pt-10 sm:pt-14">
      <Breadcrumb
        trail={[
          { label: 'work', href: '/work' },
          { label: kind.toLowerCase(), href: `/work#${entry.kind}` },
          { label: entry.title },
        ]}
      />

      <header className="mt-8 border-b border-rule pb-8">
        <p className="eyebrow">{kind}</p>
        <h1 className="mt-4 max-w-[18ch] font-display text-title font-semibold text-ink">
          {entry.title}
        </h1>
        <p className="mt-5 max-w-[40rem] text-[1.1875rem] leading-[1.55] text-ink-muted">
          {entry.summary}
        </p>
      </header>

      {/*
        Two columns from lg up: the write-up in a reading measure, and a card
        of facts and links that stays put while the article scrolls. Below lg
        the card stacks above the article.
      */}
      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,44rem)_minmax(16rem,1fr)] lg:gap-16">
        <aside className="order-first lg:order-last">
          <div className="space-y-6 rounded-xl border border-rule bg-surface p-7 lg:sticky lg:top-24">
            <MetaList
              className="grid-cols-2 lg:grid-cols-1"
              items={[
                { term: 'Year', value: entry.year },
                { term: 'Role', value: entry.role },
                { term: 'Built with', value: entry.stack.join(', ') },
              ]}
            />
            {entry.links?.length ? (
              <div className="flex flex-wrap gap-3 border-t border-rule pt-6">
                {entry.links.map((link, i) => (
                  <ActionLink
                    key={link.href}
                    href={link.href}
                    variant={i === 0 ? 'primary' : 'outline'}
                  >
                    {link.label}
                  </ActionLink>
                ))}
              </div>
            ) : null}
          </div>
        </aside>

        <article className="prose min-w-0">
          <Body />
        </article>
      </div>

      <nav
        className="mt-20 grid gap-6 border-t border-rule pt-6 sm:grid-cols-2"
        aria-label="Adjacent entries"
      >
        <Link href={`/work/${previous.slug}`} className="group block">
          <span className="label">Previous</span>
          <span className="mt-2 block font-display text-2xl font-semibold text-ink underline-offset-4 group-hover:underline">
            <span aria-hidden="true">← </span>
            {previous.title}
          </span>
        </Link>
        <Link href={`/work/${next.slug}`} className="group block sm:text-right">
          <span className="label">Next</span>
          <span className="mt-2 block font-display text-2xl font-semibold text-ink underline-offset-4 group-hover:underline">
            {next.title}
            <span aria-hidden="true"> →</span>
          </span>
        </Link>
      </nav>
    </Container>
  );
}

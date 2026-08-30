import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import ActionLink from '@/components/ui/action-link';
import Breadcrumb from '@/components/ui/breadcrumb';
import Container from '@/components/ui/container';
import MetaList from '@/components/ui/meta-list';
import { getWork, kindLabels, kindLabelsSingular, work } from '@/content/work';
import { site } from '@/content/site';

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
    openGraph: {
      title: `${entry.title} — ${site.shortName}`,
      description: entry.summary,
      url: `${site.url}/work/${slug}`,
      type: 'article',
    },
  };
}

export default async function WorkDetailPage({ params }: Params) {
  const { slug } = await params;
  const entry = getWork(slug);
  if (!entry) notFound();

  const { Body } = entry;
  const index = work.findIndex((item) => item.slug === slug);
  const next = work[(index + 1) % work.length];

  return (
    <Container className="pb-8 pt-12 sm:pt-16">
      <Breadcrumb
        trail={[
          { label: 'work', href: '/work' },
          { label: kindLabels[entry.kind].toLowerCase(), href: '/work' },
          { label: entry.title },
        ]}
      />

      <header className="mt-8 border-b border-rule pb-10">
        <h1 className="max-w-[20ch] text-title font-semibold text-ink">{entry.title}</h1>
        <p className="mt-4 max-w-[58ch] text-[1.0625rem] leading-relaxed text-ink-muted">
          {entry.summary}
        </p>

        <MetaList
          className="mt-8 sm:grid-cols-2"
          items={[
            { term: 'Year', value: entry.year },
            { term: 'Role', value: entry.role },
            { term: 'Stack', value: entry.stack.join(' · ') },
            { term: 'Type', value: kindLabelsSingular[entry.kind] },
          ]}
        />

        {entry.links?.length ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {entry.links.map((link) => (
              <ActionLink key={link.href} href={link.href}>
                {link.label}
              </ActionLink>
            ))}
          </div>
        ) : null}
      </header>

      <article className="prose mt-10 max-w-[68ch]">
        <Body />
      </article>

      <nav className="mt-20 border-t border-rule pt-5" aria-label="Next entry">
        <Link href={`/work/${next.slug}`} className="group block">
          <span className="label">Next</span>
          <span className="mt-2 flex items-baseline gap-2 text-[1.0625rem] font-semibold text-ink">
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

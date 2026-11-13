import type { Metadata } from 'next';

import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/section-heading';
import { WorkCardGrid } from '@/components/ui/work-card';
import { groupedWork, kindLabels, work } from '@/content/work';
import { site } from '@/content/site';
import { share } from '@/lib/metadata';

const description =
  'Mac apps, open source contributions, personal projects, and research from Chris Dedman-Rollet.';

export const metadata: Metadata = {
  title: 'Work',
  description,
  alternates: { canonical: `${site.url}/work` },
  ...share({ title: `Work — ${site.shortName}`, description, path: '/work' }),
};

export default function WorkPage() {
  return (
    <Container className="pb-24 pt-[clamp(3rem,6vw,5rem)]">
      <header>
        <p className="eyebrow">Work</p>
        <h1 className="mt-4 font-display text-title font-semibold text-ink">
          Things I have built and helped build
        </h1>
        <p className="mt-5 max-w-[36rem] text-ink-muted">
          {work.length} pieces of work: Mac apps, open source I contribute to or lead, personal projects, and
          research. A few of them run right here in the browser.
        </p>
      </header>

      {groupedWork.map((group) => (
        <section key={group.kind} id={group.kind} className="mt-16 scroll-mt-24">
          <SectionHeading aside={<span className="font-mono text-[0.8125rem] text-ink-faint">{group.entries.length}</span>}>
            {kindLabels[group.kind]}
          </SectionHeading>
          <WorkCardGrid entries={group.entries} />
        </section>
      ))}
    </Container>
  );
}

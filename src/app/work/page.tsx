import type { Metadata } from 'next';

import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/section-heading';
import WorkIndex from '@/components/ui/work-index';
import { groupedWork, kindLabels, work } from '@/content/work';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Open source contributions, personal projects, and research from Chris Dedman — kernels, developer tooling, and full-stack systems.',
  alternates: { canonical: `${site.url}/work` },
};

export default function WorkPage() {
  return (
    <Container className="pb-8 pt-16 sm:pt-20">
      <header>
        <p className="label">Index</p>
        <h1 className="mt-4 text-title font-semibold text-ink">Work</h1>
        <p className="mt-5 max-w-[58ch] text-[1.0625rem] leading-relaxed text-ink-muted">
          {work.length} entries: open source I contribute to or lead, projects built to answer a
          question, and research. A few of them run in the browser.
        </p>
      </header>

      {groupedWork.map((group) => (
        <section key={group.kind} className="mt-16">
          <SectionHeading aside={`${group.entries.length}`}>
            {kindLabels[group.kind]}
          </SectionHeading>
          <div className="mt-2">
            <WorkIndex entries={group.entries} startIndex={group.startIndex} />
          </div>
        </section>
      ))}
    </Container>
  );
}

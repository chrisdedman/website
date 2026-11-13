import Image from 'next/image';
import Link from 'next/link';

import WorkBrowser, { type WorkBrowserGroup } from '@/components/home/work-browser';
import ActionLink from '@/components/ui/action-link';
import Container from '@/components/ui/container';
import { ArrowRight } from '@/components/ui/icons';
import Timeline from '@/components/ui/timeline';
import { education, experience, skills } from '@/content/resume';
import { site } from '@/content/site';
import { groupedWork, kindLabelsSingular, work, type Kind } from '@/content/work';

/** Shorter than the section headings on /work: these sit in a narrow sidebar. */
const sidebarLabels: Record<Kind, string> = {
  app: 'Mac apps',
  'open-source': 'Open source',
  project: 'Projects',
  research: 'Research',
};

/*
 * Only the metadata crosses to the client component: the write-up bodies are
 * server components and stay on their own pages.
 */
const browserGroups: WorkBrowserGroup[] = groupedWork.map((group) => ({
  label: sidebarLabels[group.kind],
  singular: kindLabelsSingular[group.kind],
  entries: group.entries.map((entry) => ({
    slug: entry.slug,
    title: entry.title,
    kind: entry.kind,
    year: entry.year,
    summary: entry.summary,
    stack: entry.stack,
    role: entry.role,
    links: entry.links,
    cover: entry.cover,
    interactive: entry.interactive,
  })),
}));

const sectionTitle = 'font-display text-title font-semibold text-ink';
const textLink = 'font-medium text-accent underline underline-offset-4 hover:no-underline';

export default function HomePage() {
  return (
    <>
      <Container className="flex flex-wrap items-center gap-x-16 gap-y-12 pb-20 pt-[clamp(3rem,6vw,5rem)]">
        <div className="flex-[1_1_28rem]">
          <h1 className="font-display text-display font-semibold text-ink">Chris Dedman</h1>
          <p className="mt-5 max-w-[34rem] text-[1.375rem] leading-[1.45] text-ink">
            Founding software engineer at Baro. I also make Mac apps, and work on kernels and open
            source in my own time.
          </p>
          <p className="mt-5 max-w-[34rem] text-[1.0625rem] leading-[1.6] text-ink-muted">
            Before Baro I worked on a CMS at Profound and did two internships at Uber. Before
            software, I served in the French military and worked as a butcher.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href="#work" variant="primary">
              See my work
            </ActionLink>
            <ActionLink href="/profile">Read my profile</ActionLink>
          </div>
        </div>

        <figure className="flex-[1_1_24rem]">
          <Image
            src="/me_engine.jpeg"
            alt="Chris standing in front of a rocket engine"
            width={1024}
            height={768}
            priority
            sizes="(max-width: 1024px) 100vw, 560px"
            className="h-[clamp(18rem,32vw,27rem)] w-full rounded-xl object-cover object-[62%_35%]"
          />
          <figcaption className="mt-2.5 text-sm text-ink-faint">
            Me, with a rocket engine. {site.location}.
          </figcaption>
        </figure>
      </Container>

      <section id="work" className="scroll-mt-16 border-t border-rule">
        <Container className="py-[clamp(4rem,7vw,5.5rem)]">
          <h2 className={sectionTitle}>Work</h2>
          <p className="mt-3 max-w-[40rem] text-lg text-ink-muted">
            {`${work.length} things I've built or helped build: Mac apps, open source, personal projects and research. `}
            They&rsquo;re also{' '}
            <Link href="/work" className={textLink}>
              all on one page
            </Link>
            .
          </p>
          <WorkBrowser groups={browserGroups} />
        </Container>
      </section>

      <section id="experience" className="scroll-mt-16 border-t border-rule bg-panel">
        <Container className="grid gap-x-16 gap-y-10 py-[clamp(4rem,7vw,5.5rem)] lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
          <div>
            <h2 className={sectionTitle}>Experience</h2>

            <h3 className="label mt-10">Education</h3>
            <ul className="mt-3 divide-y divide-rule border-y border-rule">
              {education.map((study) => (
                <li key={study.org} className="py-4">
                  <p className="text-[0.96875rem] font-semibold text-ink">{study.credential}</p>
                  <p className="mt-0.5 text-[0.90625rem] leading-normal text-ink-muted">
                    {study.org}
                  </p>
                  <p className="mt-0.5 font-mono text-[0.78125rem] text-ink-faint">
                    {study.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* The short version: who, what and when. The descriptions are on /profile. */}
          <div>
            <Timeline
              className="[--ground:var(--panel)]"
              items={experience.map((role, index) => ({
                key: `${role.org}-${role.period}`,
                title: role.org,
                period: role.period,
                subtitle: role.title,
                current: index === 0,
              }))}
            />
            <Link
              href="/profile#experience"
              className="ml-8 inline-flex min-h-11 items-center gap-2 font-semibold text-accent underline-offset-4 hover:underline"
            >
              Full history on my profile
              <ArrowRight />
            </Link>
          </div>
        </Container>
      </section>

      <section id="tools" className="scroll-mt-16 border-t border-rule">
        <Container className="grid gap-x-16 gap-y-8 py-[clamp(4rem,7vw,5.5rem)] lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
          <h2 className={sectionTitle}>Tools</h2>
          <dl className="divide-y divide-rule border-y border-rule">
            {skills.map((group) => (
              <div key={group.group} className="grid gap-x-8 gap-y-1 py-4 sm:grid-cols-[8rem_1fr]">
                <dt className="label pt-1.5">{group.group}</dt>
                <dd className="text-ink-muted">{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-t border-rule bg-panel">
        <Container className="grid gap-x-16 gap-y-6 py-[clamp(4rem,7vw,5.5rem)] lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
          <h2 className={sectionTitle}>Contact</h2>
          <p className="max-w-[40rem] font-display text-lede text-ink">
            Email is the quickest way to reach me:{' '}
            <a href={`mailto:${site.email}`} className={textLink}>
              {site.email}
            </a>
            . The other places I&rsquo;m on are in the footer.
          </p>
        </Container>
      </section>
    </>
  );
}

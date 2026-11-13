import Image from 'next/image';
import Link from 'next/link';

import ActionLink from '@/components/ui/action-link';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/section-heading';
import { WorkCardGrid } from '@/components/ui/work-card';
import { site } from '@/content/site';
import { homeProjects, kindLabels, workOfKind } from '@/content/work';

const textLink =
  'inline-flex min-h-11 items-center font-medium underline-offset-4 hover:underline';

export default function HomePage() {
  return (
    <>
      <Container className="flex flex-wrap items-center gap-x-16 gap-y-12 pb-16 pt-[clamp(3rem,7vw,6rem)]">
        <div className="flex-[1_1_26rem]">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Portfolio</p>
          <h1 className="mt-4 font-display text-display font-bold text-ink">{site.name}</h1>
          <p className="mt-5 font-display text-[clamp(1.375rem,2.4vw,1.875rem)] italic leading-[1.3] text-ink-muted">
            Software engineer and computer scientist.
          </p>
          <p className="mt-5 max-w-[31rem] text-ink-muted">{site.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
            <ActionLink href="/work" variant="primary">
              See my work
            </ActionLink>
            <ActionLink href={`mailto:${site.email}`} external={false}>
              Email me
            </ActionLink>
          </div>
        </div>

        <div className="flex-[1_1_26rem]">
          <Image
            src="/me_engine.jpeg"
            alt="Chris standing in front of a rocket engine"
            width={1024}
            height={768}
            priority
            sizes="(max-width: 1024px) 100vw, 600px"
            className="h-[clamp(18rem,40vw,30rem)] w-full rounded-3xl object-cover object-[62%_35%] shadow-card-hover"
          />
        </div>
      </Container>

      <Container className="pb-8 pt-10">
        <SectionHeading
          aside={
            <Link href="/work" className={`${textLink} text-accent`}>
              All work →
            </Link>
          }
        >
          {kindLabels['open-source']}
        </SectionHeading>
        <WorkCardGrid entries={workOfKind('open-source')} />
      </Container>

      <Container className="pb-24 pt-14">
        <SectionHeading>{kindLabels.project}</SectionHeading>
        <WorkCardGrid entries={homeProjects} />
      </Container>

      <section className="border-t border-white/10 bg-navy text-slate-200">
        <Container className="flex flex-wrap items-center gap-x-16 gap-y-10 py-20">
          <Image
            src="/me.jpg"
            alt="Portrait of Chris"
            width={200}
            height={200}
            sizes="200px"
            className="size-[12.5rem] flex-none rounded-full object-cover"
          />
          <div className="flex-[1_1_26rem]">
            <p className="font-display text-lede text-slate-50">
              I work on a full-stack CMS at Profound and study for an M.S. in Computer Science at
              CSU Long Beach. Before that, two software engineering internships at Uber.
            </p>
            <Link href="/profile" className={`${textLink} mt-4 text-orange-300`}>
              Read my profile →
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

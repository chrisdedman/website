import type { Metadata } from 'next';
import Image from 'next/image';

import ActionLink from '@/components/ui/action-link';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/section-heading';
import Timeline from '@/components/ui/timeline';
import { awards, education, experience, skills } from '@/content/resume';
import { site, socials } from '@/content/site';
import { share } from '@/lib/metadata';

const description =
  'Chris Dedman-Rollet: founding software engineer at Baro. Experience, education, and technical skills.';

export const metadata: Metadata = {
  title: 'Profile',
  description,
  alternates: { canonical: `${site.url}/profile` },
  ...share({ title: `Profile — ${site.shortName}`, description, path: '/profile' }),
};

/** One résumé line: when on the left, what on the right. */
function Entry({
  period,
  title,
  subtitle,
  body,
}: {
  period: string;
  title: string;
  subtitle?: string;
  body?: string;
}) {
  return (
    <div className="grid gap-x-10 gap-y-1 border-b border-rule py-7 last:border-b-0 md:grid-cols-[12rem_1fr]">
      <p className="pt-1 font-mono text-[0.8125rem] text-ink-faint">{period}</p>
      <div>
        <h3 className="text-[1.1875rem] font-semibold leading-snug tracking-[-0.01em] text-ink">
          {title}
        </h3>
        {subtitle ? <p className="mt-0.5 text-[0.96875rem] font-medium text-accent">{subtitle}</p> : null}
        {body ? <p className="mt-3 max-w-[42rem] text-ink-muted">{body}</p> : null}
      </div>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <Container className="pb-24 pt-[clamp(3rem,6vw,5rem)]">
      <header className="flex flex-wrap items-center gap-x-16 gap-y-10">
        <Image
          src="/me.jpg"
          alt="Portrait of Chris"
          width={240}
          height={240}
          priority
          sizes="240px"
          className="size-[clamp(10rem,22vw,15rem)] flex-none rounded-full border border-rule-strong object-cover"
        />
        <div className="flex-[1_1_28rem]">
          <p className="eyebrow">Profile</p>
          <h1 className="mt-4 font-display text-title font-semibold text-ink">{site.name}</h1>
          <p className="mt-4 text-[1.1875rem] text-ink-muted">
            Software engineer
          </p>
        </div>
      </header>

      <div className="mt-12 max-w-[46rem] space-y-5 text-[1.1875rem] leading-[1.6] text-ink-muted">
        <p>
          Hi, I&rsquo;m Chris Dedman, a software engineer with experience building full-stack
          applications, internal tools, and backend systems. I earned my B.S. in Computer Science
          from California State University, Dominguez Hills in 2025. I started an M.S. in Computer
          Science at California State University, Long Beach in 2026, which is on hold while I work
          at a startup.
        </p>
        <p>
          I&rsquo;ve worked across web performance, data engineering, observability, and product
          development through internships at Uber, my time at Profound, and my current role at
          Baro. Outside of work, I build Mac apps, contribute to open-source projects and enjoy
          building systems from the ground up, which has strengthened both my technical skill and
          curiosity as an engineer.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3" data-print="hide">
        <ActionLink href={`mailto:${site.email}`} external={false} variant="primary">
          Email me
        </ActionLink>
        {socials.slice(0, 2).map((social) => (
          <ActionLink key={social.label} href={social.href}>
            {social.label}
          </ActionLink>
        ))}
      </div>

      <section id="experience" className="mt-20 scroll-mt-20">
        <SectionHeading>Experience</SectionHeading>
        <Timeline
          className="mt-8"
          items={experience.map((role) => ({
            key: `${role.org}-${role.period}`,
            title: role.org,
            period: role.period,
            subtitle: role.title,
            body: role.body,
            current: role.period.endsWith('present'),
          }))}
        />
      </section>

      <section id="education" className="mt-16 scroll-mt-20">
        <SectionHeading>Education</SectionHeading>
        <Timeline
          className="mt-8"
          items={education.map((study) => ({
            key: study.org,
            title: study.org,
            period: study.period,
            subtitle: study.credential,
            body: study.body,
          }))}
        />
      </section>

      <section className="mt-16">
        <SectionHeading>Technical skills</SectionHeading>
        {skills.map((group) => (
          <div
            key={group.group}
            className="grid gap-x-10 gap-y-3 border-b border-rule py-6 last:border-b-0 md:grid-cols-[12rem_1fr]"
          >
            <h3 className="label pt-1.5">{group.group}</h3>
            <p className="max-w-[42rem] text-ink-muted">{group.items.join(', ')}</p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <SectionHeading>Honors &amp; awards</SectionHeading>
        {awards.map((award) => (
          <Entry
            key={award.org}
            period={award.period}
            title={award.org}
            subtitle={award.detail}
            body={award.body}
          />
        ))}
      </section>
    </Container>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';

import ActionLink from '@/components/ui/action-link';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/section-heading';
import { awards, education, experience, skills } from '@/content/resume';
import { site, socials } from '@/content/site';
import { share } from '@/lib/metadata';

const description =
  'Chris Dedman-Rollet: software engineer at Profound, M.S. student at CSULB. Experience, education, and technical skills.';

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
      <p className="pt-1.5 text-[0.9375rem] text-ink-faint">{period}</p>
      <div>
        <h3 className="font-display text-[1.625rem] font-semibold leading-tight text-ink">
          {title}
        </h3>
        {subtitle ? <p className="mt-1 font-medium text-ink-muted">{subtitle}</p> : null}
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
          className="size-[clamp(10rem,22vw,15rem)] flex-none rounded-full object-cover shadow-card-hover"
        />
        <div className="flex-[1_1_28rem]">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Profile</p>
          <h1 className="mt-4 font-display text-title font-bold text-ink">{site.name}</h1>
          <p className="mt-4 font-display text-[clamp(1.375rem,2.4vw,1.75rem)] italic text-ink-muted">
            Software engineer
          </p>
        </div>
      </header>

      <div className="mt-12 max-w-[46rem] space-y-5 text-[1.1875rem] leading-[1.6] text-ink-muted">
        <p>
          Hi, I&rsquo;m Chris Dedman, a software engineer with experience building full-stack
          applications, internal tools, and backend systems. I earned my B.S. in Computer Science
          from California State University, Dominguez Hills in 2025 and I&rsquo;m currently pursuing
          an M.S. in Computer Science at California State University, Long Beach.
        </p>
        <p>
          I&rsquo;ve worked across web performance, data engineering, observability, and product
          development through internships at Uber and my current role at Profound. Outside of work,
          I contribute to open-source projects and enjoy building systems from the ground up, which
          has strengthened both my technical skill and curiosity as an engineer.
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

      <section className="mt-20">
        <SectionHeading>Experience</SectionHeading>
        {experience.map((role) => (
          <Entry
            key={`${role.org}-${role.period}`}
            period={role.period}
            title={role.org}
            subtitle={role.title}
            body={role.body}
          />
        ))}
      </section>

      <section className="mt-16">
        <SectionHeading>Education</SectionHeading>
        {education.map((study) => (
          <Entry
            key={study.org}
            period={study.period}
            title={study.org}
            subtitle={study.credential}
            body={study.body}
          />
        ))}
      </section>

      <section className="mt-16">
        <SectionHeading>Technical skills</SectionHeading>
        {skills.map((group) => (
          <div
            key={group.group}
            className="grid gap-x-10 gap-y-3 border-b border-rule py-6 last:border-b-0 md:grid-cols-[12rem_1fr]"
          >
            <h3 className="pt-1.5 text-[0.9375rem] text-ink-faint">{group.group}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-rule bg-surface px-3.5 py-1.5 text-[0.9375rem] text-ink-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
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

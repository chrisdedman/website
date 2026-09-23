import type { Metadata } from 'next';
import Image from 'next/image';

import ActionLink from '@/components/ui/action-link';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/ui/section-heading';
import { awards, education, experience, skills } from '@/content/resume';
import { site, socials } from '@/content/site';
import { share } from '@/lib/metadata';

const description =
  'Chris Dedman — software engineer at Profound, M.S. student at CSULB. Experience, education, and technical skills.';

export const metadata: Metadata = {
  title: 'About',
  description,
  alternates: { canonical: `${site.url}/about` },
  ...share({ title: `About — ${site.shortName}`, description, path: '/about' }),
};

/**
 * A résumé rendered as a document: the period sits in the left margin and the
 * entry beside it, so the whole history is scannable down a single column.
 */
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
    <div className="grid gap-x-8 gap-y-2 border-b border-rule py-6 last:border-b-0 md:grid-cols-[10rem_1fr]">
      <p className="label pt-1">{period}</p>
      <div>
        <h3 className="text-[1.0625rem] font-semibold leading-snug text-ink">{title}</h3>
        {subtitle ? <p className="mt-1 text-[0.9375rem] text-ink-muted">{subtitle}</p> : null}
        {body ? (
          <p className="mt-3 max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink-muted">
            {body}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <Container className="pb-8 pt-16 sm:pt-20">
      <header className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-14">
        <div>
          <p className="label">About</p>
          <h1 className="mt-4 max-w-[18ch] text-title font-semibold text-ink">
            Chris Dedman-Rollet
          </h1>
          <div className="mt-6 max-w-[58ch] space-y-4 text-[1.0625rem] leading-relaxed text-ink-muted">
            <p>
              I am a software engineer building full-stack applications, internal tools, and backend
              systems. I earned my B.S. in Computer Science from California State University,
              Dominguez Hills in 2025, and I am currently pursuing an M.S. in Computer Science at
              California State University, Long Beach.
            </p>
            <p>
              I have worked across web performance, data engineering, observability, and product
              development through internships at Uber and my current role at Profound. Outside of
              work I contribute to open source and build systems from the ground up — which is where
              most of my curiosity as an engineer actually comes from.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3" data-print="hide">
            <ActionLink href={`mailto:${site.email}`} external={false}>
              Email me
            </ActionLink>
            {socials.slice(0, 2).map((social) => (
              <ActionLink key={social.label} href={social.href}>
                {social.label}
              </ActionLink>
            ))}
          </div>
        </div>

        <Image
          src="/me.jpg"
          alt="Chris Dedman-Rollet"
          width={200}
          height={200}
          priority
          sizes="(max-width: 640px) 8rem, 200px"
          className="order-first w-32 border border-rule object-cover sm:order-none sm:w-[200px]"
        />
      </header>

      <figure className="mt-16" data-print="hide">
        <Image
          src="/me_engine.jpeg"
          alt="Chris standing in front of a rocket engine on display, its turbopump plumbing filling the frame behind him"
          width={1024}
          height={768}
          sizes="(max-width: 1088px) 100vw, 1024px"
          className="w-full border border-rule"
        />
        <figcaption className="label mt-3 flex flex-wrap justify-between gap-x-6 gap-y-1">
          <span>Fig. 1 — Close to the metal. A rocket engine, and the author.</span>
          <span>Photo: personal collection</span>
        </figcaption>
      </figure>

      <section className="mt-20">
        <SectionHeading>Experience</SectionHeading>
        <div className="mt-2">
          {experience.map((role) => (
            <Entry
              key={`${role.org}-${role.period}`}
              period={role.period}
              title={role.org}
              subtitle={role.title}
              body={role.body}
            />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading>Education</SectionHeading>
        <div className="mt-2">
          {education.map((study) => (
            <Entry
              key={study.org}
              period={study.period}
              title={study.org}
              subtitle={study.credential}
              body={study.body}
            />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading>Technical skills</SectionHeading>
        <div className="mt-2">
          {skills.map((group) => (
            <div
              key={group.group}
              className="grid gap-x-8 gap-y-2 border-b border-rule py-5 last:border-b-0 md:grid-cols-[10rem_1fr]"
            >
              <p className="label pt-1">{group.group}</p>
              <ul className="flex flex-wrap gap-x-2 gap-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-rule px-2 py-1 font-mono text-[0.75rem] text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading>Honors &amp; awards</SectionHeading>
        <div className="mt-2">
          {awards.map((award) => (
            <Entry
              key={award.org}
              period={award.period}
              title={award.org}
              subtitle={award.detail}
              body={award.body}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}

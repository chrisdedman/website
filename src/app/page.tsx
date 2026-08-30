import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/ui/container';
import MetaList from '@/components/ui/meta-list';
import SectionHeading from '@/components/ui/section-heading';
import WorkIndex from '@/components/ui/work-index';
import { featured, work } from '@/content/work';
import { site } from '@/content/site';

export default function HomePage() {
  return (
    <Container className="pb-8 pt-16 sm:pt-24">
      {/* Masthead. Typographic rather than a photo hero: the statement is the
          first thing read, and the portrait sits in the margin as a credential. */}
      <section className="grid gap-10 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-14">
        <div>
          <p className="label">
            Software engineer · {site.location}
          </p>
          <h1 className="mt-5 max-w-[16ch] text-display font-semibold text-ink">
            I build close to the metal.
          </h1>
          <p className="mt-6 max-w-[54ch] text-[1.0625rem] leading-relaxed text-ink-muted">
            Kernels and bare-metal ARM, developer tooling in C++ and Rust, and the full-stack
            systems that sit on top of them. I care about code that stays readable long after the
            problem stops being novel.
          </p>
        </div>

        <Image
          src="/me.jpg"
          alt="Chris Dedman-Rollet"
          width={168}
          height={168}
          priority
          sizes="168px"
          className="order-first w-28 border border-rule object-cover sm:order-none sm:w-[168px]"
        />
      </section>

      {/* The spec block: everything a recruiter or collaborator scans for, in one place. */}
      <section className="mt-16">
        <SectionHeading>Currently</SectionHeading>
        <MetaList
          className="mt-6"
          items={[
            {
              term: 'Working',
              value: (
                <>
                  Full-stack engineer at <strong className="font-semibold">Profound</strong>,
                  on a TypeScript CMS monorepo and its observability
                </>
              ),
            },
            {
              term: 'Studying',
              value: 'M.S. Computer Science at CSU Long Beach — embedded and low-level systems',
            },
            {
              term: 'Building',
              value: (
                <>
                  <Link
                    href="/work/astra-kernel"
                    className="underline decoration-accent underline-offset-4 hover:text-accent"
                  >
                    AstraKernel
                  </Link>
                  , a minimal ARM kernel, and leading Sandbox Science
                </>
              ),
            },
            {
              term: 'Previously',
              value: 'Software and data engineering internships at Uber — AdTech and DOTCOM',
            },
            {
              term: 'Languages',
              value: 'C · C++ · Rust · Go · Python · TypeScript · Elixir',
            },
          ]}
        />
      </section>

      <section className="mt-20">
        <SectionHeading aside={`${work.length} total`}>Selected work</SectionHeading>
        <div className="mt-2">
          <WorkIndex entries={featured} />
        </div>
        <p className="mt-6">
          <Link
            href="/work"
            className="label underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            Full index →
          </Link>
        </p>
      </section>
    </Container>
  );
}

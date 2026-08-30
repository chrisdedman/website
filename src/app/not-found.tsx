import Link from 'next/link';

import Container from '@/components/ui/container';

export default function NotFound() {
  return (
    <Container className="py-32">
      <p className="label">404</p>
      <h1 className="mt-4 text-title font-semibold text-ink">Nothing at this address.</h1>
      <p className="mt-4 max-w-[48ch] text-[1.0625rem] leading-relaxed text-ink-muted">
        The page may have moved when the site was rebuilt. The work index is the best place to pick
        the trail back up.
      </p>
      <p className="mt-8">
        <Link
          href="/work"
          className="label underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
        >
          Go to the work index →
        </Link>
      </p>
    </Container>
  );
}

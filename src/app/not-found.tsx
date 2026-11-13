import Container from '@/components/ui/container';
import ActionLink from '@/components/ui/action-link';

export default function NotFound() {
  return (
    <Container className="py-32">
      <p className="text-sm uppercase tracking-[0.3em] text-accent">404</p>
      <h1 className="mt-4 font-display text-title font-bold text-ink">Lost in space.</h1>
      <p className="mt-5 max-w-[32rem] text-ink-muted">
        There is nothing at this address. The page may have moved; the work index is the best place
        to pick the trail back up.
      </p>
      <div className="mt-8">
        <ActionLink href="/work" variant="primary">
          Go to my work
        </ActionLink>
      </div>
    </Container>
  );
}

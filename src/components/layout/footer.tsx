import Container from '@/components/ui/container';
import { site, socials } from '@/content/site';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-rule py-10">
      <Container>
        <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
          <div>
            <p className="label">Elsewhere</p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-[0.875rem] text-ink-muted underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:text-right">
            <p className="label">Contact</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block text-[0.875rem] text-ink-muted underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {site.email}
            </a>
          </div>
        </div>

        {/* Colophon. The motto is Chris's — it was on the old site, and every
            project he names starts with "astra". It stays, set small. */}
        <div className="label mt-10 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <p>
            © {new Date().getFullYear()} {site.name} · {site.location}
          </p>
          <p>
            <span lang="la">Ex astris, scientia</span> · Set in IBM Plex ·{' '}
            <a
              href="https://github.com/chrisdedman/website"
              target="_blank"
              rel="noreferrer noopener"
              className="underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              Source
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

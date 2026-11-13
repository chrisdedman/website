import { site, socials } from '@/content/site';

const footerLink =
  'inline-flex min-h-11 items-center rounded-lg px-3 text-[0.90625rem] text-ink-muted transition-colors hover:bg-raised hover:text-ink';

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex w-full max-w-[78rem] flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-7">
        <p className="font-display text-[1.1875rem] italic text-ink" lang="la">
          Ex astris, scientia.
        </p>

        <nav aria-label="Elsewhere" className="-mx-3">
          <ul className="flex flex-wrap gap-x-1">
            <li>
              <a href={`mailto:${site.email}`} className={footerLink}>
                Email
              </a>
            </li>
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={footerLink}
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-ink-faint">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}

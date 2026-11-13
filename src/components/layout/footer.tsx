import { site, socials } from '@/content/site';

const footerLink =
  'inline-flex min-h-11 items-center px-3 underline-offset-4 transition-colors hover:text-white hover:underline';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-slate-300">
      <div className="mx-auto flex w-full max-w-[81rem] flex-wrap items-center justify-between gap-x-10 gap-y-4 px-[clamp(1.25rem,5vw,4.5rem)] py-9">
        <p className="font-display text-xl italic text-slate-50" lang="la">
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

        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}

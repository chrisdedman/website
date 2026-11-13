'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { nav, site } from '@/content/site';
import ThemeToggle from './theme-toggle';

const navItem =
  'inline-flex min-h-11 items-center rounded-md px-3.5 transition-colors hover:bg-white/10';

/**
 * The navy bar is navy in both themes. On narrow screens the links wrap
 * under the name instead of hiding behind a menu button.
 */
export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-white/10 bg-navy text-slate-50 sm:sticky sm:top-0 sm:z-30">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-1 px-[clamp(1.25rem,5vw,4.5rem)] py-3">
        <Link href="/" className="group flex min-h-11 items-center gap-2.5 text-base">
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
          <span>{site.navName}</span>
        </Link>

        <nav aria-label="Main" className="-mx-3.5 sm:mx-0">
          <ul className="flex flex-wrap items-center gap-x-1">
            {nav.map((item) => (
              <li key={item.href}>
                {'external' in item ? (
                  <a href={item.href} target="_blank" rel="noreferrer noopener" className={navItem}>
                    {item.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    aria-current={pathname.startsWith(item.href) ? 'page' : undefined}
                    className={`${navItem} aria-[current=page]:bg-white/10`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <ThemeToggle className={navItem} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

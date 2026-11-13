'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Planet } from '@/components/ui/icons';
import { nav, site } from '@/content/site';
import ThemeToggle from './theme-toggle';

const navItem =
  'inline-flex min-h-11 items-center rounded-lg px-3 text-[0.90625rem] font-medium capitalize text-ink-muted transition-colors hover:bg-raised hover:text-ink';

/**
 * A translucent bar that lets the page show through as it scrolls under. On
 * narrow screens the links wrap under the name instead of hiding behind a
 * menu button, and the bar scrolls away rather than holding three rows of the
 * screen.
 */
export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-rule bg-ground/80 backdrop-blur-[14px] backdrop-saturate-150 sm:sticky sm:top-0 sm:z-30">
      <div className="mx-auto flex w-full max-w-[78rem] flex-wrap items-center justify-between gap-x-6 gap-y-1 px-6 py-2.5">
        <Link href="/" className="flex min-h-11 items-center gap-3 text-ink">
          <Planet />
          <span className="font-display text-xl font-semibold tracking-[-0.01em]">{site.navName}</span>
        </Link>

        <nav aria-label="Main" className="-mx-3 sm:mx-0">
          <ul className="flex flex-wrap items-center gap-x-0.5">
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
                    className={`${navItem} aria-[current=page]:bg-selected aria-[current=page]:text-ink`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <ThemeToggle className={navItem} />
            </li>
            <li className="ml-2">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-10 items-center rounded-lg bg-btn px-4 text-[0.90625rem] font-semibold text-btn-ink transition-colors hover:bg-btn-hover"
              >
                Email me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

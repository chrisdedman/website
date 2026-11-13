'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Planet } from '@/components/ui/icons';
import { nav, site } from '@/content/site';
import ThemeToggle from './theme-toggle';

const navItem =
  'inline-flex min-h-11 items-center rounded-lg px-3 text-[0.90625rem] font-medium capitalize text-ink-muted transition-colors hover:bg-raised hover:text-ink';

/** Full-width rows in the phone menu. */
const menuItem =
  'flex min-h-12 w-full items-center rounded-lg px-3 text-base font-medium capitalize text-ink transition-colors hover:bg-raised';

/**
 * A translucent bar that stays at the top while the page scrolls under it.
 * From `sm` up the links sit in the bar; on a phone the bar is one row, the
 * name and a menu button, and the links open in a panel below it.
 */
export default function Header() {
  const pathname = usePathname();
  // The menu belongs to the page it was opened on, so navigating closes it
  // without an effect.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const close = () => setOpenOn(null);

  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-ground/85 backdrop-blur-[14px] backdrop-saturate-150">
      <div className="mx-auto flex w-full max-w-[78rem] items-center justify-between gap-x-3 px-4 py-2 sm:px-6 sm:py-2.5">
        <Link
          href="/"
          onClick={close}
          className="flex min-h-11 min-w-0 items-center gap-2.5 text-ink sm:gap-3"
        >
          <Planet size={22} />
          <span className="truncate font-display text-lg font-semibold tracking-[-0.01em] sm:text-xl">
            {site.navName}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden sm:block">
          <ul className="flex items-center gap-x-0.5">
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

        <div className="flex flex-none items-center sm:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpenOn(open ? null : pathname)}
            className="inline-flex size-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-raised"
          >
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="border-t border-rule px-4 pb-4 pt-2 sm:hidden"
        >
          <ul className="flex flex-col gap-0.5">
            {nav.map((item) => (
              <li key={item.href}>
                {'external' in item ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={close}
                    className={menuItem}
                  >
                    {item.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    onClick={close}
                    aria-current={pathname.startsWith(item.href) ? 'page' : undefined}
                    className={`${menuItem} aria-[current=page]:bg-selected`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-1 flex min-h-12 items-center justify-between border-t border-rule px-3 pt-1">
            <span className="text-base font-medium text-ink">Theme</span>
            <ThemeToggle className={navItem} />
          </div>
          <a
            href={`mailto:${site.email}`}
            onClick={close}
            className="mt-3 flex min-h-12 w-full items-center justify-center rounded-lg bg-btn text-base font-semibold text-btn-ink transition-colors hover:bg-btn-hover"
          >
            Email me
          </a>
        </nav>
      ) : null}
    </header>
  );
}

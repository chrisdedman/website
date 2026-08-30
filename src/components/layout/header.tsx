'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { nav, site } from '@/content/site';
import ThemeToggle from './theme-toggle';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-rule bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[68rem] items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="font-mono text-[0.8125rem] tracking-[-0.01em] text-ink transition-colors hover:text-accent"
        >
          {site.name.toLowerCase()}
        </Link>

        <div className="flex items-center gap-1">
          <nav aria-label="Main" className="hidden sm:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active = !('external' in item) && pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <NavLink item={item} active={active} />
                  </li>
                );
              })}
            </ul>
          </nav>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="label ml-1 px-2 py-1 transition-colors hover:text-ink sm:hidden"
          >
            {open ? 'close' : 'menu'}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-rule sm:hidden">
          <ul className="mx-auto w-full max-w-[68rem] px-5 py-2">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-rule last:border-b-0">
                <NavLink item={item} active={false} block onNavigate={() => setOpen(false)} />
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function NavLink({
  item,
  active,
  block = false,
  onNavigate,
}: {
  item: (typeof nav)[number];
  active: boolean;
  block?: boolean;
  onNavigate?: () => void;
}) {
  const className = [
    'label transition-colors hover:text-ink',
    block ? 'block py-3' : 'px-2 py-1',
    active ? 'text-ink' : '',
  ].join(' ');

  if ('external' in item && item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer noopener"
        className={className}
        onClick={onNavigate}
      >
        {item.label} <span aria-hidden="true">↗</span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      className={className}
      aria-current={active ? 'page' : undefined}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}

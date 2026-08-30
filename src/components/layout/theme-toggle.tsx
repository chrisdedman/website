'use client';

import { useSyncExternalStore } from 'react';

import {
  getServerSnapshot,
  getSnapshot,
  setTheme,
  subscribe,
  type Theme,
} from '@/lib/theme-store';

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const next: Theme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className="label -mr-2 px-2 py-1 transition-colors hover:text-ink"
      aria-label={`Switch to ${next} theme`}
    >
      {next}
    </button>
  );
}

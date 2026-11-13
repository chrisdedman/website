'use client';

import { useSyncExternalStore } from 'react';

import {
  getServerSnapshot,
  getSnapshot,
  setTheme,
  subscribe,
  type Theme,
} from '@/lib/theme-store';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const next: Theme = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className={`${className} text-slate-300`}
      aria-label={`Switch to ${next} theme`}
    >
      {next}
    </button>
  );
}

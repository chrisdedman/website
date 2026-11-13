export type Theme = 'light' | 'dark';

const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

/**
 * The theme lives on <html data-theme> (written before paint by ThemeScript)
 * and in localStorage, both of which are external to React. Exposing it as a
 * store lets components read it with useSyncExternalStore instead of syncing
 * it into state from an effect.
 */
export function subscribe(callback: () => void) {
  listeners.add(callback);
  // Keep other tabs in step.
  window.addEventListener('storage', callback);
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  media.addEventListener('change', callback);

  return () => {
    listeners.delete(callback);
    window.removeEventListener('storage', callback);
    media.removeEventListener('change', callback);
  };
}

export function getSnapshot(): Theme {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === 'dark' || explicit === 'light') return explicit;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/** The server cannot know the visitor's theme; hydration corrects this. */
export function getServerSnapshot(): Theme {
  return 'light';
}

export function setTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // Private browsing or blocked storage: the choice just will not persist.
  }
  emit();
}

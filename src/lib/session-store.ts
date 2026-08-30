const KEY = 'sessionCount';

const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

/**
 * Completed focus blocks live in localStorage — a browser API, not React state.
 * Reading it through a store avoids both an effect-driven setState and the
 * hydration mismatch that a lazy useState initializer would cause.
 */
export function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener('storage', callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener('storage', callback);
  };
}

export function getSnapshot(): number {
  try {
    const stored = localStorage.getItem(KEY);
    if (!stored) return 0;
    const value = Number.parseInt(stored, 10);
    return Number.isFinite(value) && value >= 0 ? value : 0;
  } catch {
    return 0;
  }
}

export function getServerSnapshot(): number {
  return 0;
}

export function setSessions(count: number) {
  try {
    localStorage.setItem(KEY, String(count));
  } catch {
    // Non-fatal: the count simply will not persist.
  }
  emit();
}

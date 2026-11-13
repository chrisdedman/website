import type { ReactNode } from 'react';

/** A side note inside a write-up, set apart as a card. */
export default function Callout({ label, children }: { label: string; children: ReactNode }) {
  return (
    <aside className="my-8 rounded-xl border border-rule bg-surface p-6">
      <p className="eyebrow mb-2">{label}</p>
      <div className="text-ink-muted [&>*+*]:mt-3">{children}</div>
    </aside>
  );
}

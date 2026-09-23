import type { ReactNode } from 'react';

/**
 * A side note. Marked with a rule and a mono label rather than a colored box,
 * so it reads as an annotation in the margin of a document.
 */
export default function Callout({ label, children }: { label: string; children: ReactNode }) {
  return (
    <aside className="my-8 border-l-2 border-accent bg-accent-soft py-4 pl-5 pr-4">
      <p className="label mb-2 text-accent">{label}</p>
      <div className="text-[0.9375rem] leading-relaxed text-ink-muted [&>*+*]:mt-3 [&>p]:m-0">
        {children}
      </div>
    </aside>
  );
}

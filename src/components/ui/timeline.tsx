export type TimelineItem = {
  key: string;
  title: string;
  period: string;
  subtitle?: string;
  body?: string;
  /** Drawn as a filled dot: the role or study that is still going on. */
  current?: boolean;
};

/**
 * Entries strung on a vertical line, newest first. Used for experience on the
 * home page and for experience and education on the profile.
 */
export default function Timeline({
  items,
  className = "",
}: {
  items: TimelineItem[];
  className?: string;
}) {
  return (
    <ol className={className}>
      {items.map((item) => (
        <li key={item.key} className="flex gap-5">
          <div
            aria-hidden="true"
            className="flex w-3 flex-none flex-col items-center pt-[0.5625rem]"
          >
            <span
              className={`size-3 rounded-full border-2 border-accent ${
                item.current ? "bg-accent" : "bg-ground"
              }`}
            />
            <span className="mt-1.5 w-px flex-1 bg-rule-strong" />
          </div>
          <div className={item.body ? 'pb-8' : 'pb-5'}>
            <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
              <h3 className="text-[1.1875rem] font-semibold leading-snug tracking-[-0.01em] text-ink">
                {item.title}
              </h3>
              <span className="font-mono text-[0.78125rem] text-ink-faint">
                {item.period}
              </span>
            </div>
            {item.subtitle ? (
              <p className="mt-0.5 text-[0.96875rem] font-medium text-ink">
                {item.subtitle}
              </p>
            ) : null}
            {item.body ? (
              <p className="mt-2 max-w-[40rem] text-base text-ink-muted">
                {item.body}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

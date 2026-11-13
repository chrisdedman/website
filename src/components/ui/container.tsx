import type { ReactNode } from 'react';

/** The single content measure used by every page. */
export default function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[81rem] px-[clamp(1.25rem,5vw,4.5rem)] ${className}`}>
      {children}
    </div>
  );
}

import type { SVGProps } from 'react';

/*
 * The site's few icons, drawn as strokes so they take the text colour. All of
 * them are decorative: the label beside each one carries the meaning.
 */
function Icon({ size = 16, children, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

type IconProps = { size?: number; className?: string };

export function ArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Icon>
  );
}

/** The mark beside the name in the header: a planet and its ring. */
export function Planet({ size = 24 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="6" fill="var(--accent)" />
      <ellipse
        cx="13"
        cy="13"
        rx="12"
        ry="4.2"
        transform="rotate(-20 13 13)"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

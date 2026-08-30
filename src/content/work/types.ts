import type { ComponentType } from 'react';

/** Groups on the work index. Order here is the order they are rendered in. */
export const kinds = ['open-source', 'project', 'research'] as const;

export type Kind = (typeof kinds)[number];

/** Plural, for the index section headings. */
export const kindLabels: Record<Kind, string> = {
  'open-source': 'Open source',
  project: 'Projects',
  research: 'Research',
};

/** Singular, for the "Type" field on a single entry. */
export const kindLabelsSingular: Record<Kind, string> = {
  'open-source': 'Open source',
  project: 'Project',
  research: 'Research',
};

export type WorkLink = {
  label: string;
  href: string;
};

export type WorkMeta = {
  slug: string;
  title: string;
  kind: Kind;
  /** Displayed in the index column and used to sort within a group. */
  year: string;
  /** One line. Used on the index, in <meta> descriptions, and in card summaries. */
  summary: string;
  /** Primary languages/tools, most significant first. Kept short: 2-4 entries. */
  stack: string[];
  /** How Chris was involved: author, contributor, maintainer, researcher. */
  role: string;
  links?: WorkLink[];
  /** Set on things a visitor can use in the browser right now. */
  interactive?: boolean;
};

export type WorkModule = {
  meta: WorkMeta;
  default: ComponentType;
};

export type WorkEntry = WorkMeta & {
  Body: ComponentType;
};

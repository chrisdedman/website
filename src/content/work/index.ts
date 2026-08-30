import * as astraKernel from './astra-kernel';
import * as astraPulse from './astra-pulse';
import * as asteroid from './asteroid';
import * as capski from './capski';
import * as codeAstra from './code-astra';
import * as crudTemplate from './crud-template';
import * as cursif from './cursif';
import * as deepWork from './deep-work';
import * as matrixpy from './matrixpy';
import * as qrcode from './qrcode';
import * as research from './research';
import * as researchAi from './research-ai';
import * as resources from './resources';
import { kinds, type Kind, type WorkEntry, type WorkModule } from './types';

/*
 * Every entry is registered once, here. Metadata lives beside the write-up it
 * describes, so the index, the detail page, the sitemap and the <meta> tags all
 * read the same source and cannot drift apart.
 *
 * These are server components rendering static content, so they are imported
 * directly rather than through next/dynamic — there is no client bundle to
 * split, and generateStaticParams renders them all at build time regardless.
 */
const modules: WorkModule[] = [
  astraKernel,
  codeAstra,
  cursif,
  matrixpy,
  capski,
  astraPulse,
  asteroid,
  resources,
  deepWork,
  qrcode,
  crudTemplate,
  research,
  researchAi,
];

export const work: WorkEntry[] = modules.map(({ meta, default: Body }) => ({ ...meta, Body }));

export const workBySlug = new Map(work.map((entry) => [entry.slug, entry]));

export function getWork(slug: string): WorkEntry | undefined {
  return workBySlug.get(slug);
}

export type WorkGroup = {
  kind: Kind;
  entries: WorkEntry[];
  /** Running offset so the index numbers continuously across all groups. */
  startIndex: number;
};

/**
 * Groups in the order declared by `kinds`, preserving registration order within
 * each. Computed once at module load: the registry is static, so pages read it
 * rather than deriving it during render.
 */
export const groupedWork: WorkGroup[] = kinds
  .map((kind) => ({ kind, entries: work.filter((entry) => entry.kind === kind) }))
  .filter((group) => group.entries.length > 0)
  .reduce<WorkGroup[]>((groups, group) => {
    const previous = groups.at(-1);
    const startIndex = previous ? previous.startIndex + previous.entries.length : 0;
    groups.push({ ...group, startIndex });
    return groups;
  }, []);

export const featured: WorkEntry[] = ['astra-kernel', 'capski', 'cursif', 'code-astra']
  .map((slug) => workBySlug.get(slug))
  .filter((entry): entry is WorkEntry => entry !== undefined);

export { kindLabels, kindLabelsSingular, kinds } from './types';
export type { Kind, WorkEntry, WorkMeta } from './types';

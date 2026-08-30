import type { WorkMeta } from './types';

export const meta: WorkMeta = {
  slug: 'research-ai',
  title: 'Cancer Subtype Classification',
  kind: 'research',
  year: '2025',
  role: 'Researcher',
  stack: ['Python', 'scikit-learn'],
  summary:
    'Multi-class classification of cancer subtypes from gene expression data in the TCGA Pan-Cancer dataset.',
};

export default function Body() {
  return (
    <>
      <p>
        Classifying cancer subtypes from gene expression data. The work combines unsupervised
        techniques — clustering and dimensionality reduction — with supervised models including
        decision trees and random forests, applied to the TCGA Pan-Cancer dataset.
      </p>
      <p className="text-ink-muted">A fuller write-up is still to come.</p>
    </>
  );
}

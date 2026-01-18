import type { ComponentType } from 'react';

import AstraKernel from '@/components/projects/astra-kernel';
import CodeAstra from '@/components/projects/code-astra';
import Cursif from '@/components/projects/cursif';
import MatrixPy from '@/components/projects/matrixpy';
import Capski from '@/components/projects/capski';
import AstraPulse from '@/components/projects/astra-pulse';
import Asteroid from '@/components/projects/asteroid';
import Resources from '@/components/projects/resources';
import DeepWork from '@/components/projects/deep-work';
import QRCode from '@/components/projects/qrcode';
import CrudTemplate from '@/components/projects/crud-template';
import Research from '@/components/projects/research';
import ResearchAI from '@/components/projects/research-ai';

export const projectComponents: Record<string, ComponentType> = {
  'astra-kernel': AstraKernel,
  'code-astra': CodeAstra,
  cursif: Cursif,
  matrixpy: MatrixPy,
  capski: Capski,
  'astra-pulse': AstraPulse,
  asteroid: Asteroid,
  resources: Resources,
  'deep-work': DeepWork,
  qrcode: QRCode,
  'crud-template': CrudTemplate,
  research: Research,
  'research-ai': ResearchAI,
};

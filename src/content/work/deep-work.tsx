import DeepWorkTimer from '@/components/interactive/deep-work-timer';
import type { WorkMeta } from './types';

export const meta: WorkMeta = {
  slug: 'deep-work',
  title: 'Deep Work Timer',
  kind: 'project',
  year: '2024',
  role: 'Author',
  stack: ['TypeScript', 'React'],
  summary: 'A focus timer for single-task work blocks, running here in the page.',
  interactive: true,
};

export default function Body() {
  return (
    <>
      <p>
        Deep work means staying on a single task for a set stretch of time without switching. This
        timer does that and nothing else: pick a duration, start it, and it counts down. Completed
        blocks are tallied in your browser&rsquo;s local storage, so the count is yours alone and
        never leaves the device.
      </p>

      <h2>Try it</h2>
      <DeepWorkTimer />
    </>
  );
}

import Gallery from '@/components/ui/gallery';
import type { WorkMeta } from './types';

export const meta: WorkMeta = {
  slug: 'astra-pulse',
  title: 'AstraPulse',
  kind: 'project',
  year: '2025',
  role: 'Author',
  stack: ['Rust', 'Tauri', 'Svelte'],
  summary: 'A native desktop timer that stays out of the way and makes noise when time is up.',
  links: [{ label: 'Repository', href: 'https://github.com/sandbox-science/astrapulse' }],
};

export default function Body() {
  return (
    <>
      <Gallery
        columns={1}
        images={[{ src: '/astra_pulse_logo.png', alt: 'AstraPulse logo', width: 300, height: 300 }]}
      />

      <p>
        A minimalist timer app designed for simplicity. You start a timer and forget about the app,
        but it does not forget you: when the timer reaches zero it emits a background sound to tell
        you time is up. The point is to stop checking when your next break is and get on with the
        work.
      </p>

      <h2>Key features</h2>
      <ul>
        <li>Minimalist interface with no distractions.</li>
        <li>Background sound alert when the timer reaches zero.</li>
        <li>Preset and custom timer durations.</li>
        <li>Lightweight and fast — native, not a bundled browser.</li>
        <li>Open source and free to use.</li>
      </ul>

      <p>
        The project is open source under the{' '}
        <a
          href="https://github.com/sandbox-science/astrapulse/blob/main/LICENSE"
          target="_blank"
          rel="noreferrer noopener"
        >
          GNU General Public License v3.0
        </a>
        .
      </p>
    </>
  );
}

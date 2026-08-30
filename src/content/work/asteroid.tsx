import Gallery from '@/components/ui/gallery';
import type { WorkMeta } from './types';

export const meta: WorkMeta = {
  slug: 'asteroid',
  title: 'Near Earth Object Tracker',
  kind: 'project',
  year: '2024',
  role: 'Author',
  stack: ['Python', 'Flask', 'NASA API'],
  summary:
    'A daily tracker for asteroids and comets whose orbits bring them close to Earth, pulled live from NASA.',
  links: [
    { label: 'Live app', href: 'https://asteroid-tracking.vercel.app/' },
    { label: 'Repository', href: 'https://github.com/chrisdedman/py-neo' },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        This web app retrieves and displays information about Near Earth Objects — asteroids and
        comets on orbits that pass close to Earth&rsquo;s. It fetches the day&rsquo;s NEO data and
        presents it in a form you can actually read.
      </p>

      <h2>What it shows</h2>
      <ul>
        <li>Object IDs and names.</li>
        <li>Hazardous status.</li>
        <li>Close approach dates.</li>
        <li>Current and past orbiting bodies.</li>
        <li>Maximum and minimum diameters, in metres and feet.</li>
        <li>Velocity, in km/h and mph.</li>
        <li>Orbit classification with descriptions.</li>
        <li>First and last observation dates.</li>
      </ul>

      <h2>How it is built</h2>
      <p>
        Full-stack Python on Flask, hosted on Vercel. There is no database: data is pulled directly
        from the NASA API on request, and DataTables renders it as a searchable, sortable table.
      </p>

      <Gallery
        columns={2}
        caption="The NEO tracker’s daily views."
        images={[
          { src: '/neo1.png', alt: 'NEO tracker daily listing', width: 800, height: 500 },
          { src: '/neo2.png', alt: 'NEO tracker object details', width: 800, height: 500 },
          { src: '/neo3.png', alt: 'NEO tracker orbit classification', width: 800, height: 500 },
          { src: '/neo4.png', alt: 'NEO tracker observation dates', width: 800, height: 500 },
        ]}
      />
    </>
  );
}

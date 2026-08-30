import Gallery from '@/components/ui/gallery';
import type { WorkMeta } from './types';

export const meta: WorkMeta = {
  slug: 'resources',
  title: 'Resource Library',
  kind: 'project',
  year: '2023',
  role: 'Author',
  stack: ['JavaScript', 'HTML', 'CSS'],
  summary:
    'A community library of programming resources, searchable by category and edited through a README.',
  links: [
    { label: 'Live site', href: 'https://resources.codesociety.xyz/' },
    { label: 'Repository', href: 'https://github.com/Code-Society-Lab/resources' },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        A web page that lets people search a shared library of resources by category and keyword.
        Adding a resource means adding a line to the GitHub{' '}
        <a
          href="https://github.com/Code-Society-Lab/resources/blob/main/README.md"
          target="_blank"
          rel="noreferrer noopener"
        >
          README
        </a>
        , which then shows up on the page — contribution needs nothing but a pull request.
      </p>
      <p>
        The library is collected by members of{' '}
        <a href="https://codesociety.xyz" target="_blank" rel="noreferrer noopener">
          Code Society
        </a>{' '}
        across programming and software development subjects: books, articles, videos, and more.
      </p>

      <h2>How it is built</h2>
      <p>
        Plain HTML, CSS, and JavaScript, hosted on GitHub Pages. There is no database — the data is
        parsed straight out of the repository README, and DataTables renders it as a searchable,
        sortable table. The layout is fully responsive.
      </p>

      <Gallery
        columns={1}
        images={[{ src: '/screenshot.png', alt: 'Resource library page', width: 800, height: 500 }]}
      />
    </>
  );
}

import Callout from '@/components/ui/callout';
import type { WorkMeta } from './types';

export const meta: WorkMeta = {
  slug: 'matrixpy',
  title: 'Matrix.py',
  kind: 'open-source',
  year: '2025',
  role: 'Contributor',
  stack: ['Python', 'matrix-nio'],
  summary:
    'A decorator-based Python library for building Matrix protocol bots without the boilerplate.',
  links: [
    { label: 'Repository', href: 'https://github.com/Code-Society-Lab/matrixpy' },
    {
      label: 'My commits',
      href: 'https://github.com/Code-Society-Lab/matrixpy/commits?author=chrisdedman',
    },
  ],
};

export default function Body() {
  return (
    <>
      <Callout label="First, what is Matrix?">
        <p>
          Not the 1999 film. Matrix is a non-profit open standard for decentralised communication. It
          lets people talk in real time across different platforms and devices, securely, without
          depending on a single central server — designed to be scalable and interoperable.
        </p>
      </Callout>

      <p>
        Matrix.py is a lightweight, intuitive Python library for building bots on the{' '}
        <a href="https://matrix.org/" target="_blank" rel="noreferrer noopener">
          Matrix protocol
        </a>
        . It provides a clean, decorator-based API in the style of popular event-driven frameworks,
        so developers write behaviour rather than boilerplate. It builds on{' '}
        <a href="https://github.com/poljar/matrix-nio" target="_blank" rel="noreferrer noopener">
          matrix-nio
        </a>
        , a Matrix client library for Python, and supports the major Matrix features: rooms, events,
        and user management.
      </p>

      <p>
        The project is open source under the{' '}
        <a
          href="https://github.com/Code-Society-Lab/matrixpy/blob/main/LICENSE"
          target="_blank"
          rel="noreferrer noopener"
        >
          GNU General Public License v3.0
        </a>
        .
      </p>

      <Callout label="New to Matrix?">
        <p>
          I would start with{' '}
          <a href="https://app.cinny.in/register/matrix.org" target="_blank" rel="noreferrer noopener">
            Cinny
          </a>
          , a fast, lightweight web client — it is the one I use.{' '}
          <a href="https://app.element.io/" target="_blank" rel="noreferrer noopener">
            Element
          </a>{' '}
          is the official client and runs everywhere, and there is a fuller{' '}
          <a href="https://matrix.org/ecosystem/clients/" target="_blank" rel="noreferrer noopener">
            list of clients
          </a>{' '}
          if neither suits you.
        </p>
      </Callout>
    </>
  );
}

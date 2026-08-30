import Gallery from '@/components/ui/gallery';
import type { WorkMeta } from './types';

export const meta: WorkMeta = {
  slug: 'cursif',
  title: 'Cursif',
  kind: 'open-source',
  year: '2023—',
  role: 'Core full-stack contributor',
  stack: ['Elixir', 'Phoenix', 'TypeScript', 'PostgreSQL'],
  summary: 'A collaborative note-taking app whose notes are scriptable through user-defined macros.',
  links: [
    { label: 'Live app', href: 'https://cursif.codesociety.xyz/' },
    { label: 'Repository', href: 'https://github.com/Code-Society-Lab/cursif' },
  ],
};

export default function Body() {
  return (
    <>
      <p>
        Cursif is a note-taking application with a twist: notes are scriptable, so you can write
        personal macros to automate the parts of note-keeping that are otherwise repetitive. It is
        under active development by the team at the Code Society Lab.
      </p>
      <p>
        I have been involved since the summer of 2023, working with an international group of
        developers. The stack is TypeScript with Next.js and Apollo on the frontend, and Elixir with
        Phoenix, Absinthe, and PostgreSQL on the backend.
      </p>

      <h2>Backend work</h2>
      <ul>
        <li>Built the macro system for creating and managing user-defined macros.</li>
        <li>Implemented collaborator management so notebooks can be shared and worked on together.</li>
        <li>Designed user information management with data integrity and security in mind.</li>
        <li>Added rate limiting on API responses to protect performance and resources.</li>
        <li>Added email validation on registration.</li>
        <li>Built password reset to improve account security.</li>
      </ul>

      <h2>Frontend work</h2>
      <ul>
        <li>Implemented the notification and alert systems that surface important events.</li>
        <li>Designed and integrated a disclaimer banner communicating the state of development.</li>
        <li>Built email address confirmation for account verification.</li>
        <li>Designed and developed the registration page and onboarding flow.</li>
        <li>Created the password reset page.</li>
      </ul>

      <Gallery
        columns={2}
        caption="Cursif: homepage, auth, notebook dashboard, and the markdown editor."
        images={[
          { src: '/homepage.png', alt: 'Cursif homepage', width: 800, height: 500 },
          { src: '/login.png', alt: 'Cursif login page', width: 800, height: 500 },
          { src: '/dashboard.png', alt: 'Cursif notebook dashboard', width: 800, height: 500 },
          { src: '/dashboard-page.png', alt: 'Cursif dashboard pages', width: 800, height: 500 },
          { src: '/markdown-editor.png', alt: 'Cursif markdown editor', width: 800, height: 500 },
          { src: '/update-notebook.png', alt: 'Cursif update notebook view', width: 800, height: 500 },
          { src: '/create-notebook.png', alt: 'Cursif create notebook view', width: 800, height: 500 },
          { src: '/navigation-page.png', alt: 'Cursif page navigation', width: 800, height: 500 },
        ]}
      />
    </>
  );
}

import Gallery from '@/components/ui/gallery';
import type { WorkMeta } from './types';

export const meta: WorkMeta = {
  slug: 'crud-template',
  title: 'CRUD Web Template',
  kind: 'project',
  year: '2024',
  role: 'Author',
  stack: ['Go', 'PostgreSQL'],
  summary:
    'A Go and PostgreSQL starter with the CRUD, auth, and frontend wiring already in place.',
  links: [{ label: 'Repository', href: 'https://github.com/chrisdedman/Golang-Web-App' }],
};

export default function Body() {
  return (
    <>
      <p>
        A boilerplate for standing up a full-stack web application in Go: create, read, update, and
        delete users against a PostgreSQL database, with a small frontend included to exercise the
        endpoints. The structure is deliberately plain so it is easy to read and modify rather than
        being something you have to fight.
      </p>

      <h2>Stack</h2>
      <ul>
        <li>Go for the API and server.</li>
        <li>PostgreSQL for persistence.</li>
        <li>HTML, CSS, and JavaScript for the frontend.</li>
      </ul>

      <Gallery
        columns={2}
        caption="The template’s dashboard, auth pages, and homepage."
        images={[
          { src: '/dashboard_crud.png', alt: 'CRUD template dashboard', width: 800, height: 500 },
          { src: '/login_crud.png', alt: 'CRUD template login page', width: 800, height: 500 },
          { src: '/register_crud.png', alt: 'CRUD template registration page', width: 800, height: 500 },
          { src: '/homepage_crud.png', alt: 'CRUD template homepage', width: 800, height: 500 },
        ]}
      />
    </>
  );
}

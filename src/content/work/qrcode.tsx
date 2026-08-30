import QrGenerator from '@/components/interactive/qr-generator';
import type { WorkMeta } from './types';

export const meta: WorkMeta = {
  slug: 'qrcode',
  title: 'QR Code Generator',
  kind: 'project',
  year: '2024',
  role: 'Author',
  stack: ['TypeScript', 'React'],
  summary: 'Generate a QR code in the browser, with nothing hidden in it and nothing sent anywhere.',
  interactive: true,
};

export default function Body() {
  return (
    <>
      <p>
        Make a QR code quickly, with full visibility and no concealed data. Everything is generated
        in your browser — the URL you type is never sent to a server, and there is no redirect or
        tracker wrapped around the link.
      </p>

      <h2>Try it</h2>
      <QrGenerator />
    </>
  );
}

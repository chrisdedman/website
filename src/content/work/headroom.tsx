import Gallery from '@/components/ui/gallery';
import type { WorkMeta } from './types';

export const meta: WorkMeta = {
  slug: 'headroom',
  cover: {
    src: '/headroom-overview.webp',
    alt: 'Headroom overview screen',
    width: 2760,
    height: 1760,
  },
  title: 'Headroom',
  kind: 'app',
  year: '2026',
  role: 'Author',
  stack: ['Swift', 'SwiftUI', 'launchd', 'Ollama'],
  summary:
    'A native macOS app that shows what is using your disk and memory, explains it in plain language, and gets space back without deleting anything directly.',
  links: [{ label: 'Website', href: 'https://headroom-web.vercel.app' }],
};

export default function Body() {
  return (
    <>
      <Gallery
        columns={2}
        images={[
          {
            src: '/headroom-overview.webp',
            alt: 'Headroom overview screen',
            width: 2760,
            height: 1760,
          },
          {
            src: '/headroom-system-data.webp',
            alt: 'System Data broken down by category',
            width: 2760,
            height: 1760,
          },
          {
            src: '/headroom-telemetry.webp',
            alt: 'Telemetry dashboard with gauges and strip charts',
            width: 2760,
            height: 1760,
          },
          {
            src: '/headroom-local-ai.webp',
            alt: 'Local AI screen showing which models fit in free memory',
            width: 2760,
            height: 1760,
          },
        ]}
      />

      <p>
        I built Headroom for my own machine: a 16 GB MacBook Pro that runs local language models.
        On that Mac, memory runs out as often as disk does, and macOS explains neither. Storage
        settings show &ldquo;System Data&rdquo; as one grey bar, and when a model does not fit in
        memory the whole machine stalls with no warning.
      </p>
      <p>
        Headroom takes both apart. It is a SwiftUI app for Apple silicon, with a command-line tool
        and a small privileged helper alongside it.
      </p>

      <h2>What it does</h2>
      <ul>
        <li>
          <strong>System Data, explained.</strong> A scan sorts what it finds into caches,
          developer tools, virtual machines, AI models, logs and so on. Each finding says what it
          is, who made it, and whether it is safe to remove.
        </li>
        <li>
          <strong>Duplicates without broken paths.</strong> Files are matched by size, then by
          their first and last 64 KB, then by a full SHA-256. In your own folders the extra copy
          goes to the Trash. Everywhere else it becomes an APFS clone, so both paths keep working
          and the data is stored once.
        </li>
        <li>
          <strong>Memory, with a plan.</strong> It says whether memory is costing speed right now,
          then lists the apps, dev servers and models that could give some back, each with its own
          button.
        </li>
        <li>
          <strong>Local AI.</strong> For Ollama, it estimates each model&rsquo;s real footprint
          from its architecture, says whether it fits in the memory that is free, and can unload a
          model before the Mac locks up.
        </li>
        <li>
          <strong>Telemetry.</strong> A live dashboard of every core, memory, GPU, SSD, network,
          power, temperatures and fans, with five minutes of history. It only samples while you
          are looking at it.
        </li>
        <li>
          <strong>iPhone and iPad.</strong> Storage, battery health and the last 30 days of
          crashes for paired devices, read-only.
        </li>
        <li>
          <strong>Ask Headroom.</strong> Questions about this Mac, answered from what the app
          measures, by Apple Intelligence or Ollama on the device or by a cloud model with your
          own key.
        </li>
      </ul>

      <h2>How it stays safe</h2>
      <p>
        A cleanup app that deletes the wrong thing is worse than no app, so most of the design
        work went here.
      </p>
      <ul>
        <li>
          Nothing is deleted directly. Files go to the Trash, and a History screen can put a whole
          day or category back.
        </li>
        <li>
          Every finding has one of three levels: Safe, Review or Keep. Keep is explained but never
          offered for deletion.
        </li>
        <li>
          Checks run again right before anything is removed. Protected locations, folders a
          running program is working in, and git checkouts with uncommitted changes are all
          blocked.
        </li>
        <li>
          Tool cleanups such as <code>brew cleanup</code> or <code>docker system prune</code> show
          the exact command first and run only after you confirm.
        </li>
        <li>
          The administrator helper is a launchd daemon that does four fixed things and never takes
          a command. It only accepts connections from a copy of Headroom signed by the same team.
        </li>
        <li>
          A local model can give a second opinion on folders the knowledge base does not know, but
          its &ldquo;yes&rdquo; is capped at Review.
        </li>
      </ul>

      <h2>How it is built</h2>
      <p>
        The code is a Swift package with five targets: the app, a shared kit that holds the
        scanning and safety logic, the privileged helper and its protocol, and{' '}
        <code>headroom-cli</code>, which runs the same analysis as text. The safety-critical logic
        is covered by unit tests. The app updates itself: before installing a new version it
        checks the download against a published SHA-256 and confirms it is signed by the same
        developer as the running copy.
      </p>
    </>
  );
}

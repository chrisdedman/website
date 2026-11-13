import Gallery from '@/components/ui/gallery';
import type { WorkMeta } from './types';

export const meta: WorkMeta = {
  slug: 'toji',
  title: 'Toji',
  kind: 'app',
  year: '2026',
  role: 'Author',
  stack: ['Swift', 'SwiftUI', 'WidgetKit', 'Homebrew'],
  summary:
    'A Mac app that keeps my apps up to date automatically and makes Homebrew’s library easy to search, checking each update worked before anything old is removed.',
  links: [
    { label: 'Website', href: 'https://trytoji.vercel.app' },
    { label: 'Releases', href: 'https://github.com/chrisdedman/Toji/releases' },
  ],
};

export default function Body() {
  return (
    <>
      <Gallery
        columns={1}
        images={[
          {
            src: '/toji.png',
            alt: 'Toji: Homebrew, looked after',
            width: 1200,
            height: 630,
          },
        ]}
      />

      <p>
        Homebrew is how I install most things on my Mac. I built Toji for two reasons. I wanted my
        apps and tools to stay up to date on their own, without having to remember to run updates
        in a terminal. And I wanted an easy way to look things up in Homebrew&rsquo;s library:
        search everything it offers, read what a package is, and install it from there.
      </p>
      <p>
        Toji is a native Mac app built on top of Homebrew. Everything it does is what Homebrew
        would do, and anything done in the terminal shows up in it.
      </p>

      <h2>Updates</h2>
      <ul>
        <li>
          Toji checks on a schedule from the menu bar, even with its window closed. You can update
          one thing, a selection, or everything.
        </li>
        <li>
          Each update is marked major, minor, patch or rebuild, with release notes when the
          project publishes them.
        </li>
        <li>
          A desktop widget shows how many updates are waiting, and Shortcuts, Spotlight and Siri
          can check for updates or run them.
        </li>
        <li>
          It can install updates on its own between hours you choose. Open apps wait, and so does
          everything on battery or in Low Power Mode.
        </li>
        <li>For an app that is open, Toji can quit it, update it and open it again.</li>
      </ul>

      <h2>Looking things up</h2>
      <p>
        Discover searches everything Homebrew offers, by name or by what it is for, and shows what
        a package is before you install it. Packages from taps you trust can be installed from
        there too.
      </p>

      <h2>Careful by default</h2>
      <ul>
        <li>
          After each update, Toji checks that the new version is installed before anything old is
          removed. If an update fails, nothing is removed.
        </li>
        <li>
          The previous version of a command-line tool is kept for a day, so you can go back to it.
        </li>
        <li>
          Clean Up lists exactly what would be removed first, and other copies go to the Trash
          rather than being deleted.
        </li>
        <li>
          A Brewfile is read, never run: Toji takes only the package names, and leaves out
          packages from taps Homebrew does not trust.
        </li>
        <li>
          Before installing a new version of itself, Toji checks the download was signed by the
          same developer as the copy you have.
        </li>
      </ul>

      <h2>Everything else</h2>
      <p>
        The rest of the app is a plain view of what Homebrew has done: apps and tools kept apart
        from the libraries they depend on, storage ranked by size, a timeline of every change,
        background services with a switch, taps, and a list of issues with each one explained. A
        setup can be saved to a file and restored on another Mac. The interface is in English,
        French and Japanese, and every control is labelled for VoiceOver.
      </p>
      <p>Toji is free, and runs on macOS 26 or later on Apple silicon and Intel.</p>
    </>
  );
}

import Gallery from '@/components/ui/gallery';
import type { WorkMeta } from './types';

export const meta: WorkMeta = {
  slug: 'capski',
  title: 'Capski',
  kind: 'open-source',
  year: '2025',
  role: 'Author',
  stack: ['Rust', 'whisper-rs', 'FFmpeg'],
  summary:
    'A Rust CLI that turns audio or video into karaoke-style clips with word-timed burned-in subtitles.',
  links: [
    { label: 'Repository', href: 'https://github.com/sandbox-science/transcriber' },
    {
      label: 'Requirements doc',
      href: 'https://docs.google.com/document/d/1xfLcfE5BA1i_wjUSHHJYuA4zneVqrm4rEg2bf_YeltQ/edit?usp=sharing',
    },
  ],
};

export default function Body() {
  return (
    <>
      <Gallery
        columns={1}
        images={[{ src: '/capski_logo.png', alt: 'Capski logo', width: 300, height: 300 }]}
      />

      <p>
        Capski is a command-line tool written in Rust that transforms audio or video files into
        stylised karaoke-style videos with real-time subtitles. It handles transcription,
        translation, and subtitle rendering with custom styling, which makes it useful for content
        creators and educators.
      </p>

      <h2>Key features</h2>
      <ul>
        <li>Converts WAV, MP3, and MP4 into karaoke-style video.</li>
        <li>Whisper-based transcription with real-time word timing.</li>
        <li>Optional English translation between several languages.</li>
        <li>Subtitle styling driven by a JSON config.</li>
        <li>Burns subtitles into the video with FFmpeg.</li>
        <li>An ergonomic CLI with useful flags.</li>
      </ul>

      <h2>What I did</h2>
      <ul>
        <li>Designed the CLI and the modular Rust architecture.</li>
        <li>Integrated Whisper and FFmpeg.</li>
        <li>Implemented Advanced SubStation Alpha (ASS) subtitle formatting and rendering.</li>
        <li>Built translation and real-time word highlighting.</li>
        <li>Wrote the engineering requirements documentation.</li>
      </ul>

      <h2>Challenges</h2>
      <ul>
        <li>Learning Rust while building something non-trivial in it.</li>
        <li>Handling real-time, word-level timestamping.</li>
        <li>Syncing and overlaying subtitles correctly through FFmpeg.</li>
        <li>Keeping the CLI intuitive for non-technical users.</li>
      </ul>

      <h2>Demo</h2>
      <video controls preload="metadata" src="/capski_demo.mp4" className="w-full border border-rule">
        Your browser does not support the video tag.
      </video>

      <p>
        The project is open source under the{' '}
        <a
          href="https://github.com/sandbox-science/transcriber/blob/main/LICENSE"
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

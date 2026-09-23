import type { Metadata } from 'next';

import ActionLink from '@/components/ui/action-link';
import Breadcrumb from '@/components/ui/breadcrumb';
import Container from '@/components/ui/container';
import MetaList from '@/components/ui/meta-list';
import { site } from '@/content/site';
import { share } from '@/lib/metadata';

const title = 'Macromolecule Coarse-Graining Tool';
const description =
  'Documentation, requirements, file formats, and download for the macromolecule coarse-graining research tool.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${site.url}/work/research/tool` },
  ...share({
    title: `${title} — ${site.shortName}`,
    description,
    path: '/work/research/tool',
    type: 'article',
  }),
};

export default function ResearchToolPage() {
  return (
    <Container className="pb-8 pt-12 sm:pt-16">
      <Breadcrumb
        trail={[
          { label: 'work', href: '/work' },
          { label: 'coarse-graining macromolecules', href: '/work/research' },
          { label: 'Tool' },
        ]}
      />

      <header className="mt-8 border-b border-rule pb-10">
        <h1 className="max-w-[22ch] text-title font-semibold text-ink">
          Macromolecule Coarse-Graining Tool
        </h1>
        <p className="mt-4 max-w-[58ch] text-[1.0625rem] leading-relaxed text-ink-muted">
          Documentation, requirements, and file formats for the coarse-graining tool, plus the
          download.
        </p>

        <MetaList
          className="mt-8 sm:grid-cols-2"
          items={[
            { term: 'Language', value: 'Java (JDK 11+)' },
            { term: 'Build', value: 'GNU Make' },
            { term: 'Entry', value: <code className="font-mono text-sm">src.CGPartitioning</code> },
            { term: 'License', value: 'Research tool, RSCA grant' },
          ]}
        />

        <div className="mt-8">
          <ActionLink href="/CGBioMoleculesTool.zip" external={false}>
            Download the tool (.zip)
          </ActionLink>
        </div>
      </header>

      <article className="prose mt-10 max-w-[68ch]">
        <h2>Overview</h2>
        <p>
          The project is a Java application built from several classes:{' '}
          <code>CGPartitioning</code>, <code>Octree</code>, <code>OctreeCoordinateItem</code>,{' '}
          <code>OctreeDataItem</code>, and <code>PointWithCharge</code>. A <code>Makefile</code>{' '}
          wraps compiling, running, and cleaning.
        </p>

        <h2>Requirements</h2>
        <ul>
          <li>
            <a
              href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              Java Development Kit (JDK)
            </a>
          </li>
          <li>
            <a href="https://www.gnu.org/software/make/" target="_blank" rel="noreferrer noopener">
              The <code>make</code> utility
            </a>
          </li>
          <li>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer noopener">
              git, for development
            </a>
          </li>
        </ul>

        <h2>Usage</h2>
        <p>From the root directory you can compile and run with plain Java. First compile:</p>
        <pre>
          <code>{`mkdir -p build
javac -d build src/*.java`}</code>
        </pre>
        <p>
          Then run with two input files and one output file, in this order: points with charge
          first, control points second, output filename last.
        </p>
        <pre>
          <code>
            java -cp build src.CGPartitioning pointsWithCharge1MYK.txt controlPoints1MYK.txt
            irrParts_Output.txt
          </code>
        </pre>

        <h3>Make targets</h3>
        <ul>
          <li>
            <code>make compile</code> — compile all Java files into <code>/build</code>.
          </li>
          <li>
            <code>make run ARGS=&apos;charges controls output&apos;</code> — run{' '}
            <code>/build/src/CGPartitioning</code> against those files.
          </li>
          <li>
            <code>make clean</code> — remove <code>/build</code> and everything compiled into it.
          </li>
          <li>
            <code>make help</code> — list every available target.
          </li>
        </ul>

        <h2>Input formats</h2>
        <p>
          Two input text files are required, passed as command-line arguments: the{' '}
          <strong>point charge file</strong> first, the <strong>control point file</strong> second.
        </p>

        <h3>1. Point charge file</h3>
        <p>
          Coordinates paired with charge values. Each entry is wrapped in double curly braces, where
          the first part is the coordinate (<code>X, Y, Z</code>) and the second is the charge. One
          entry per line.
        </p>
        <pre>
          <code>{`{{X1, Y1, Z1}, Charge1}
{{X2, Y2, Z2}, Charge2}
{{X3, Y3, Z3}, Charge3}`}</code>
        </pre>
        <p>For example:</p>
        <pre>
          <code>{`{{39.266, 59.555, 46.185}, -0.3}
{{38.125, 60.364, 46.626}, 0.21}
{{36.859, 59.512, 46.734}, 0.51}
{{36.625, 58.613, 45.922}, -0.51}`}</code>
        </pre>

        <h3>2. Control point file</h3>
        <p>
          A list of coordinates, each in single curly braces, each three floating-point numbers.
          One per line.
        </p>
        <pre>
          <code>{`{X1, Y1, Z1}
{X2, Y2, Z2}
{X3, Y3, Z3}`}</code>
        </pre>
        <p>For example:</p>
        <pre>
          <code>{`{9.455, 47.808, 48.53}
{10.554, 47.771, 47.575}
{9.704, 47.365, 48.096}`}</code>
        </pre>

        <h2>Output format</h2>
        <p>
          Results are written to the file given as the third argument. Each line is an array
          containing a 2D array of three floating-point coordinates paired with charge values; the
          last two elements of the outer array are the control point index and the Euclidean
          distance.
        </p>
        <pre>
          <code>{`{{{{X1, Y1, Z1}, Charge1}, {{Xn, Yn, Zn}, Chargen}}, index, distance}`}</code>
        </pre>
        <p>For example:</p>
        <pre>
          <code>{`{{{{36.625, 58.613, 45.922}, -0.51}, {{38.125, 60.364, 46.626}, 0.21}}, 9716, 2.8898307908941634}
{{{{37.892, 61.564, 45.668}, -0.18}, {{39.075, 62.511, 45.568}, -0.18}}, 11715, 1.999496936731834}
{{{{38.332, 60.749, 47.532}, 0.1}}, 11362, 1.0337030521382882}`}</code>
        </pre>
      </article>
    </Container>
  );
}

"use client"

import React from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function ResearchTool() {
  return (
    <div className="min-h-screen flex-col p-4 lg:p-8 mt-16">
      <Menu />
      <div className="p-4 max-w-6xl mx-auto flex-grow">
        <h5 className="mb-2 text-2xl font tracking-tight">
          <a href="/projects" className="underline">Achievements</a>{" > "} <a href="/projects/research" className="underline">Research - Computational BioPhysics</a>{" > "} Macromolecule Coarse-Graining Tool
        </h5>
        <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
        <div>
          <Article />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Article() {
  return (
    <>
      <p className="mt-4">
        <span className="inline-flex pr-2">You can download the tool by clicking on the following: </span>
        <a className="inline-flex items-center px-3 py-1 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300" href="/CGBioMoleculesTool.zip" download="CGBioMoleculesTool.zip" target="_blank">
          <strong>Download the Tool</strong> <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
        </a>
      </p>

      <p>
        Here are the documentation and requirements, along with instructions on how to use the tool, including file formatting and the expected output format.
      </p>

      <h6 className="mt-4 text-xl font-bold font">Documentation</h6>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />

      <p>
        This project implements a Java application with multiple classes, including:</p>
      <ul>
        <li>CGPartitioning</li>
        <li>Octree</li>
        <li>OctreeCoordinateItem</li>
        <li>OctreeDataItem</li>
        <li>PointWithCharge</li>
      </ul>

      <p>
        The project uses a <code>Makefile</code> to simplify the process of compiling, running, and cleaning.
      </p>

      <h6 className="mt-4 text-xl font-bold font">Requirements</h6>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
      <ul>
        <li><strong><a href="https://www.oracle.com/java/technologies/javase-jdk11-downloads.html" target="_blank">Java Development Kit (JDK)</a></strong></li>
        <li><strong><a href="https://www.gnu.org/software/make/" target="_blank">make Utility</a></strong></li>
        <li><strong><a href="https://git-scm.com/" target="_blank">git (Version Control for development purposes)</a></strong></li>
      </ul>


      <h2>Usage</h2>
      <p>From the root directory, you can manually compile and run the project using purely Java.</p>
      <p>Create a build directory and compile the Java classes:</p>
      <pre>
        <code>
          mkdir -p build<br />
          javac -d build src/*.java
        </code>
      </pre>
      <p>Run the main project with your 2 input files and 1 output file as arguments (the arguments for input and output files should be in that order: point with charge first, control points file second, and output file name last):</p>
      <pre>
        <code>
          java -cp build src.CGPartitioning pointsWithCharge1MYK.txt controlPoints1MYK.txt irrParts_Output.txt
        </code>
      </pre>

      <p>Alternatively, the provided <code>Makefile</code> automates common tasks. Below are the available commands:</p>

      <h6 className="mt-4 text-xl font-bold font">Available Commands</h6>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />

      <ul>
        <li>
          <code>make compile</code>
          <br />
          Compile all Java files into <code>/build</code> directory.
        </li>

        <li>
          <code>make run ARGS=&apos;points_with_charge_file control_point_file output_file&apos;</code>
          <br />
          Run the Java project from <code>/build/src/CGPartitioning</code> with argument files.<br />
          <strong>Example:</strong>
          <pre>
            <code>
              make run ARGS=&apos;pointsWithCharge1MYK.txt controlPoints1MYK.txt irrParts_Output.txt
            </code>
          </pre>
        </li>

        <li>
          <code>make clean</code>
          <br />
          Remove directory <code>/build</code> with all compiled files.
        </li>

        <li>
          <code>make help</code>
          <br />
          Show help message with all available make commands for this project.
        </li>
      </ul>

      <h6 className="mt-4 text-xl font">Files Formatting</h6>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />

      <h3 className="mt-4 text-xl font">Input Files Format</h3>
      <p>The project requires two input text files with specific formats. These two files must be provided as command-line arguments.
        The first file to provide is the <strong>Point Charge File</strong>, while the second is the <strong>Control Point File</strong>.
      </p>

      <h4 className="mt-4 text-xl font">1. Point Charge File</h4>
      <p>
        Contains coordinates paired with charge values. Each entry is enclosed in double curly braces (<code>&#123;&#123;&#125;&#125;</code>), where the first part represents
        the coordinates (<code>X, Y, Z</code>), and the second part specifies the charge. Each set of coordinates paired with charge values is separated
        by a newline.
      </p>

      <p><strong>Format Example:</strong></p>
      <pre>
        <code>
          &#123;&#123;X<sub>1</sub>, Y<sub>1</sub>, Z<sub>1</sub> &#125;, Charge<sub>1</sub>&#125;<br />
          &#123;&#123;X<sub>2</sub>, Y<sub>2</sub>, Z<sub>2</sub> &#125;, Charge<sub>2</sub>&#125;<br />
          &#123;&#123;X<sub>3</sub>, Y<sub>3</sub>, Z<sub>3</sub> &#125;, Charge<sub>3</sub>&#125;<br />
          ...
        </code>
      </pre>
      <p><strong>Simple Example:</strong></p>
      <pre>
        <code>
          &#123;&#123;39.266, 59.555, 46.185&#125;, -0.3&#125;<br />
          &#123;&#123;38.125, 60.364, 46.626&#125;, 0.21&#125;<br />
          &#123;&#123;36.859, 59.512, 46.734&#125;, 0.51&#125;<br />
          &#123;&#123;36.625, 58.613, 45.922&#125;, -0.51&#125;<br />
        </code>
      </pre>

      <h4 className="mt-4 text-xl font">2. Control Point File</h4>
      <p>
        Contains a list of coordinates, each enclosed in curly braces (<code>&#123;&#125;</code>). Each coordinate is represented by three floating-point numbers
        (<code>X, Y, Z</code>). Each set of coordinates is separated by a newline.
      </p>

      <p><strong>Format Example:</strong></p>
      <pre>
        <code>
          &#123;X<sub>1</sub>, Y<sub>1</sub>, Z<sub>1</sub>&#125;<br />
          &#123;X<sub>2</sub>, Y<sub>2</sub>, Z<sub>2</sub>&#125;<br />
          &#123;X<sub>3</sub>, Y<sub>3</sub>, Z<sub>3</sub>&#125;<br />
          ...
        </code>
      </pre>
      <p><strong>Simple Example:</strong></p>
      <pre>
        <code>
          &#123;9.455, 47.808, 48.53&#125;<br />
          &#123;10.554, 47.771, 47.575&#125;<br />
          &#123;9.704, 47.365, 48.096&#125;<br />
        </code>
      </pre>

      <h3 className="mt-4 text-xl font">Output File Format</h3>
      <p>
        Your data will be stored in a text file that you&#39;ll provide as a third argument in your command-line.
        The generic format is an array of a 2D array of 3 floating-point coordinates, each paired with charge value.
        The last two indices of the outer array represent the control points for the second-to-last element,
        and the Euclidean distance is the final element of the array. Each new line represents a new set of data that contains the previously described structure.
      </p>

      <p><strong>Format Example:</strong></p>
      <pre>
        <code>
          &#123;&#123;&#123;&#123;X<sub>1</sub>, Y<sub>1</sub>, Z<sub>1</sub>&#125;, Charge<sub>1</sub>&#125;, &#123;&#123;X<sub>2</sub>, Y<sub>2</sub>, Z<sub>2</sub>&#125;, Charge<sub>2</sub>&#125;, &#123;&#123;X<sub>3</sub>, Y<sub>3</sub>, Z<sub>3</sub>&#125;, Charge<sub>3</sub>&#125;, &#123;&#123;X<sub>n</sub>, Y<sub>n</sub>, Z<sub>n</sub>&#125;, Charge<sub>n</sub>&#125;&#125;, index<sub>1</sub>, distance<sub>1</sub>&#125;<br />
          &#123;&#123;&#123;&#123;X<sub>1</sub>, Y<sub>1</sub>, Z<sub>1</sub>&#125;, Charge<sub>1</sub>&#125;&#125;, index<sub>2</sub>, distance<sub>2</sub>&#125;<br />
          &#123;&#123;&#123;&#123;X<sub>1</sub>, Y<sub>1</sub>, Z<sub>1</sub>&#125;, Charge<sub>1</sub>&#125;, &#123;&#123;X<sub>n</sub>, Y<sub>n</sub>, Z<sub>n</sub>&#125;, Charge<sub>n</sub>&#125;&#125;, index<sub>3</sub>, distance<sub>3</sub>&#125;<br />
          ...
        </code>
      </pre>

      <p><strong>Simple Example:</strong></p>
      <pre>
        <code>
          &#123;&#123;&#123;&#123;36.625, 58.613, 45.922&#125;, -0.51&#125;, &#123;&#123;38.125, 60.364, 46.626&#125;, 0.21&#125;, &#123;&#123;39.266, 59.555, 46.185&#125;, -0.3&#125;, &#123;&#123;36.859, 59.512, 46.734&#125;, 0.51&#125;&#125;, 9716, 2.8898307908941634&#125;<br />
          &#123;&#123;&#123;&#123;37.892, 61.564, 45.668&#125;, -0.18&#125;, &#123;&#123;39.075, 62.511, 45.568&#125;, -0.18&#125;, &#123;&#123;37.103, 62.07, 46.006&#125;, 0.09&#125;, &#123;&#123;37.7, 61.194, 44.764&#125;, 0.09&#125;&#125;, 11715, 1.999496936731834&#125;<br />
          &#123;&#123;&#123;&#123;38.332, 60.749, 47.532&#125;, 0.1&#125;&#125;, 11362, 1.0337030521382882&#125;<br />
        </code>
      </pre>

    </>
  );
}

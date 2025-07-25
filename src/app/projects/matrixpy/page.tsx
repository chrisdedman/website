"use client"

import React from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";

export default function MatrixPy() {
  return (
    <div className="min-h-screen flex-col p-4 lg:p-8 mt-16">
      <Menu />
      <div className="p-4 max-w-6xl mx-auto flex-grow">
        <h5 className="mb-2 text-2xl font tracking-tight">
          <a href="/projects" className="underline">Open Source Contributions</a>{" > "}matrix.py
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
      <div className="flex justify-center items-center mt-8 mb-8">
        <svg width="508" height="240" viewBox="0 0 1508 440" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_656_14" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="21" y="0" width="384" height="440">
          <path d="M405 0H21V440H405V0Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_656_14)">
          <path d="M32.575 10.1337V429.509H62.7169V439.574H20.876V-0.42627H62.5793V9.63873L32.575 10.1337Z" fill="#040404"/>
          </g>
          <mask id="mask1_656_14" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="1106" y="0" width="384" height="440">
          <path d="M1490 0H1106V440H1490V0Z" fill="white"/>
          </mask>
          <g mask="url(#mask1_656_14)">
          <path d="M1477.68 429.069V9.69391H1447.54V-0.371094H1489.38V439.629H1447.54V429.564L1477.68 429.069Z" fill="#040404"/>
          </g>
          <path d="M105.167 297V144H149.267V180H150.167V297H105.167ZM208.067 297V199.8C208.067 192 205.967 186.3 201.767 182.7C197.767 178.9 192.067 177 184.667 177C178.267 177 172.367 178.5 166.967 181.5C161.767 184.3 157.667 188.4 154.667 193.8C151.667 199 150.167 205.2 150.167 212.4L146.267 177.9C151.267 166.7 158.467 157.8 167.867 151.2C177.467 144.4 188.967 141 202.367 141C218.367 141 230.767 145.5 239.567 154.5C248.567 163.5 253.067 174.8 253.067 188.4V297H208.067ZM310.967 297V199.8C310.967 192 308.867 186.3 304.667 182.7C300.667 178.9 294.967 177 287.567 177C281.167 177 275.267 178.5 269.867 181.5C264.667 184.3 260.567 188.4 257.567 193.8C254.567 199 253.067 205.2 253.067 212.4L246.167 177.9C251.167 166.7 258.567 157.8 268.367 151.2C278.367 144.4 290.367 141 304.367 141C320.967 141 333.667 145.7 342.467 155.1C351.467 164.3 355.967 176.4 355.967 191.4V297H310.967ZM482.717 297C481.517 292.6 480.617 287.9 480.017 282.9C479.617 277.9 479.417 272.1 479.417 265.5H478.217V193.2C478.217 187 476.117 182.2 471.917 178.8C467.917 175.2 461.917 173.4 453.917 173.4C446.317 173.4 440.217 174.7 435.617 177.3C431.217 179.9 428.317 183.7 426.917 188.7H384.017C386.017 174.9 393.117 163.5 405.317 154.5C417.517 145.5 434.217 141 455.417 141C477.417 141 494.217 145.9 505.817 155.7C517.417 165.5 523.217 179.6 523.217 198V265.5C523.217 270.5 523.517 275.6 524.117 280.8C524.917 285.8 526.117 291.2 527.717 297H482.717ZM429.317 300C414.117 300 402.017 296.2 393.017 288.6C384.017 280.8 379.517 270.5 379.517 257.7C379.517 243.5 384.817 232.1 395.417 223.5C406.217 214.7 421.217 209 440.417 206.4L485.117 200.1V226.2L447.917 231.9C439.917 233.1 434.017 235.3 430.217 238.5C426.417 241.7 424.517 246.1 424.517 251.7C424.517 256.7 426.317 260.5 429.917 263.1C433.517 265.7 438.317 267 444.317 267C453.717 267 461.717 264.5 468.317 259.5C474.917 254.3 478.217 248.3 478.217 241.5L482.417 265.5C478.017 276.9 471.317 285.5 462.317 291.3C453.317 297.1 442.317 300 429.317 300ZM619.856 300.3C600.256 300.3 585.656 295.6 576.056 286.2C566.656 276.6 561.956 262.1 561.956 242.7V109.8L606.956 93V244.2C606.956 251 608.856 256.1 612.656 259.5C616.456 262.9 622.356 264.6 630.356 264.6C633.356 264.6 636.156 264.3 638.756 263.7C641.356 263.1 643.956 262.4 646.556 261.6V295.8C643.956 297.2 640.256 298.3 635.456 299.1C630.856 299.9 625.656 300.3 619.856 300.3ZM533.456 178.2V144H646.556V178.2H533.456ZM673.526 297V144H717.626V180H718.526V297H673.526ZM718.526 217.2L714.626 180.9C718.226 167.9 724.126 158 732.326 151.2C740.526 144.4 750.726 141 762.926 141C766.726 141 769.526 141.4 771.326 142.2V184.2C770.326 183.8 768.926 183.6 767.126 183.6C765.326 183.4 763.126 183.3 760.526 183.3C746.126 183.3 735.526 185.9 728.726 191.1C721.926 196.1 718.526 204.8 718.526 217.2ZM790.713 297V144H835.713V297H790.713ZM789.213 123.6V75H837.213V123.6H789.213ZM969.563 297L924.263 229.8L859.163 144H909.563L950.063 204.3L1019.96 297H969.563ZM927.863 201.9L968.363 144H1017.56L949.163 233.4L927.863 201.9ZM945.263 235.8L901.763 297H852.863L923.963 204.3L945.263 235.8ZM1035.05 297V247.5H1084.55V297H1035.05ZM1204.62 299.75C1191.24 299.75 1180.51 296.633 1172.45 290.4C1164.38 284.167 1159.61 275.642 1158.15 264.825L1160.35 264.55V353.375H1119.1V156.75H1159.52V187.825L1157.05 187.275C1159.06 177.008 1164.56 168.942 1173.55 163.075C1182.53 157.025 1193.62 154 1206.82 154C1219.47 154 1230.38 157.025 1239.55 163.075C1248.9 168.942 1256.05 177.283 1261 188.1C1266.13 198.917 1268.7 211.658 1268.7 226.325C1268.7 241.175 1266.04 254.1 1260.72 265.1C1255.4 276.1 1247.98 284.625 1238.45 290.675C1228.91 296.725 1217.64 299.75 1204.62 299.75ZM1193.07 266.75C1202.79 266.75 1210.67 263.267 1216.72 256.3C1222.77 249.333 1225.8 239.433 1225.8 226.6C1225.8 213.767 1222.68 203.958 1216.45 197.175C1210.4 190.392 1202.42 187 1192.52 187C1182.99 187 1175.1 190.483 1168.87 197.45C1162.82 204.233 1159.8 214.042 1159.8 226.875C1159.8 239.708 1162.82 249.608 1168.87 256.575C1175.1 263.358 1183.17 266.75 1193.07 266.75ZM1295.17 353.375L1333.94 267.575L1341.09 255.75L1377.39 156.75H1421.39L1336.42 353.375H1295.17ZM1324.87 294.25L1270.97 156.75H1315.52L1359.79 282.15L1324.87 294.25Z" fill="black"/>
        </svg>

      </div>
      <aside
        className="bg-blue-400 border border-blue-300 rounded-lg p-4 my-4 max-w-2xl mx-auto prose"
        aria-labelledby="matrix-callout"
      >
        <p id="matrix-callout">
          Before talking about matrix.py, I want to define what is the Matrix
          protocol. No, it is not the famous 1999 movie, but an non-profit,
          open standard for decentralized communication. It allows users to
          communicate in real-time across different platforms and devices
          securely, without relying on a central server. Matrix is designed
          to be secure, scalable, and interoperable, making it a great choice
          for building real-time applications.
        </p>
      </aside>

      <h6 className="mt-4 text-xl font-bold font">Matrix.py ~ A lightweight Matrix bot framework</h6>
      <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />

      <p className="mt-4">
        matrix.py is a lightweight and intuitive Python library to build bots
        on the <a href="https://matrix.org/" className="underline" target="_blank" rel="noreferrer noopener">Matrix protocol</a>. It provides a clean, decorator-based API
        similar to popular event-driven frameworks, allowing developers to
        focus on behavior rather than boilerplate.
        It is built on top of <a href="https://github.com/poljar/matrix-nio" className="underline" target="_blank" rel="noreferrer noopener">matrix-nio</a>, a powerful Matrix client library for Python.
      </p>

      <p className="mt-4">
        matrix.py is designed to be simple and easy to use, making it perfect for both beginners and experienced developers.
        It supports all major Matrix features, including rooms, events, and user management.
      </p>

      <p>
        You can see my contributions to the project on <a href="https://github.com/Code-Society-Lab/matrixpy/commits?author=chrisdedman" className="underline" target="_blank" rel="noreferrer noopener">GitHub</a>.
      </p>
      <p className="mt-4">
        The project is open source and licensed under the <a href="https://github.com/Code-Society-Lab/matrixpy/blob/main/LICENSE" className="underline" target="_blank" rel="noreferrer noopener">GNU General Public License v3.0</a>.
      </p>

      <a href="https://github.com/Code-Society-Lab/matrixpy" target="_blank" rel="noreferrer noopener" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
        Matrix.py Repository <CursorArrowRaysIcon className="w-4 h-4 ms-2" />
      </a>

      <hr className="h-px my-8 bg-black border-0 separator mt-4 mb-0" />

      <aside
        className="bg-green-500 border border-green-200 rounded-lg p-4 my-4 max-w-2xl mx-auto prose"
        aria-labelledby="info-callout"
      >
        <p id="info-callout">
          If you are not familiar with Matrix, I would recommend creating an
          account on <a href="https://app.cinny.in/register/matrix.org" className="underline" target="_blank" rel="noreferrer noopener">Cinny</a>,
          which is a web-based Matrix client that is fast and lightweight (the one I am using).

          Another popular client is <a href="https://app.element.io/" className="underline" target="_blank" rel="noreferrer noopener">Element</a>,
          which is an official Matrix client that is available on all platforms.

          Otherwise, you can also use <a href="https://matrix.org/ecosystem/clients/" className="underline" target="_blank" rel="noreferrer noopener">this list</a> to find a client that suits your needs.
        </p>
      </aside>
    </>
  )
}

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
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="320px" height="136px" viewBox="0 0 789.322 336.807" enableBackground="new 0 0 789.322 336.807"
        >
          <rect width="789.322" height="336.807" fill="white" />
          <path d="M8.876,7.71v321.386h23.13v7.711H0V0h32.006v7.71H8.876z" />
          <path d="M97.989,109.594v16.264h0.463c4.338-6.191,9.563-10.998,15.684-14.406c6.117-3.402,13.129-5.11,21.027-5.11
	c7.588,0,14.521,1.475,20.793,4.415c6.274,2.945,11.038,8.131,14.291,15.567c3.56-5.265,8.4-9.913,14.521-13.94
	c6.117-4.025,13.358-6.042,21.724-6.042c6.351,0,12.234,0.776,17.66,2.325c5.418,1.549,10.065,4.027,13.938,7.434
	c3.869,3.41,6.889,7.863,9.062,13.357c2.167,5.504,3.253,12.122,3.253,19.869v80.385h-32.993v-68.074
	c0-4.025-0.154-7.82-0.465-11.385c-0.313-3.56-1.161-6.656-2.555-9.293c-1.395-2.631-3.45-4.724-6.157-6.274
	c-2.711-1.543-6.391-2.322-11.037-2.322s-8.403,0.896-11.269,2.671c-2.868,1.784-5.112,4.109-6.737,6.971
	c-1.626,2.869-2.711,6.12-3.252,9.762c-0.545,3.638-0.814,7.318-0.814,11.035v66.91h-32.991v-67.375c0-3.562-0.081-7.087-0.23-10.57
	c-0.158-3.487-0.814-6.7-1.978-9.645c-1.162-2.94-3.099-5.304-5.809-7.088c-2.711-1.775-6.699-2.671-11.965-2.671
	c-1.551,0-3.603,0.349-6.156,1.048c-2.556,0.697-5.036,2.016-7.435,3.949c-2.404,1.938-4.454,4.726-6.158,8.363
	c-1.705,3.642-2.556,8.402-2.556,14.287v69.701h-32.99V109.594H97.989z"/>
          <path d="M271.545,127.254c3.405-5.113,7.744-9.215,13.012-12.316c5.264-3.097,11.186-5.303,17.771-6.621
	c6.582-1.315,13.205-1.976,19.865-1.976c6.042,0,12.158,0.428,18.354,1.277c6.195,0.855,11.85,2.522,16.962,4.997
	c5.111,2.477,9.292,5.926,12.546,10.338c3.253,4.414,4.879,10.262,4.879,17.543v62.494c0,5.428,0.31,10.611,0.931,15.567
	c0.615,4.959,1.701,8.676,3.251,11.153h-33.455c-0.621-1.86-1.126-3.755-1.511-5.693c-0.39-1.933-0.661-3.908-0.813-5.923
	c-5.267,5.422-11.465,9.217-18.585,11.386c-7.127,2.163-14.407,3.251-21.842,3.251c-5.733,0-11.077-0.698-16.033-2.09
	c-4.958-1.395-9.293-3.562-13.01-6.51c-3.718-2.938-6.622-6.656-8.713-11.147s-3.138-9.84-3.138-16.033
	c0-6.813,1.199-12.43,3.604-16.84c2.399-4.417,5.495-7.939,9.295-10.575c3.793-2.632,8.129-4.607,13.01-5.923
	c4.878-1.315,9.795-2.358,14.752-3.137c4.957-0.772,9.835-1.393,14.638-1.857c4.801-0.466,9.062-1.164,12.779-2.093
	c3.718-0.929,6.658-2.282,8.829-4.065c2.165-1.781,3.172-4.375,3.02-7.785c0-3.56-0.58-6.389-1.742-8.479
	c-1.161-2.09-2.711-3.719-4.646-4.88c-1.937-1.161-4.183-1.936-6.737-2.325c-2.557-0.382-5.309-0.58-8.248-0.58
	c-6.506,0-11.617,1.395-15.335,4.183c-3.716,2.788-5.889,7.437-6.506,13.94h-32.991C266.2,138.793,268.133,132.362,271.545,127.254z
	 M336.714,173.837c-2.09,0.696-4.337,1.275-6.736,1.741c-2.402,0.465-4.918,0.853-7.551,1.161c-2.635,0.313-5.268,0.698-7.899,1.163
	c-2.48,0.461-4.919,1.086-7.317,1.857c-2.404,0.779-4.495,1.822-6.274,3.138c-1.784,1.317-3.216,2.985-4.3,4.994
	c-1.085,2.014-1.626,4.571-1.626,7.668c0,2.94,0.541,5.422,1.626,7.431c1.084,2.017,2.558,3.604,4.416,4.765
	s4.025,1.976,6.507,2.438c2.475,0.466,5.031,0.698,7.665,0.698c6.505,0,11.537-1.082,15.103-3.253
	c3.561-2.166,6.192-4.762,7.899-7.785c1.702-3.019,2.749-6.072,3.137-9.174c0.384-3.097,0.58-5.576,0.58-7.434V170.93
	C340.548,172.172,338.806,173.139,336.714,173.837z"/>
          <path d="M461.826,109.594v22.072h-24.161v59.479c0,5.573,0.928,9.292,2.788,11.149c1.856,1.859,5.576,2.788,11.152,2.788
	c1.859,0,3.638-0.076,5.343-0.232c1.703-0.152,3.33-0.388,4.878-0.696v25.557c-2.788,0.465-5.887,0.773-9.293,0.931
	c-3.407,0.149-6.737,0.23-9.99,0.23c-5.111,0-9.953-0.35-14.521-1.048c-4.571-0.695-8.597-2.047-12.081-4.063
	c-3.486-2.011-6.236-4.88-8.248-8.597c-2.016-3.714-3.021-8.595-3.021-14.639v-70.859h-19.98v-22.072h19.98V73.582h32.992v36.012
	H461.826z"/>
          <path d="M508.989,109.594v22.306h0.465c1.546-3.72,3.636-7.163,6.272-10.341c2.634-3.172,5.652-5.885,9.06-8.131
	c3.405-2.242,7.047-3.985,10.923-5.228c3.868-1.237,7.898-1.859,12.081-1.859c2.168,0,4.566,0.39,7.202,1.163v30.67
	c-1.551-0.312-3.41-0.584-5.576-0.814c-2.17-0.233-4.26-0.35-6.274-0.35c-6.041,0-11.152,1.01-15.332,3.021
	c-4.182,2.014-7.55,4.761-10.107,8.247c-2.555,3.487-4.379,7.55-5.462,12.198c-1.083,4.645-1.625,9.682-1.625,15.102v54.133h-32.991
	V109.594H508.989z"/>
          <path d="M568.931,91.006V63.823h32.994v27.183H568.931z M601.925,109.594v120.117h-32.994V109.594H601.925z" />
          <path d="M619.116,109.594h37.637l21.144,31.365l20.911-31.365h36.476l-39.496,56.226l44.377,63.892h-37.64l-25.093-37.87
	l-25.094,37.87H615.4l43.213-63.193L619.116,109.594z"/>
          <path d="M780.444,329.096V7.71h-23.13V0h32.008v336.807h-32.008v-7.711H780.444z" />
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

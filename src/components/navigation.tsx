'use client'

import React from 'react';
import { RocketLaunchIcon } from '@heroicons/react/24/solid'

export default function Menu() {
  const toggleMenu = () => {
    const navbarSticky = document.getElementById('navbar-sticky');
    if (navbarSticky) {
      navbarSticky.classList.toggle('hidden');
    }
  };

  return (
    <>
      <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <RocketLaunchIcon className="w-6 h-6 spin-on-hover" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap font-montez">Ad Astra</span>
          </a>
          <div className="flex">
            <button
              onClick={toggleMenu}
              type="button"
              className="hid"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul>
              <li>
                <a href="/">
                  <button type="button" className="btn">
                    Home
                  </button>
                </a>
              </li>
              <li>
                <a href="/work">
                  <button type="button" className="btn">
                    Work
                  </button>
                </a>
              </li>
              <li>
                <a href="/profile">
                  <button type="button" className="btn">
                    Profile
                  </button>
                </a>
              </li>
              <li>
                <a href="/blog">
                  <button type="button" className="btn">
                    Blog
                  </button>
                </a>
              </li>
              <li>
                <a href="/projects">
                  <button type="button" className="btn">
                    Projects
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="md:flex space-x-4">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/work">Work</NavItem>
            <NavItem to="/profile">Profile</NavItem>
            <NavItem to="https://astranebula.gitbook.io/">Blog</NavItem>
            <NavItem to="/projects">Projects</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Navigation item component
const NavItem = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <li>
    <a href={to} className="px-3 py-2 rounded-md">{children}</a>
  </li>
);
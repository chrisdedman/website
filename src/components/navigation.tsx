'use client';

import React from 'react';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

export default function Menu() {
  const toggleMenu = () => {
    const navbarSticky = document.getElementById('navbar-sticky');
    if (navbarSticky) {
      navbarSticky.classList.toggle('hidden');
    }
  };

  return (
    <nav className="fixed w-full z-20 top-0 start-0 border-b bg-black text-white shadow-lg">
      <div className="max-w-screen-xl flex justify-between items-center mx-auto py-4 px-8">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <RocketLaunchIcon className="w-6 h-6 spin-on-hover" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap font">Ad Astra</span>
          </a>
        </div>
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden focus:outline-none"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <div className="hidden md:flex items-center space-x-2" id="navbar-sticky">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/profile">Profile</NavItem>
            <NavItem to="https://astranebula.gitbook.io/">Blog</NavItem>
            <NavItem to="/projects">Projects</NavItem>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Navigation item component
const NavItem = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <a href={to} className="block px-2 py-2 rounded-md hover:bg-gray-800">{children}</a>
);

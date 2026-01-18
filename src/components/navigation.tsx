'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
  if (to.startsWith('/')) {
    return (
      <Link href={to} className="block px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
        {children}
      </Link>
    );
  }

  return (
    <a href={to} className="block px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
      {children}
    </a>
  );
};

export default function Menu() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-20 top-0 start-0 border-b bg-black text-white shadow-lg ${scrolled ? 'bg-opacity-90' : ''}`}>
      <div className="max-w-screen-xl flex justify-between items-center mx-auto py-4 px-8">

        <Link href="/" className="flex items-center space-x-2">
          <RocketLaunchIcon className="w-4 h-4 spin-on-hover" />
          <span>christopher dedman rollet</span>
        </Link>

        <button
          onClick={toggleMenu}
          type="button"
          className="md:hidden focus:outline-none"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} md:flex items-center space-x-2`} id="navbar-sticky">
          <NavItem to="/profile">profile</NavItem>
          <NavItem to="/projects">work</NavItem>
          <NavItem to="https://astradedman.vercel.app/">blog</NavItem>
        </div>

      </div>
    </nav>
  );
}

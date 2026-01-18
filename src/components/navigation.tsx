'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
  if (to.startsWith('/')) {
    return (
      <Link href={to} className="block px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[color:var(--nav-tab-hover-background-color)]">
        {children}
      </Link>
    );
  }

  return (
    <a href={to} className="block px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[color:var(--nav-tab-hover-background-color)]">
      {children}
    </a>
  );
};

export default function Menu() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const timer = setTimeout(() => setIsOpen(false), 0);
    return () => clearTimeout(timer);
  }, [pathname, isOpen]);

  return (
    <nav className={`fixed w-full z-20 top-0 start-0 border-b text-[color:var(--nav-selected-foreground-color)] bg-[color:var(--nav-background-color)] shadow-lg ${scrolled ? 'bg-opacity-90' : ''}`}>
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
          <svg className="w-7 h-7 text-[color:var(--nav-selected-foreground-color)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <div
          className={`flex flex-col md:flex-row items-stretch md:items-center gap-2 md:space-x-2 absolute md:static top-full left-0 z-20 w-full md:w-auto bg-[color:var(--nav-background-color)] md:bg-transparent border-b md:border-0 border-[color:var(--nav-tab-hover-background-color)] px-6 py-4 md:p-0 shadow-lg md:shadow-none overflow-hidden transition-all duration-300 ease-out md:transition-none ${isOpen ? 'max-h-60 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'} md:max-h-none md:opacity-100 md:translate-y-0 md:pointer-events-auto`}
          id="navbar-sticky"
        >
          <NavItem to="/profile">profile</NavItem>
          <NavItem to="/projects">work</NavItem>
          <NavItem to="https://astradedman.vercel.app/">blog</NavItem>
        </div>

      </div>
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          className="fixed inset-0 z-10 md:hidden bg-black/30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}

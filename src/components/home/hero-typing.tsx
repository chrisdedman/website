"use client";

import { useEffect, useMemo, useState } from 'react';

const roles = [
  'a software engineer.',
  'a computer scientist.',
  'a problem solver.',
  'a critical thinker.',
  'chris dedman.',
];

export default function HeroTyping() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const dynamicText = useMemo(() => {
    const currentRole = roles[roleIndex] ?? '';
    return currentRole.slice(0, charIndex);
  }, [charIndex, roleIndex]);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenRoles = 500;
    const currentRole = roles[roleIndex];
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (isDeleting && charIndex === 0) {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 0);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeoutId = setTimeout(() => setIsDeleting(true), delayBetweenRoles);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeoutId = setTimeout(() => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, speed);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="typing-container mt-4">
      <span id="static-text">I am </span>
      <span id="dynamic-text">{dynamicText}</span>
      <span className="cursor">|</span>
    </div>
  );
}

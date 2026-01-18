"use client"

import React, { useState, useEffect } from "react";
import Menu from "@/components/navigation";
import Footer from '@/components/footer'

const roles = ["a software engineer.", "a computer scientist.", "a problem solver.", "a critical thinker.", "chris dedman."];

export default function Page() {
  const [dynamicText, setDynamicText] = useState("");
  const [roleIndex, setRoleIndex]     = useState(0);
  const [charIndex, setCharIndex]     = useState(0);
  const [isDeleting, setIsDeleting]   = useState(false);

  useEffect(() => {
    const typingSpeed       = 100;
    const deletingSpeed     = 50;
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
        if (isDeleting) {
          setDynamicText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setDynamicText((prev) => prev + currentRole[charIndex]);
          setCharIndex((prev) => prev + 1);
        }
      }, speed);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <>
      <div
        className="relative h-screen flex items-end justify-start"
        style={{
          backgroundImage: "url('/me_engine.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay" />
        <Menu />

        <div className="relative z-10 w-full px-6 pb-16 lg:px-24 lg:pb-20">
          <div className="hero-panel max-w-xl rounded-2xl p-6 text-white">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">Portfolio</p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">Chris Dedman-Rollet</h1>
            <div className="typing-container mt-4">
              <span id="static-text">I am </span>
              <span id="dynamic-text">{dynamicText}</span>
              <span className="cursor">|</span>
            </div>
            <p className="mt-4 text-sm text-white/80">
              Building dependable systems, tooling, and open-source software with a focus on clarity and craft.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-col p-4 lg:p-8 mt-16">
        <div className="project-card max-w-6xl mx-auto flex-grow rounded-2xl border p-6">
          <p className="project-card-text leading-relaxed">
            I am a recent computer science graduate,
            I am passionate about programming and eager to apply skills in an
            entry-level software engineering role. With experience in various
            programming languages and a focus on backend and low-level systems, I
            seek opportunities to grow and make an impact.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

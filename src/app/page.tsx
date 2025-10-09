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

    const handleTyping = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting && charIndex < currentRole.length)
      {
        setDynamicText((prev) => prev + currentRole[charIndex]);
        setCharIndex((prev) => prev + 1);
      }

      else if (isDeleting && charIndex > 0)
      {
        setDynamicText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }

      else if (isDeleting && charIndex === 0)
      {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }

      else if (!isDeleting && charIndex === currentRole.length)
      {
        setTimeout(() => setIsDeleting(true), delayBetweenRoles);
      }
    };

    const typingInterval = setInterval(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearInterval(typingInterval);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <>
      <div
        className="h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/me_engine.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Menu />

        <div className="w-full flex justify-end lg:pr-80 pr-8 mt-80">
          <div className="typing-container">
            <span id="static-text">I am </span>
            <span id="dynamic-text">{dynamicText}</span>
            <span className="cursor">|</span>
          </div>
        </div>
      </div>

      <div className="flex-col p-4 lg:p-8 mt-16">
        <div className="p-4 max-w-6xl mx-auto flex-grow bg-white rounded-lg shadow-md">
          <p className="text-gray-800 leading-relaxed">
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

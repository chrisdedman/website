"use client"

import React from "react";
import Menu from '@/components/navigation'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <div className="h-screen p-8 lg:p-16 mt-16 ">
      <Menu />
      <div className="p-6 border border-gray-200 rounded-lg shadow">
        <div className="p-1">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            <a href="/work" className="underline">Work</a>{" > "}Software Engineering ~ Uber
          </h5>
          <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
          <div>
            <address>By <a rel="author" href="/">Chris Dedman-Rollet</a></address>
            on <time dateTime="09-04-2023" title="September 4th, 2023">09-04-2023</time>
            <Article />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Article() {
  return (
    <>
      <p>
        September 1st 2023 marked the end of an incredible chapter in my life –
        my first summer internship as a <strong>software engineer</strong> with Uber and <strong>Growth Platform/DOCTOM</strong> Team.
        As I reflect on this unforgettable journey, I&#39;m overwhelmed with gratitude. 🙏☀️
      </p>
      <p>
        Over the past few months, I had the incredible opportunity to delve into
        the heart of <strong>Uber&#39;s infrastructure</strong>, where I conducted server performance
        load testing that aimed to push the boundaries of excellence. 🚀📊
      </p>
      <p>
        My task was to <strong>deploy six services</strong> into Uber&#39;s infrastructure, each with
        varying payload sizes, utilizing a spectrum of cutting-edge web development
        frameworks like <strong>Next.js, QwikCity, Golang FX, Vanilla KOA Server, and Rust/Leptos</strong>.
        The objective? To explore the tipping point at which services began
        generating error responses, determine the <strong>p99 latency with an error rate
          below 1%</strong>, and benchmark these results against Uber&#39;s internal framework,
        Fusion.js. 📈🔍
      </p>
      <p>
        <strong>Our goal was clear</strong>: to unravel the secrets of Fusion.js&#39;s performance
        and boost its maximum throughput. We followed a structured three-step
        approach:

      </p>
      <p>
        <strong>👣 Step 1</strong>: Establishing a consistent and repeatable method to measure
        and analyze web application performance at Uber.
      </p>
      <p>
        <strong>🧪 Step 2</strong>: Creating hypotheses and rigorously testing them to identify
        meaningful signals.
      </p>
      <p>
        <strong>🔍 Step 3</strong>: Evaluating these signals, devising solutions, and prioritizing
        them based on their potential impact and feasibility.
      </p>
      <p>
        What sets this experience apart is that all tests were conducted in a
        <strong>production environment</strong>, eliminating the variables associated with local
        testing. 🌐🏭
      </p>
      <p>
        To achieve our goals, I relied on Uber&#39;s internal performance load testing
        tool, <strong>Ballast</strong>, and the third-party load testing tool, <strong>Artillery</strong>.
        We harnessed the power of the &#34;Four Golden Signals&#34; for monitoring server
        performance: <strong>latency, traffic, errors, and saturations</strong> (CPU, Memory,
        and File Descriptors). 🌟📉
      </p>
      <p>
        Additionally, during my internship, I took the <strong>initiative</strong> to streamline
        performance load testing within Uber&#39;s infrastructure. This involved the
        development of a simplified method using Uber&#39;s internal load testing tool,
        Ballast. I&#39;m thrilled to share that my work was not only approved but
        has been fully integrated into Uber&#39;s infrastructure.
      </p>
      <p>
        My research and work will potentially <strong>save the company between $400K to
          $1 million overnight</strong> and optimizing Fusion.js&#39;s maximum throughput—our
        primary research focus. 💡💰
      </p>
      <p>
        My journey also involved working with a wide array of tools and technologies
        that I have never work with before, which include <strong>TypeScript, JavaScript,
          JIRA ticket services, Docker, and continuous integration/continuous
          deployment (CI/CD)</strong>. I also dedicated my efforts to comprehensive
        documentation, enhancing the ease of creating services, navigating Uber&#39;s
        infrastructure, and modernizing an outdated deployment process from start
        to finish. 📚💻
      </p>
      <p>
        This summer at Uber has been a remarkable experience, and I am profoundly
        grateful for the trust, support, and opportunities I&#39;ve received. 🤝🌆
      </p>
      <p>
        I would like to thanks more specifically my manager Matthew Harwood from
        whom I have learned a lot about <strong>Server Performance</strong>, my mentor Wasif Zaman
        for the guidance through <strong>Web Development</strong>, Jessica Stubbs for the continuous
        support through this 12 weeks, and many more engineers within Uber that
        helped me and from whom I have learned a tons.
      </p>
      <p>
        Thank you, <a href="https://uber.com" target="_blank" rel="noreferrer noopener">Uber</a>, for this unforgettable journey and for allowing me to
        contribute to your mission of revolutionizing transportation and
        logistics. 🚗🌐
      </p>
    </>
  )
}
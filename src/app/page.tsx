import type { Metadata } from 'next';
import Menu from "@/components/navigation";
import Footer from '@/components/footer'
import HeroTyping from '@/components/home/hero-typing';
import { siteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  description: 'Chris Dedman portfolio with featured projects and background.',
  alternates: {
    canonical: siteUrl,
  },
};

export default function Page() {
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
            <HeroTyping />
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

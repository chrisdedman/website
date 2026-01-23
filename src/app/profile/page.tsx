
import type { Metadata } from 'next'
import Menu from '@/components/navigation';
import Experiences from "@/components/resume/experience";
import Educations from "@/components/resume/education";
import Honors from "@/components/resume/honors";
import Skills from "@/components/resume/skills";
import Footer from '@/components/footer';
import AboutMe from '@/components/resume/aboutme';

export const metadata: Metadata = {
    title: 'Profile',
    description: 'Chris Dedman Profile — Resume, Skills & Honors',
}

export default function Page() {
  return (
    <div className="min-h-screen flex-col p-4 lg:p-8 mt-16">
      <Menu />
      <div className="p-4 max-w-6xl mx-auto flex-grow">
        <AboutMe />
        <hr className="h-px my-8 mb-0 bg-black border-0 separator" />
        <p className="text-sm font-medium mt-0 mb-4">RESUME</p>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/3 mb-4 lg:mb-0">
            <Educations />
          </div>
          <div className="lg:w-1/3 mb-4 lg:mb-0">
            <Experiences />
          </div>
          <div className="lg:w-1/3">
            <div className="lg:flex lg:flex-col">
              <Skills />
              <Honors />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
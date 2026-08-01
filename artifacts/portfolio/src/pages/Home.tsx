import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { DomainExpertise } from '@/components/sections/DomainExpertise';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <hr className="border-[#3F3F46]" />
        <About />
        <hr className="border-[#3F3F46]" />
        <Skills />
        <hr className="border-[#3F3F46]" />
        <Experience />
        <hr className="border-[#3F3F46]" />
        <DomainExpertise />
        <hr className="border-[#3F3F46]" />
        <Education />
        <hr className="border-[#3F3F46]" />
        <Contact />
      </main>
    </div>
  );
}

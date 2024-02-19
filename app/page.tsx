import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/projects/Projects';

export default function Home() {
  return (
    <main>
      <div className="w-10/12 md:w-9/12 mx-auto space-y-10 mb-16">
        <div className="pt-24 md:min-h-screen md:flex md:items-center">
          <Hero />
        </div>
        <About />
        <div className="flex justify-center md:justify-start">
          <Projects />
        </div>
        <Skills />
      </div>
    </main>
  );
}

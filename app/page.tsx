import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main>
      <div className="w-9/12 mx-auto">
        <Hero />
        <About />
        <Projects />
        <Skills />
      </div>
    </main>
  );
}

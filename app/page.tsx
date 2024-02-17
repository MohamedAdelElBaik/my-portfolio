import About from '@/components/About';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <div className="w-9/12 mx-auto">
        <Hero />
        <About />
      </div>
    </main>
  );
}

import Navbar from '@/components/Navbar';
import Presentation from '@/components/Presentation';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Presentation />

        <About />

        <Projects />

        <Contact />
      </main>
    </>
  );
}

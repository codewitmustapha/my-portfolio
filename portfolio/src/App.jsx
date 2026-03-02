import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Projects from './components/Projects';
import WordPressProjects from './components/WordPressProjects';
import Skills from './components/Skills';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarField from './components/StarField';

export default function App() {
  return (
    <div className="bg-[#080c14] text-slate-400 font-sans overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200" style={{ fontFamily: "'Inter', sans-serif" }}>
      <StarField />
      <Navbar />
      <Hero />
      <StatsBar />
      <Projects />
      <WordPressProjects />
      <Skills />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

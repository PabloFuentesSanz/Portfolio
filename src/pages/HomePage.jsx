import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Articles from '../components/Articles';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';

function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Articles />
      <Contact />
    </>
  );
}

export default HomePage;

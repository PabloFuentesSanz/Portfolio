import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

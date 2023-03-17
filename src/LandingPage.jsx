import About from "./components/about/About";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/section/Projects";
import Domains from "./components/domains/Domains";
import Events from "./components/events/Events";

function LandingPage() {
  return (
    <div>
      <Home />
      <Events />
      <About />
      <Projects />
      <Domains />
      <Contact />
    </div>
  );
}

export default LandingPage;

import About from "./components/about/About";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/section/Projects";
import Domains from "./components/domains/Domains";
import Events from "./components/events/Events";
import DomainsDescription from "./components/domains/DomainsDescription";

function LandingPage() {
  return (
    <div className="px-20">
      <Home />
      <About />
      <Projects />
      <DomainsDescription />
      <Contact />
    </div>
  );
}

export default LandingPage;

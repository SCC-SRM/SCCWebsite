import About from "./About";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import Projects from "../projects/section/Projects";
import Domains from "../domains/Domains"
import Events from "../events/Events";

function AboutPage() {
  return (
    <div>
      <Home />
      <Events />
      <About />
      <Projects />
      <Domains/>
      <Contact />
    </div>
  );
}

export default AboutPage;

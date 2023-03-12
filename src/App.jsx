import About from "./components/about/About";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Events from "./components/events/Events";

function App() {
  return (
    <div>
      <Home />
      <Events/>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

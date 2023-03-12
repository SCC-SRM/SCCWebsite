import About from "./components/about/About";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Events from "./components/events/Events";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="h-full">
      <Home />
      <Events/>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

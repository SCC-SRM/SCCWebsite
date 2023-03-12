import About from "./components/about/About";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

import Domains from "./components/domains/Domains";


function App() {
  return (
    <div className="h-full">
      <Home />
      <About />
      <Projects />
      <Domains/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

import About from "./components/about/About";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";

import Domains from "./components/domains/Domains";


function App() {
  return (
    <div>
       <Home />
      <About />
      <Projects />
      <Contact />  
    <Domains/>
    </div>
  );
}

export default App;

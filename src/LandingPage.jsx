import About from './components/about/About'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Projects from './components/projects/section/Projects'
import DomainsDescription from './components/domains/DomainsDescription'

function LandingPage() {
  return (
    <div className="px-4 md:px-20">
      <Home />
      <About />
      <Projects />
      <DomainsDescription />
      <Contact />
    </div>
  )
}

export default LandingPage

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProjectsPage from './components/projects/page/ProjectsPage'
import Footer from './components/footer/Footer'
import LandingPage from './LandingPage'
import Domains from './components/domains/Domains'
import Nav from './components/nav/Nav'
import Events from './components/events/Events'

function App() {
  return (
    <div className="min-h-full items-center bg-primaryBackground text-white">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/domains" element={<Domains />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <div className="flex flex-col items-center">
        <img className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto h-[42vw] pointer-events-none select-none" src="bg-swift.svg"></img>
      </div>
    </div>
  )
}

export default App

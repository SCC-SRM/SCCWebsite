import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectsPage from "./components/projects/page/ProjectsPage";
import Footer from "./components/footer/Footer";
import LandingPage from "./LandingPage";
import Domains from "./components/domains/Domains";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="min-h-full bg-primaryBackground text-white">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/domains" element={<Domains />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

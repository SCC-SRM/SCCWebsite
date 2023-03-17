import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectsPage from "./components/projects/page/ProjectsPage";
import Footer from "./components/footer/Footer";
import LandingPage from "./LandingPage";

function App() {
  return (
    <div className="h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

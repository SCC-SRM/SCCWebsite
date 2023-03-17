import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/about/AboutPage";
import ProjectsPage from "./components/projects/page/ProjectsPage";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="h-full">
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/projectspage" element={<ProjectsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;

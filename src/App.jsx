import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <Routes>
      <Route path="PersonalPage/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path='/projects' element={<ProjectsPage />} />
    </Routes>
  );
}

export default App;
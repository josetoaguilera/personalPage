// import React from 'react';
// import Home from '@/pages/Home';
// import './index.css'; // Your main CSS file with Tailwind directives

// function App() {
//   return (
//     <div className="dark:bg-gray-900 dark:text-white">
//       <Home />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';

// Define your components for different routes

function About() {
  return <h2>About Us</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path='/projects' element={<ProjectsPage />} />
    </Routes>
  );
}

export default App;
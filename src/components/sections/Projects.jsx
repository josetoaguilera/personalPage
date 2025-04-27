import React from 'react';
import ProjectCard from '@/components/common/ProjectCard'; // Your custom card

function Projects() {
  const projects = [
    {
      title: 'Color Palette generator (cvd)',
      description: 'Web application designed to help developers and designers create color palettes that are accessible to people with color vision deficiency (CVD). The app allows users to generate color palettes and then simulate how those palettes will appear to people with different types of CVD.',
      imageUrl: '/img/r_1.png', // Replace with your image
      // liveUrl: 'https://project1.com',
      githubUrl: 'https://github.com/josetoaguilera/cvd-color-palette-generator',
    },
    {
      title: 'Portfolio Page',
      description: 'This software engineer portfolio project is about building a clean, responsive website to quickly showcase skills and projects through an "About Me," detailed "Projects" section with links, and easy contact information.',
      imageUrl: '/img/r_2.png', // Replace with your image
      liveUrl: '/',
      githubUrl: 'https://github.com/josetoaguilera/josetoaguilera.github.io',
    },
    // ... more projects
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
import React from 'react';

function Skills() {
  const skills = [
    'JavaScript',
    'React',
    'Tailwind CSS',
    'Node.js',
    'Git',
    // ... more skills
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          My Skills
        </h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
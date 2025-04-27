import React from 'react';

function About({ to }) {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 cursor-pointer" onClick={() => to("/")}>
          About Me
        </h2>
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            Hi! I’m <span className="font-semibold text-gray-900 dark:text-gray-100">José Tomás Aguilera Yévenes</span>, a software engineer from Chile with a degree in Computer Science from the Universidad de Chile. I currently work at <span className="font-semibold text-gray-900 dark:text-gray-100">LVA Indices</span>, where I apply my passion for problem-solving and building meaningful tech solutions.
          </p>

          <p>
            Beyond coding, I’ve had the opportunity to participate in two <span className="italic">Work & Travel</span> programs in the United States—experiences that not only helped me grow personally but also significantly improved my English communication skills and cultural adaptability.
          </p>

          <p>
            Outside of work, I’m always looking for a good trail or challenge. I’m into <span className="font-medium">running</span> (I’ve completed <span className="font-medium">two half marathons</span>!), <span className="font-medium">hiking</span>, and <span className="font-medium">snowboarding</span>. Traveling is one of my favorite ways to learn and recharge—whether it's exploring new places or hitting the mountains.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
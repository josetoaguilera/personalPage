import React from 'react';
import { Button } from '@/components/ui/button'; // Shadcn UI Button
import { useNavigate } from 'react-router-dom';
import homeImage from '@/assets/home_img.png'

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="flex-grow py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Hi, I'm José T. Aguilera
      </h1>
      <div class="flex justify-center items-center">
        <img
          alt="foto_home_jose_tomas"
          src={homeImage}
          className="w-80 h-80 rounded-4xl drop-shadow-xl/25" />
      </div>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 mt-4">
        A passionate software engineer building amazing things.
      </p>
      <div className="flex justify-center gap-4">
        <Button variant="outline" size="lg" className={"cursor-pointer"} onClick={() => navigate('/about')} >About me</Button>
        <Button variant="outline" size="lg" className={"cursor-pointer"} onClick={() => navigate('/projects')}>See My Projects</Button>
        <Button variant="default" size="lg" className={"cursor-pointer"} onClick={() => navigate('/contact')}>Contact Me</Button>
      </div>
    </div>
  );
}

export default Hero;
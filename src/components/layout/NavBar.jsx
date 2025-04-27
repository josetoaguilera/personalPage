import React from 'react';
import { Button } from '@/components/ui/button'; // Shadcn UI Button

function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          José Tomás Aguilera Yévenes
        </a> */}
        <div>
          <Button variant="outline" className="mr-4">
            About
          </Button>
          <Button variant="outline">Contact</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 text-center text-gray-500 dark:text-gray-400">
      <p>&copy; {new Date().getFullYear()} José Tomás Aguilera Yévenes. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
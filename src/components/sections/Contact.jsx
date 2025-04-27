import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Contact Me
        </h2>
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
          <p className="text-gray-700 mb-6 text-center">
            Feel free to reach out to me through any of the platforms below:
          </p>
          <div className="space-y-4">
            <a
              href="mailto:joseaguilera@ug.uchile.cl"
              className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md p-3 transition duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-xl text-gray-500 mr-4" />
              <span className="font-medium text-gray-800">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/josetomas-aguilera-yevenes/"
              className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md p-3 transition duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl text-blue-500 mr-4" />
              <span className="font-medium text-gray-800">LinkedIn</span>
            </a>
            <a
              href="https://github.com/josetoaguilera"
              className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md p-3 transition duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl text-gray-800 mr-4" />
              <span className="font-medium text-gray-800">GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/josetomas_ay/"
              className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md p-3 transition duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl text-pink-500 mr-4" />
              <span className="font-medium text-gray-800">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
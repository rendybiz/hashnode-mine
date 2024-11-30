import React from 'react';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosArrowUp } from 'react-icons/io';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-green-darker text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Copyright Text */}
          <div className="text-center">
            <p className="text-gray-300">
              Copyright 2024, <span className="text-yellow-400">Rendy</span> All Rights Reserved.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-8">
           
            <Link
              href="https://www.linkedin.com/in/rendybiz/"
              target="_blank"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <FaLinkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-yellow-400 p-3 rounded-full text-black hover:bg-yellow-500 transition-colors"
          aria-label="Scroll to top"
        >
          <IoIosArrowUp size={24} />
        </button>
      </div>
    </footer>
  );
};

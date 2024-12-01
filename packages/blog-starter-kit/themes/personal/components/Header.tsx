import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (path: string) => router.pathname === path;

  return (
    <header className="fixed w-full top-0 z-50 bg-[#0A2A2A] text-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Rendy Adi
          </Link>

          {/* Navigation Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                href="/"
                className={`hover:text-yellow-400 transition-colors ${isActive('/') ? 'text-yellow-400' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`hover:text-yellow-400 transition-colors ${isActive('/services') ? 'text-yellow-400' : ''}`}
              >
                Services
              </Link>
            </li>
           
            <li>
              <Link
                href="/works"
                className={`hover:text-yellow-400 transition-colors ${isActive('/blog') ? 'text-yellow-400' : ''}`}
              >
                Works
              </Link>
            </li>
          </ul>

          {/* Download CV Button */}
          <a 
            href="https://drive.google.com/file/d/1PWCx9fbwaukj2Td9q4cME3i-bujLHvBx/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
          >
            Download my CV
          </a>

          {/* Mobile Menu Button and Download CV */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Download CV Button */}
            <a 
              href="https://drive.google.com/file/d/1PWCx9fbwaukj2Td9q4cME3i-bujLHvBx/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-4 py-1.5 rounded-full font-semibold hover:bg-yellow-300 transition-colors text-sm"
            >
              Download CV
            </a>

            {/* Mobile Menu Button */}
            <button 
              className="flex items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="pt-4 pb-3 space-y-3">
            <li>
              <Link
                href="/"
                className={`block hover:text-yellow-400 transition-colors ${isActive('/') ? 'text-yellow-400' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`block hover:text-yellow-400 transition-colors ${isActive('/services') ? 'text-yellow-400' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/works"
                className={`block hover:text-yellow-400 transition-colors ${isActive('/blog') ? 'text-yellow-400' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Works
              </Link>
            </li>
            <li className="pt-2">
              <a 
                href="https://drive.google.com/file/d/1PWCx9fbwaukj2Td9q4cME3i-bujLHvBx/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Download my CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '@/public/images/AstraLogo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-20 py-6 px-8 backdrop-blur-sm text-white">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="font-bold text-2xl font-montserrat z-30">
            <Image src={logo} alt="Astra Logo" width={150} height={50} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors duration-300">About</Link>
          </li>
          <li>
            <Link href="#events" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors duration-300">Events</Link>
          </li>
          <li>
            <Link href="#gallery" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors duration-300">Gallery</Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-400 transition-colors duration-300">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden z-30">
          <button onClick={toggleMenu} className="focus:outline-none text-xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 left-0 w-full h-120 bg-black z-20 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col space-y-8 text-xl text-center">
          <li>
            <Link href="#home" onClick={toggleMenu} className="hover:text-gray-400 transition-colors duration-300">Home</Link>
          </li>
          <li>
            <Link href="#about" onClick={toggleMenu} className="hover:text-gray-400 transition-colors duration-300">About</Link>
          </li>
          <li>
            <Link href="#events" onClick={toggleMenu} className="hover:text-gray-400 transition-colors duration-300">Events</Link>
          </li>
          <li>
            <Link href="#gallery" onClick={toggleMenu} className="hover:text-gray-400 transition-colors duration-300">Gallery</Link>
          </li>
          <li>
            <Link href="#contact" onClick={toggleMenu} className="hover:text-gray-400 transition-colors duration-300">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
"use client";
import React, { useState, useEffect, MouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// NOTE: I'm assuming 'logo' is a local file. This path might need adjusting.
import logo from "@/public/images/AstraLogo.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    // If on the main page, perform smooth scrolling
    if (pathname === '/') {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setActiveLink(targetId);
        setIsMobileMenuOpen(false);
      }
    } else {
      // Navigate to the main page with the hash
      window.location.href = `/#${targetId}`;
    }
  };

  // Handle hash navigation on page load
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash && pathname === '/') {
      const targetId = window.location.hash.replace('#', '');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setActiveLink(targetId);
      }
    }
  }, [pathname]);

  // IntersectionObserver for active link on scroll (only on main page)
  useEffect(() => {
    if (pathname !== '/') return; // Only run on main page

    const sections = ['home', 'about', 'events', 'gallery', 'contact']; // Added other sections
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image src={logo} alt="Astra logo" width={100} height={32} className="w-auto h-8" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10 items-center">
          <NavLink href="/#home" targetId="home" activeLink={activeLink} onClick={handleLinkClick}>
            Home
          </NavLink>
          <NavLink href="/#about" targetId="about" activeLink={activeLink} onClick={handleLinkClick}>
            About
          </NavLink>
          <NavLink href="/#events" targetId="events" activeLink={activeLink} onClick={handleLinkClick}>
            Events
          </NavLink>
          <NavLink href="/#gallery" targetId="gallery" activeLink={activeLink} onClick={handleLinkClick}>
            Gallery
          </NavLink>
          <NavLink href="/#contact" targetId="contact" activeLink={activeLink} onClick={handleLinkClick}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`absolute top-full left-0 w-full bg-[#06001e] shadow-lg md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <NavLink href="/#home" targetId="home" activeLink={activeLink} onClick={handleLinkClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/#about" targetId="about" activeLink={activeLink} onClick={handleLinkClick}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink href="/#events" targetId="events" activeLink={activeLink} onClick={handleLinkClick}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink href="/#gallery" targetId="gallery" activeLink={activeLink} onClick={handleLinkClick}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink href="/#contact" targetId="contact" activeLink={activeLink} onClick={handleLinkClick}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// Reusable NavLink component to simplify the code and centralize the hover/active state styles
interface NavLinkProps {
  href: string;
  targetId: string;
  activeLink: string;
  onClick: (e: MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, targetId, activeLink, onClick, children }) => {
  return (
    <Link
      href={href}
      onClick={(e) => onClick(e, targetId)}
      className={`relative text-gray-400 font-normal text-base transition-colors duration-300
        hover:text-blue-600
        ${activeLink === targetId ? 'text-blue-600' : ''}
        before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px]
        before:bg-blue-600 before:transition-transform before:duration-300
        before:scale-x-0 ${activeLink === targetId ? 'before:scale-x-100' : ''}
      `}
    >
      {children}
    </Link>
  );
};


import React from 'react';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone, FaStar } from 'react-icons/fa';
import logo from '@/public/images/AstraLogo.png'
import Image from 'next/image';


export default function Footer() {
  return (
    <footer className=" font-montserrat bg-gray-950 text-gray-300 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-800 pb-8">
        
        {/* Company Info */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Astra logo" width={100} height={32} className="w-auto h-8" />
          </div>
          <p className="text-sm">
            Where Innovation Meets Excellence. Join us for the ultimate tech festival experience.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/home" className="hover:text-white transition-colors duration-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors duration-300">About</Link></li>
            <li><Link href="/events" className="hover:text-white transition-colors duration-300">Events</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors duration-300">Gallery</Link></li>
          </ul>
        </div>

        {/* Event Categories */}
        <div>
          <h4 className="text-white font-bold mb-4">Event Categories</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors duration-300">Technical Events</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">School Level Events</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Sports Events</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Cultural Events</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-white font-bold mb-4">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="h-5 w-5 text-gray-400" />
              <a href="mailto:astra@shcollege.ac.in" className="text-sm hover:text-white transition-colors duration-300">astra@shcollege.ac.in</a>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="h-5 w-5 text-gray-400" />
              <span className="text-sm">+91 12345 67890</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
              <span className="text-sm">Sacred Heart College, Thevara, Kochi, Kerala</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Back to Top */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm pt-8">
        <p className="text-gray-500 mb-2 sm:mb-0">
          © 2025 ASTRA Tech Fest. All rights reserved.
        </p>
        <a href="#top" className="text-gray-500 hover:text-white transition-colors duration-300">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}

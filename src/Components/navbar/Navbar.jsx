import React, { useState } from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black bg-opacity-50 py-4 w-full fixed z-20">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-white text-lg font-semibold"><h1 className='text-3xl font-bold'>DANCER'S ARENA</h1></div>

        {/* Navbar links */}
        <div className="hidden md:flex">
          <Link to="/" className="text-white mx-4 hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white mx-4 hover:text-gray-300">About</Link>
          <Link to="/classes" className="text-white mx-4 hover:text-gray-300">Classes</Link>
          <Link to="/contact" className="text-white mx-4 hover:text-gray-300">Contact</Link>
        </div>

        {/* Mobile menu button (hidden on medium and above screens) */}
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="text-white"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
        <Link to="/" className="block py-2 px-4 text-sm text-white hover:bg-gray-700">Home</Link>
        <Link to="/about" className="block py-2 px-4 text-sm text-white hover:bg-gray-700">About</Link>
        <Link to="/classes" className="block py-2 px-4 text-sm text-white hover:bg-gray-700">Classes</Link>
     
        <Link to="/contact" className="block py-2 px-4 text-sm text-white hover:bg-gray-700">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 dark:text-white">
          <Link to="/">Royalty Flow</Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-blue-600 dark:text-white hover:underline">Home</Link>
          <Link to="/gallery" className="text-blue-600 dark:text-white hover:underline">Gallery</Link>
          <Link to="/about" className="text-blue-600 dark:text-white hover:underline">About</Link>
          <Link to="/dashboard/overview" className="text-blue-600 dark:text-white hover:underline">Dashboard</Link>
          <Link to="/icloud-dashboard" className="text-blue-600 dark:text-white hover:underline">iCloud Dashboard</Link>

          {/* Dark Mode Toggle Switch */}
          <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-600 dark:text-white focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 p-4">
          <Link to="/" className="block text-blue-600 dark:text-white hover:underline mb-2" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/gallery" className="block text-blue-600 dark:text-white hover:underline mb-2" onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to="/about" className="block text-blue-600 dark:text-white hover:underline mb-2" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/dashboard/overview" className="block text-blue-600 dark:text-white hover:underline mb-2" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link to="/icloud-dashboard" className="block text-blue-600 dark:text-white hover:underline mb-2" onClick={() => setMenuOpen(false)}>iCloud Dashboard</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

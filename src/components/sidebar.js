import React from 'react';
import { Link } from 'react-router-dom';
import { FiMusic, FiHome, FiUser, FiPieChart, FiBarChart, FiVideo, FiChevronLeft, FiX } from 'react-icons/fi';  // <-- Updated icons

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Mobile Toggle Button for Sidebar */}
      <button
        className="lg:hidden fixed top-16 left-4 z-50 bg-blue-500 text-white p-1 rounded-full shadow-md"
        onClick={toggleSidebar}
      >
        {isOpen ? <FiX size={18} /> : <FiChevronLeft size={18} />}  {/* Updated icon to FiChevronLeft, reduced size, and adjusted position */}
      </button>

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 lg:translate-x-0 lg:relative lg:w-64 lg:h-screen flex flex-col shadow-lg z-40`}
      >
        {/* Profile Section */}
        <div className="flex items-center p-6 border-b border-gray-700">
          <img
            src="https://via.placeholder.com/50"
            alt="Profile Avatar"
            className="rounded-full w-12 h-12"
          />
          <div className="ml-4">
            <h1 className="text-2xl font-bold">Your Name</h1>
            <Link to="/profile" className="text-sm text-gray-400 hover:underline">
              View Profile
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mt-8 flex flex-col space-y-4">
          <Link
            to="/dashboard/overview"
            className="flex items-center pl-6 py-3 text-lg hover:bg-gray-700 transition-all duration-200 ease-in-out rounded-lg"
            onClick={toggleSidebar}
          >
            <FiHome className="mr-3" /> Overview
          </Link>
          <Link
            to="/dashboard/music"
            className="flex items-center pl-6 py-3 text-lg hover:bg-gray-700 transition-all duration-200 ease-in-out rounded-lg"
            onClick={toggleSidebar}
          >
            <FiMusic className="mr-3" /> Music
          </Link>
          <Link
            to="/dashboard/releases"
            className="flex items-center pl-6 py-3 text-lg hover:bg-gray-700 transition-all duration-200 ease-in-out rounded-lg"
            onClick={toggleSidebar}
          >
            <FiPieChart className="mr-3" /> Releases
          </Link>
          <Link
            to="/dashboard/analytics"
            className="flex items-center pl-6 py-3 text-lg hover:bg-gray-700 transition-all duration-200 ease-in-out rounded-lg"
            onClick={toggleSidebar}
          >
            <FiBarChart className="mr-3" /> Analytics
          </Link>
          <Link
            to="/dashboard/profile"
            className="flex items-center pl-6 py-3 text-lg hover:bg-gray-700 transition-all duration-200 ease-in-out rounded-lg"
            onClick={toggleSidebar}
          >
            <FiUser className="mr-3" /> Profile
          </Link>
          <Link
            to="/dashboard/video"
            className="flex items-center pl-6 py-3 text-lg hover:bg-gray-700 transition-all duration-200 ease-in-out rounded-lg"
            onClick={toggleSidebar}
          >
            <FiVideo className="mr-3" /> Video & Visuals
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600"
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Welcome to Royalty Flow </h1>
        <p className="text-xl text-gray-100 mb-8">Login or Register to get started</p>
        
        <div className="flex justify-center space-x-4">
          {/* Login Button */}
          <Link to="/login" className="bg-white text-blue-500 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100">
            Login
          </Link>
          
          {/* Register Button */}
          <Link to="/register" className="bg-white text-blue-500 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-100">
            Register
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
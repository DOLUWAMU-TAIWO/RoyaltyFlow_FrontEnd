import React from 'react';
import { motion } from 'framer-motion';

const Overview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="p-8"
    >
      <h1 className="text-4xl font-semibold mb-8 text-gray-900 dark:text-white">Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Total Streams</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">5.2M Streams</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Monthly Listeners</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">120k Listeners</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">New Followers</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">12k Followers</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Overview;
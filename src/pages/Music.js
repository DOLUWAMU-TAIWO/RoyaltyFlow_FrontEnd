// Updated Music component for better mobile responsiveness
import React from 'react';
import { FiFilter, FiDownload } from 'react-icons/fi';

const Music = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center mb-8 flex-wrap">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Music</h1>
        <div className="flex items-center space-x-4 mb-4">
          <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-lg">
            <FiDownload className="inline-block mr-2" /> Download
          </button>
          <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-lg">
            <FiFilter className="inline-block mr-2" /> Filters
          </button>
        </div>
      </div>

      {/* Filter Options */}
      <div className="flex items-center space-x-4 mb-4 overflow-x-auto">
        <button className="py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded-lg">24 hours</button>
        <button className="py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded-lg">7 days</button>
        <button className="py-2 px-4 bg-gray-200 dark:bg-gray-700 rounded-lg">28 days</button>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for a song..."
          className="w-full py-3 px-4 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
        />
      </div>

      {/* Song List Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <thead>
            <tr className="text-left border-b dark:border-gray-700">
              <th className="p-4">#</th>
              <th className="p-4">Title</th>
              <th className="p-4">Streams</th>
              <th className="p-4">Listeners</th>
              <th className="p-4">Views</th>
              <th className="p-4">Saves</th>
              <th className="p-4">First Added</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Data */}
            {[
              { title: "Song 1", streams: "43,737", listeners: "2,190", views: "266", saves: "34", date: "Jul 19, 2024" },
              { title: "Song 2", streams: "43,467", listeners: "2,132", views: "—", saves: "20", date: "Jul 19, 2024" },
              // Add more rows as needed
            ].map((song, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <td className="p-4 whitespace-nowrap">{index + 1}</td>
                <td className="p-4 whitespace-nowrap">{song.title}</td>
                <td className="p-4 whitespace-nowrap">{song.streams}</td>
                <td className="p-4 whitespace-nowrap">{song.listeners}</td>
                <td className="p-4 whitespace-nowrap">{song.views}</td>
                <td className="p-4 whitespace-nowrap">{song.saves}</td>
                <td className="p-4 whitespace-nowrap">{song.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Music;

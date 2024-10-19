import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaMusic, FaChartLine, FaHdd, FaCamera } from 'react-icons/fa'; 

const ICloudDashboard = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [photoGallery, setPhotoGallery] = useState([]);

  useEffect(() => {
    // Fetch profile picture
    axios.get('https://api.unsplash.com/photos/random?client_id=0vDKn5-zz-kLnkwEZIWUGS21vbHlGxDhL80ICxhFrEs')
      .then((response) => setProfileImage(response.data.urls.regular))
      .catch((error) => console.log(error));

    // Fetch 3 random images for Photos widget
    axios.get('https://api.unsplash.com/photos/random?count=3&client_id=0vDKn5-zz-kLnkwEZIWUGS21vbHlGxDhL80ICxhFrEs')
      .then((response) => setPhotoGallery(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white p-4 flex justify-center items-center w-full overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl">

        {/* Profile Widget */}
        <motion.div
          className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl p-4 shadow-2xl flex items-center space-x-4 col-span-1 sm:col-span-2"
          whileHover={{ scale: 1.05 }}  // Framer Motion scaling on hover
          transition={{ duration: 0.3 }}
        >
          <img
            className="w-24 h-24 rounded-full object-cover"
            src={profileImage || "https://via.placeholder.com/100"}  // Unsplash profile image
            alt="Profile Avatar"
          />
          <div>
            <h1 className="text-3xl font-semibold">Doluwamu</h1>
            <p className="text-gray-300">doluwamua@gmail.com</p>
            <span className="bg-blue-600 text-sm px-3 py-1 rounded-full mt-2 inline-block">iCloud+</span>
          </div>
        </motion.div>

        {/* Music Widget */}
        <motion.div
          className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl p-4 shadow-2xl col-span-1"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
            <FaMusic /> <span>Music</span>
          </h2>
          <ul className="space-y-3">
            <li className="bg-blue-600 p-3 rounded-lg hover:bg-blue-500 transition duration-200 shadow-md">Recently Played: Song 1</li>
            <li className="bg-blue-600 p-3 rounded-lg hover:bg-blue-500 transition duration-200 shadow-md">Recently Played: Song 2</li>
            <li className="bg-blue-600 p-3 rounded-lg hover:bg-blue-500 transition duration-200 shadow-md">Recently Played: Song 3</li>
          </ul>
        </motion.div>

        {/* Analytics Widget */}
        <motion.div
          className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl p-4 shadow-2xl col-span-1"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
            <FaChartLine /> <span>Analytics</span>
          </h2>
          <div className="space-y-2">
            <p className="text-gray-300">Streams: <span className="font-semibold text-white">500k</span></p>
            <p className="text-gray-300">Listeners: <span className="font-semibold text-white">120k</span></p>
            <p className="text-gray-300">Followers: <span className="font-semibold text-white">12k</span></p>
          </div>
        </motion.div>

        {/* Drive Widget */}
        <motion.div
          className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl p-4 shadow-2xl col-span-1"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
            <FaHdd /> <span>Drive</span>
          </h2>
          <ul className="space-y-3">
            <li className="bg-blue-600 p-3 rounded-lg hover:bg-blue-500 transition duration-200 shadow-md">Recent File 1</li>
            <li className="bg-blue-600 p-3 rounded-lg hover:bg-blue-500 transition duration-200 shadow-md">Recent File 2</li>
          </ul>
        </motion.div>

        {/* Photos Widget */}
        <motion.div
          className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl p-4 shadow-2xl col-span-1 sm:col-span-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
            <FaCamera /> <span>Photos</span>
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {photoGallery.length > 0 ? (
              photoGallery.map((photo) => (
                <img
                  key={photo.id}
                  src={photo.urls.small}
                  alt={photo.alt_description}
                  className="rounded-lg shadow-lg object-cover transition transform hover:scale-105 duration-300"
                />
              ))
            ) : (
              <p>Loading photos...</p>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ICloudDashboard;

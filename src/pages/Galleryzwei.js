import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.unsplash.com/photos/random?count=5&client_id=0vDKn5-zz-kLnkwEZIWUGS21vbHlGxDhL80ICxhFrEs')
      .then((response) => setImages(response.data))
      .catch((error) => console.log(error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      <Slider {...settings}>
        {images.length > 0 ? (
          images.map((image) => (
            <motion.div 
              key={image.id} 
              className="rounded-lg overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }} 
              transition={{ duration: 0.3 }}
            >
              <img 
                src={image.urls.regular} 
                alt={image.alt_description} 
                className="w-full h-96 object-cover rounded-lg" 
              />
            </motion.div>
          ))
        ) : (
          <p className="text-center">Loading images...</p>
        )}
      </Slider>
    </div>
  );
};

export default Gallery;

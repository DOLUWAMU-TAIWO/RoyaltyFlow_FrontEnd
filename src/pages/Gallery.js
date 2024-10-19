import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.unsplash.com/photos/random?count=5&client_id=0vDKn5-zz-kLnkwEZIWUGS21vbHlGxDhL80ICxhFrEs')  // <-- Use the correct access key
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
    autoplaySpeed: 2000, // Images will rotate every 2 seconds
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Gallery</h1>
      <Slider {...settings}>
        {images.length > 0 ? (
          images.map((image) => (
            <div key={image.id} className="rounded-lg overflow-hidden shadow-lg">
              <img src={image.urls.regular} alt={image.alt_description} className="w-full h-full object-cover" />
            </div>
          ))
        ) : (
          <p className="text-center">Loading images...</p>
        )}
      </Slider>
    </div>
  );
};

export default Gallery;
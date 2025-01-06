import React, { useState, useEffect } from 'react';
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { API_URL_IMAGE } from '../services/api';
import { useNavigate } from 'react-router-dom';

const ImageSlider = ({ imageData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = imageData.length;
  const navigate = useNavigate();

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  const gotoSpecialArtCollection = (id) =>
    navigate(`/picture-art-detail/${id}`);


  // Auto transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]); // Dependency ensures it works seamlessly

  return (
    <div className="w-full" style={{ position: 'relative' }}>
      <div style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
        {imageData.map((image, index) => (
          <img onClick={()=> gotoSpecialArtCollection(image.id)}
            className="w-full hover:cursor-pointer"
            key={image?.id}
            src={API_URL_IMAGE + image?.thumb}
            alt={`Image ${image?.id}`}
            style={{
              display: index === currentIndex ? 'inline-block' : 'none',
              maxHeight: '600px',
            }}
          />
        ))}
      </div>
      <button
        className="p-2 m-5 text-white bg-blue-500 rounded-full"
        style={{ position: 'absolute', top: '50%', left: 0 }}
        onClick={goToPrevious}
      >
        <MdSkipPrevious className="w-6 h-6" />
      </button>
      <button
        className="p-2 mr-5 text-white bg-blue-500 rounded-full"
        style={{ position: 'absolute', top: '50%', right: 0 }}
        onClick={goToNext}
      >
        <MdSkipNext className="w-6 h-6" />
      </button>
    </div>
  );
};
export default ImageSlider;

import React, { useState } from 'react';
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";

const ImageSlider = ({ imageData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = imageData.length;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='w-full' style={{ position: 'relative' }}>
      <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', marginBottom: '10px' }}>
        {imageData.map((image, index) => (
          <img
           className='w-full'
            key={image.id}
            src={image.url}
            alt={`Image ${image.id}`}
            style={{
              display: index === currentIndex ? 'inline-block' : 'none',
            //   maxWidth: '100%',
              maxHeight: '600px',
            }}
          />
        ))}
      </div>
      <button className="m-5 bg-blue-500 rounded-full p-2 text-white" style={{ position: 'absolute', top: '50%', left: 0 }} onClick={goToPrevious}>
        <MdSkipPrevious className="w-6 h-6" />
      </button>
      <button className="mr-5 bg-blue-500 rounded-full p-2 text-white" style={{ position: 'absolute', top: '50%', right: 0 }} onClick={goToNext}>
        <MdSkipNext className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ImageSlider;
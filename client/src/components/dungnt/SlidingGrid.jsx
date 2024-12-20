import React, { useState } from "react";

// Sample JSON data (this can be imported from a file or API)
const galleryData = [
  { "id": 1, "imageUrl": "https://www.nguyenartgallery.com/wp-content/uploads/gallery-5.jpg", "alt": "Gallery Item 1" },
  { "id": 2, "imageUrl": "https://www.nguyenartgallery.com/wp-content/uploads/gallery-4.jpg", "alt": "Gallery Item 2" },
  { "id": 3, "imageUrl": "https://www.nguyenartgallery.com/wp-content/uploads/gallery-3.jpg", "alt": "Gallery Item 3" },
  { "id": 4, "imageUrl": "https://www.nguyenartgallery.com/wp-content/uploads/gallery-6.jpg", "alt": "Gallery Item 4" },
  { "id": 5, "imageUrl": "https://www.nguyenartgallery.com/wp-content/uploads/gallery-2.jpg", "alt": "Gallery Item 5" }
];

const SlidingGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handling the scroll to move between images
  const handleScroll = (direction) => {
    const newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? galleryData.length - 1 : newIndex % galleryData.length);
  };

  // Function to get the current, left, and right images
  const getImages = () => {
    const left = galleryData[(currentIndex - 1 + galleryData.length) % galleryData.length];
    const center = galleryData[currentIndex];
    const right = galleryData[(currentIndex + 1) % galleryData.length];
    return { left, center, right };
  };

  const { left, center, right } = getImages();

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={() => handleScroll("prev")}
        className="absolute left-0 z-10 px-4 py-2 text-white -translate-y-1/2 bg-gray-800 top-1/2"
      >
        &#8592;
      </button>

      {/* Scroll Container with 3 Columns Layout */}
      <div className="flex w-full transition-transform duration-500 ease-in-out">
        {/* Left Image (Half visible) */}
        <div className="relative w-1/3 overflow-hidden">
          <img
            src={left.imageUrl}
            alt={left.alt}
            className="object-cover w-full h-full transform translate-x-1/4"
          />
        </div>

        {/* Center Image (Full visible) */}
        <div className="relative w-1/3 ml-5 mr-5 overflow-hidden">
          <img
            src={center.imageUrl}
            alt={center.alt}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Image (Half visible) */}
        <div className="relative w-1/3 overflow-hidden">
          <img
            src={right.imageUrl}
            alt={right.alt}
            className="object-cover w-full h-full transform -translate-x-1/4"
          />
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => handleScroll("next")}
        className="absolute right-0 z-10 px-4 py-2 text-white -translate-y-1/2 bg-gray-800 top-1/2"
      >
        &#8594;
      </button>
    </div>
  );
};

export default SlidingGrid;

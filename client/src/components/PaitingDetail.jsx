
import React, { useState, useRef } from "react";
import { FaSearchPlus, FaSearchMinus, FaExpand } from "react-icons/fa"; // Import icons

function PaitingDetail() {
  const [scale, setScale] = useState(1); // initial scale for zoom
  const imageContainerRef = useRef(null); // reference for full-screen

  const handleZoomIn = () => {
    setScale((prevScale) => prevScale + 0.2); // zoom in
  };

  const handleZoomOut = () => {
    setScale((prevScale) => (prevScale - 0.2 > 1 ? prevScale - 0.2 : 1)); // zoom out but not less than 1
  };

  const handleFullScreen = () => {
    if (imageContainerRef.current.requestFullscreen) {
      imageContainerRef.current.requestFullscreen(); // Fullscreen API for modern browsers
    } else if (imageContainerRef.current.webkitRequestFullscreen) {
      imageContainerRef.current.webkitRequestFullscreen(); // Safari support
    } else if (imageContainerRef.current.msRequestFullscreen) {
      imageContainerRef.current.msRequestFullscreen(); // IE/Edge support
    }
  };

  return (
    <div className="bg-[#27242D] text-white flex flex-col md:flex-row  justify-center p-5 space-y-4 md:space-y-0 md:space-x-10">
      {/* Image container */}
      <div
        ref={imageContainerRef}
        className="relative border-2 border-gray-300 rounded-lg shadow-md overflow-hidden"
        style={{
          width: "400px",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <img
          src="https://www.nguyenartgallery.com/wp-content/uploads/Hong-II-150x60-1.jpg"
          alt="Curious II"
          style={{
            transform: `scale(${scale})`,
            transition: "transform 0.3s ease",
          }}
        />

        {/* Icons for Zoom and Fullscreen */}
        <div className="absolute top-2 right-2 space-x-2 flex">
          <button
            onClick={handleZoomIn}
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200"
          >
            <FaSearchPlus size={20} />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200"
          >
            <FaSearchMinus size={20} />
          </button>
          <button
            onClick={handleFullScreen}
            className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-200"
          >
            <FaExpand size={20} />
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="text-left space-y-2">
        <p className="text-xl font-bold">Name: Curious II</p>
        <p className="text-lg font-semibold">Artist: Dang Vu Ha</p>
        <p className="text-md">Material: Oil on canvas</p>
        <p className="text-md">Size: 150cm x 60cm | 59 inches x 23.6 inches</p>
        <p className="text-md">Artist: Dang Vu Ha</p>
        <p className="text-md">
          Subjects: Bedroom Paintings & Artworks, Dining Room Paintings &
          Artworks, Landscape Paintings, Living Room Paintings & Artworks, Oil
          Landscape Paintings, Oil Paintings, Vertical Landscape Paintings
        </p>
      </div>
    </div>
  );
}

export default PaitingDetail
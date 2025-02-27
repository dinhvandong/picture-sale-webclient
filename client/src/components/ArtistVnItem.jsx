import React from "react";
import { useNavigate } from "react-router-dom";

const ArtistVnItem = ({ id, artwork, title, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/artist-vn/Detail/${id}`); // Chuyển hướng đến trang chi tiết với ID
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col justify-center bg-[#27242D] text-white h-auto
        transition-transform hover:-translate-y-2 hover:duration-1000 cursor-pointer"
    >
      <div className="w-56 h-56 mb-4 rounded-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full transition-transform hover:scale-110"
        />
      </div>
      <div className="hover:bg-black">
        <h3 className="flex mt-4 justify-center text-[20px] font-semibold font-sans">{title}</h3>
        <h4 className="flex justify-center text-[15px] text-gray-300 font-medium">{artwork}</h4>
      </div>
    </div>
  );
};

export default ArtistVnItem;

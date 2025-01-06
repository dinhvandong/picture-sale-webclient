import React from 'react'

const VietnamPatingItem = ({ title, image }) => (
    <div className="bg-white">
      <img src={image} alt={title} className="hover:cursor-pointer w-full h-[400px] object-cover mb-4" />
      <h3 className="text-lg text-center font-semibold text-gray-800">{title}</h3>
    </div>
  );
  export default VietnamPatingItem;
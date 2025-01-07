import React, { useEffect, useState } from 'react';
import ArtistVnItem from './ArtistVnItem';


const ArtistVn = () => {
  const [items, setItems] = useState([]);


  useEffect(() => {
    // Fetch data from the JSON file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);


  return (
    <div className="flex flex-col items-center justify-between w-full h-auto p-5 font-sans bg-[#27242E]">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center w-full h-auto">
        <p className="text-center text-[#FFEF96] font-semibold ml-5 mr-5 text-[27px]">
          Famous Vietnamese Artists and Their Artwork at Nguyen Art Gallery
        </p>
        <p className="text-center text-white text-[18px] font-normal font-sans mt-1">
          It is the great honor of Nguyen Art Gallery to collaborate with the
          most famous and talented artists in Vietnam. Over 1000 artworks by
          these artists have been showcased and
        </p>
        <p className="text-center text-white text-[18px] font-normal font-sans">
          widespread to the audience over 18 years. Original masterpieces and
          elegant art space exactly define Nguyen Art Gallery.
        </p>
      </div>

      {/* Grid Section */}
      <div className="w-full h-auto mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {items.map((item) => {
            console.log('Rendering item:', item); // In ra giá trị của từng item
            return (
              <ArtistVnItem
                id={item.id}
                key={item.id}
                artwork={item.artwork}
                title={item.title}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArtistVn

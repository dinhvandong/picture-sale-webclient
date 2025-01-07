import React, { useEffect, useState } from "react";
import { findPictureTopicByKey } from "../../services/api_header";
import { API_URL_IMAGE } from "../../services/api";

// import Paintings from './Paintings.json';

const LandscapePaintings = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await findPictureTopicByKey('paiting-landscape-header');
        if (response.success == 200) {
          console.log('response:', response.data);
          setData(response.data.items);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <div className="p-1 bg-gray-100 h-auto">
      <div className="grid grid-cols-3 gap-1 h-full">
        {data && data.map((item, index) => (
          <div key={item.id} className="flex justify-center items-center">
            <img
              src={API_URL_IMAGE + item.thumb}
              alt={`Painting ${index}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandscapePaintings
// useEffect(() => {
//   fetch("./Paintings.json")
//     .then((response) => response.json())
//     .then((json) => setData(json));
// }, []);
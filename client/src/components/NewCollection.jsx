import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import NewItem from './NewItem';
import { LanguageContext } from '../LanguageContext'; // Import LanguageContext
import { findPictureTopicByKey } from '../services/api_header';

const NewCollection = () => {
  const { language } = useContext(LanguageContext); // Get current language from context
  const [items, setItems] = useState([]); // State to store fetched items
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  // useEffect(() => {
  //   // Fetch data from API
  //   axios
  //     .post('http://localhost:8081/api/pictureArt/findAll') // Replace with your API endpoint
  //     .then((response) => {
  //       if (response.data.success === 200) {
  //         setItems(response.data.data); // Populate items with fetched data
  //       } else {
  //         setError('Failed to fetch data');
  //       }
  //     })
  //     .catch((err) => {
  //       setError('An error occurred while fetching data');
  //     })
  //     .finally(() => {
  //       setLoading(false); // End loading state
  //     });
  // }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await findPictureTopicByKey('new-collection');
        if(response.success == 200){

          console.log('response-new-collection:', response.data.items);
          setItems(response.data.items);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // if (loading) {
  //   return <p className="text-center text-gray-500">Loading...</p>;
  // }

  // if (error) {
  //   return <p className="text-center text-red-500">{error}</p>;
  // }

  return (
    <div className="flex flex-col items-center justify-between w-full h-auto p-5 font-mono bg-bg_color">
      <div className="flex flex-row items-center w-full h-auto">
        <div className="w-[40%] h-[1px] ml-5 bg-white"></div>
        <p className="text-center text-white font-bold ml-5 mr-5 text-[40px]">
          NEW COLLECTIONS
        </p>
        <div className="w-[40%] h-[1px] mr-5 bg-white"></div>
      </div>
      <div className="w-full h-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items?.map((item) => (
            <NewItem
              key={item.id}
              title={item.artist.name[language]} // Display title based on current language
              image={item.thumb} // Display thumbnail
            />
          ))}
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <div className="flex w-[200px] items-center justify-center px-5 py-3 bg-brown_color">
            <p className="font-bold text-white">Full Collection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;

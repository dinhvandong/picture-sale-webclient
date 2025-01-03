import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { LanguageContext } from '../LanguageContext'; // Import the context
import { findPictureTopicByKey } from '../services/api_header';

const Topic = () => {
  const { language } = useContext(LanguageContext); // Get the current language from context
  const [data, setData] = useState(null);

  // // Fetch data from API
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8081/api/topic-art-settings/1"); // Replace with your API URL
  //       setData(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await findPictureTopicByKey('header-collection-special');
        if(response.success == 200){

          console.log('response:', response.data);
          setData(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const calligraphyStyle = {
    fontFamily: 'Dancing Script, cursive',
    fontSize: '50px',
    color: '#333',
  };

  return (
    <div className='flex flex-col items-center justify-between w-full h-auto p-2 font-mono bg-bg_color'>
      {/* Header */}
      <div className='flex flex-row items-center w-full h-auto'>
        <div className='w-1/2 h-[1px] ml-5 bg-white'></div>
        <p className='text-center text-white font-bold ml-5 mr-5 text-[40px]'>
          {data?.name ? data.name[language] : "Loading..."} {/* Switch text based on language */}
        </p>
        <div className='w-1/2 h-[1px] mr-5 bg-white'></div>
      </div>

      {/* Image Section */}
      <div className='flex w-full flex-col md:flex-row h-auto md:h-[600px]'>
        <img
          className='w-full h-full object-cover'
          src={data?.thumb || 'https://i.pinimg.com/564x/ea/0b/a5/ea0ba50cde7fbf51119707780a90383a.jpg'}
          alt='Topic Thumbnail'
        />
      </div>

      {/* Description and Button */}
      <div className='flex flex-col w-full'>
        <p className='mt-5 ml-5 text-white'>
          🎨 {data?.desc ? data.desc[language] : "Loading description..."} {/* Switch description text based on language */}
        </p>

        <div className='flex items-center justify-center w-full mt-5'>
          <div className='hover:cursor-pointer flex w-[200px] items-center justify-center px-5 py-3 bg-brown_color'>
            <p className='font-bold text-white'>Full Collection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;

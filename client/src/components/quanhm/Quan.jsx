import React, { useContext, useEffect, useState } from 'react'
import { getArtist } from '../../services/api_artist';
import { API_URL_IMAGE } from '../../services/api';
import { LanguageContext } from '../../LanguageContext';
import ArtistVnItem from '../ArtistVnItem';

const QuanArtistVn = () => {
    const { language } = useContext(LanguageContext);
    const [artistList, setArtistList] = useState([]);
    const refreshData = async () => {
        try {
            const response = await getArtist();
            setArtistList(response.data); // Ensures we're setting only the `data` array from the response
        } catch (error) {
            console.error('Error fetching artists:', error);
        }
    };

    useEffect(() => {
        refreshData();
    }, []);

  return (
      <div className='flex flex-col mt-[80px] items-center justify-between w-full h-auto p-5 font-sans bg-[#27242E]'>
          <div className='flex flex-col items-center justify-center w-full h-auto'>

              <p className='text-center text-[#FFEF96] font-semibold ml-5 mr-5 text-[27px]'>Famous Vietnamese Artists and Their Artwork at Nguyen Art Gallery

              </p>

              <p className='text-center text-white text-[18px] font-normal font-sans mt-1'>
                  It is the great honor of Nguyen Art Gallery to collaborate with the most famous and talented artists in Vietnam. Over 1000 artworks by these artists have been showcased and  
              </p>
              <p className='text-center text-white text-[18px] font-normal font-sans'>
                 widespread to the audience over 18 years. Original masterpieces and elegant art space exactly define Nguyen Art Gallery.
              </p>


          </div>
          <div className='w-full h-auto mt-6'>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                  {artistList.map(item => (
                      <ArtistVnItem key={item.id} artwork={item.journey[language]} title={item.name[language]} image={API_URL_IMAGE + item.avatar} />
                  ))}
              </div>


          </div>

          
      </div>
  )
}

export default QuanArtistVn
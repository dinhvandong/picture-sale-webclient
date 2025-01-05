import React, { useContext, useEffect, useState } from 'react'
import { findPictureTopicByKey } from '../../services/api_header';
import { LanguageContext } from '../../LanguageContext';
import { API_URL_IMAGE } from '../../services/api';

const Specialheader = ({url}) => {
  const { language } = useContext(LanguageContext);

    const [data, setData] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await findPictureTopicByKey(url);
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
  
  return (
    <div className='w-full h-max bg-[#27232E]'>
      <div className='w-full h-[120px] '></div>
      <div className='w-full h-[300px] flex flex-col items-center justify-center bg-gray-800' style={{
        backgroundImage: `url(${API_URL_IMAGE + data?.thumb})`,
      }}>
        <p className='text-[50px] font-semibold text-white leading-none'>{data?.name[language]}</p>
        {/* <p className='text-[50px] font-semibold text-white leading-none'>Vietnamese Paintings &</p>
        <p className='text-[50px] font-semibold text-white leading-none'>Artworks</p> */}
      </div>
      <div className='w-full h-[100px] flex flex-col justify-center items-center'>
        <p className='text-[18px] text-white leading-none'>{data?.desc[language]}</p>
        <p className='text-[18px] text-white leading-none'>more.</p>
      </div>
    </div>
  )
}

export default Specialheader

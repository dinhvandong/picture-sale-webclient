import React, { useContext, useEffect, useRef, useState } from 'react';
import Tan from './special.json';
import { findPictureTopicByKey } from '../../services/api_header';
import { API_URL_IMAGE } from '../../services/api';
import { LanguageContext } from '../../LanguageContext';
import { useNavigate } from 'react-router-dom';


const Specialcoll = ({url}) => {
    const navigate = useNavigate();
    const { language } = useContext(LanguageContext); // Get current language from context

    const [data, setData] = useState(null);
    const scrollRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
        scrollRef.current.style.cursor = 'grabbing'; // Hiển thị con trỏ là 'grabbing'
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // Tăng tốc độ cuộn
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUpOrLeave = () => {
        isDragging.current = false;
        scrollRef.current.style.cursor = 'grab'; // Quay lại con trỏ ban đầu
    };


  // Fetch data from the API
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

  const gotoSpecialArtCollection = (id) =>
     navigate(`/picture-art-detail/${id}`);



    return (
        <div className='w-full h-max bg-[#27232E] flex flex-col'>
            <div className="flex flex-col w-full h-auto px-6 mt-4">
                <p className='text-[#FFEF93] text-2xl font-bold'>{data?.name[language]}</p>
                <button className='border-2 mt-2 font-bold border-white text-white w-[120px] h-[40px] hover:bg-white hover:text-[#27232E]'>SEE DETAILS</button>
                <div
                    ref={scrollRef}
                    className="grid grid-flow-col auto-cols-[25%] gap-4 overflow-hidden mt-3 cursor-grab"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUpOrLeave}
                    onMouseLeave={handleMouseUpOrLeave}
                    style={{
                        userSelect: 'none', // Ngăn chọn văn bản khi kéo
                    }}
                >
                    {data?.items.map((itemm) => (
                        <div
                            key={itemm.id}
                            className="flex flex-col items-center bg-[#27232E] hover:bg-[#222222] w-full
                            transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                        >
                            <img onClick={()=>gotoSpecialArtCollection(itemm.id)}
                                src={ API_URL_IMAGE + itemm.thumb}
                                alt={`img-${itemm.id}`}
                                className="object-cover w-full h-auto"
                            />
                            <p className="text-[13px] m-1 leading-none font-bold text-gray-400 mt-4">
                                {itemm.artist.name[language]}
                            </p>
                            <p className="text-[15px] m-1 leading-none text-[#FFEF96]">
                                {itemm.name[language]}
                            </p>
                            <div className="w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400">
                                <p className="text-[15px] font-bold text-white">ARTIST:</p>
                                <p className="text-[14px] text-white ml-16">{itemm.artist.name[language]}</p>
                            </div>
                            <div className="w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400">
                                <p className="text-[15px] font-bold text-white">MATERIAL:</p>
                                <p className="text-[14px] text-white ml-10">{itemm.materials.name[language]}</p>
                            </div>
                            <div className="w-full h-[30px] flex items-center border-b-[0.5px] border-gray-400">
                                <p className="text-[15px] flex flex-row font-bold text-white">
                                    SIZE:<span className="ml-2 text-[14px] font-normal">{itemm.size}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>




            {/* <p className="text-[18px] text-[#F9FF9A] lg:text-[28px] font-bold">The “Street Architectures” by Pham Hoang Minh</p>
                <button className="w-[150px] mt-2 h-[40px] text-white hover:bg-white hover:text-[#27232E] font-bold bg-[#27232E] border-2 border-white">
                    SEE DETAILS
                </button>
                <div className="w-[400px] h-[2px] bg-white mt-2"></div> */}
          



        </div>
    );
};

export default Specialcoll;

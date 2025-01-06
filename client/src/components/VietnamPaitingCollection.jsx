import React, { useContext, useEffect, useState } from 'react'
import ArtistItem from './ArtistItem';
import VietnamPatingItem from './VietnamPatingItem';
import { LanguageContext } from '../LanguageContext'; // Import LanguageContext
import { findPictureTopicByKey } from '../services/api_header';
import { API_URL_IMAGE } from '../services/api';
import { useNavigate } from 'react-router-dom';

const VietnamPaitingCollection = () => {
    const [items, setItems] = useState([]); // State to store fetched items
    const navigate = useNavigate();

    const { language } = useContext(LanguageContext); // Get current language from context

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await findPictureTopicByKey('new-collection-by-subject');
                if (response.success == 200) {

                    console.log('response-new-collection:', response.data.items);
                    setItems(response.data.items);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const gotoSpecialArtCollection = (id) =>
        navigate(`/picture-art-detail/${id}`);

    // Sample Data
    // const items = [
    //     { id: 1, title: "Hoạ sỹ Đỗ Khải", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
    //     { id: 2, title: "Hoạ sỹ Quang Hùng", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
    //     { id: 3, title: "Hoạ sỹ Lương Bằng ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
    //     { id: 4, title: "Hoạ sỹ Việt Nguyễn", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
    //     { id: 5, title: "Hoạ sỹ Sỹ Tốt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
    //     { id: 6, title: "Hoạ sỹ Việt Đức", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
    //     { id: 7, title: "Hoạ sỹ Lương Siêu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
    //     { id: 8, title: "Hoạ sỹ Đỗ Việt", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdWIa15VoJF2XkzUd4bCHZ10J5vSTpqMH1w&s" },
    //   ];

    // key={item.id}
    // title={item.artist.name[language]} // Display title based on current language
    // image={item.thumb} // Display thumbnail
    return (

        <div className='flex flex-col items-center justify-between w-full h-auto p-5 font-mono bg-bg_color'>
            <div className='flex flex-row items-center w-full h-auto'>
                <div className='w-[40%] h-[1px] ml-5 bg-white'>
                </div>
                <p className='text-center text-white font-bold ml-5 mr-5 text-[40px]'>VIETNAMESE PAITINGS BY SUBJECTS

                </p>
                <div className='w-[40%] h-[1px] mr-5 bg-white'>

                </div>
            </div>
            <div className='w-full h-auto'>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items.map(item => (

                        <div onClick={() => gotoSpecialArtCollection(item.id)}>
                            {/* <VietnamPatingItem key={item.id} title={item.category.name[language]} image={API_URL_IMAGE +
                                item.thumb} /> */}
                            <div
                                key={item.id}
                                className="flex flex-col items-center bg-[#27232E] hover:bg-[#222222] w-full transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                            >
                                <img
                                    onClick={() => gotoSpecialArtCollection(item.id)}
                                    src={API_URL_IMAGE + item.thumb}
                                    alt={`img-${item.id}`}
                                    className="object-cover w-full h-auto"
                                />
                                <p className="text-[13px] m-1 leading-none font-bold text-gray-400 mt-4">
                                    {item.artist?.name[language]}
                                </p>
                                <p className="text-[15px] m-1 leading-none text-[#FFEF96]">
                                    {item.name[language]}
                                </p>
                                <div className="w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400">
                                    <p className="text-[15px] font-bold text-white">ARTIST:</p>
                                    <p className="text-[14px] text-white ml-16">{item.artist?.name[language]}</p>
                                </div>
                                <div className="w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400">
                                    <p className="text-[15px] font-bold text-white">MATERIAL:</p>
                                    <p className="text-[14px] text-white ml-10">{item.materials?.name[language]}</p>
                                </div>
                                <div className="w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400">
                                    <p className="text-[15px] font-bold text-white">SUBJECT:</p>
                                    <p className="text-[14px] text-white ml-10">{item.category.name[language]}</p>
                                </div>
                                <div className="w-full h-[30px] flex items-center border-b-[0.5px] border-gray-400">
                                    <p className="text-[15px] flex flex-row font-bold text-white">
                                        SIZE:<span className="ml-2 text-[14px] font-normal">{item.size}</span>
                                    </p>
                                </div>
                            </div>
                        </div>



                    ))}
                </div>

                <div className='flex items-center justify-center w-full mt-5'>
                    <div className='flex  w-[200px] items-center justify-center px-5 py-3 bg-brown_color'>
                        <p className='font-bold text-white'>Full Collection</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default VietnamPaitingCollection
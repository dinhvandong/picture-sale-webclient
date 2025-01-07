import React, {useContext, useEffect, useState } from 'react'
import ArtworksUser from './ArtworksUser';
import { useParams } from "react-router-dom";
import Biography from './Biography';
import MessagetoGalleryOwner from './MessagetoGalleryOwner';
import Catalogue from './Catalogue';
import { API_URL_IMAGE } from '../../../services/api';
import { findArtistById } from '../../../services/api_artist';
import { findByArtistID } from '../../../services/api_picture_art';
import { LanguageContext } from '../../../LanguageContext';


const HuyArtistDetail = () => {
    const [activeTab, setActiveTab] = useState('catalogue'); // State để quản lý tab hiện tại
    const { id } = useParams(); // Lấy id từ URL
    const [artist, setArtist] = useState(null);
    const [artistPicture, setartistPicture] = useState(null);
     const { language } = useContext(LanguageContext);

    useEffect(() => {
        // Hàm lấy chi tiết nghệ sĩ
        const fetchArtistDetail = async () => {
          try {
            const response = await findArtistById(id);
            
            setArtist(response.data); // Lưu dữ liệu nghệ sĩ vào state
          } catch (error) {
            console.error('Error fetching artist details:', error);
          }
        };
    
        // Hàm lấy tác phẩm theo id nghệ sĩ
        const fetchArtistPictures = async () => {
          try {
            const response = await findByArtistID(id);
            console.log('Artist ID:', id); 
            console.log('Artist Pictures Response:', response);
            setartistPicture(response); // Lưu danh sách tác phẩm vào state
          } catch (error) {
            console.error('Error fetching artist pictures:', error);
          }
        };
       
        fetchArtistDetail();
        fetchArtistPictures();
      }, [id]);
    
      // Kiểm tra dữ liệu đã tải xong chưa
      if (!artist || !artistPicture) {
        return <div>Loading...</div>; // Hiển thị khi dữ liệu chưa có
      }

     

    return (
        <div className='mt-28 bg-[#27242e]'>

            <div className=' px-32  pt-10 pb-5'>
                <h1 className='font-medium text-4xl text-[#ffef96] text-center'>
                    Artist {artist.name[language]} – Artworks & Art Career
                </h1>
                <div className="p-6">
                    {/* Nút bấm */}
                    <div className="flex justify-center">
                        <button
                            onClick={() => setActiveTab('catalogue')}
                            className={`py-2 px-4 rounded-full ${activeTab === 'catalogue'
                                ? 'border-2 border-white text-white font-bold text-2xl transition  duration-300'
                                : 'text-[#d4d3d5] hover:text-white font-bold text-2xl transition  duration-300'
                                }`}
                        >
                            Catalogue
                        </button>
                        <button
                            onClick={() => setActiveTab('biography')}
                            className={`py-2 px-4 rounded-full ${activeTab === 'biography'
                                ? 'border-2 border-white text-white font-bold text-2xl transition  duration-300'
                                : 'text-[#d4d3d5] hover:text-white font-bold text-2xl transition  duration-300'
                                }`}
                        >
                            Biography
                        </button>
                        <button
                            onClick={() => setActiveTab('message')}
                            className={`py-2 px-4 rounded-full ${activeTab === 'message'
                                ? 'border-2 border-white text-white font-bold text-2xl transition  duration-300'
                                : 'text-[#d4d3d5] hover:text-white font-bold text-2xl transition  duration-300'
                                }`}
                        >
                            Message to Gallery Owner
                        </button>
                    </div>

                    {/* Nội dung các tab */}
                    <div className="mt-4">
                        {activeTab === 'catalogue' && (
                            <Catalogue />
                        )}
                        {activeTab === 'biography' && (
                            <Biography language={language} API_URL_IMAGE={API_URL_IMAGE} artist={artist} />
                        )}
                        {activeTab === 'message' && (
                            <MessagetoGalleryOwner />
                        )}
                    </div>
                </div>
            </div>
            <ArtworksUser  language={language} API_URL_IMAGE={API_URL_IMAGE} artistPicture={artistPicture}  artist={artist} />
        </div>
    )
}

export default HuyArtistDetail
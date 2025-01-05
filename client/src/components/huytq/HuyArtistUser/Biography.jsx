import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import ArtworksUser from './ArtworksUser'

const Biography = () => {
        const { id } = useParams(); // Lấy ID từ URL
        const [artist, setArtist] = useState({
            name: { en: "" },
            journey: { en: "" },
            avatar: "",
          });
          
        const [loading, setLoading] = useState(true);
        useEffect(() => {
            axios
              .get(`http://150.95.114.87:8081/api/artist/findById`, {
                params: { id },
              })
              .then((response) => {
                console.log("API Response:", response.data); // Kiểm tra dữ liệu trả về
                const artistData = response.data?.data; // Lấy dữ liệu đúng cấp
                setArtist(artistData);
                setLoading(false);
              })
              .catch((error) => {
                console.error("Error fetching artist details:", error);
                setLoading(false);
              });
          }, [id]);
          
    
        if (loading) return <p>Loading...</p>; // Hiển thị khi đang tải
        if (!artist) return <p>Artist not found</p>; // Hiển thị nếu không tìm thấy họa sĩ
        
    return (
        <div className='mt-10'>
            <div className='flex text-xl '>
            <div className='  w-3/5 pr-10'>
                <img className='w-full' src={artist.avatar} alt={artist.id} />
            </div>
            <div className='text-xl text-white w-2/5'>
                <p>{artist.journey.en}</p>
                <h1 className=' text-4xl text-[#e5ae0b] font-semibold mt-6 mb-4'>Exhibitions & Art Events</h1>
                <ul className='list-disc ml-5'>
                    <li className='my-2'>
                    2019: Art exhibition "Father & Son" by artist Dau Quang Toan and his 2 sons
                    </li>
                    <li className='my-2'>
                    2021: Group exhibition "An & Hien" - Hide & Show
                    </li>
                    
                </ul>
            </div>
           
        </div>
        <ArtworksUser/>
        </div>
    )
}

export default Biography
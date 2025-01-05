import React, { useEffect, useState } from 'react';
import ArtistVnItem from './ArtistVnItem';
import axios from "axios";

const ArtistVn = () => {
  const [items, setItems] = useState([]); // Lưu danh sách họa sĩ
  const [loading, setLoading] = useState(true); // Hiển thị trạng thái tải dữ liệu
  const [error, setError] = useState(null); // Lưu lỗi nếu có

  useEffect(() => {
    // Gọi API để lấy danh sách họa sĩ
    axios
      .post("http://150.95.114.87:8081/api/artist/findAll") // Thay URL API thực tế
      .then((response) => {
        console.log("API Response:", response.data); // Kiểm tra dữ liệu trả về
        setItems(response.data.data); // Gán dữ liệu vào state `items`
        setLoading(false); // Kết thúc trạng thái tải
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Log lỗi
        setError(error.message);
        setLoading(false); // Kết thúc trạng thái tải
      });
  }, []);

  if (loading) return <p>Loading...</p>; // Hiển thị khi đang tải
  if (error) return <p>Error: {error}</p>; // Hiển thị lỗi nếu có

   
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
          {items.map((item) => (
            <ArtistVnItem
            key={item.id}
            id={item.id}
            artwork={item.artwork} // Nếu API không có `artwork`, thay bằng trường phù hợp
            title={item.name.vi} // Dùng `name.vi` để hiển thị tên tiếng Việt
            image={item.avatar} // URL ảnh từ API (thay `avatar` nếu cần)
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistVn

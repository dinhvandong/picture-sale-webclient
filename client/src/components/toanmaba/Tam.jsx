import React, { useState, useEffect, useContext } from 'react';
import { API_URL_IMAGE } from '../../services/api';
import { LanguageContext } from '../../LanguageContext';
import { fetchPictureArtByGroup } from '../../services/api';
import { useNavigate } from 'react-router-dom';

const Tam = () => {
    const navigate = useNavigate();

    const { language } = useContext(LanguageContext);
    const [selectedCategoryID, setSelectedCategoryID] = useState(1); // Mặc định ID của danh mục đầu tiên
    const [data, setData] = useState(null); // Dữ liệu trả về từ API

    // Danh sách các danh mục với ID từ 1 đến 5
    // const categories = [
    //     { id: 1, name: 'Category 1' },
    //     { id: 2, name: 'Category 2' },
    //     { id: 3, name: 'Category 3' },
    //     { id: 4, name: 'Category 4' },
    //     { id: 5, name: 'Category 5' },
    // ];

    const [categories, setCategories] = useState([]);

    const gotoSpecialArtCollection = (id) =>
        navigate(`/picture-art-detail/${id}`);
    

    // Hàm fetch dữ liệu từ API cho một categoryID cụ thể
    const fetchData = async (categoryID) => {
        try {
            const response = await fetchPictureArtByGroup();

            // Kiểm tra xem dữ liệu có tồn tại và có thuộc tính `data` hay không
            if (response && response.success === 200 && response.data) {
                console.log('API Response:', response);
                setCategories(response.data);
                setData(response.data.filter(item => item.categoryID === categoryID)); // Lọc dữ liệu cho categoryID đã chọn
            } else {
                console.log('No data available or error in response');
                setData([]); // Nếu không có dữ liệu, set data là mảng rỗng
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            setData([]); // Xử lý lỗi và set data là mảng rỗng
        }
    };

    // Gọi API khi ID danh mục thay đổi
    useEffect(() => {
        fetchData(selectedCategoryID); // Gọi API với categoryID hiện tại
    }, [selectedCategoryID]);

    return (
        <div className='felx flex-col w-full h-max bg-[#27242E]'>
            <div className="w-full h-[100px] flex justify-between items-center pr-16 pl-16 bg-[#27242E]">
                {categories.map((category) => (
                    <span
                        key={category.categoryID}
                        className={`relative text-[18px] inline-block font-bold cursor-pointer text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-slate-400 after:transition-all after:duration-300 hover:after:w-full ${selectedCategoryID === category.id ? 'after:w-full after:bg-white' : ''
                            }`}
                        onClick={() => setSelectedCategoryID(category.categoryID)} // Cập nhật ID khi nhấn vào span
                    >
                        {category.categoryName[language]}
                    </span>
                ))}
            </div>

            {/* Hiển thị dữ liệu chỉ cho categoryID đã chọn */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full p-3 gap-4 bg-[#27242E]'>
                {data && data.length > 0 ? (
                    data.map((categoryData) => (
                        categoryData.pictureArtList?.map((iten) => (
                            <div key={iten.id} className='flex flex-col items-center bg-[#27242E] hover:bg-[#222222] max-w-fit mx-auto 
                            transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300 ' >
                                <img src={API_URL_IMAGE + iten.thumb}                 onClick={() => gotoSpecialArtCollection(iten.id)}

                                    alt={`img-${iten.id}`}
                                    className="object-cover   hover:cursor-pointer  w-full h-auto"></img>
                                <p className='text-[13px] m-1 leading-none font-bold text-gray-400 mt-4'>{iten.name[language]}</p>
                                <p className='text-[15px] m-1 leading-none text-[#FFEF96]'>{iten.artist.name[language]}</p>

                                <div className='w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400'>
                                    <p className='text-[15px] font-bold text-white'>ARTIST:</p>
                                    <p className='text-[14px] text-white ml-16'>{iten.artist.name[language]}</p>
                                </div>

                                <div className='w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400'>
                                    <p className='text-[15px] font-bold text-white'>MATERIAL:</p>
                                    <p className='text-[14px] text-white ml-10'>{iten.materials || 'N/A'}</p>
                                </div>

                                <div className='w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400'>
                                    <p className='text-[15px] font-bold text-white'>SIZE:</p>
                                    <p className='text-[14px] text-white ml-20'>{iten.size || 'N/A'}</p>
                                  
                                </div>
                            </div>
                        ))
                    ))
                ) : (
                    <p className="w-full text-center text-white">No data available for this category.</p>
                )}
            </div>
        </div>
    );
}

export default Tam;

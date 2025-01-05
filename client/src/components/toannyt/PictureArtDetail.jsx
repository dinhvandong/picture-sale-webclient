import React, { useContext, useRef, useState } from 'react';
import { FiChevronDown } from "react-icons/fi";
import PaitingDetail from '../PaitingDetail';
import { findByArtistID } from '../../services/api_picture_art';
import { API_URL_IMAGE } from '../../services/api';
import { LanguageContext } from '../../LanguageContext';
import { useNavigate } from 'react-router-dom';
import { useUpdate } from 'react-use';

const PictureArtDetail = ({ idPicture }) => {
    const navigate = useNavigate();
    const { language } = useContext(LanguageContext);
    const scrollRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
        scrollRef.current.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 2;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUpOrLeave = () => {
        isDragging.current = false;
        scrollRef.current.style.cursor = 'grab';
    };

    const [data, setData] = useState([]);
    const [artistID, setArtistID] = useState(null);
    const [artistName, setArtistName] = useState(null);

    const isFetched = useRef(false); // Add this to prevent multiple calls
    // const removeItemById = (idPictureToRemove) => {
    //     console.log("Removing picture with id:", idPictureToRemove); // Debug log
    //     setData((prevData) => {
    //         console.log("Current data before removal:", prevData); // Debug log
    //         const updatedData = prevData.filter(item => item.id !== idPictureToRemove);
    //         console.log("Updated data after removal:", updatedData); // Debug log
    //         return updatedData;
    //     });
    // };

    const removeItemById = (idPictureToRemove) => {
        const idToRemove = parseInt(idPictureToRemove, 10); // Ensure it's an integer
        console.log("Removing item with id:", idToRemove); // Log the integer id
        setData((prevData) => {
            console.log("Previous data before removal:", prevData); // Log previous data
            // Filter out the item with the matching id
            const updatedData = prevData.filter(item => item.id !== idToRemove);
            console.log("Updated data after removal:", updatedData); // Log updated data
            return updatedData; // Return updated data
        });
    };
    
    
    const handleArtistIDRetrieved = async (id, name) => {
        // Prevent multiple API calls
        if (isFetched.current) {
            console.log("API call already made, skipping.");
            return;
        }

        isFetched.current = true; // Set flag to true on the first call

        setArtistID(id);
        console.log("Artist ID retrieved from child:", id);

        setArtistName(name);


        try {
            const response = await findByArtistID(id);

            setData(response || []); // Assuming response has a `data` property

            console.log('response',response);
            console.log('idPicture',idPicture);
           removeItemById(idPicture);
           

        } catch (error) {
            console.error("Error fetching data by artist ID:", error);
        }
    };

    const gotoSpecialArtCollection = (id) =>
        navigate(`/picture-art-detail/${id}`);

    const [isOpen, setIsOpen] = useState(false);  // Quản lý trạng thái của bảng danh sách quốc gia
    const [selectedCountry, setSelectedCountry] = useState('Choose a country'); // Quốc gia đã chọn

    // Danh sách các quốc gia mẫu
    const countries = [
        'Vietnam',
        'United States',
        'Germany',
        'France',
        'Japan',
        'China',
        'Australia',
        'India',
        'Brazil',
    ];

    // Hàm để thay đổi trạng thái của bảng khi nhấn vào nút
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Hàm để thay đổi quốc gia khi chọn từ danh sách
    const selectCountry = (country) => {
        setSelectedCountry(country);  // Cập nhật quốc gia đã chọn
        setIsOpen(false);  // Đóng bảng danh sách
    };


    const [isOpen2, setIsOpen2] = useState(false);  // Quản lý trạng thái của bảng danh sách quốc gia
    const [selectedCountry2, setSelectedCountry2] = useState('Choose a country'); // Quốc gia đã chọn

    // Danh sách các quốc gia mẫu
    const countries2 = [
        'Roller in Tube',
        'Stredert',

    ];

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
    };

    // Hàm để thay đổi quốc gia khi chọn từ danh sách
    const selectCountry2 = (country2) => {
        setSelectedCountry2(country2);  // Cập nhật quốc gia đã chọn
        setIsOpen2(false);  // Đóng bảng danh sách
    };

    return (
        <div className="w-full h-max bg-[#27232E] flex flex-col items-center">
            <div className="w-full h-[120px]"></div>
            <div className="w-[60%] h-max flex flex-col">
                {<PaitingDetail id={idPicture} onArtistIDRetrieved={handleArtistIDRetrieved} />}

                <div className="w-full h-[50px] flex flex-row justify-between  items-center bg-[#27232E]">
                    <div className='w-[100%] h-[1px] bg-gray-200'></div>
                    <p className='text-[#E5AE0B] text-[25px] w-[700px] text-center font-bold'>{artistName ? artistName[language] : "Unknown Artist"}</p>
                    <div className='w-[100%] h-[1px] bg-gray-200'></div>
                </div>

                <div
                    ref={scrollRef}
                    className="grid grid-flow-col auto-cols-[50%] gap-4 overflow-hidden mt-3 cursor-grab"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUpOrLeave}
                    onMouseLeave={handleMouseUpOrLeave}
                    style={{ userSelect: 'none' }}
                >
                    {data.map((item) => (
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
                            <div className="w-full h-[30px] flex items-center border-b-[0.5px] border-gray-400">
                                <p className="text-[15px] flex flex-row font-bold text-white">
                                    SIZE:<span className="ml-2 text-[14px] font-normal">{item.size}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='bg-[#43464B] w-full h-auto mt-6 px-4 flex flex-col'>
                    <p className='text-[20px] text-white font-bold'>Inquiry This Painting/Artwork</p>
                    <p className='text-[18px] text-white mt-3'>Fields marked with an<span className='text-red-600'> * </span>are required</p>
                    <p className='text-[18px] font-bold text-[#F9FF9A]'>You are inquiring on<span className='text-red-600'> * </span></p>
                    <p className='flex flex-col text-[18px] text-white mt-3'>This Inquiry is totally free
                        <input type="text" placeholder="White Lotus Blossom" className="w-full p-2 border border-gray-300"></input>
                    </p>
                    <p className='flex text-[18px] font-bold text-[#F9FF9A] mt-3'>Your Name
                        <span className='text-red-600 '>*</span>
                    </p>
                    <input type="text" className="w-full p-2 border border-gray-300"></input>
                    <p className='flex text-[18px] font-bold text-[#F9FF9A] mt-3'>Your Email
                        <span className='text-red-600 '>*</span>
                    </p>
                    <input type="text" className="w-full p-2 border border-gray-300"></input>
                    <p className='flex flex-col text-[18px] font-bold text-[#F9FF9A] mt-3'>Your Contact Number (Whatsapp)
                        <span className='font-normal text-white'>We only contact you via your number in case can not reach you via email!</span>
                    </p>
                    <input type="text" className="w-full p-2 border border-gray-300"></input>
                    <p className='flex text-[18px] font-bold text-[#F9FF9A] mt-3'>Your Name
                        <span className='text-red-600 '>*</span>
                    </p>
                    <div className="relative w-full h-auto">
                        <button
                            className="w-full h-[40px] bg-white flex justify-between items-center px-4 border border-gray-300"
                            onClick={toggleDropdown}
                        >
                            <span>{selectedCountry}</span> {/* Hiển thị quốc gia đã chọn */}
                            <FiChevronDown className={`transition-transform ${isOpen}? 'rotate-180' : ''`} />
                        </button>

                        {/* Bảng danh sách các quốc gia */}
                        {isOpen && (
                            <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                                <ul className="overflow-y-auto max-h-48">
                                    {countries.map((country, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => selectCountry(country)} // Chọn quốc gia và cập nhật state
                                        >
                                            {country}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <p className='flex flex-col text-[18px] font-bold text-[#F9FF9A] mt-3'>Your Message (Optional)
                        <span className='font-normal text-white'>Tell us more about your Interests/Requirements</span>
                    </p>
                    <input type="text" className="w-full h-[200px] p-2 border border-gray-300"></input>
                    <p className='flex flex-col text-[18px] font-bold text-[#F9FF9A] mt-3'>How is Your Artwork Shipped?
                        <span className='font-normal text-white'>The option is just applied for Canvas Paintings</span>
                    </p>
                    <div className="relative w-full h-auto">
                        <button
                            className="w-full h-[40px] bg-white flex justify-between items-center px-4 border border-gray-300"
                            onClick={toggleDropdown2}
                        >
                            <span>{selectedCountry2}</span> {/* Hiển thị quốc gia đã chọn */}
                            <FiChevronDown className={`transition-transform ${isOpen2} ? 'rotate-180' : '' `} />
                        </button>

                        {/* Bảng danh sách các quốc gia */}
                        {isOpen2 && (
                            <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                                <ul className="overflow-y-auto max-h-48">
                                    {countries2.map((country2, index) => (
                                        <li
                                            key={index}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                            onClick={() => selectCountry2(country2)} // Chọn quốc gia và cập nhật state
                                        >
                                            {country2}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className='w-full h-[100px] bg-[#43464B] flex justify-center items-center'>
                        <button className='w-[90%] h-[40px] hover:bg-[#36383C] text-white text-[18px] font-bold '>SEND MY INQUIRY</button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PictureArtDetail;


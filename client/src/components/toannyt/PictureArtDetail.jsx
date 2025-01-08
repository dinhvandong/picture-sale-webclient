import React, { useEffect, useContext, useRef, useState } from 'react';
import { FiChevronDown } from "react-icons/fi";
import axios from 'axios';
import PaitingDetail from '../PaitingDetail';
import { findByArtistID } from '../../services/api_picture_art';
import { API_URL_IMAGE } from '../../services/api';
import { LanguageContext } from '../../LanguageContext';
import { useNavigate } from 'react-router-dom';
import { useUpdate } from 'react-use';
import { findPictureArtById } from "../../services/api_picture_art";

const PictureArtDetail = ({ idPicture }) => {
    const navigate = useNavigate();
    const { language } = useContext(LanguageContext);
    const scrollRef = useRef(null);
    const isDragging = useRef(false);
    const [artist, setArtist] =  useState({ name: { en: '', vi: '' } });
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const [countries, setCountries] = useState([]); // Danh sách quốc gia
    const [selectedCountry, setSelectedCountry] = useState(null); // Quốc gia được chọn
    const [dropdownOpen, setDropdownOpen] = useState(false); // Trạng thái mở/đóng dropdown
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const vietsub = {
        done: { vi: 'Đặt hàng thành công', en: 'Order successful' }
    }
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        pictureID: idPicture,
        pictureName: {
            vi: '',
            en: ''
        }
    });
    useEffect(() => {
        const fetchArtistDetail = async () => {
            try {
                setLoading(true); // Bắt đầu loading
                setError(null); // Reset lỗi

                if (!idPicture) {
                    throw new Error('ID picture không hợp lệ');
                }

                const response = await findPictureArtById(idPicture);
                console.log('API Response 2:', response.data.name); // Kiểm tra dữ liệu trả về từ API

                if (response.data) {
                    // Kiểm tra và cập nhật state
                    setArtist(response.data);
                } else {
                    throw new Error('Không tìm thấy dữ liệu nghệ sĩ');
                }
            } catch (err) {
                console.error('Error fetching artist details:', err);
                setError(err.message); // Lưu lỗi vào state
            } finally {
                setLoading(false); // Kết thúc loading
            }
        };

        fetchArtistDetail();
    }, [idPicture]);
    // Hàm xử lý thay đổi giá trị input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        
                pictureName:{
                    vi: artist.name.vi,
                    en: artist.name.en,
                }
            
        }));
    };

    // Hàm gửi form
    const handleSubmit = async (e) => {
        setContact((prevContact) => ({
            ...prevContact,
        
                pictureName:{
                    vi: artist.name.vi,
                    en: artist.name.en,
                }
            
        }));
        e.preventDefault();
        setLoading(true);
        setError(null); // Reset lỗi khi bắt đầu gửi
        

        try {
            const response = await axios.post('http://150.95.114.87:8081/api/contacts', contact);
            console.log('Lưu thông tin thành công:', response.data);
            // Thực hiện các hành động sau khi lưu thành công
            alert(vietsub.done[language])
        } catch (err) {
            setError('Không thể lưu thông tin liên hệ');
            console.error('Error saving contact:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (artist) {
            setContact(prevContact => ({
                ...prevContact,
                pictureName: {
                    vi: artist.vi, // Cập nhật tên tiếng Việt
                    en: artist.en, // Cập nhật tên tiếng Anh
                }
            }));
        }
    }, [artist]); 
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

            console.log('response', response);
            console.log('idPicture', idPicture);
            removeItemById(idPicture);


        } catch (error) {
            console.error("Error fetching data by artist ID:", error);
        }
    };

    const gotoSpecialArtCollection = (id) =>
        navigate(`/picture-art-detail/${id}`);

    // const [isOpen, setIsOpen] = useState(false);  // Quản lý trạng thái của bảng danh sách quốc gia
    // const [selectedCountry, setSelectedCountry] = useState('Choose a country'); // Quốc gia đã chọn

    // Danh sách các quốc gia mẫu
    // const countries = [
    //     'Vietnam',
    //     'United States',
    //     'Germany',
    //     'France',
    //     'Japan',
    //     'China',
    //     'Australia',
    //     'India',
    //     'Brazil',
    // ];

    // Hàm để thay đổi trạng thái của bảng khi nhấn vào nút
    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };

    // Hàm để thay đổi quốc gia khi chọn từ danh sách
    // const selectCountry = (country) => {
    //     setSelectedCountry(country);  // Cập nhật quốc gia đã chọn
    //     setIsOpen(false);  // Đóng bảng danh sách
    // };


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
    const fetchCountries = async () => {
        try {
            const response = await axios.get('https://restcountries.com/v3.1/all');
            const data = response.data.map(country => ({
                name: country.name.common,
                flag: country.flags.png, // Ảnh cờ PNG
                code: country.cca2, // Mã quốc gia (ISO Alpha-2)
                phoneCode: country.idd?.root
                    ? `${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ''}`
                    : 'N/A', // Mã vùng điện thoại
            }));
            const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));

            setCountries(sortedData);
            
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Gọi API khi component render lần đầu
    useEffect(() => {
        fetchCountries();
    }, []);

    // Hàm xử lý khi chọn quốc gia
    const handleCountrySelect = (country) => {
        setSelectedCountry(country); // Lưu thông tin quốc gia

        setDropdownOpen(false); // Đóng dropdown
        setContact((prevContact) => ({
            ...prevContact,
            country: country.code, // Gán mã quốc gia
        }));

        console.log('Selected country:', country);
    };

    // Render loading hoặc lỗi
    if (loading) return <p>Đang tải dữ liệu...</p>;
    if (error) return <p>Lỗi: {error}</p>;


    return (
        <div className="w-full h-max bg-[#27232E] flex flex-col items-center">
            <div className="w-full h-[120px]"></div>
            <div className="w-full md:w-[60%] h-max flex flex-col">
                {<PaitingDetail id={idPicture} onArtistIDRetrieved={handleArtistIDRetrieved} />}

                <div className="w-full h-[50px] flex flex-row justify-between  items-center bg-[#27232E]">
                    <div className='w-[100%] h-[1px] bg-gray-200'></div>
                    <p className='text-[#E5AE0B] text-[25px] w-[700px] text-center font-bold'>{artistName ? artistName[language] : "Unknown Artist"}</p>
                    <div className='w-[100%] h-[1px] bg-gray-200'></div>
                </div>

                <div
                    ref={scrollRef}
                    className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-3"
                    // className="grid grid-flow-col  md:auto-cols-[50%] gap-4 overflow-hidden mt-3 cursor-grab"
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
                <form onSubmit={handleSubmit} className='bg-[#43464B] w-full h-auto mt-6 px-4 flex flex-col '>
                    <p className='text-[20px] text-white font-bold'>Inquiry This Painting/Artwork</p>
                    <p className='text-[18px] text-white mt-3'>
                        Fields marked with an<span className='text-red-600'> * </span>are required
                    </p>
                    <p className='text-[18px] font-bold text-[#F9FF9A]'>
                        You are inquiring on<span className='text-red-600'> * </span>
                    </p>
                    <p className='flex flex-col text-[18px]  font-bold text-[#F9FF9A] mt-3'>
                        This Inquiry is totally free
                        
                    </p>
                    <input
                            type="text"
                            name="pictureName"
                            value={artist.name[language]}
                            readOnly
                            // onChange={handleChange}
                            // required
                            //placeholder={artist.name[language]}
                            className="w-full p-2 border font-medium text-gray-700 border-gray-300"
                        />
                    <p className='flex text-[18px] font-bold text-[#F9FF9A] mt-3'>
                        Your Name
                        <span className='text-red-600 '>*</span>
                    </p>
                    <input
                        name='name'
                        value={contact.name}
                        onChange={handleChange}
                        required
                        type="text"
                        className="w-full p-2 border border-gray-300"
                    />
                    <p className='flex text-[18px] font-bold text-[#F9FF9A] mt-3'>
                        Your Email
                        <span className='text-red-600 '>*</span>
                    </p>
                    <input
                        type="email"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300"
                    />
                    <p className='flex flex-col text-[18px] font-bold text-[#F9FF9A] mt-3'>
                        Your Contact Number (Whatsapp)
                        <span className='font-normal text-white'>
                            We only contact you via your number in case we cannot reach you via email!
                        </span>
                    </p>
                    <input
                        type="text"
                        name="phone"
                        value={contact.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300"
                    />
                    <p className='flex text-[18px] font-bold text-[#F9FF9A] mt-3'>
                        Countries
                        <span className='text-red-600 '>*</span>
                    </p>
                    <div className="relative w-full h-auto ">
                        <div className='p-2'
                            onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown
                            style={{
                                
                                border: '1px solid gray',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                backgroundColor: '#f9f9f9',
                            }}
                        >
                            {selectedCountry ? (
                                <div
                                    key={selectedCountry.code}
                                    onClick={() => handleCountrySelect(selectedCountry)} // Gọi hàm khi người dùng chọn quốc gia
                                    style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                                >
                                    <img
                                        src={selectedCountry.flag}
                                        alt={`Flag of ${selectedCountry.name}`}
                                        style={{ width: '30px', marginRight: '10px' }}
                                    />
                                    <span>
                                        {selectedCountry.name} ({selectedCountry.phoneCode})
                                    </span>
                                </div>
                            ) : (
                                'Chọn quốc gia...'
                            )}
                        </div>

                        {/* Dropdown menu */}
                        {dropdownOpen && (
                            <ul
                                style={{
                                    listStyle: 'none',
                                    padding: '0',
                                    margin: '10px 0',
                                    border: '1px solid lightgray',
                                    borderRadius: '5px',
                                    maxHeight: '200px',
                                    overflowY: 'auto',
                                    backgroundColor: '#ffffff',
                                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                {countries.map((country, index) => (
                                    <li
                                        id={country.code}
                                        key={index}
                                        onClick={() => handleCountrySelect(country)} // Chọn quốc gia và cập nhật state
                                        style={{
                                            padding: '10px',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',
                                            borderBottom: '1px solid #f0f0f0',
                                        }}
                                    >
                                        <img
                                            src={country.flag}
                                            alt={`Flag of ${country.name}`}
                                            style={{ width: '30px', marginRight: '10px' }}
                                        />
                                        <span>{country.name} ({country.phoneCode})</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <p className='flex flex-col text-[18px] font-bold text-[#F9FF9A] mt-3'>
                        Your Message (Optional)
                        <span className='font-normal text-white'>Tell us more about your Interests/Requirements</span>
                    </p>
                    <input
                        type="text"
                        name="message"
                        value={contact.message}
                        onChange={handleChange}
                        className="w-full h-[200px] p-2 border border-gray-300"
                    />
                    <div className='w-full h-[100px] bg-[#43464B] flex justify-center items-center'>
                        <button type="submit" disabled={loading} className='w-[90%] h-[40px] hover:bg-[#36383C] text-white text-[18px] font-bold'>
                            SEND MY INQUIRY
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default PictureArtDetail;


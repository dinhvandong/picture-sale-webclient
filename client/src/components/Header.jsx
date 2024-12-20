import React, { useState, useEffect, useContext } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { SiWelcometothejungle } from "react-icons/si";
import vietnam from '../assets/vietnam_flag.png';
import american from '../assets/usa_flag.png';
import { LanguageContext } from '../LanguageContext';

const Header = () => {
    // State to hold the current language
    // const [language, setLanguage] = useState('vi');
    const { language, changeLanguage } = useContext(LanguageContext);

    return (

        <div className="bg-bg_color w-full h-[60px] p-2 flex flex-col md:flex-row justify-between items-center fixed top-0 left-0 right-0 z-50">
            <div className='flex flex-col md:flex-row items-center m-5'>
                <div className='flex items-center m-5'>
                    <FaPhoneAlt className='text-white w-5 h-5' />
                    <p className='ml-2 text-yellow-500 font-mono'>(+84)965741051</p>
                </div>
                <div className='flex items-center m-5'>
                    <MdOutlineMailOutline className='text-white w-5 h-5' />
                    <p className='ml-2 text-yellow-500 font-mono'>Email: dongdinhvan.edu@gmail.com</p>
                </div>
                <div className='flex items-center m-5'>
                    <IoLocation className='text-white w-5 h-5' />
                    <p className='ml-2 text-yellow-500 font-mono'>36 Hang Buom, Ha Noi, Viet Nam</p>
                </div>
            </div>

            <div className='flex flex-row items-center'>
                <p className='text-white mr-5'>{language === 'en' ? 'Language' : 'Ngôn ngữ'}:</p>
                <button
                    onClick={() => changeLanguage('en')}
                    className={`mx-2 px-3 py-1 ${language === 'en' ? 'bg-brown_color text-white' : 'bg-white text-black'} rounded`}
                >
                    English
                </button>
                <button
                    onClick={() => changeLanguage('vi')}
                    className={`mx-2 px-3 py-1 ${language === 'vi' ? 'bg-brown_color text-white' : 'bg-white text-black'} rounded`}
                >
                    Tiếng Việt
                </button>
            </div>


            <div className='flex items-center m-5'>
                <SiWelcometothejungle className='text-white w-5 h-5' />
                <p className='ml-2 text-yellow-500 font-mono'>
                    {language === 'en' ? 'Good morning' : 'Chào buổi sáng'}
                </p>
            </div>
        </div>
    );
};

export default Header;

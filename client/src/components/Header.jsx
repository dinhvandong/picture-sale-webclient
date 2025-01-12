import React, { useState, useEffect, useContext } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { SiWelcometothejungle } from "react-icons/si";
import { LanguageContext } from '../LanguageContext';

const Header = () => {
    const { language, changeLanguage } = useContext(LanguageContext);
    const [greeting, setGreeting] = useState('');

    // Function to determine greeting based on time
    const updateGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) {
            setGreeting(language === 'en' ? 'Good morning' : 'Chào buổi sáng');
        } else if (hour < 18) {
            setGreeting(language === 'en' ? 'Good afternoon' : 'Chào buổi chiều');
        } else {
            setGreeting(language === 'en' ? 'Good evening' : 'Chào buổi tối');
        }
    };

    // Update greeting when component mounts or language changes
    useEffect(() => {
        updateGreeting();
    }, [language]);

    return (
        <div className="bg-bg_color w-full h-auto md:h-[60px] p-2 flex flex-col md:flex-row justify-between items-center md:fixed md:top-0 md:left-0 md:right-0 z-50">
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
                <p className='ml-2 text-yellow-500 font-mono'>{greeting}</p>
            </div>
        </div>
    );
};

export default Header;

import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext'; // Import LanguageContext

const Intro = ({ title, desc }) => {
    const { language } = useContext(LanguageContext); // Get current language from context

    return (
        <div className='bg-bg_color font-mono w-full h-auto p-2 flex flex-col md:flex-col justify-between items-center'>
            <p className='text-yellow-600 mt-5 text-[20px]'>
                {title[language]} {/* Display title based on current language */}
            </p>
            <p className='text-white mt-5'>
                {desc[language]} {/* Display description based on current language */}
            </p>
        </div>
    );
};

export default Intro;

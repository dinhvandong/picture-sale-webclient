import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../LanguageContext'; // Import LanguageContext

const Menu = () => {
    const navigate = useNavigate();

    // Use LanguageContext to access the current language and the function to change language
    const { language, changeLanguage } = useContext(LanguageContext);

    // Translations for menu items
    const translations = {
        home: { en: 'Home', vi: 'Trang chủ' },
        paintings: { en: 'Paintings', vi: 'Tranh' },
        artists: { en: 'Artists', vi: 'Nghệ sĩ' },
        lacquerArtworks: { en: 'Lacquer ArtWorks', vi: 'Tranh sơn mài' },
        specialCollections: { en: 'Special Art Collections', vi: 'Bộ sưu tập đặc biệt' },
        commission: { en: 'Commission', vi: 'Đặt hàng' },
        galleryTour: { en: 'Gallery Tour', vi: 'Tham quan phòng trưng bày' },
        aboutUs: { en: 'About Us', vi: 'Về chúng tôi' },
    };
    

    // Navigation functions
    const gotoAboutPage = () => navigate('/about');
    const gotoGalleryTourPage = () => navigate('/gallery-tour');
    const gotoLacquerArtwork = () => navigate('/artist-vn/artist-lacquer-artwork');
    const gotoPaintingPage = () => navigate('/artwork/landscape-paintings');
    const gotoHomePage = () => navigate('/homepage');
    const gotoSpecialArtCollection = () => navigate('/special');
    const gotoArtistVnPage = () => navigate('/artist-vn');


    return (
        <div className="bg-header_color w-full h-[60px] flex flex-row justify-center items-center fixed top-[60px] left-0 right-0 z-40">
            {/* Menu Items */}
            <div className='flex flex-row'>
                <div onClick={gotoHomePage} className='flex items-center h-full px-3 py-2 ml-5 text-black hover:text-white hover:bg-brown_color hover:cursor-pointer'>
                    <p className='font-bold'>{translations.home[language]}</p>
                </div>



                
                <div onClick={gotoPaintingPage} className='flex items-center h-full px-3 py-2 ml-5 text-black hover:text-white hover:bg-brown_color hover:cursor-pointer'>
                    <p className='font-bold'>{translations.paintings[language]}</p>
                </div>




                <div onClick={gotoArtistVnPage} className='flex items-center h-full px-3 py-2 ml-5 text-black hover:text-white hover:bg-brown_color hover:cursor-pointer'>
                    <p className='font-bold'>{translations.artists[language]}</p>
                </div>
                {/* <div onClick={gotoLacquerArtwork} className='flex items-center h-full px-3 py-2 ml-5 text-black hover:text-white hover:bg-brown_color hover:cursor-pointer'>
                    <p className='font-bold'>{translations.lacquerArtworks[language]}</p>
                </div> */}
                <div onClick={gotoSpecialArtCollection} className='flex items-center h-full px-3 py-2 ml-5 text-black hover:text-white hover:bg-brown_color hover:cursor-pointer'>
                    <p className='font-bold'>{translations.specialCollections[language]}</p>
                </div>
                {/* <div className='flex items-center h-full px-3 py-2 ml-5 text-black hover:text-white hover:bg-brown_color hover:cursor-pointer'>
                    <p className='font-bold'>{translations.commission[language]}</p>
                </div> */}
                {/* <div onClick={gotoGalleryTourPage} className='flex items-center h-full px-3 py-2 ml-5 text-black hover:text-white hover:bg-brown_color hover:cursor-pointer'>
                    <p className='font-bold'>{translations.galleryTour[language]}</p>
                </div> */}
                <div onClick={gotoAboutPage} className='flex items-center h-full px-3 py-2 ml-5 text-black hover:text-white hover:bg-brown_color hover:cursor-pointer'>
                    <p className='font-bold'>{translations.aboutUs[language]}</p>
                </div>
            </div>

            {/* Language Switcher */}
           
        </div>
    );
};

export default Menu;

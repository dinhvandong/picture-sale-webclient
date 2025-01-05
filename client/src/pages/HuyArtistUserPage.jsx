
import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer';

import HuyArtstUder from '../components/huytq/HuyArtistUser/HuyArtstUder';

const HuyArtistUserPage = () => {
    return (
        <div className='flex flex-col h-auto w-screen bg-white'>
            <Header />
            <Menu />
            {/* <ImageSlider imageData={imagesData} /> */}
            <HuyArtstUder />
            <Footer />
        </div>
    )

};

export default HuyArtistUserPage;

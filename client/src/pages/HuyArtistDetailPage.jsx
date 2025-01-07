
import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom'
import HuyArtistDetail from '../components/huytq/HuyArtistDetail/HuyArtistDetail';

const HuyArtistDetailPage = () => {
     const { id } = useParams();
  return (
    <div className='flex flex-col h-auto w-screen bg-white'>
        <Header/>
        <Menu/>
        {/* <ImageSlider imageData={imagesData} /> */}
        <HuyArtistDetail idArtist={id}/>
        <Footer/>
    </div>
  )
}


export default HuyArtistDetailPage
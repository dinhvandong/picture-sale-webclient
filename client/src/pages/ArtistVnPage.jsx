
import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import ImageSlider from '../components/ImageSlider'
import imagesData from './images.json'; // Import your JSON image data
import Intro from '../components/Intro';
import Topic from '../components/Topic';
import ArtistCollection from '../components/quanhm/ArtistCollection';
import NewCollection from '../components/NewCollection';
import VietnamPaitingCollection from '../components/VietnamPaitingCollection';
import CustomerFeedback from '../components/CustomerFeedback';
import BlogCollection from '../components/BlogCollection';
import Footer from '../components/Footer';
import { AboutBody } from '../components/AboutBody';
import GalleryTour from '../components/GalleryTour';
import ArtistVn from '../components/quanhm/ArtistVn';

const ArtistVnPage = () => {
  return (
    <div className='flex flex-col h-auto w-screen bg-white'>
        <Header/>
        <Menu/>
        <ImageSlider imageData={imagesData} />
        <ArtistVn/>
        <Footer/>
    </div>
  )
}


export default ArtistVnPage
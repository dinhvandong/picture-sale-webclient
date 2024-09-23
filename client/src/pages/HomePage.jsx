import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import ImageSlider from '../components/ImageSlider'
import imagesData from './images.json'; // Import your JSON image data
import Intro from '../components/Intro';
import Topic from '../components/Topic';

const HomePage = () => {
  return (
    <div className='flex flex-col w-screen bg-white'>
        <Header/>
        <Menu/>
        <ImageSlider imageData={imagesData} />
        <Intro/>
        <Topic/>


    </div>
  )
}

export default HomePage
import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import ImageSlider from '../components/ImageSlider'
import imagesData from './images.json'; // Import your JSON image data

const HomePage = () => {
  return (
    <div className='flex flex-col w-screen bg-white'>
        <Header/>
        <Menu/>
        <ImageSlider imageData={imagesData} />


    </div>
  )
}

export default HomePage
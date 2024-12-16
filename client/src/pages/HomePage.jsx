import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';
import ImageSlider from '../components/ImageSlider';
import imagesData from './images.json'; // Import your JSON image data
import Intro from '../components/Intro';
import Topic from '../components/Topic';
import ArtistCollection from '../components/ArtistCollection';
import NewCollection from '../components/NewCollection';
import VietnamPaitingCollection from '../components/VietnamPaitingCollection';
import CustomerFeedback from '../components/CustomerFeedback';
import BlogCollection from '../components/BlogCollection';
import Footer from '../components/Footer';
import axios from 'axios';

const HomePage = () => {
  const [headerData, setHeaderData] = useState(null);


  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/api/header-settings/1');
        setHeaderData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col h-auto w-screen bg-white'>
      <Header />
      <Menu />
      <ImageSlider imageData={headerData?.pictureArtList || []} />
      <Intro desc= {headerData?.desc || ''} title={headerData?.title || ''} />
      <Topic />
      <ArtistCollection />
      <NewCollection />
      <VietnamPaitingCollection />
      <CustomerFeedback />
      <BlogCollection />
      <Footer />
    </div>
  );
};

export default HomePage;


import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer';
import PaitingDetail from '../components/PaitingDetail';

const PaintingDetailPage = () => {
  return (
    <div className='flex flex-col w-screen h-auto bg-white'>
        <Header/>
        <Menu/>
        <PaitingDetail/>
        <Footer/>
    </div>
  )
}



export default PaintingDetailPage
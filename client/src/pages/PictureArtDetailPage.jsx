import React from 'react'
import PictureArtDetail from '../components/toannyt/PictureArtDetail'
import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

const PictureArtDetailPage = () => {

    const { id } = useParams();

  return (
    <div className='flex flex-col w-full bg-white h-max'>
      <Header/>
      <Menu/>
      <PictureArtDetail idPicture = {id}/>

      <Footer/>
    </div>
  )
}

export default PictureArtDetailPage

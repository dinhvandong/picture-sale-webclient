import React from 'react'
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Specialcoll from '../components/toanmt/Specialcoll';
import Babamt from '../components/toannyt/Babamt';

//Kien
const SpecialCollectionPage = () => {
  return (
    <div className='flex flex-col w-full bg-white h-max'>
      <Header/>
      <Menu/>
      {/* <Specialcoll/> */}
      <Babamt/>
      <Footer/>
    </div>
  )
}

export default SpecialCollectionPage
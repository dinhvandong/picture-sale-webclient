import React from 'react'
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Specialcoll from '../components/toanmt/Specialcoll';
import Specialheader from '../components/toanmt/Specialheader';

//Kien
const SpecialCollectionPage = () => {
  return (
    <div className='flex flex-col w-full bg-white h-max'>
      <Header/>
      <Menu/>

      <Specialheader url="special-picture-header"/>

      <Specialcoll url = "special-picture-1"/>
      <Specialcoll url = "special-picture-2"/>
      <Specialcoll url = "special-picture-3"/>
     
      {/* <Babamt/> */}
      <Footer/>
    </div>
  )
}

export default SpecialCollectionPage
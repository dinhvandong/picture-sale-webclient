import React from 'react'
import Header from './Header';

const Menu = () => {
    return (
        <div className='bg-header_color w-full h-[60px] flex flex-row justify-center items-center'>


            <div className='ml-5 hover:cursor-pointer'>
                <p className='font-bold text-black'>Home</p>

            </div>

            <div className='ml-5 hover:cursor-pointer'>
                <p className='font-bold text-black'>Paintings</p>

            </div>

            <div className='ml-5 hover:cursor-pointer'>
                <p className='font-bold text-black'>Artists</p>

            </div>

            <div className='ml-5 hover:cursor-pointer'>
                <p className='font-bold text-black'>Lacquer ArtWorks</p>

            </div>

            <div className='ml-5 hover:cursor-pointer'>
                <p className='font-bold text-black'>Special Art Collections</p>

            </div>

            <div className='ml-5 hover:cursor-pointer'>
                <p className='font-bold text-black'>Commission</p>

            </div>

            <div className='ml-5 hover:cursor-pointer'>
                <p className='font-bold text-black'>Gallery Tour</p>

            </div>

            <div className='ml-5 hover:cursor-pointer'>
                <p className='font-bold text-black'>About Us</p>

            </div>


        </div>
    )
}

export default Menu
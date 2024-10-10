import React from 'react'
import Header from './Header';

const Menu = () => {
    return (
        <div className='bg-header_color w-full h-[60px] flex flex-row justify-center items-center'>


            <div className=' flex items-center text-black hover:text-white hover:bg-brown_color ml-5 px-3 py-2 h-full hover:cursor-pointer'>
                <p className='font-bold '>Home</p>

            </div>

            <div className=' flex items-center text-black hover:text-white hover:bg-brown_color ml-5 px-3 py-2 h-full hover:cursor-pointer'>
                <p className='font-bold '>Paintings</p>

            </div>

            <div className=' flex items-center text-black hover:text-white hover:bg-brown_color ml-5 px-3 py-2 h-full hover:cursor-pointer'>
                <p className='font-bold '>Artists</p>

            </div>

            <div className=' flex items-center text-black hover:text-white hover:bg-brown_color ml-5 px-3 py-2 h-full hover:cursor-pointer'>
                <p className='font-bold '>Lacquer ArtWorks</p>

            </div>

            <div className=' flex items-center text-black hover:text-white hover:bg-brown_color ml-5 px-3 py-2 h-full hover:cursor-pointer'>
                <p className='font-bold '>Special Art Collections</p>

            </div>

            <div className=' flex items-center text-black hover:text-white hover:bg-brown_color ml-5 px-3 py-2 h-full hover:cursor-pointer'>
                <p className='font-bold '>Commission</p>

            </div>

            <div className=' flex items-center text-black hover:text-white hover:bg-brown_color ml-5 px-3 py-2 h-full hover:cursor-pointer'>
                <p className='font-bold '>Gallery Tour</p>

            </div>

            <div className=' flex items-center text-black hover:text-white hover:bg-brown_color ml-5 px-3 py-2 h-full hover:cursor-pointer'>
                <p className='font-bold '>About Us</p>

            </div>
        </div>
    )
}

export default Menu
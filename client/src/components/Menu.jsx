import React from 'react'
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Menu = () => {

    const navigate = useNavigate();

    const gotoAboutPage = ()=>{
        navigate('/about')

    }
    const gotoGalleryTourPage = ()=>{
        navigate('/gallery-tour')

    }

    const gotoHomePage = () =>{
        navigate('/');
    }

    const gotoArtistVnPage = ()=>{
        navigate('/artist-vn')
    }
    return (
        <div className='bg-header_color w-full h-[60px] flex flex-row justify-center items-center'>


            <div onClick={gotoHomePage} className=' flex items-center text-black hover:text-white hover:bg-brown_color ml-5 px-3 py-2 h-full hover:cursor-pointer'>
                <p className='font-bold '>Home</p>

            </div>

            <div className=' flex items-center text-black hover:text-white hover:bg-brown_color ml-5 px-3 py-2 h-full hover:cursor-pointer'>
                <p className='font-bold '>Paintings</p>

            </div>

            <div onClick={gotoArtistVnPage} className=' flex items-center text-black hover:text-white hover:bg-brown_color ml-5 px-3 py-2 h-full hover:cursor-pointer'>
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

            <div onClick={gotoGalleryTourPage} className=' flex items-center text-black hover:text-white hover:bg-brown_color ml-5 px-3 py-2 h-full hover:cursor-pointer'>
                <p className='font-bold '>Gallery Tour</p>

            </div>

            <div onClick={gotoAboutPage} className=' flex items-center text-black hover:text-white hover:bg-brown_color ml-5 px-3 py-2 h-full hover:cursor-pointer'>
                <p className='font-bold '>About Us</p>

            </div>
        </div>
    )
}

export default Menu
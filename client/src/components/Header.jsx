import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { SiWelcometothejungle } from "react-icons/si";
import vietnam from '../assets/vietnam_flag.png'
import american from '../assets/usa_flag.png'

const Header = () => {
    return (
        <div className='bg-bg_color w-full h-auto p-2 md:h-[50px] flex  flex-col md:flex-row justify-between items-center'>
            <div className='flex flex-col md:flex-row items-center m-5'>
                <div className='flex items-center m-5'>
                    <FaPhoneAlt className='text-white w-5 h-5' />
                    <p className='ml-2 text-yellow-500 font-mono'>(+84)965741051</p>
                </div>
                <div className='flex items-center m-5'>
                    <MdOutlineMailOutline className='text-white w-5 h-5' />
                    <p className='ml-2 text-yellow-500 font-mono'>Email: dongdinhvan.edu@gmail.com</p>
                </div>

                <div className='flex items-center m-5'>
                    <IoLocation className='text-white w-5 h-5' />
                    <p className='ml-2 text-yellow-500 font-mono'>36 Hang buom, Ha Noi, Viet Nam</p>
                </div>
            </div>
            <div className='flex items-center m-5'>
                <p className='text-white'>Language</p>

                <img src={vietnam} className=' ml-5 w-5 h-5'/>

                <img src={american} className='ml-5 w-5 h-5' />

            <div className='flex items-center m-5'>
                <SiWelcometothejungle className='text-white w-5 h-5' />
                <p className='ml-2 text-yellow-500 font-mono'>Good morning</p>
            </div>
            </div>


        </div>
    )
}

export default Header
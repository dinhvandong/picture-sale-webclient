import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

import ArtworksUser from './ArtworksUser'

const Biography = ({ artist,API_URL_IMAGE}) => {
  
       
    return (
        <div className='mt-10'>
            <div className='flex text-xl '>
            <div className='  w-2/5 pr-5'>
                <img className='w-full' src={API_URL_IMAGE + artist.avatar} alt={artist.id} />
            </div>
            <div className='text-xl text-white w-3/5'>
                <p>{artist.journey.en}</p>
                <h1 className=' text-4xl text-[#e5ae0b] font-semibold mt-6 mb-4'>Exhibitions & Art Events</h1>
                <ul className='list-disc ml-5'>
                    <li className='my-2'>
                    2019: Art exhibition "Father & Son" by artist Dau Quang Toan and his 2 sons
                    </li>
                    <li className='my-2'>
                    2021: Group exhibition "An & Hien" - Hide & Show
                    </li>
                    
                </ul>
            </div>
           
        </div>
   
        </div>
    )
}

export default Biography
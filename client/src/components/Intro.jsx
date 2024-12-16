import React from 'react'

const Intro = ({ title, desc }) => {
    return (
        <div className='bg-bg_color font-mono w-full h-auto p-2  flex  flex-col md:flex-col justify-between items-center'>
            <p className='text-yellow-600 mt-5 text-[20px]'>
                {title.vi}
            </p>
            <p className='text-white mt-5'>
                {desc.vi}
            </p>
           
        </div>
    )
}

export default Intro
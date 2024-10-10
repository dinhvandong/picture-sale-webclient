import React from 'react'
import '../index.css';
const Topic = () => {

    const calligraphyStyle = {
        fontFamily: 'Dancing Script, cursive',
        fontSize: '50px',
        color: '#333',
    };
    return (
        <div className='flex flex-col items-center justify-between w-full h-auto p-2 font-mono bg-bg_color'>
            <div className='flex flex-row items-center w-full h-auto'>
                <div className='w-1/2 h-[1px] ml-5 bg-white'>
                </div>
                <p className='text-center text-white font-bold ml-5 mr-5 text-[40px]'>SEPTEMBER SPECIAL EXHIBITION
                </p>
                <div className='w-1/2 h-[1px] mr-5 bg-white'>

                </div>
            </div>

            <div className='flex w-full  flex-col md:flex-row  h-auto md:h-[600px]'>
                <div className=' w-full md:w-[60%] flex flex-col bg-header_color'>
                    <p className='ml-5 text-black text-[40px]'>HANOI OLD QUARTER ART</p>
                    <p className='ml-5 text-white text-[40px]'>TOPIC | SPECIAL EXHIBITION</p>
                    <p className='font-sacramento text-[200px] mt-5 text-white ml-5'>
                        Streets
                    </p>
                    <p className='ml-5 text-[30px] text-white text-center'>
                        Artist: Nguyen Sy Tot
                    </p>
                    <p className='mt-5 ml-5 text-white'>
                        We respectful introduce and invite distinguished guests and art lovers to the Special Exhibition "Streets" in Nguyen Sy Tot paintings.
                    </p>
                    <p className='mt-5 ml-5 text-white'>
                        Location: 10th -floor - Culture Avenue Westlake - Ha Noi From 6/10/2024 - 16/10/2024
                    </p>
                </div>
                <div className='w-full md:w-[40%] flex flex-col bg-white'>
                    <img className='w-full h-1/2' src='https://i.pinimg.com/564x/ea/0b/a5/ea0ba50cde7fbf51119707780a90383a.jpg' />
                    <img className='w-full h-1/2' src='https://i.pinimg.com/564x/2c/49/be/2c49be182dd73ea2ac01ea96edd94105.jpg' />
                </div>
            </div>
            <div className='flex flex-col w-full '>
                <p className='mt-5 ml-5 text-white'>
                    🎨 Hanoi, the thousand-year-old capital with its bustling 36 streets, has always been an endless source of inspiration in Vietnamese art and literature. Artist Phạm Hoàng Minh has captured the beauty of Hanoi through his delicate brushstrokes.
                </p>
                <p className='mt-5 ml-5 text-white'>
                    🎨 Join the special exhibition “Streets” to explore the charm of Hanoi’s Old Quarter and experience authentic art through the lens of an artist deeply in love with the city. This is a unique opportunity to immerse yourself in a special artistic space and feel the elegance in each artwork.
                </p>
                <p className='mt-5 ml-5 text-white'>
                    🎨 Don’t miss this special chance to dive into an emotional artistic experience and discover an essential part of Hanoi through the artistic perspective of Phạm Hoàng Minh. Nguyen Art Gallery warmly welcomes you!
                </p>
                <div className='flex items-center justify-center w-full mt-5'>
                    <div className='flex  w-[200px] items-center justify-center px-5 py-3 bg-brown_color'>
                        <p className='font-bold text-white'>Full Collection</p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Topic
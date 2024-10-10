import React from 'react'

export const AboutBody = () => {
    return (
        <div className='w-full flex flex-col items-center bg-black text-white'>
           
           <div className='w-[80%] flex flex-col items-center'>

            <div className='mt-[50px] text-center'>
                <p className='font-bold'>
                    Nguyen Art Gallery – The Space for Authentic Vietnamese Paintings & Artworks

                </p>
                <p>
                    Welcome to the Nguyen Art Gallery, one of the ten biggest and most famous private gallery in Vietnam. It was born to showcase original and authentic Vietnamese paintings, artworks as well as sculptures. The name Nguyen Art means “Original Art” or “Long Lasting Art”.
                </p>
            </div>
            <div className='mt-[50px] text-center'>

                <p className='font-bold'>The Story of Nguyen Art Gallery
                </p>

                <p>
                    It began in 2006 when Mr. Le Xuan Huong (our founder) and artist Pham Hoang Minh established Nguyen Art Gallery to fulfill their desire to run a space for Vietnamese art. In the same year, NAG released its online version – www.nguyenartgallery.com in order to bring Vietnamese artworks and paintings to the world.
                </p>

                <div>
                    <img className='w-full' src='https://www.nguyenartgallery.com/wp-content/uploads/nag-at-31a-van-mieu.jpg' />
                </div>
                <p>
                    These contemporary artworks are shown in Nguyen Art Gallery which welcomes local access and also allows visitors from all over the world to cross the globe virtually and increase their understanding of quality arts from Vietnam. Since 2006, the Gallery has always looked for and found new faces of Vietnamese art and regularly supports them.
                </p>

            </div>
            <div className='mt-[50px] text-center'>
                <p className='font-bold'>The First Exhibitions
                </p>
                <p>
                    Nguyen Art Gallery is also opened to be the art center in Hanoi, the capital of Vietnam. Therefore, NAG is home to exhibitions for Vietnamese and international artists as well as their sponsor.
                </p>
                <div>
                    <img className='w-full' src='https://www.nguyenartgallery.com/wp-content/uploads/mai-huy-dung-exhibition.jpg' />
                </div>
                <p>In 2012, NAG moved to the new home at 31A Van Mieu, Dong Da District. Since then, we have collaborated with artists to organize a lot of exhibitions and art events. In addition, we always show our responsibilities to the community thanks to the exhibitions which a part of their revenue is spent for charity.

                </p>
            </div>
        </div>
        </div>

    )
}

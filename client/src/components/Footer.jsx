import React from 'react'

const Footer = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center h-auto bg-black text-white'>

            <div className='mt-[50px] w-1/2'>

                <p className='font-bold text-center'>
                    Davinci Art Gallery
                </p>
                <p className='text-center'>
                    Davinci Art gallery is established for original and high-quality Vietnamese artworks & paintings. The name Nguyen Art means “Original Art”. The gallery focuses on talented young emerging artists in Vietnam and bring their finest artworks to the world.
                </p>
            </div>

            <div>
                <p className='font-bold text-center mt-5'>
                    Plan a Visit
                </p>
                <p>
                    Address 1: 31A Van Mieu Street, Dong Da District, Hanoi
                </p>
                <p>
                    Address 2: 4th Floor - Culture Avenue, Lotte West Lake, Tay Ho District, Hanoi
                </p>
            </div>

            <div className='text-center mt-5'>
                <p className=' font-bold'>Hotline:</p>
                <p>+84 396 295 998</p>
                <p>+84 909 896 286</p>
                <p>
                    +84 981 956 281
                </p>
                <p>
                    +84 987 828 876 - Gallery Manager (Mrs Thu Hà)
                </p>
            </div>
            <div className='mt-5'>
                <p><span className='font-bold'>Email: </span>order@nguyenartgallery.com</p>
                <p><span className='font-bold'>Open Daily:</span> 8:30am - 6pm</p>
                <p>Closed on Vietnamese Public Holidays</p>
                <p>Admission Free</p>
            </div>

            <div className='w-full mb-5 flex justify-center items-center mt-[50px] text-white h-auto'>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className='w-full mr-5'>
                        <p className='font-bold'>About NAG</p>
                        <p>About Us</p>
                        <p>Plan Your Visit</p>
                        <p>Exhibitions</p>
                        <p>The Art Appraiser</p>
                    </div>
                    <div className='w-full mr-5'>
                        <p className='font-bold'>About NAG</p>
                        <p>About Us</p>
                        <p>Plan Your Visit</p>
                        <p>Exhibitions</p>
                        <p>The Art Appraiser</p>
                    </div>
                    <div className='w-full mr-5'>
                        <p className='font-bold'>About NAG</p>
                        <p>About Us</p>
                        <p>Plan Your Visit</p>
                        <p>Exhibitions</p>
                        <p>The Art Appraiser</p>
                    </div>
                    <div className='w-full mr-5'>
                        <p className='font-bold'>About NAG</p>
                        <p>About Us</p>
                        <p>Plan Your Visit</p>
                        <p>Exhibitions</p>
                        <p>The Art Appraiser</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import ArtworksUser from './ArtworksUser'

const Biography = () => {
    return (
        <div className='mt-10'>
            <div className='flex text-xl '>
            <div className='  w-3/5 pr-10'>
                <img className='w-full' src='https://www.nguyenartgallery.com/wp-content/uploads/dau-quang-toan.jpg' alt='anh' />
            </div>
            <div className='text-xl text-white w-2/5'>
                <p>Artist Dau Quang Toan was born in 1952 and currently lives and works in Hanoi. His family has always been associated with art when his two sons, Dau Quang Anh & Dau Quang Nhat, are both talented painters.</p>
                <p className='my-6'>Artist Dau Quang Toan shared that his inspiration comes from the desire to find beauty, the truth - goodness - beauty, so they all exploit nature from the past and present life between the past and present.</p>
                <p>The famous Vietnamese artist Ngo Thanh Nhan commented: "Dau Quang Toan is a player of warm, coherent colors in his artworks."</p>
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
        <ArtworksUser/>
        </div>
    )
}

export default Biography
import React, { useState } from 'react'
import ArtworksUser from './ArtworksUser';
import Biography from './Biography';
import MessagetoGalleryOwner from './MessagetoGalleryOwner';



const HuyArtstUder = () => {

    const [activeTab, setActiveTab] = useState('catalogue'); // State để quản lý tab hiện tại
    return (
        <div className='mt-28'>
            <div className='bg-[#2b3945] flex justify-between  px-32 py-9'>

                <h1 className='text-3xl  text-white '>Home <span className='text-gray-500 font-medium mx-2'>/</span> <span className='font-bold'>Dau Quang Toan</span></h1>
                <select className='bg-[#55616a] text-white text-xl px-2 py-2 rounded-full' name="cars" id="cars">
                    <option value="volvo">Sort by popularity</option>
                    <option value="saab">Sort by average rating</option>
                    <option value="mercedes">Sort by latest</option>
                    <option value="audi">Sort by price: low to high</option>
                    <option value="audi">Sort by price: high to lowh</option>
                </select>

            </div>
            <div className=' px-32 bg-[#27242e] py-10'>
                <h1 className='font-medium text-3xl text-[#cc8115]'>
                    Artist Dau Quang Toan – Artworks & Art Career
                </h1>
                <div className="p-6">
                    {/* Nút bấm */}
                    <div className="flex justify-center">
                        <button
                            onClick={() => setActiveTab('catalogue')}
                            className={`py-2 px-4 rounded-full ${activeTab === 'catalogue'
                                    ? 'border-2 border-white text-white font-bold text-2xl transition  duration-300'
                                    : 'text-[#d4d3d5] hover:text-white font-bold text-2xl transition  duration-300'
                                }`}
                        >
                            Catalogue
                        </button>
                        <button
                            onClick={() => setActiveTab('biography')}
                            className={`py-2 px-4 rounded-full ${activeTab === 'biography'
                                   ? 'border-2 border-white text-white font-bold text-2xl transition  duration-300'
                                    : 'text-[#d4d3d5] hover:text-white font-bold text-2xl transition  duration-300'
                                }`}
                        >
                            Biography
                        </button>
                        <button
                            onClick={() => setActiveTab('message')}
                            className={`py-2 px-4 rounded-full ${activeTab === 'message'
                                   ? 'border-2 border-white text-white font-bold text-2xl transition  duration-300'
                                    : 'text-[#d4d3d5] hover:text-white font-bold text-2xl transition  duration-300'
                                }`}
                        >
                            Message to Gallery Owner
                        </button>
                    </div>

                    {/* Nội dung các tab */}
                    <div className="mt-4">
                        {activeTab === 'catalogue' && (
                            <ArtworksUser/>
                        )}
                        {activeTab === 'biography' && (
                            <Biography/>
                        )}
                        {activeTab === 'message' && (
                            <MessagetoGalleryOwner/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HuyArtstUder
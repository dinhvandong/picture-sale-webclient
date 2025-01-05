import React, { useState } from 'react'
import ArtworksUser from './ArtworksUser'

const MessagetoGalleryOwner = () => {
  const [activeTab, setActiveTab] = useState(null); // State để lưu tab đang mở (hoặc null nếu không có tab nào mở)
  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null); // Nếu tab đang mở được nhấn lại, ẩn nội dung
    } else {
      setActiveTab(tab); // Hiển thị tab được chọn
    }
  };
  return (
    <div>
      <div className='bg-[#313131] text-white'>
        <h3 className='text-center text-2xl font-semibold pt-1 pb-3 border-b border-gray-500'>Message to Gallery Owner</h3>
        <div>
          <div className="flex justify-center ">

            <button
              onClick={() => toggleTab('catalogue')}
              className={`py-3  bg-nome border-nome text-2xl   ${activeTab === 'catalogue'
                ? 'text-white font-bold transition duration-1000'
                : ''
                }`}
            >
              Xin Chao!
            </button>

          </div>
          {/* Nội dung các tab */}
          <div className="mt-4 ">

            {activeTab === 'catalogue' && (
              <div className="p-4 grid grid-cols-2 bg-[#313131]  transition duration-1000 px-12">
                <div className='text-center  '>
                  <img className='h-[60%] mt-32' src='https://www.nguyenartgallery.com/wp-content/uploads/Nguyen-Art-Gallery-Owner.jpg' alt='1' />
                  <h1 className='text-2xl font-semibold my-4'>
                    I am Henry Le
                  </h1>
                  <p className='text-2xl border-l-4 py-1 border-[#776f63] '>"I am happy to receive your words"</p>
                  <p className='border-dashed  border-b border-white mt-10'></p>
                </div>
                <div className='border-dashed pb-10 border-l border-white pl-4'>
                  <h1 className='text-2xl font-semibold text-center'>Message to Gallery Owner</h1>
                  <p className='text-2xl text-center'>Fields marked with an <span className='text-red-800 text-2xl'>*</span> are required</p>
                  <div>
                    <div className='mt-2  text-xl'>
                      <label htmlFor="" className='font-bold text-[#ffef96]'>Your Name <span className='text-red-800 text-2xl'>*</span></label>
                      <input className='border text-black active:shadow-2xl w-full p-3 mt-3' type="text" />
                    </div>
                    <div className='mt-7 text-xl'>
                      <label htmlFor="" className='font-bold text-[#ffef96]'>Your Email <span className='text-red-800 text-2xl'>*</span></label>
                      <input className='border text-black active:shadow-2xl w-full p-3 mt-3' type="text" />
                    </div>
                    <div className='mt-7 text-xl'>
                      <label htmlFor="" className='font-bold text-[#ffef96]'>Your Phone</label>
                      <input className='border text-black active:shadow-2xl w-full p-3 mt-3' type="text" />
                    </div>
                    <div className='mt-7  text-xl'>
                    <label htmlFor="" className='font-bold text-[#ffef96]'>Your Message (Optional)</label>
                    <p className='text-xl text-center mt-4 font-normal'>Tell me more about your Interests/Requirements</p>
                      <textarea className='h-56 border shadow  hover:shadow-none focus:ring active:shadow-2xl w-full py-2 pl-3 mt-1' type="text" />

                    </div>
                    <div className='flex  justify-center mt-7  pb-20'>
                      <input className='font-bold  cursor-pointer uppercase text-2xl hover:bg-[#292929] transition duration-300 py-2 px-5' type="button" value="Send Your Message"/> 
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>

        </div>
      </div>
      <ArtworksUser />
    </div>
  )
}

export default MessagetoGalleryOwner
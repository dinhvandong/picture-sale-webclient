import React from 'react'
import NewItem from './NewItem';
import CustomerFeedbackItem from './CustomerFeedbackItem';

const CustomerFeedback = () => {
    // Sample Data
const items = [
    { id: 1, title: "Hoạ sỹ Đỗ Khải", image: "https://www.nguyenartgallery.com/wp-content/uploads/Client-1-of-Nguyen-Art-Gallery.jpg" },
    { id: 2, title: "Hoạ sỹ Đỗ Khải", image: "https://www.nguyenartgallery.com/wp-content/uploads/Client-1-of-Nguyen-Art-Gallery.jpg" },
    { id: 3, title: "Hoạ sỹ Đỗ Khải", image: "https://www.nguyenartgallery.com/wp-content/uploads/Client-1-of-Nguyen-Art-Gallery.jpg" },
    { id: 4, title: "Hoạ sỹ Đỗ Khải", image: "https://www.nguyenartgallery.com/wp-content/uploads/Client-1-of-Nguyen-Art-Gallery.jpg" },  ];
    return (

        <div className='flex flex-col items-center justify-between w-full h-auto p-5 font-mono bg-bg_color'>
            <div className='flex flex-row items-center w-full h-auto'>
                <div className='w-[40%] h-[1px] ml-5 bg-white'>
                </div>
                <p className='text-center text-white font-bold ml-5 mr-5 text-[40px]'>CUSTOMER FEEDBACK
                </p>
                <div className='w-[40%] h-[1px] mr-5 bg-white'>

                </div>
            </div>
            <div className='w-full h-auto'>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items.map(item => (
                        <CustomerFeedbackItem key={item.id} title={item.title} image={item.image} />
                    ))}
                </div>

                <div className='flex items-center justify-center w-full mt-5'>
                    <div className='flex  w-[200px] items-center justify-center px-5 py-3 bg-brown_color'>
                        <p className='font-bold text-white'>Full Collection</p>

                    </div>
                </div>


            </div>
        </div>
    )
}


export default CustomerFeedback
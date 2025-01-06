import React, { useContext, useEffect, useState } from 'react'
import NewItem from './NewItem';
import CustomerFeedbackItem from './CustomerFeedbackItem';
import { findAllFeedbacks } from '../services/api_feedback';
import { LanguageContext } from '../LanguageContext';
import { API_URL_IMAGE } from '../services/api';

const CustomerFeedback = () => {
    const { language } = useContext(LanguageContext);
    const [feedbackList, setFeedbackList] = useState([]);
    const refreshData = async () => {
        try {
            const response = await findAllFeedbacks();
            setFeedbackList(response.data); // Ensure the response data contains the list of feedback
        } catch (error) {
            console.error('Error fetching feedbacks:', error);
        }
    };

    useEffect(() => {
        refreshData();
    }, []);

//     // Sample Data
// const items = [
//     { id: 1, title: "Hoạ sỹ Đỗ Khải", image: "https://www.nguyenartgallery.com/wp-content/uploads/Client-1-of-Nguyen-Art-Gallery.jpg" },
//     { id: 2, title: "Hoạ sỹ Đỗ Khải", image: "https://www.nguyenartgallery.com/wp-content/uploads/Client-1-of-Nguyen-Art-Gallery.jpg" },
//     { id: 3, title: "Hoạ sỹ Đỗ Khải", image: "https://www.nguyenartgallery.com/wp-content/uploads/Client-1-of-Nguyen-Art-Gallery.jpg" },
//     { id: 4, title: "Hoạ sỹ Đỗ Khải", image: "https://www.nguyenartgallery.com/wp-content/uploads/Client-1-of-Nguyen-Art-Gallery.jpg" },  ];
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

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {feedbackList.map(item => (
                        <CustomerFeedbackItem key={item.id} title={item.title[language]} image={ API_URL_IMAGE + item.thumb} comment={item.comment[language]} />
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
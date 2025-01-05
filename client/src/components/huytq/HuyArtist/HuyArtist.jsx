import React, { useState } from 'react'
import TranhItem from './TranhItem';
import TieuSu from './TieuSu';
import YeuCauTuVan from './YeuCauTuVan';

const HuyArtist = () => {
    const [activeContent, setActiveContent] = useState("Tác Phẩm");

    

    // Nội dung theo từng tab
    const content = {
        "Tác Phẩm": <TranhItem/>,
        "Tiểu Sử & Sự Nghiệp": <TieuSu/>,
        "Yêu Cầu Tư Vấn": <YeuCauTuVan/>
    };
    return (
        <div className='mt-40'>
            <h1 className='text-4xl font-semibold text-center'>Họa Sĩ Đỗ Khải – Chất Liệu Sơn Mài – Kiệt Tác Nghệ Thuật</h1>
            <div className='my-5'>
                <ul className="flex items-center justify-center w-full px-10 text-xl">
                    {Object.keys(content).map((tab) => (
                        <li
                            key={tab}
                            onClick={() => setActiveContent(tab)} // Cập nhật nội dung khi click
                            className={`cursor-pointer transition duration-300 rounded-lg  px-40 py-3 ${activeContent === tab
                                ? "text-gray-700 font-medium"
                                : "text-gray-500 hover:bg-[#d0d0d0] "
                                }`}
                        >
                            <a className={` px-4 py-2 transition duration-300 ${activeContent === tab
                                ? "border-4 border-gray-700  rounded-full"
                                : "hover:text-gray-800 font-medium "
                                }`} href="#">{tab}</a>
                        </li>
                    ))}
                </ul>
            </div>


            <div className="mt-5  text-lg text-gray-700 mb-10">
                {content[activeContent]}
            </div>
        </div>
    )
}

export default HuyArtist
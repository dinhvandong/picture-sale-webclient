import React, { useRef } from 'react';
import Tan from './special.json';


const Specialcoll = () => {
    const scrollRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
        scrollRef.current.style.cursor = 'grabbing'; // Hiển thị con trỏ là 'grabbing'
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // Tăng tốc độ cuộn
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleMouseUpOrLeave = () => {
        isDragging.current = false;
        scrollRef.current.style.cursor = 'grab'; // Quay lại con trỏ ban đầu
    };

    const scrollRef2 = useRef(null);
    const isDragging2 = useRef(false);
    const startX2 = useRef(0);
    const scrollLeft2 = useRef(0);

    const handleMouseDown2 = (e) => {
        isDragging2.current = true;
        startX2.current = e.pageX - scrollRef2.current.offsetLeft;
        scrollLeft2.current = scrollRef2.current.scrollLeft;
        scrollRef2.current.style.cursor = 'grabbing'; // Hiển thị con trỏ là 'grabbing'
    };
    const handleMouseMove2 = (e) => {
        if (!isDragging2.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef2.current.offsetLeft;
        const walk = (x - startX2.current) * 2; // Tăng tốc độ cuộn
        scrollRef2.current.scrollLeft = scrollLeft2.current - walk;
    };

    const handleMouseUpOrLeave2 = () => {
        isDragging2.current = false;
        scrollRef2.current.style.cursor = 'grab'; // Quay lại con trỏ ban đầu
    };

    const scrollRef3 = useRef(null);
    const isDragging3 = useRef(false);
    const startX3 = useRef(0);
    const scrollLeft3 = useRef(0);

    const handleMouseDown3 = (e) => {
        isDragging3.current = true;
        startX3.current = e.pageX - scrollRef3.current.offsetLeft;
        scrollLeft3.current = scrollRef3.current.scrollLeft;
        scrollRef3.current.style.cursor = 'grabbing'; // Hiển thị con trỏ là 'grabbing'
    };
    const handleMouseMove3 = (e) => {
        if (!isDragging3.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef3.current.offsetLeft;
        const walk = (x - startX3.current) * 2; // Tăng tốc độ cuộn
        scrollRef3.current.scrollLeft = scrollLeft3.current - walk;
    };

    const handleMouseUpOrLeave3 = () => {
        isDragging3.current = false;
        scrollRef3.current.style.cursor = 'grab'; // Quay lại con trỏ ban đầu
    };

    const scrollRef4 = useRef(null);
    const isDragging4 = useRef(false);
    const startX4 = useRef(0);
    const scrollLeft4 = useRef(0);

    const handleMouseDown4 = (e) => {
        isDragging4.current = true;
        startX4.current = e.pageX - scrollRef4.current.offsetLeft;
        scrollLeft4.current = scrollRef4.current.scrollLeft;
        scrollRef4.current.style.cursor = 'grabbing'; // Hiển thị con trỏ là 'grabbing'
    };
    const handleMouseMove4 = (e) => {
        if (!isDragging4.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef4.current.offsetLeft;
        const walk = (x - startX4.current) * 2; // Tăng tốc độ cuộn
        scrollRef4.current.scrollLeft = scrollLeft4.current - walk;
    };

    const handleMouseUpOrLeave4 = () => {
        isDragging4.current = false;
        scrollRef4.current.style.cursor = 'grab'; // Quay lại con trỏ ban đầu
    };




    return (
        <div className='w-full h-max bg-[#27232E] flex flex-col'>
            <div className='w-full h-[120px] bg-[#27232E]'></div>
            <div className='w-full h-[300px] flex flex-col items-center justify-center bg-gray-800'>
                <p className='text-[50px] font-semibold text-white leading-none'>Special Collections of</p>
                <p className='text-[50px] font-semibold text-white leading-none'>Vietnamese Paintings &</p>
                <p className='text-[50px] font-semibold text-white leading-none'>Artworks</p>
            </div>
            <div className='w-full h-[100px] flex flex-col justify-center items-center'>
                <p className='text-[18px] text-white leading-none'>Vietnamese paintings in collections at Nguyen Art Gallery are presented to you here. Admire the inspirations and enthusiasm of painters and purchase yourself one of them or</p>
                <p className='text-[18px] text-white leading-none'>more.</p>
            </div>
            <div className="flex flex-col w-full h-auto px-6 mt-4">
                <p className="text-[18px] text-[#F9FF9A] lg:text-[28px] font-bold">The “Street Architectures” by Pham Hoang Minh</p>
                <button className="w-[150px] mt-2 h-[40px] text-white hover:bg-white hover:text-[#27232E] font-bold bg-[#27232E] border-2 border-white">
                    SEE DETAILS
                </button>
                <div className="w-[400px] h-[2px] bg-white mt-2"></div>
                <div
                    ref={scrollRef}
                    className="grid grid-flow-col auto-cols-[25%] gap-4 overflow-hidden mt-3 cursor-grab"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUpOrLeave}
                    onMouseLeave={handleMouseUpOrLeave}
                    style={{
                        userSelect: 'none', // Ngăn chọn văn bản khi kéo
                    }}
                >
                    {Tan.map((itemm) => (
                        <div
                            key={itemm.id}
                            className="flex flex-col items-center bg-[#27232E] hover:bg-[#222222] w-full
                            transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src={itemm.img}
                                alt={`img-${itemm.id}`}
                                className="object-cover w-full h-auto"
                            />
                            <p className="text-[13px] m-1 leading-none font-bold text-gray-400 mt-4">
                                {itemm.text1}
                            </p>
                            <p className="text-[15px] m-1 leading-none text-[#FFEF96]">
                                {itemm.text2}
                            </p>
                            <div className="w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400">
                                <p className="text-[15px] font-bold text-white">ARTIST:</p>
                                <p className="text-[14px] text-white ml-16">{itemm.text3}</p>
                            </div>
                            <div className="w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400">
                                <p className="text-[15px] font-bold text-white">MATERIAL:</p>
                                <p className="text-[14px] text-white ml-10">{itemm.text4}</p>
                            </div>
                            <div className="w-full h-[30px] flex items-center border-b-[0.5px] border-gray-400">
                                <p className="text-[15px] flex flex-row font-bold text-white">
                                    SIZE:<span className="ml-2 text-[14px] font-normal">{itemm.text5}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full h-[70px] '></div>
            <div className="flex flex-col w-full h-auto px-6 mt-4">
                <p className="text-[18px] text-[#F9FF9A] lg:text-[28px] font-bold">The “Street Architectures” by Pham Hoang Minh</p>
                <button className="w-[150px] mt-2 h-[40px] text-white hover:bg-white hover:text-[#27232E] font-bold bg-[#27232E] border-2 border-white">
                    SEE DETAILS
                </button>
                <div className="w-[400px] h-[2px] bg-white mt-2"></div>
                <div
                    ref={scrollRef2}
                    className="grid grid-flow-col auto-cols-[25%] gap-4 overflow-hidden mt-3 cursor-grab"
                    onMouseDown={handleMouseDown2}
                    onMouseMove={handleMouseMove2}
                    onMouseUp={handleMouseUpOrLeave2}
                    onMouseLeave={handleMouseUpOrLeave2}
                    style={{
                        userSelect: 'none', // Ngăn chọn văn bản khi kéo
                    }}
                >
                    {Tan.map((itemm) => (
                        <div
                            key={itemm.id}
                            className="flex flex-col items-center bg-[#27232E] hover:bg-[#222222] w-full
                            transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src={itemm.img}
                                alt={`img-${itemm.id}`}
                                className="object-cover w-full h-auto"
                            />
                            <p className="text-[13px] m-1 leading-none font-bold text-gray-400 mt-4">
                                {itemm.text1}
                            </p>
                            <p className="text-[15px] m-1 leading-none text-[#FFEF96]">
                                {itemm.text2}
                            </p>
                            <div className="w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400">
                                <p className="text-[15px] font-bold text-white">ARTIST:</p>
                                <p className="text-[14px] text-white ml-16">{itemm.text3}</p>
                            </div>
                            <div className="w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400">
                                <p className="text-[15px] font-bold text-white">MATERIAL:</p>
                                <p className="text-[14px] text-white ml-10">{itemm.text4}</p>
                            </div>
                            <div className="w-full h-[30px] flex items-center border-b-[0.5px] border-gray-400">
                                <p className="text-[15px] flex flex-row font-bold text-white">
                                    SIZE:<span className="ml-2 text-[14px] font-normal">{itemm.text5}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full h-[70px] '></div>
            <div className="flex flex-col w-full h-auto px-6 mt-4">
            <p className="text-[18px] text-[#F9FF9A] lg:text-[28px] font-bold">The “Street Architectures” by Pham Hoang Minh</p>
                <button className="w-[150px] mt-2 h-[40px] text-white hover:bg-white hover:text-[#27232E] font-bold bg-[#27232E] border-2 border-white">
                    SEE DETAILS
                </button>
                <div className="w-[400px] h-[2px] bg-white mt-2"></div>
                <div
                    ref={scrollRef3}
                    className="grid grid-flow-col auto-cols-[25%] gap-4 overflow-hidden mt-3 cursor-grab"
                    onMouseDown={handleMouseDown3}
                    onMouseMove={handleMouseMove3}
                    onMouseUp={handleMouseUpOrLeave3}
                    onMouseLeave={handleMouseUpOrLeave3}
                    style={{
                        userSelect: 'none', // Ngăn chọn văn bản khi kéo
                    }}
                >
                    {Tan.map((itemm) => (
                        <div
                            key={itemm.id}
                            className="flex flex-col items-center bg-[#27232E] hover:bg-[#222222] w-full
                            transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src={itemm.img}
                                alt={`img-${itemm.id}`}
                                className="object-cover w-full h-auto"
                            />
                            <p className="text-[13px] m-1 leading-none font-bold text-gray-400 mt-4">
                                {itemm.text1}
                            </p>
                            <p className="text-[15px] m-1 leading-none text-[#FFEF96]">
                                {itemm.text2}
                            </p>
                            <div className="w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400">
                                <p className="text-[15px] font-bold text-white">ARTIST:</p>
                                <p className="text-[14px] text-white ml-16">{itemm.text3}</p>
                            </div>
                            <div className="w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400">
                                <p className="text-[15px] font-bold text-white">MATERIAL:</p>
                                <p className="text-[14px] text-white ml-10">{itemm.text4}</p>
                            </div>
                            <div className="w-full h-[30px] flex items-center border-b-[0.5px] border-gray-400">
                                <p className="text-[15px] flex flex-row font-bold text-white">
                                    SIZE:<span className="ml-2 text-[14px] font-normal">{itemm.text5}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full h-[70px] '></div>
            <div className="flex flex-col w-full h-auto px-6 mt-4">
            <p className="text-[18px] text-[#F9FF9A] lg:text-[28px] font-bold">The “Street Architectures” by Pham Hoang Minh</p>
                <button className="w-[150px] mt-2 h-[40px] text-white hover:bg-white hover:text-[#27232E] font-bold bg-[#27232E] border-2 border-white">
                    SEE DETAILS
                </button>
                <div className="w-[400px] h-[2px] bg-white mt-2"></div>
                <div
                    ref={scrollRef4}
                    className="grid grid-flow-col auto-cols-[25%] gap-4 overflow-hidden mt-3 cursor-grab"
                    onMouseDown={handleMouseDown4}
                    onMouseMove={handleMouseMove4}
                    onMouseUp={handleMouseUpOrLeave4}
                    onMouseLeave={handleMouseUpOrLeave4}
                    style={{
                        userSelect: 'none', // Ngăn chọn văn bản khi kéo
                    }}
                >
                    {Tan.map((itemm) => (
                        <div
                            key={itemm.id}
                            className="flex flex-col items-center bg-[#27232E] hover:bg-[#222222] w-full
                            transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                        >
                            <img
                                src={itemm.img}
                                alt={`img-${itemm.id}`}
                                className="object-cover w-full h-auto"
                            />
                            <p className="text-[13px] m-1 leading-none font-bold text-gray-400 mt-4">
                                {itemm.text1}
                            </p>
                            <p className="text-[15px] m-1 leading-none text-[#FFEF96]">
                                {itemm.text2}
                            </p>
                            <div className="w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400">
                                <p className="text-[15px] font-bold text-white">ARTIST:</p>
                                <p className="text-[14px] text-white ml-16">{itemm.text3}</p>
                            </div>
                            <div className="w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400">
                                <p className="text-[15px] font-bold text-white">MATERIAL:</p>
                                <p className="text-[14px] text-white ml-10">{itemm.text4}</p>
                            </div>
                            <div className="w-full h-[30px] flex items-center border-b-[0.5px] border-gray-400">
                                <p className="text-[15px] flex flex-row font-bold text-white">
                                    SIZE:<span className="ml-2 text-[14px] font-normal">{itemm.text5}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Specialcoll;

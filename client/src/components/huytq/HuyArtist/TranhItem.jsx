import React from 'react'
import ListTranh from './ListTranhHoaSen.json'

const TranhItem = () => {
    let randerTranh = () => {
        return ListTranh.map((iteam, index) => {
            return <div className='px-4'>
                <img src={iteam.image} alt='' />
                <div className='text-left '>
                    <h2 className='text-2xl font-semibold mt-5 pb-4'>{iteam.tenTranh}</h2>
                    <p className='font-semibold'>Họa Sĩ: <span className='font-normal '>{iteam.artist}</span></p>
                    <p className='font-semibold'>Chất Liệu: <span className='font-normal '>{iteam.chatLieu}</span></p>
                    <p className='font-semibold'>Kích Thước: <span className='font-normal '>{iteam.size}</span></p>
                </div>
                <button className=' mt-5  border-2 border-[#2a2a2a] hover:border-white transition duration-300 px-5 py-1 font-semibold text-xl'>XEM CHI TIẾT</button>
            </div>
        })
    }
    return (
        <div>
            <p className='text-center text-xl  text-gray-700 '>Cùng chiêm ngưỡng và chọn cho mình một tác phẩm nghệ thuật của họa sĩ Đỗ Khải tại Kiệt Tác Nghệ Thuật</p>
            <h1 className='text-3xl font-semibold text-center mt-6 mb-10'>TRANH HOA SEN</h1>
            <div className='grid grid-cols-4'>
                {randerTranh()}
            </div>
        </div>
    )
}

export default TranhItem
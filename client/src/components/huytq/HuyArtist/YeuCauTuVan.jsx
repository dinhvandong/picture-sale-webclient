import React from 'react'
import TranhItem from './TranhItem'

const YeuCauTuVan = () => {
  return (
    <div>
        <div className='px-16 mb-5'>
        <h3 className='text-2xl  font-medium mb-3'>Form Yêu Cầu Tư Vấn</h3>
        <p>Các trường được đánh dấu <span className='text-red-700'>*</span> là bắt buộc</p>
        <div className=''>
            <label htmlFor="" className='font-medium'>Bạn Đang Yêu Cầu Sự Tư Vấn Về Tác Phẩm <span className='text-red-700'>*</span></label>
            <input value="Họa Sĩ Đỗ Khải" className='border shadow hover:shadow-none active:shadow-2xl focus:ring w-full py-2 pl-3 mt-2' type="text" />
        </div>
        <hr className='mt-10 mb-7' />
        <p className='mb-10'>Thông Tin Của Bạn</p>
        <div className=''>
            <label htmlFor="" className='font-medium'>Họ Tên <span className='text-red-700'>*</span></label>
            <input className='border shadow  hover:shadow-none  active:shadow-2xl focus:visible-nome w-full py-2 pl-3 mt-2' type="text" />
        </div>
        <div className='mt-5'>
            <label htmlFor="" className='font-medium'>Số Điện Thoại <span className='text-red-700'>*</span></label>
            <input  className='border shadow  hover:shadow-none  active:shadow-2xl focus:ring w-full py-2 pl-3 mt-2' type="text" />
        </div>
        <div className='mt-5'>
            <label htmlFor="" className='font-medium'>Email </label>
            <input  className='border shadow  hover:shadow-none  active:shadow-2xl focus:ring w-full py-2 pl-3 mt-2' type="text" />
        </div>
        <h3 className='my-5 text-lg  font-medium mb-3'>Tin Nhắn Của Bạn (Không Bắt Buộc)</h3>
        <p>Hãy cho chúng tôi biết thêm thông tin của bạn để có thể tư vấn cho bạn tốt nhất.</p>
        <p>Ví dụ như chất liệu tranh, không gian treo tranh, ý nghĩa tác phẩm ... là bắt buộc</p>
        <div className=''>
            <textarea  className='h-56 border shadow  hover:shadow-none focus:ring active:shadow-2xl w-full py-2 pl-3 mt-1' type="text" />
            
        </div>
        <button className=' mt-7  border-2 bg-[#45474b] text-white hover:bg-[#37393c] transition duration-300 px-5 py-2 font-semibold text-xl'>GỬI YÊU CẦU</button>
        
    </div>
    <TranhItem/>
    </div>
  )
}

export default YeuCauTuVan
import React from 'react'
import TranhItem from './TranhItem'

const TieuSu = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-4 px-16 mb-12'>
                <div>
                    <img className='w-full pr-5' src='https://www.kiettacnghethuat.com/wp-content/uploads/Hoa%CC%A3-si%CC%83-Do%CC%82%CC%89-Kha%CC%89i.jpeg' alt='anh' />
                </div>
                <div className='mt-20 '>
                    <h1 className='text-3xl font-semibold mb-4'>Hành Trình Đến Với Nghệ Thuật</h1>
                    <p>Họa sĩ Đỗ Khải (tên đầy đủ là Đỗ Đức Khải) sinh năm 1969 tại Hải Dương, hiện đang sống và làm việc tại Hà Nội. Anh đã tốt nghiệp chuyên nghành Hội Họa của Trường Đại học Mỹ thuật Việt Nam năm 2000. Ngoài ra, anh từng là giáo viên Mỹ thuật và công tác tại Văn phòng Trung Ương Hội Mỹ thuật Việt Nam. Họa sĩ Đỗ Khải cũng là hội viên Hội Mỹ thuật Việt Nam đồng thời là thành viên Ban Chủ nhiệm Nhóm Họa sĩ Sơn ta Việt Nam. Anh chuyên sáng tác bằng chất liệu sơn mài và sử dụng Sơn ta truyền thống. Tranh của họa sĩ Đỗ Khải được sưu tập bởi Hội Mỹ thuật Việt Nam, Bảo tàng Lịch sử Quân sự Việt Nam, Bảo tàng Mỹ thuật Thành phố Đà Nẵng cũng như một số nhà sưu tập tư nhân trong và ngoài nước.</p>
                    <p>Hầu hết các tác phẩm nghệ thuật mang chủ đề hoa sen đều do họa sĩ Đỗ Khải vẽ trực tiếp tại hồ sen Gia Lâm. Tranh sơn mài hoa sen của anh đa dạng và hư ảo. Sen của anh chủ yếu là những gam màu trắng, lớt phớt hồng, xanh và ghi. Màu trắng cho hoa sen, màu xanh cho lá sen và màu ghi cho lá úa sắp lụi tàn. Nhìn qua, người xem tưởng như hoạ sĩ sử dụng ít màu nhưng kì thực khi xem kĩ thì mỗi bức tranh lại là một “bản giao hưởng” của sắc màu.</p>
                </div>
                <div className='col-span-2'>
                    <h1 className='text-3xl font-semibold mb-4'>Giải Thưởng Nghệ Thuật</h1>
                    <ul className='ml-5 list-disc'>
                        <li className='my-2'>Giải Nhì trong Triển lãm Mỹ thuật toàn quốc kỷ niệm 1.000 năm Thăng Long – Hà Nội năm 2010</li>
                        <li className='my-2'>4 Giải thưởng của Hội Mỹ thuật Việt Nam</li>
                        <li className='my-2'>3 Giải thưởng của Hội Mỹ thuật Hà Nội</li>
                        <li className='my-2'>2 Giải thưởng của Bộ Quốc phòng Việt Nam</li>
                        <li className='my-2'>1 Giải thưởng Bộ Văn hóa - Thể thao và Du lịch.</li>
                        <li className='my-2'>2 Giải thưởng của Ban Tuyên giáo Trung ương.</li>
                        <li className='my-2'>3 Giải thưởng của Liên hiệp các Hội Văn học Nghệ thuật Việt Nam</li>
                        <li className='my-2'>2 Giải thưởng Côn Sơn của UBND tỉnh Hải Dương.</li>
                    </ul>
                    <h1 className='text-3xl font-semibold my-4'>Hoạt Động Với Nghệ Thuật</h1>
                    <ul className='ml-5 list-disc'>
                        <li className='my-2'>2009: Triển lãm Mỹ thuật toàn quốc</li>
                        <li className='my-2'>2010: Triển lãm Mỹ thuật toàn quốc kỷ niệm 1.000 năm Thăng Long – Hà Nội</li>
                        <li className='my-2'>2012: Biennale Mỹ thuật Quốc tế lần thứ 5 tại Bắc Kinh - Trung Quốc</li>
                        <li className='my-2'>2014: Triển lãm "Cầu Long Biên - Cây Cầu của Nghệ Thuật" tại Heritage Space, Hà Nội</li><li>2014: Triển lãm của 6 Họa sĩ họ Đỗ tại Hà Nội</li>
                        <li className='my-2'>2015: Biennale Mỹ thuật Quốc tế lần thứ 6 tại Bắc Kinh - Trung Quốc</li>
                        <li className='my-2'>2015: Triển lãm "Sơn mài Việt Nam – Ottchil Hàn Quốc" tại Bảo tàng Mỹ thuật Việt Nam</li>
                        <li className='my-2'>2017: Triển lãm của Nhóm họa sĩ Sơn Ta Việt Nam (thường niên từ năm 2009)</li>
                        <li className='my-2'>2019: Triển lãm tranh sơn mài cùng các nghề truyền thống châu Á tại Bắc kinh</li>
                        <li className='my-2'>2020: Triển lãm lần thứ 5 của nhóm Họa sĩ Sơn ta Việt Nam</li>
                        
                    </ul>
                </div>
            </div>

            <TranhItem />
        </div>
    )
}

export default TieuSu
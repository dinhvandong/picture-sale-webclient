import React from 'react'
import Architctures from './Architectures.json'

const Huy = () => {
  const listArchitctures = () => {
    return Architctures.map((item, index) => {
      return<div>
        <div className="  max-w-sm overflow-hidden p-2">
          <div className="relative cursor-pointer overflow-hidden group">
            <img src={item.image} alt={index} className="w-full max-h-screen object-cover ease-in-out transition-transform duration-500 hover:scale-105" />
            <div className="absolute bottom-0 bg-[#776F63] bg-opacity-95 text-white text-center py-1 w-full translate-y-full opacity-0 transition-all ease-in-out group-hover:translate-y-0 group-hover:opacity-100 duration-500">
              <button className="font-bold text-sm">QUICK VIEW</button>

            </div>
          </div>
          <div className="pt-6 pb-6 text-center text-white">
            <h2 className="text-xs font-semibold text-gray-300 ">{item.artist}</h2>
            <h3 className="text-lg text-[#fee6b4] mb-1">{item.tenTranh}</h3>
            <div className="text-left text-sm ">
              <table className="table-fixed py-4">
                <tr className='border-b border-gray-600 '>
                  <th className="font-bold py-2">ARTIST:</th>
                  <td className='pl-5 py-2'>{item.artist}</td>
                </tr>
                <tr className='py-2 border-b border-gray-600 '>
                  <th className='font-bold py-2'>MATERIAL:</th>
                  <td className='pl-5 py-2'> {item.material}</td>
                </tr>
                <tr className=' border-b border-gray-600 '>
                  <th className="font-bold py-2">SIZE:</th>
                  <td className='pl-5 py-2'>{item.size}</td>
                </tr>
              </table>

            </div>
          </div>
        </div>

      </div>
    })
  }

  return (
    <div className='bg-[#27242E] '>

      <div className='artis-profile text-white px-[50px]'>
        <h1 className='text-center text-2xl text-[#ffef96] font-bold my-[18px] mt-7'>Artist Pham Hoang Minh – Vietnamese Oil & Acrylic Paintings – Nguyen Art Gallery</h1>
        <div className='grid grid-cols-2 gap-5 text-lg'>
          <div className='mt-[60px] p-2'>
            <img src='https://www.nguyenartgallery.com/wp-content/uploads/pham-hoang-minh-artist.jpg' alt='anh' />
          </div>
          <div>
            <p className=''>Pham Hoang Minh was born in the small village of Dong Trieu of Quang Ninh Province, Vietnam in 1977. In 2000, he graduated from the University of Industrial Fine Arts, specializing in a monumental scientific study (large and wall painting). He has held many exhibitions in Vietnam and is also a popular face in many art auctions. He loves Hanoi a lot, that’s why his artworks always favor Hanoi. Pham Hoang Minh is interested in the street scene with the direction and breadth of the present life. Many ambassadors from many countries around the world collect his paintings, such as Mr. Ng Teck Hean, Ambassador of Singapore to Vietnam, The Netherlands Ambassador to Malaysia, Brazil’s Ambassador to Beijing, China, etc.</p>
            <h1 className=' text-2xl text-[#ffef96] font-bold mt-5 mb-3'>Exhibitions & Art Events</h1>
            <ul className='list-disc ml-5'>
              <li className='my-2'>
                2001: National Fine Arts Exhibition
              </li>
              <li className='my-2'>
                2002: The Club of Young Vietnamese Artists Exhibitions, Hanoi
              </li>
              <li className='my-2'>
                2004: The Club of Young Vietnamese Artists Exhibitions, Hanoi
              </li>
              <li className='my-2'>2004: National Young Artists Exhibition – Hanoi</li>
              <li className='my-2'>2005: The Club of Young Vietnamese Artists Exhibitions, Hanoi</li>
              <li className='my-2'>2006: Hanoi Fine Arts Exhibition – Group exhibition</li>
              <li className='my-2'>2007: Take part in Annual Exhibition for Hanoi Fine art Association</li>
              <li className='my-2'>2008: Solo exhibition at Nguyen Art Gallery, Hanoi</li>
              <li className='my-2'>2009: Group exhibition at Exhibition House in Hanoi</li>
              <li className='my-2'>2010: Annual National Exhibition in Hanoi</li>
              <li className='my-2'>2011: Group exhibition “Lives” at the Fine Art Museum in Ho Chi Minh</li>
              <li className='mt-2'>2013: Organize the Solo exhibition in November at Nguyen Art Gallery in Hanoi</li>
            </ul>
          </div>
        </div>
        <h1 className='text-center text-2xl text-[#ffef96] font-bold my-10'>Highlight Artworks of Pham Hoang Minh</h1>
      </div>
      <div className='Paintings-Architectures '>
        <h1 className='text-center text-3xl text-[#FFCC00] font-semibold mb-10'>Paintings of Street Architectures</h1>
        <div className='grid grid-cols-4 gap-1'>
        {listArchitctures()}

        </div>
      </div>
      <div className='Paintings-Streets '>
      <h1 className='text-center text-3xl text-[#FFCC00] font-semibold mb-10'>Paintings of Streets
      </h1>
        <div className='grid grid-cols-4 gap-1'>
        {listArchitctures()}

        </div>
      </div>
      <div className='Paintings-Markets '>
      <h1 className='text-center text-3xl text-[#FFCC00] font-semibold mb-10'>Paintings of Street Markets
      </h1>
        <div className='grid grid-cols-4 gap-1'>
        {listArchitctures()}

        </div>
      </div>
      <div className='Other '>
      <h1 className='text-center text-3xl text-[#FFCC00] font-semibold mb-10'>Other Paintings
      </h1>
        <div className='grid grid-cols-3 gap-1'>
        {listArchitctures()}

        </div>
      </div>
    </div>
  )
}

export default Huy
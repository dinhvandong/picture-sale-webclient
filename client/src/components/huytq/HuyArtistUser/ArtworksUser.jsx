import React from 'react'
import Architctures from './Architectures.json'

const ArtworksUser = () => {
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
    <div className='Paintings-Architectures '>
        <h1 className='text-center text-3xl text-[#FFCC00] font-semibold mb-5'>Highlight Artworks of Dau Quang Toan</h1>
        <div className='grid grid-cols-3 gap-1'>
        {listArchitctures()}

        </div>
      </div>
  )
}

export default ArtworksUser
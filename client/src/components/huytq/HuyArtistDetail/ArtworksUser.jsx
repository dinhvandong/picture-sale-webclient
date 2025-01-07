import React from 'react'
// import Architctures from './Architectures.json'
import { useNavigate } from 'react-router-dom';


const ArtworksUser = ({ language, artist, artistPicture, API_URL_IMAGE }) => {
  const navigate = useNavigate();
  const gotoSpecialArtCollection = (ma) =>
    navigate(`/picture-art-detail/${ma}`);
  const listArchitctures = () => {
    return artistPicture.map((itemm, index) => {
      return <div>
        <div
         onClick={()=>gotoSpecialArtCollection(itemm.id)}
          key={itemm.id}
          className="flex flex-col items-center bg-[#27232E] hover:bg-[#222222] w-full
          transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
        >
          <img
            
            src={API_URL_IMAGE + itemm.thumb}
            alt={`img-${itemm.id}`}
            className="object-cover w-full h-auto"
          />
          <p className="text-[13px] m-1 leading-none font-bold text-gray-400 mt-4">
            {itemm.artist.name[language]}
          </p>
          <p className="text-[15px] m-1 leading-none text-[#FFEF96]">
            {itemm.name[language]}
          </p>
          <div className="w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400">
            <p className="text-[15px] font-bold text-white">ARTIST:</p>
            <p className="text-[14px] text-white ml-16">{itemm.artist.name[language]}</p>
          </div>
          <div className="w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400">
            <p className="text-[15px] font-bold text-white">MATERIAL:</p>
            <p className="text-[14px] text-white ml-10"></p>
          </div>
          <div className="w-full h-[30px] flex items-center border-b-[0.5px] border-gray-400">
            <p className="text-[15px] flex flex-row font-bold text-white">
              SIZE:<span className="ml-2 text-[14px] font-normal">{itemm.size}</span>
            </p>
          </div>
        </div>

      </div>
    })
  }
  const translations = {
    HighlightArtworks: { en: 'Highlight Artworks', vi: 'Tác Phẩm Nghệ thuật Nổi Bật' },
    PaintingsofLotuses: { en: 'Paintings of Lotuses', vi: 'Tranh Hoa Sen' },
   
};
  return (
    <div className='Paintings-Architectures mt-10'>
      
      <h1 className='text-center text-3xl text-[#ffef96] font-semibold mb-5'>{translations.HighlightArtworks[language]} {artist.name[language]}</h1>
      <h1 className='text-center text-3xl text-[#ffef96] font-semibold mt-5 mb-7'>{translations.PaintingsofLotuses[language]}</h1>
      <div className='grid grid-cols-3 gap-4'>
        {listArchitctures()}

      </div>
    </div>
  )
}

export default ArtworksUser
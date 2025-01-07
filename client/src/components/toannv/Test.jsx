import React, { useContext, useState } from 'react';
import Toan from './toan.json';
import LandscapePaintings from '../quanhm/LandscapePaintings';
import { LanguageContext } from '../../LanguageContext';

const ToanTest = () => {
  // const [language, setLanguage] = useState('en');

    const { language, changeLanguage } = useContext(LanguageContext);



  // const changeLanguage = (lang) => {
  //   setLanguage(lang);
  // };

  

  const content = {
    en: {
      title: 'Landscape Paintings | | Outstanding Collection of Landscape Paintings by Famous Vietnamese Artists',
      description1:
        'Vietnamese paintings of landscapes at Nguyen Art Gallery include beaches, mountains, flora, and countryside. The physical elements of landforms in Vietnam combine with others',
      description2:
        'help artists compose a number of scenes from rugged, peaceful to romantic paintings. Cultural differences may affect the way people perceive these artworks. Do not worry, NAGs',
      description3:
        'collection of landscape paintings brings a wide variety of styles, materials, and dimensions so that there is something for everyone’s tastes.',
      section1: {
        title: 'Complete Your Collection with Our Sophisticated Landscape Paintings',
        text: [
          'The old quarter has always been one of the favorite themes in paintings of Vietnamese artists.',
          'The artworks of streets in Vietnam not only create a vibrant ambiance for your living space but help you find inner peace in your life.',
          'With a collection of street paintings of more than 75 artworks by famous Vietnamese Artists, you will have various choices to select one that suits you most.',
        ],
      },
      section2: {
        title: 'Complete Your Collection with Our Sophisticated Landscape Paintings',
        text: [
          'Using familiar materials such as lacquer and oil paint combined with ingenious brushstrokes, our landscape paintings by famous Vietnamese artists will give you one step closer to nature.',
          'Temporarily steer away from the pressure of life and enjoy the pure and untouched beauty of villages, mountains, and rivers from one of our landscape paintings.',
          'It is no doubt that your living space will brighten up and be more stunning than it has ever been.',
        ],
      },
    },
    vi: {
      title: 'Tranh Phong Cảnh | | Bộ Sưu Tập Xuất Sắc Về Tranh Phong Cảnh Của Các Họa Sĩ Nổi Tiếng Việt Nam',
      description1:
        'Tranh phong cảnh Việt Nam tại Nguyen Art Gallery bao gồm bãi biển, núi non, thảm thực vật và miền quê. Các yếu tố địa hình tại Việt Nam kết hợp với các yếu tố khác',
      description2:
        'giúp các họa sĩ tạo ra nhiều cảnh sắc từ hùng vĩ, bình yên đến lãng mạn. Sự khác biệt văn hóa có thể ảnh hưởng đến cách mọi người cảm nhận các tác phẩm nghệ thuật này. Đừng lo, NAGs',
      description3:
        'bộ sưu tập tranh phong cảnh mang đến nhiều phong cách, chất liệu và kích thước để phù hợp với sở thích của mọi người.',
      section1: {
        title: 'Hoàn Thiện Bộ Sưu Tập Của Bạn Với Tranh Phong Cảnh Tinh Tế',
        text: [
          'Phố cổ luôn là một trong những chủ đề yêu thích của các họa sĩ Việt Nam.',
          'Các tác phẩm tranh về đường phố Việt Nam không chỉ tạo ra một không gian sống sinh động mà còn giúp bạn tìm thấy sự bình yên trong cuộc sống.',
          'Với bộ sưu tập hơn 75 tác phẩm tranh đường phố của các họa sĩ nổi tiếng Việt Nam, bạn sẽ có nhiều lựa chọn để chọn ra một tác phẩm phù hợp nhất với mình.',
        ],
      },
      section2: {
        title: 'Hoàn Thiện Bộ Sưu Tập Của Bạn Với Tranh Phong Cảnh Tinh Tế',
        text: [
          'Sử dụng các chất liệu quen thuộc như sơn mài và sơn dầu kết hợp với nét vẽ tinh tế, tranh phong cảnh của các họa sĩ Việt Nam sẽ đưa bạn đến gần hơn với thiên nhiên.',
          'Tạm rời xa áp lực cuộc sống và tận hưởng vẻ đẹp thuần khiết và nguyên sơ của làng quê, núi non và sông nước từ một trong những bức tranh phong cảnh của chúng tôi.',
          'Không nghi ngờ gì nữa, không gian sống của bạn sẽ trở nên rực rỡ và tuyệt đẹp hơn bao giờ hết.',
        ],
      },
    },
  };


  return (
    <div className="flex flex-col w-full h-max">
      <div className="w-full h-[120px]"></div>
      <LandscapePaintings/>
      {/* <div className="w-full h-[800px] bg-cover bg-[url(https://www.nguyenartgallery.com/wp-content/uploads/Vietnamese-Paintings-Artists-1-2048x1024.jpg)]"></div> */}
      {/* Language Toggle */}
      {/* <div className="flex justify-end p-4">
        <button
          onClick={() => changeLanguage('en')}
          className={`mx-2 px-3 py-1 ${language === 'en' ? 'bg-yellow-500 text-white' : 'bg-white text-black'} rounded`}
        >
          English
        </button>
        <button
          onClick={() => changeLanguage('vi')}
          className={`mx-2 px-3 py-1 ${language === 'vi' ? 'bg-yellow-500 text-white' : 'bg-white text-black'} rounded`}
        >
          Tiếng Việt
        </button>
      </div> */}

      {/* Content */}
      <div className="flex flex-col items-center w-full h-max bg-[#27242E]">
        <p className="text-[#FFEF96] mt-4 font-bold text-[30px]">{content[language].title}</p>
        <p className="m-1 leading-none text-white">{content[language].description1}</p>
        <p className="m-1 leading-none text-white">{content[language].description2}</p>
        <p className="m-1 leading-none text-white">{content[language].description3}</p>
        <div className="flex flex-col w-[65%] h-[800px] bg-[#27242E]">
          <div className="flex flex-row w-full mt-5 h-1/2">
            <div className="flex items-center justify-center w-1/2 h-full p-3">
              <div className="w-full h-[70%] flex flex-col">
                <div className="w-full h-[20%] flex flex-col items-center justify-center">
                  <span className="text-[#FFEF96] m-1 leading-none font-bold text-[25px]">
                    {content[language].section1.title}
                  </span>
                </div>
                <div className="w-full h-[80%] mt-4 flex flex-col justify-center">
                  {content[language].section1.text.map((text, index) => (
                    <p key={index} className="m-1 font-bold leading-none text-white">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex w-1/2 h-full bg-cover bg-[url(https://www.nguyenartgallery.com/wp-content/uploads/bedroom-with-landscape-paintings-by-famous-artirsts.jpg)]"></div>
          </div>
          <div className="flex flex-row w-full h-1/2">
            <div className="flex w-1/2 h-full bg-cover bg-[url(https://www.nguyenartgallery.com/wp-content/uploads/living-room-with-landscape-paintings.jpg)]"></div>
            <div className="flex items-center justify-center w-1/2 h-full p-3">
              <div className="w-full h-[70%] flex flex-col">
                <div className="w-full h-[20%] flex flex-col items-center justify-center">
                  <span className="text-[#FFEF96] m-1 leading-none font-bold text-[25px]">
                    {content[language].section2.title}
                  </span>
                </div>
                <div className="w-full h-[80%] mt-4 flex flex-col justify-center">
                  {content[language].section2.text.map((text, index) => (
                    <p key={index} className="m-1 font-bold leading-none text-white">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      


        <p className='m-1 mt-10 leading-none text-white'>All artworks in Nguyen Art Gallery are authentic Vietnam paintings that pass through the strict testing process of materials, topics, and ideas of artists followed by certifications of</p>
        <p className='m-1 leading-none text-white'>original painting with the signature of authors. Hence, you can take it easy once ordering our original & high-quality paintings.</p>
        <p className=' text-white text-[20px] mt-16 font-bold'>CLASSIFICATIONS</p>
        <div className='w-full h-[100px] flex justify-between items-center pr-16 pl-16 bg-[#27242E]'>
          <span className="relative text-[18px] inline-block font-bold cursor-pointer text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-slate-400 after:transition-all after:duration-300 hover:after:w-full">All Landscape Paintings</span>
          <span className="relative text-[18px] inline-block font-bold cursor-pointer text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-slate-400 after:transition-all after:duration-300 hover:after:w-full">Oil Paintings</span>
          <span className="relative text-[18px] inline-block font-bold cursor-pointer text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-slate-400 after:transition-all after:duration-300 hover:after:w-full">Lacquer Paintings</span>
          <span className="relative text-[18px] inline-block font-bold cursor-pointer text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-slate-400 after:transition-all after:duration-300 hover:after:w-full">Acrylic Paintings</span>
          <span className="relative text-[18px] inline-block font-bold cursor-pointer text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-slate-400 after:transition-all after:duration-300 hover:after:w-full">Horizontal Paintings</span>
          <span className="relative text-[18px] inline-block font-bold cursor-pointer text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-slate-400 after:transition-all after:duration-300 hover:after:w-full">Vertical Paintings</span>
          <span className="relative text-[18px] inline-block font-bold cursor-pointer text-white after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-slate-400 after:transition-all after:duration-300 hover:after:w-full">Square Paintings</span>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full p-3 gap-4 bg-[#27242E]'>
        {Toan.map((item) => (
          <div
            key={item.id}
            className='flex flex-col items-center bg-[#27242E] hover:bg-[#222222] max-w-fit mx-auto 
                 transform hover:scale-[1.02] hover:shadow-lg transition-all duration-300'
          >
            <img
              src={item.img}
              alt={`img-${item.id}`}
              className="object-cover w-full h-auto"
            />
            <p className='text-[13px] m-1 leading-none font-bold text-gray-400 mt-4'>{item.text1}</p>
            <p className='text-[15px] m-1 leading-none text-[#FFEF96]'>{item.text2}</p>

            <div className='w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400'>
              <p className='text-[15px] font-bold text-white'>ARTIST:</p>
              <p className='text-[14px] text-white ml-16'>{item.text3}</p>
            </div>

            <div className='w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400'>
              <p className='text-[15px] font-bold text-white'>MATERIAL:</p>
              <p className='text-[14px] text-white ml-10'>{item.text4}</p>
            </div>

            <div className='w-full h-[30px] flex items-center flex-row border-b-[0.5px] border-gray-400'>
              <p className='text-[15px] font-bold text-white'>SIZE:</p>
              <p className='text-[14px] text-white ml-20'>{item.text5}</p>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default ToanTest
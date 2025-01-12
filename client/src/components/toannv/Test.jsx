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
      footer: {
        text1:
          'All artworks in Nguyen Art Gallery are authentic Vietnam paintings that pass through the strict testing process of materials, topics, and ideas of artists followed by certifications of',
        text2:
          'original painting with the signature of authors. Hence, you can take it easy once ordering our original & high-quality paintings.',
        title: 'CLASSIFICATIONS',
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
      footer: {
        text1:
          'Tất cả các tác phẩm nghệ thuật tại Nguyen Art Gallery đều là tranh Việt Nam chính gốc, đã trải qua quy trình kiểm tra nghiêm ngặt về chất liệu, chủ đề và ý tưởng của các họa sĩ, kèm theo chứng nhận',
        text2:
          'tranh gốc với chữ ký của tác giả. Vì vậy, bạn hoàn toàn có thể yên tâm khi đặt mua tranh gốc & chất lượng cao của chúng tôi.',
        title: 'PHÂN LOẠI',
      },
    },
  };



  return (
    <div className="flex flex-col w-full h-max">
      <div className="w-full md:h-[120px]"></div>
      <LandscapePaintings />
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
        {/* Title */}
        <p className="text-[#FFEF96] mt-4 font-bold text-[20px] md:text-[30px] text-center">
          {content[language].title}
        </p>

        {/* Descriptions */}
        <p className="m-1 leading-none text-white text-sm md:text-base text-center">
          {content[language].description1}
        </p>
        <p className="m-1 leading-none text-white text-sm md:text-base text-center">
          {content[language].description2}
        </p>
        <p className="m-1 leading-none text-white text-sm md:text-base text-center">
          {content[language].description3}
        </p>

        {/* Content Section */}
        <div className="flex flex-col w-full md:w-[65%] h-auto md:h-[800px] bg-[#27242E]">
          {/* First Section */}
          <div className="flex flex-col md:flex-row w-full mt-5 h-auto md:h-1/2">
            <div className="flex items-center justify-center w-full md:w-1/2 h-auto md:h-full p-3">
              <div className="w-full h-auto flex flex-col">
                <div className="w-full h-auto flex flex-col items-center justify-center">
                  <span className="text-[#FFEF96] m-1 leading-none font-bold text-[18px] md:text-[25px] text-center">
                    {content[language].section1.title}
                  </span>
                </div>
                <div className="w-full h-auto mt-4 flex flex-col justify-center">
                  {content[language].section1.text.map((text, index) => (
                    <p key={index} className="m-1 font-bold leading-none text-white text-sm text-center">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex w-full md:w-1/2 h-[500px] md:h-full bg-cover bg-[url(https://www.nguyenartgallery.com/wp-content/uploads/bedroom-with-landscape-paintings-by-famous-artirsts.jpg)]"></div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col md:flex-row w-full h-auto md:h-1/2">
            <div className="flex w-full md:w-1/2 h-[500px] md:h-full bg-cover bg-[url(https://www.nguyenartgallery.com/wp-content/uploads/living-room-with-landscape-paintings.jpg)]"></div>
            <div className="flex items-center justify-center w-full md:w-1/2 h-auto md:h-full p-3">
              <div className="w-full h-auto flex flex-col">
                <div className="w-full h-auto flex flex-col items-center justify-center">
                  <span className="text-[#FFEF96] m-1 leading-none font-bold text-[18px] md:text-[25px] text-center">
                    {content[language].section2.title}
                  </span>
                </div>
                <div className="w-full h-auto mt-4 flex flex-col justify-center">
                  {content[language].section2.text.map((text, index) => (
                    <p key={index} className="m-1 font-bold leading-none text-white text-sm text-center">
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="flex flex-col items-center mt-10 space-y-2">
          <p className="text-white text-sm text-center md:text-base leading-snug px-4">
            {content[language].footer.text1}
          </p>
          <p className="text-white text-sm text-center md:text-base leading-snug px-4">
            {content[language].footer.text2}
          </p>
        </div>

        {/* Classification Title */}
        <p className="text-white text-[16px] md:text-[20px] mt-16 font-bold text-center">
          {content[language].footer.title}
        </p>

      </div>



    </div>
  )
}

export default ToanTest
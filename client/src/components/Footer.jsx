import React,{ useContext} from 'react'
import { LanguageContext } from '../LanguageContext';

const Footer = () => {
        const { language} = useContext(LanguageContext);
    const translations = {
        DavinciArtGallery: { en: 'Davinci Art Gallery', vi: 'Phòng trưng bày nghệ thuật Davinci' },
        DavinciArt: { en: 'Davinci Art gallery is established for original and high-quality Vietnamese artworks & paintings. The name Nguyen Art means “Original Art”. The gallery focuses on talented young emerging artists in Vietnam and bring their finest artworks to the world.', vi: 'Phòng trưng bày nghệ thuật Davinci được thành lập để trưng bày các tác phẩm nghệ thuật và tranh vẽ nguyên gốc và chất lượng cao của Việt Nam. Cái tên Nguyễn Art có nghĩa là “Nghệ thuật nguyên thủy”. Phòng trưng bày tập trung vào các nghệ sĩ trẻ tài năng mới nổi ở Việt Nam và mang những tác phẩm nghệ thuật đẹp nhất của họ ra thế giới.' },
        PlanaVisit: { en: 'Plan a Visit', vi: 'Lập kế hoạch chuyến thăm' },
        Address1: { en: 'Address 1: 31A Van Mieu Street, Dong Da District, Hanoi', vi: 'Địa chỉ 1: 31A Văn Miếu, Quận Đống Đa, Hà Nội' },
        Address2: { en: 'Address 2: 4th Floor - Culture Avenue, Lotte West Lake, Tay Ho District, Hanoi', vi: 'Địa chỉ 2: Tầng 4 - Đại lộ Văn hóa, Lotte Tây Hồ, Quận Tây Hồ, Hà Nội' },
        GalleryManager: { en: 'Gallery Manager', vi: 'Trình quản lý thư viện' },
        AboutNA: { en: "About NAG", vi: "Về NAG" },
        OpenDaily: { en: "Open Daily", vi: "Mở hàng ngày" },
        AboutUs: { en: "About Us", vi: "Về chúng tôi" },
        PlanYourVisit: { en: "Plan Your Visit", vi: "Lập kế hoạch chuyến thăm" },
        Exhibitions: { en: "Exhibitions", vi: "Triển lãm" },
        TheArtAppraiser: { en: "The Art Appraiser", vi: "Người thẩm định nghệ thuật" },
        AboutNAG: { en: "About NAG", vi: "Giới thiệu về NAG" },
        Closed : { en: "Closed on Vietnamese Public Holidays", vi: "Đóng cửa vào các ngày lễ của Việt Nam" },
        Admission : { en: "Admission Free", vi: "Vào cửa miễn phí" },

    }
    return (
        <div className='w-full flex flex-col items-center justify-center h-auto bg-black text-white'>

            <div className='mt-[50px] w-1/2'>

                <p className='font-bold text-center'>
                    {translations.DavinciArtGallery[language]}
                </p>
                <p className='text-center'>
                    {translations.DavinciArt[language]}
                </p>
            </div>

            <div>
                <p className='font-bold text-center mt-5'>
                    {translations.PlanaVisit[language]}
                </p>
                <p>
                    {translations.Address1[language]}
                </p>
                <p>
                    {translations.Address2[language]}
                </p>
            </div>

            <div className='text-center mt-5'>
                <p className=' font-bold'>Hotline:</p>
                <p>+84 396 295 998</p>
                <p>+84 909 896 286</p>
                <p>
                    +84 981 956 281
                </p>
                <p>
                    +84 987 828 876 - {translations.GalleryManager[language]} (Mrs Thu Hà)
                </p>
            </div>
            <div className='mt-5'>
                <p><span className='font-bold'>Email: </span>order@nguyenartgallery.com</p>
                <p><span className='font-bold'>{translations.OpenDaily[language]}:</span> 8:30am - 6pm</p>
                <p>{translations.Closed[language]}</p>
                <p>{translations.Admission[language]}</p>
            </div>

            <div className='w-full mb-5 flex justify-center items-center mt-[50px] text-white h-auto'>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className='w-full mr-5'>
                        <p className='font-bold'>{translations.AboutNAG[language]}</p>
                        <p>{translations.AboutUs[language]}</p>
                        <p>{translations.PlanYourVisit[language]}</p>
                        <p>{translations.Exhibitions[language]}</p>
                        <p>{translations.TheArtAppraiser[language]}</p>
                    </div>
                    <div className='w-full mr-5'>
                        <p className='font-bold'>{translations.AboutNAG[language]}</p>
                        <p>{translations.AboutUs[language]}</p>
                        <p>{translations.PlanYourVisit[language]}</p>
                        <p>{translations.Exhibitions[language]}</p>
                        <p>{translations.TheArtAppraiser[language]}</p>
                    </div>
                    <div className='w-full mr-5'>
                        <p className='font-bold'>{translations.AboutNAG[language]}</p>
                        <p>{translations.AboutUs[language]}</p>
                        <p>{translations.PlanYourVisit[language]}</p>
                        <p>{translations.Exhibitions[language]}</p>
                        <p>{translations.TheArtAppraiser[language]}</p>
                    </div>
                    <div className='w-full mr-5'>
                        <p className='font-bold'>{translations.AboutNAG[language]}</p>
                        <p>{translations.AboutUs[language]}</p>
                        <p>{translations.PlanYourVisit[language]}</p>
                        <p>{translations.Exhibitions[language]}</p>
                        <p>{translations.TheArtAppraiser[language]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
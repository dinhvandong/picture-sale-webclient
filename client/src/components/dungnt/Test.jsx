
import React, { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const Test = () => {
  const images = [
    "https://www.nguyenartgallery.com/wp-content/uploads/gallery-5.jpg",
    "https://www.nguyenartgallery.com/wp-content/uploads/gallery-4.jpg",
    "https://www.nguyenartgallery.com/wp-content/uploads/gallery-3.jpg",
    "https://www.nguyenartgallery.com/wp-content/uploads/gallery-6.jpg",
    "https://www.nguyenartgallery.com/wp-content/uploads/gallery-2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='w-full h-full bg-[#27242e]'>
      <div className='flex flex-row h-full'>
        <div class="w-[1/2] ">
          <img
            src="https://www.nguyenartgallery.com/wp-content/uploads/chat-with-our-art-collector-bg.jpg"
            class="w-full h-auto object-cover"
          />
        </div>

        <div class="w-[1/2] ">
          <img
            src="https://www.nguyenartgallery.com/wp-content/uploads/chat-with-our-art-collector-bg-1.jpg"
            class="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className='flex flex-col ml-10'>
        <p className='text-2xl font-bold text-[#d1cc86] mt-5 items-center justify-center flex '>Chat with our Special Vietnamese Artist of Nguyen Art Gallery – A Memorable Experience about Fine Arts</p>
        <p className='mt-10 text-lg text-white'><span className='font-bold'>Duration:</span><span className='font-normal'> 2 hours</span></p>
        <p className='text-lg text-white'><span className='font-bold'>Meeting place:</span><span className='font-normal'> Nguyen Art Gallery – 31A Van Mieu street, Dong Da District, Hanoi</span></p>
        <p className='text-lg text-white'><span className='font-bold'>Morning Tour:</span><span className='font-normal'> Start at 9AM</span></p>
        <p className='text-lg text-white'><span className='font-bold'>Afternoon tour:</span><span className='font-normal'> Start at 2PM</span></p>
        <p className='text-lg text-white'><span className='font-bold'>Art Collector:</span><span className='font-normal'> Mr. Henry Le</span></p>
        <p className='text-2xl font-bold text-[#d1cc86] mt-10 '>General Introduction</p>
        <p className='mt-5 text-lg text-white'>Nguyen Art Gallery has been established for original and quality Vietnamese paintings since 2006. We are recognized as one of the Top 10 Best Fine Art Galleries in Hanoi,</p>
        <p className='text-lg text-white'>Vietnam. The name Nguyen Art means “Original Art”. The Gallery’s objective is to promote quality arts from Vietnamese artists. Almost all artworks in our Gallery are oil on</p>
        <p className='text-lg text-white'>canvas paintings and lacquer paintings (son mai). The Gallery focuses on emerging Vietnamese artists. Their artworks express and communicate the imaginative aspects of</p>
        <p className='text-lg text-white'>their culture and reflect concerns that range broadly from the spiritual and aesthetic to the social and political.</p>
        <p className='mt-5 text-lg text-white'>Mr. Le Xuan Huong is the Gallery owner, an art collector and an Art Curator. Chatting with him, you will understand more about the artworks here as well as the</p>
        <p className='text-lg text-white'>development of Vietnamese modern art; also various stories about many Vietnamese artists with their lives, works and how they keep on their passion in the up and down</p>
        <p className='text-lg text-white'>of Vietnamese history in 20th Century. Enjoying Vietnamese coffee or tea, chatting with him at Art Space is your most memorial time in Hanoi.</p>
      </div>
      <div class="flex flex-row ml-10 items-start h-full">
        <div class="w-[40%] flex flex-col">
          <h2 class="text-2xl font-bold mb-4 text-[#d1cc86] mt-24 ">What Makes This Experience Different?</h2>
          <ul class="list-disc pl-5 space-y-3">
            <li className='text-lg text-white'>Understanding more about<span class="font-bold"> Vietnamese Modern Fine Art History</span>
              <p className='text-lg text-white'>through the<span class="font-bold"> view of an art curator, collector, gallery owner</span>.</p>
            </li>
            <li className='text-lg text-white'>Getting to know <span class="font-bold">many untold stories</span> that
              you could never find in any
              <p className='text-white'>guide book.</p>
            </li>
            <li className='text-lg text-white'>Good prices for Art collectors and buyers if they pick any paintings
              during the trip.
            </li>
            <li className='text-lg text-white'>Luxury services with Hi-ends hospitalities.</li>
          </ul>
          <h2 class="text-2xl font-bold  text-[#d1cc86] mt-24 ">About the Art Collector – Mr. Henry Le</h2>
          <p className='mt-5 text-lg text-white'><span className='font-bold'>Full Name:</span> Le Xuan Huong (Henry Le)</p>
          <p className='text-lg text-white'><span className='font-bold'>Date of Birth:</span> 25/05/1975</p>
          <ul class="list-disc pl-5 space-y-3 mt-5">
            <li className='text-lg text-white'>Huong studied fine arts and graduated from University of Industrial Fine Arts in 1997</li>
            <li className='text-lg text-white'>He has been working as an artist for two years</li>
            <li className='text-lg text-white'>He owns a great knowledge of Vietnamese modern art history, galleries, and artists.</li>
            <li className='text-lg text-white'>He can speak English fluently with his sweet voice</li>
            <li className='text-lg text-white'>He has always looked for and found new faces in Vietnamese artists and regularly supports them.</li>
            <li className='text-lg text-white'>He has supported spaces and services of exhibitions for young artists yearly.</li>
            <li className='text-lg text-white'>He wins the 3rd prize in the Hanoi Craft Village Art Product Creation Contest 2023.</li>
          </ul>
          <h2 class="text-2xl font-bold  text-[#d1cc86] mt-64 ">Knowledge of Vietnamese Artists & Paintings</h2>
          <ul class="list-disc pl-5 space-y-3 mt-5">
            <li className='text-lg text-white'>Meeting Art Collector at Nguyen Art Gallery. Welcome to the art room with a welcome drink and briefing (about 15 minutes)</li>
            <li className='text-lg text-white'>Enjoying Vietnamese tea and coffee </li>
            <li className='text-lg text-white'>Free flow with wine, Hanoi Beer,… </li>
            <li className='text-lg text-white'>Visit 4 Art rooms of the Gallery with the guidance of the Art Collector about all the paintings (about 40-45 minutes)</li>
            <li className='text-lg text-white'>Chat with Collector at Art Space with tea and coffee (about 60 minutes)</li>
            <li className='text-lg text-white'>Gift </li>
          </ul>
        </div>

        <div class="w-[40%] h-auto  items-center justify-center flex flex-col ml-44   ">
          <img
            src="https://www.nguyenartgallery.com/wp-content/uploads/benefits-chatting-with-our-art-collector.jpg"
            class="object-cover bg-inherit mt-10"
          />
          <img
            src="https://www.nguyenartgallery.com/wp-content/uploads/our-art-collector-henry-le.jpg"
            class="object-cover bg-inherit mt-5 "
          />
          <img
            src="https://www.nguyenartgallery.com/wp-content/uploads/Art-tour-1152x1536.jpg"
            class="object-cover bg-inherit mt-5 "
          />
        </div>
      </div>
      <div className='flex flex-col ml-10'>
        <h2 class="text-2xl font-bold  text-[#d1cc86] mt-10 ">About Nguyen Art Gallery</h2>
        <p className='mt-5 text-lg text-white'><span className='font-bold'>Gallery 01:</span> No 31A Van Mieu street, Van Mieu Ward, Dong Da, Ha Noi.</p>
        <p className='text-lg text-white'><span className='font-bold'>Gallery 02:</span> Culture Avenue, 4th Floor, Lotte Mall West Lake, 272 Vo Chi Cong, Tay Ho District, Hanoi.</p>
        <p className='text-lg text-white'><span className='font-bold'>Established year:</span> 2006</p>
        <ul class="list-disc pl-5 space-y-3 mt-5">
          <li className='text-lg text-white'>Nguyen Art gallery is an Art Gallery for original and quality paintings as well as sculptures.</li>
          <li className='text-lg text-white'>Nguyen Art means “Original Art”.</li>
          <li className='text-lg text-white'>All the paintings with Certificates with Art Collector’s & Artists’ signature.</li>
          <li className='text-lg text-white'>Paintings using traditional Vietnamese materials such as: lacquer painting, charcoal painting, watercolor painting on “Do” paper as well as oil on canvas, acrylic on canvas.</li>
          <li className='text-lg text-white'>The gallery also offers wonderful and quality sculptures from Vietnamese sculptors, other artworks or talented artists.</li>
          <li className='text-lg text-white'>Shipping the artwork worldwide.</li>
        </ul>
      </div>
      <div className="flex items-center justify-center h-auto bg-[#27242e] mt-14">
        <div className="relative w-[70%] h-auto bg-[#27242e] flex flex-col items-center justify-center">
          <img
            src={images[currentIndex]}
            className="object-cover w-full h-full rounded-lg"
          />
          <button
            onClick={goToPrev}
            className="absolute p-3 text-white transform -translate-y-1/2 rounded-full left-5 top-1/2 bg-gray-700/50 hover:bg-gray-600/80"
          >
            <MdArrowBack size={30} />
          </button>
          <button
            onClick={goToNext}
            className="absolute p-3 text-white transform -translate-y-1/2 rounded-full right-5 top-1/2 bg-gray-700/50 hover:bg-gray-600/80"
          >
            <MdArrowForward size={30} />
          </button>
        </div>
      </div>
      <div className="w-full h-1 underline bg-white mt-14"></div>
      <div className="ml-10">
        <h2 class="text-2xl font-bold text-[#d1cc86] mt-10">Full Itinerary</h2>
        <ul class="list-disc pl-5 space-y-3 mt-5">
          <li className='text-lg text-white'>Meeting Art Collector at Nguyen Art Gallery. Welcome at Art room with a welcome drink (about 5 minutes)</li>
          <li className='text-lg text-white'>Visit 4 Art rooms of the Gallery with guiding of the Art Collector about all paintings (about 20 – 25 minutes)</li>
          <li className='text-lg text-white'>Chat with Collector at Art Space with tea and coffee (about 60 minutes)</li>
        </ul>
      </div>
      <div className="flex flex-row ml-10">
        <div className="w-[50%]">
          <h2 class="text-2xl font-bold  text-[#d1cc86] mt-10">Prices</h2>
          <p className='mt-5 text-lg text-white'><span className='font-bold'>Group Size:</span> From 2 pax up to 8 pax</p>
          <p className='mt-5 text-lg font-bold text-white'>For Private Tour:</p>
          <ul class="list-disc pl-5 space-y-3 mt-5">
            <li className='text-lg text-white'>1 Pax: US $207 without VAT – $224 with VAT</li>
            <li className='text-lg text-white'>2 Pax: US $136 without VAT – $147 with VAT</li>
            <li className='text-lg text-white'>3 Pax: US $112 without VAT – $121 with VAT</li>
            <li className='text-lg text-white'>4 Pax: US $100 without VAT – $108 with VAT</li>
            <li className='text-lg text-white'>5 Pax: US $93 without VAT – $100 with VAT</li>
            <li className='text-lg text-white'>6 Pax: US $88 without VAT – $95 with VAT</li>
            <li className='text-lg text-white'>7 Pax: US $85 without VAT – $91 with VAT</li>
            <li className='text-lg text-white'>8 Pax: US $82 without VAT – $89 with VAT</li>
          </ul>
          <p className='mt-5 text-lg font-bold text-white'>For Joining Tour:</p>
          <ul class="list-disc pl-5 space-y-3 mt-5"> <li className='text-lg text-white'>Tour cost: US $112 without VAT – $121 with VAT</li></ul>
        </div>
        <div className="w-[50%] flex flex-col items-start justify-center">
          <h2 class="text-2xl font-bold  text-[#d1cc86] mt-10">Contact Information</h2>
          <p className='mt-5 text-lg text-white'><span className='font-bold'>Gallery Manager:</span> Ms. Nguyen Thi Thu Ha</p>
          <p className='text-lg text-white'><span className="font-bold">Cell phone:</span> +84 987 828 876</p>
          <p className='text-lg text-white'><span className="font-bold">Tel:</span> +84 24 37476001</p>
          <p className='text-lg text-white'><span className="font-bold">Email:</span>  order@nguyenartgallery.com</p>
          <p className='text-lg text-white'><span className="font-bold">Website:</span> www.nguyenartgallery.com /  https://www.kiettacnghethuat.com</p>
        </div>
      </div>
      <div className="flex flex-col mt-10 ml-10">
      <h2 class="text-2xl font-bold text-[#d1cc86] mt-10">Leave Us Your Inquiry</h2>
      <p className="mt-5 text-lg font-bold text-white">Contact Us</p>
      <p className="mt-5 text-lg text-white"> Fields marked with an <span className="text-red-500">*</span> are required</p>
      <p className="text-lg "><span className="text-[#d1cc86] font-bold">Your Name</span><span className="text-red-500"> *</span></p>
      <input type="text" className=" w-[90%] mt-3 h-10" />
      <p className="mt-10 text-lg "><span className="text-[#d1cc86] font-bold">Your Email</span><span className="text-red-500"> *</span></p>
      <input type="text" className=" w-[90%] mt-3 h-10" />
      <p className="mt-10 text-lg "><span className="text-[#d1cc86] font-bold">Your Message</span><span className="text-red-500"> *</span></p>
      <input type="text" className=" w-[90%] mt-3 h-52" />
      <p className="mt-10 text-lg font-bold text-white">SEND</p>
      </div>
    </div>

  )
}

export default Test
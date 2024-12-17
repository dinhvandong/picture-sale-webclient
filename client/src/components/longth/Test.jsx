import React from 'react'

const LongTest = () => {
  return (
    <div className='flex flex-col w-full h-auto bg-yellow-300'>
      <div className='flex flex-col justify-center items-center bg-[#27242E] w-full h-[200px]'>
        <div className='flex items-center justify-center'>
          <p className='text-[#FFEF96] text-[35px] font-bold cursor-pointer'>Artist Nguyen Tan Phat - Vietnamese Lacquer Artwork</p>
        </div>
        <div className='flex items-center justify-center mt-2'>
          <button className='bg-[#27242E] text-white  text-[20px] w-[130px] h-[40px] font-bold border-2 border-white rounded-full'>Biography</button>
          <p className='font-bold text-white  text-[20px] ml-3 hover:text-[#FFEF96] cursor-pointer'>Message fefto  Gallery Owner</p>
        </div>
      </div>
      <div className='flex w-full h-[640px] bg-[#27242E] p-12'>
        <div className="flex flex-col w-[41%]">
          <img
            src="https://www.nguyenartgallery.com/wp-content/uploads/artist-nguyen-tan-phat.jpg"
            alt="Sample"
            className="w-[500px] h-[520px]"
          />
          <div className='flex items-center gap-2 mt-7'>
            <button className='w-1.5 h-1.5 bg-white rounded-full'></button>
            <p className="text-white text-[18.5px]">2011: Exhibition of “Memory of Long Bien Bridge”</p>
          </div>
          <div className='flex items-center gap-2 '>
            <button className='w-1.5 h-1.5 bg-white rounded-full'></button>
            <p className="text-white text-[18.5px]">2015: Exhibition of Dogma</p>
          </div>

        </div>
        <div className="w-[59%] ml-5">
          <div className='flex flex-col items-start'>
            <p className="text-white text-[18.5px]">Nguyen Tan Phat was born in 1983 in Hanoi. In 2006, he graduated from Hanoi University of Industrial Fine Arts. He is a member of the Vietnam Fine Arts Association. Nguyen Tan Phat has had a huge passion for painting since childhood. His paintings are not simple. Each of them sends a message of impermanence, about love that can ease the pain. Nguyen Tan Phat did not draw what he saw, but what he felt. The portraits in Nguyen Tan Phat's paintings are therefore inner depth, obsessive to the viewer, full of emotion, and contain a lot of philosophy. His artworks appear in many private collections in Hong Kong, Singapore, Thailand, France, the USA, Germany, Italy, and Switzerland.</p>
            <h1 className="mt-4 text-2xl font-bold text-[#E5AE17]">Art Awards</h1>
          </div>
          <div className='flex items-center gap-2 mt-3 -ml-3'>
            <button className='w-1.5 h-1.5 bg-white rounded-full'></button>
            <p className="text-white text-[18.5px]">2010: Consolation Prize of the Vietnam Fine Arts Association</p>
          </div>
          <div className='flex items-center gap-2 mt-3 -ml-3'>
            <button className='w-1.5 h-1.5 bg-white rounded-full'></button>
            <p className="text-white text-[18.5px]">2012: Prize C of the Vietnam Fine Arts Association</p>
          </div>
          <div className='flex items-center gap-2 mt-3 -ml-3'>
            <button className='w-1.5 h-1.5 bg-white rounded-full'></button>
            <p className="text-white text-[18.5px]">2014: 1st prize in Hanoi handicraft design contest</p>
          </div>
          <div className='flex items-center gap-2 mt-3 -ml-3'>
            <button className='w-1.5 h-1.5 bg-white rounded-full'></button>
            <p className="text-white text-[18.5px]">2018: Recognized as Hanoi Master of Lacquer</p>
          </div>
          <div className='flex flex-col items-start'>
            <h2 className="mt-4 text-2xl font-bold text-[#E5AE17]">Exhibitions & Art Events</h2>
          </div>
          <div className='flex items-center gap-2 mt-3 -ml-3'>
            <button className='w-1.5 h-1.5 bg-white rounded-full'></button>
            <p className="text-white text-[18.5px]">2010: National Exhibition in Vietnam</p>
          </div>
        </div>
      </div>


      <div className='flex w-full h-[70px] bg-[#27242E] justify-center items-center'>
        <div className="flex items-center justify-center w-full p-12 space-x-4">
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
          <span className="text-2xl font-bold text-[26px] text-[#FFEF96]">DRAGON ARTWORKS</span>
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
        </div>
      </div>


      {/* DRAGON ARTWORKS */}
      <div className='flex justify-center items-center w-full h-[520px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Lacquer-Dragon-Box-in-Nguyen-Dynasty-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-3.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]  hover:text-white cursor-pointer">Lacquer Dragon Box in Nguyen Dynasty</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ">24cm*9cm*31cm | 9.4in*3.5in*12.2in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ">2000g | 4.4lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Dragon-Adores-the-Moon-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Lacquer Dragon Box in Later Le Dynasty</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ">24cm*9cm*31cm | 9.4in*3.5in*12.2in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ">2000g | 4.4lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/God-Dragon-Chair-IV-with-Angel-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">God Dragon Chair IV with Angel</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1">38cm*20cm*34cm | 14.9in*7.8in*13.4in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5">2000g | 4.4lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[490px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Dragon-Gate-II-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-1.jpeg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[250px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Dragon Boat II</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-2 ">66cm*14cm*36cm | 26in*55in*14in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5">3000g | 6.6lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 mt-9">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* P2 */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[490px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Dragon-Boat-I-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-1.jpeg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[250px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Dragon Boat I</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-2 ">53cm*13cm*35cm | 21in*5.1in*14in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ">1400g | 3.5lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 mt-9">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/First-Dragon-Embraces-Jade-II-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat.jpeg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">First Dragon Embraces Jade II</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-2">31cm*6cm*23cm | 12in*2.4in*9.1in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">1200g | 2.6lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Dragon-Unfurling-Jade-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat.jpeg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />

            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Dragon Unfurling Jade</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-1 ">25cm*6cm*22cm | 9.8in*2.4in*8.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">1600g | 3.5lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Ascending-Dragon-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat.jpeg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Ascending Dragon</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-1 ">14cm*22cm*42cm | 5.5in*8.7in*17in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">	900g | 2lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* P3 */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Dragon-King-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />

            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Dragon King</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1 ">55cm*14cm*26cm | 21.6in*5.5in*10.2in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ">1800g | 3.96lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Dragon-Gate-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Dragon Gate</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ">57cm*9cm*25cm | 22.4in*3.5in*9.8in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ">1400g | 3.08lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[490px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/God-Dragon-Chair-II-with-Angel-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[250px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">God Dragon Chair II with Angel</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ">55cm*9cm*35cm | 21.6in*3.5in*13.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ">1600g | 3.5lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 mt-9">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full h-[70px] bg-[#27242E] justify-center items-center'>
        <div className="flex items-center justify-center w-full p-12 space-x-4">
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
          <span className="text-2xl font-bold text-[26px] text-[#FFEF96]">CAT ARTWORKS</span>
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
        </div>
      </div>


      {/* Cat */}
      {/* P1 */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Great-Golden-Cat-King-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />

            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Great Golden Cat King</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1 ">37cm*12cm*27cm | 14.5in*4.7in*10.6in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.32lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Cat-Eats-Fish-XV-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-2.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Cat Eats Fish XV</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1">34cm*8cm*27cm | 13.3in*3.1in*10.6in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">1000g | 2.2lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Cat-Eats-Fish-XII-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />

            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Cat Eats Fish XII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1 ">26cm*7cm*32cm | 10.2in*2.7in*12.6in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">700g | 1.5lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Cat-Eats-Fish-X-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />

            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Cat Eats Fish X</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-1.5 ">28cm*9cm*14cm | 11in*3.5in*5.5in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">700g | 1.5lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* P2 */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Cat-Eats-Fish-VII-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />

            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Cat Eats Fish VII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ">27cm*8cm*24cm | 10.6in*3.1in*9.4in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">1000g | 2.2lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Cat-Eats-Fish-III-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-5.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Cat Eats Fish III</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-2">43cm*8cm*25cm | 17in*3.1in*9.8in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">1120g | 2.46lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Cat-Eats-Fish-IX-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-3.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />

            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Cat Eats Fish IX</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-1 ">26cm*7cm*23cm | 10.2in*2.7in*9in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">	1000g | 2.2lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/White-Cat-I-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-3.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />

            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">White Cat I</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-1 ">30cm*8cm*17cm | 11.8in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">500g | 1.1lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* P3 */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Imperial-Seal-Cat-V-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />

            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Imperial Seal Cat V</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ">31cm*10cm*25cm | 12.2in*3.9in*9.8in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ">1000g | 2.42lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Cat-Grabs-Money-I-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-6.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Cat Grabs Money I</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-0.5">39cm*8cm*31cm | 15.3in*3.1in*12.2in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">720g | 1.58lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full h-[70px] bg-[#27242E] justify-center items-center'>
        <div className="flex items-center justify-center w-full p-12 space-x-4">
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
          <span className="text-2xl font-bold text-[26px] text-[#FFEF96]">TIGER ARTWORKS</span>
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
        </div>
      </div>

      {/* TIGER */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Tiger-XXII-Vietnamese-Lacquer-Artworks-by-Artist-Nguyen-Tan-Phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Tiger-XXI-Vietnamese-Lacquer-Artworks-by-Artist-Nguyen-Tan-Phat-3.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1">26cm*10cm*16cm | 10.2in*3.9in*6.3in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-1 ">700g | 1.5lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Tiger-XII-Vietnamese-Lacquer-Artworks-by-Artist-Nguyen-Tan-Phat-300x200.jpg"
                alt="Art Piece 1"
                className="object-cover w-[280px] h-[180px] ml-2 "
              />

            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Cat Eats Fish IX</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-1 ">26cm*7cm*23cm | 10.2in*2.7in*9in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">	1000g | 2.2lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-8">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[281px] h-[30px]  bg-[#776F63] bg-opacity-80 ml-0.5 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/winged-tiger-vi-vietnamese-lacquer-artwork-by-artist-nguyen-tan-phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />

            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Winged Tiger VI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-1 ">30cm*8cm*17cm | 11.8in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">500g | 1.1lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* P2 */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/esteemed-tiger-ii-vietnamese-lacquer-painting-by-artist-nguyen-tan-phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />

            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Esteemed Tiger II</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ">44cm*8cm*16cm | 17.3in*3.1in*6.3in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ">1200g | 2.64lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/esteemed-tiger-i-vietnamese-lacquer-artwork-by-artist-nguyen-tan-phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Esteemed Tiger I</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-2">38cm*8cm*16cm | 15in*3.1in*6.3in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">700g | 1.76lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full h-[70px] bg-[#27242E] justify-center items-center'>
        <div className="flex items-center justify-center w-full p-12 space-x-4">
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
          <span className="text-2xl font-bold text-[26px] text-[#FFEF96]">BUFFALO ARTWORKS</span>
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
        </div>
      </div>


      {/* BUFFALO ARTWORKS */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/heavenly-gate-shaped-buffalo-iv-vietnamese-lacquer-artwork-by-artist-nguyen-tan-phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/heavenly-gate-shaped-buffalo-iii-vietnamese-lacquer-artwork-by-artist-nguyen-tan-phat.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1">26cm*10cm*16cm | 10.2in*3.9in*6.3in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-1 ">700g | 1.5lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/great-gate-shaped-buffalo-vii-vietnamese-lacquer-artwork-by-artist-nguyen-tan-phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Buffalo-of-Incense-Burner-Vietnamese-Lacquer-Artworks-by-Artist-Nguyen-Tan-Phat-300x200.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />

            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Winged Tiger VI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-1 ">30cm*8cm*17cm | 11.8in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">500g | 1.1lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* P2 */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/imperial-seal-buffalo-viii-vietnamese-lacquer-artwork-by-artist-nguyen-tan-phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />

            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Esteemed Tiger II</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ">44cm*8cm*16cm | 17.3in*3.1in*6.3in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ">1200g | 2.64lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full h-[70px] bg-[#27242E] justify-center items-center'>
        <div className="flex items-center justify-center w-full p-12 space-x-4">
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
          <span className="text-2xl font-bold text-[26px] text-[#FFEF96]">HORSE ARTWORKS</span>
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
        </div>
      </div>


      {/* HORSE ARTWORKS */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/dragon-horse-iv-vietnamese-lacquer-artwork-by-artist-nguyen-tan-phat.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Thousand-mile-Horse-III-Vietnamese-Lacquer-Artworks-by-Artist-Nguyen-Tan-Phat.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1">26cm*10cm*16cm | 10.2in*3.9in*6.3in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-1 ">700g | 1.5lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Golden-Horse-X-Vietnamese-Lacquer-Artworks-by-Artist-Nguyen-Tan-Phat-300x200.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Golden-Horse-IX-Vietnamese-Lacquer-Artworks-by-Artist-Nguyen-Tan-Phat-300x200.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />

            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Winged Tiger VI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-1 ">30cm*8cm*17cm | 11.8in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">500g | 1.1lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* P2 */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Golden-Horse-II-Vietnamese-Lacquer-Artworks-by-Artist-Nguyen-Tan-Phat1-300x200.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/great-gate-shaped-horse-vii-vietnamese-lacquer-artwork-by-artist-nguyen-tan-phat-2.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1">26cm*10cm*16cm | 10.2in*3.9in*6.3in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-1 ">700g | 1.5lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Great-Gate-shaped-Horse-V-Vietnamese-Lacquer-Artworks-by-Artist-Nguyen-Tan-Phat-300x200.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Great-Gate-shaped-Horse-I-Vietnamese-Lacquer-Artworks-by-Artist-Nguyen-Tan-Phat-300x200.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />

            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Winged Tiger VI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-1 ">30cm*8cm*17cm | 11.8in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">500g | 1.1lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* P3 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/garish-horse-I-vietnamese-lacquer-artworks-by-artist-nguyen-tan-phat-3-300x200.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full h-[70px] bg-[#27242E] justify-center items-center'>
        <div className="flex items-center justify-center w-full p-12 space-x-4">
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
          <span className="text-2xl font-bold text-[26px] text-[#FFEF96]">CHAIR & TABLE ARTWORKS</span>
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
        </div>
      </div>

      {/* CHAIR & TABLE ARTWORKS */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Dragon-Small-Table-VII-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Garish-Small-Table-II-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-2.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1">26cm*10cm*16cm | 10.2in*3.9in*6.3in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-1 ">700g | 1.5lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Royal-Small-Table-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-2.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Royal-Box-II-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-2.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />

            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Winged Tiger VI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-1 ">30cm*8cm*17cm | 11.8in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">500g | 1.1lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full h-[70px] bg-[#27242E] justify-center items-center'>
        <div className="flex items-center justify-center w-full p-12 space-x-4">
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
          <span className="text-2xl font-bold text-[26px] text-[#FFEF96]">ELEPHANT ARTWORKS</span>
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
        </div>
      </div>


      {/* ELEPHANT ARTWORKS */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/great-elephant-iii-vietnamese-lacquer-artwork-by-artist-nguyen-tan-phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/great-elephant-i-vietnamese-lacquer-artwork-by-nguyen-tan-phat-.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1">26cm*10cm*16cm | 10.2in*3.9in*6.3in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-1 ">700g | 1.5lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full h-[70px] bg-[#27242E] justify-center items-center'>
        <div className="flex items-center justify-center w-full p-12 space-x-4">
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
          <span className="text-2xl font-bold text-[26px] text-[#FFEF96]">SNAKE ARTWORKS</span>
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
        </div>
      </div>


      {/* SNAKE ARTWORKS */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Powerful-Snake-III-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-4.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Powerful-Snake-II-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-4.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1">26cm*10cm*16cm | 10.2in*3.9in*6.3in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-1 ">700g | 1.5lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full h-[70px] bg-[#27242E] justify-center items-center'>
        <div className="flex items-center justify-center w-full p-12 space-x-4">
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
          <span className="text-2xl font-bold text-[26px] text-[#FFEF96]">DOVE ARTWORKS</span>
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
        </div>
      </div>


      {/* DOVE ARTWORKS */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Red-Dove-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-2.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/White-Dove-I-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1">26cm*10cm*16cm | 10.2in*3.9in*6.3in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-1 ">700g | 1.5lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full h-[70px] bg-[#27242E] justify-center items-center'>
        <div className="flex items-center justify-center w-full p-12 space-x-4">
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
          <span className="text-2xl font-bold text-[26px] text-[#FFEF96]">BUDDHA ARTWORKS</span>
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
        </div>
      </div>


      {/* BUDDHA ARTWORKS */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Mindful-Meditation-II-Vietnamese-Lacquer-Artwork-By-Artist-Nguyen-Tan-Phat-3.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex items-center justify-center'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Mindful-Meditation-I-Vietnamese-Lacquer-Artwork-By-Artist-Nguyen-Tan-Phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px]"
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1">26cm*10cm*16cm | 10.2in*3.9in*6.3in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-1 ">700g | 1.5lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full h-[70px] bg-[#27242E] justify-center items-center'>
        <div className="flex items-center justify-center w-full p-12 space-x-4">
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
          <span className="text-2xl font-bold text-[26px] text-[#FFEF96]">MOUSE ARTWORKS</span>
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
        </div>
      </div>


      {/* MOUSE ARTWORKS */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Royal-Mouse-V-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex items-center justify-center'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Royal-Mouse-IV-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px]"
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1">26cm*10cm*16cm | 10.2in*3.9in*6.3in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-1 ">700g | 1.5lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full h-[70px] bg-[#27242E] justify-center items-center'>
        <div className="flex items-center justify-center w-full p-12 space-x-4">
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
          <span className="text-2xl font-bold text-[26px] text-[#FFEF96]">CHICKEN ARTWORKS</span>
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
        </div>
      </div>


      {/* CHICKEN ARTWORKS */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start '>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Golden-Cock-XII-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Golden-Cock-XI-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1">26cm*10cm*16cm | 10.2in*3.9in*6.3in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-1 ">700g | 1.5lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full h-[70px] bg-[#27242E] justify-center items-center'>
        <div className="flex items-center justify-center w-full p-12 space-x-4">
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
          <span className="text-2xl font-bold text-[26px] text-[#FFEF96]">DOG ARTWORKS</span>
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
        </div>
      </div>


      {/* DOG ARTWORKS */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Royal-Dog-I-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Royal-Dog-II-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1">26cm*10cm*16cm | 10.2in*3.9in*6.3in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-1 ">700g | 1.5lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/honored-dog-vietnamese-lacquer-artwork-by-artist-nguyen-tan-phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full h-[70px] bg-[#27242E] justify-center items-center'>
        <div className="flex items-center justify-center w-full p-12 space-x-4">
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
          <span className="text-2xl font-bold text-[26px] text-[#FFEF96]">SNAIL ARTWORKS</span>
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
        </div>
      </div>


      {/* SNAIL ARTWORKS */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Snail-VIII-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Snail-VII-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-2.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1">26cm*10cm*16cm | 10.2in*3.9in*6.3in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-1 ">700g | 1.5lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Snail-V-Vietnamese-Lacquer-Artwork-by-Artist-Nguyen-Tan-Phat-1.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='flex w-full h-[70px] bg-[#27242E] justify-center items-center'>
        <div className="flex items-center justify-center w-full p-12 space-x-4">
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
          <span className="text-2xl font-bold text-[26px] text-[#FFEF96]">OTHER ARTWORKS</span>
          <div className="flex-grow border-t-2 border-[#3D3A43]"></div>
        </div>
      </div>


      {/* OTHER ARTWORKS */}
      <div className='flex justify-center items-center w-full h-[490px] bg-[#27242E]'>
        <div className="grid grid-cols-1 gap-5 p-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* 1 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Ladybug-I-Vietnamese-Lacquer-Artworks-by-Artist-Nguyen-Tan-Phat-300x200.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/Ladybug-II-Vietnamese-Lacquer-Artworks-by-Artist-Nguyen-Tan-Phat-300x200.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXI</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] ml-1">26cm*10cm*16cm | 10.2in*3.9in*6.3in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-1 ">700g | 1.5lbs</span>
                </div>
              </div>

              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className=" relative bg-[#27242E] transition-transform duration-300 hover:translate-y-[-4px] p-2 h-[440px] w-[310px]">
            <div className='flex justify-start'>
              <img
                src="https://www.nguyenartgallery.com/wp-content/uploads/monkey-vietnamese-lacquer-artwork-by-artist-nguyen-tan-phat-4.jpg"
                alt="Art Piece 1"
                className="object-cover w-[300px] h-[200px] "
              />
            </div>
            <div className='flex flex-col mt-4 overflow-visible '>
              <div className='flex flex-col items-center justify-center'>
                <p className='text-[9px] text-[#9B9B9B] font-bold'>NGUYEN TAN PHAT</p>
                <h3 className="text-[14px] text-[#FFEF96]">Tiger XXII</h3>
              </div>
              <div className="flex flex-col p-2">
                <div class="flex items-center gap-x-12 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">ARTIST:</span>
                  <span class="text-white text-[12px] ml-1.5">Nguyen Tan Phat</span>
                </div>
                <div class="flex items-center gap-x-8 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">MATERIAL:</span>
                  <span class="text-white text-[12px] ">Lacquer on wood</span>
                </div>
                <div class="flex items-center gap-x-6 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">SIZE (L*W*H):</span>
                  <span class="text-white text-[12px] mr-0.5 ">17cm*8cm*17cm | 6.7in*3.1in*6.7in</span>
                </div>
                <div class="flex items-center gap-x-14 border-b border-[#3D3A43] pb-1 mb-2">
                  <span class="font-bold text-[14px] text-white">Weight</span>
                  <span class="text-white text-[12px] ml-0.5 ">600g | 1.3lbs</span>
                </div>
              </div>
              <div className="absolute top-56 left-0 z-10 flex items-start justify-center w-full h-[260px] transition-all duration-300 bg-[#3c301f] opacity-0 bg-opacity-20 hover:opacity-100 hover:-translate-y-8 -mt-3">
                <div className='flex items-center justify-center w-[310px] h-[30px]  bg-[#27242E] bg-opacity-20 '>
                  <div className='flex items-center justify-center w-[295px] h-[30px]  bg-[#776F63] bg-opacity-80 '>
                    <span className="text-white text-[12px] font-bold mb-0.5">QUICK VIEW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LongTest
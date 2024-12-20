import React from 'react';

const AboutBody = () => {
  return (
    <div className="flex flex-col h-auto w-screen bg-[#27242E]">
      {/* Menu Bar */}
      <nav className=" text-white py-4 px-8">
        <div className="flex justify-between">
          <div className="text-xl font-bold">Nguyen Art Gallery</div>
          <ul className="flex space-x-6">
            <li>Home</li>
            <li>Paintings</li>
            <li>Artists</li>
            <li>About Us</li>
          </ul>
        </div>
      </nav>

      {/* Gallery Section */}
      <div className="flex flex-row gap-0 p-0 h-full ">
        {/* Left Side: 1 Large Image */}
        <div className="flex-1">
          <img
            src="https://www.tranhsonmainghethuat.com/wp-content/uploads/bach-lien-07-tranh-son-mai-hoa-sen-cua-hoa-si-do-khai.jpg"
            alt="Art Image 1"
            className="w-full h-full object-cover rounded-none shadow-none"
          />
        </div>

        {/* Right Side: 3 Images */}
        <div className="flex-1 flex flex-col gap-0">
          {/* Top Image (50%) */}
          <div className="flex-1">
            <img
              src="https://www.tranhsondaudocban.com/wp-content/uploads/mua-vang-tranh-son-dau-nghe-thuat-cua-hoa-si-pham-hoang-minh.jpg"
              alt="Art Image 2"
              className="w-full h-full object-cover rounded-none shadow-none"
            />
          </div>
          {/* Bottom 2 Images (25% each) */}
          <div className="flex flex-row gap-0 flex-1">
            <div className="w-1/2">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTUJkWqr1zJgnOF59bIItenth5UnRf_DPU49uIyHBFbQr-vEFpIgWrzJDxZurLWbJKwOE&usqp=CAU"
                alt="Art Image 3"
                className="w-full h-full object-cover rounded-none shadow-none"
              />
            </div>
            <div className="w-1/2">
              <img
                src="https://images.pexels.com/photos/1657784/pexels-photo-1657784.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="Art Image 4"
                className="w-full h-full object-cover rounded-none shadow-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#27242E]  text-yellow-300 text-2xl py-4 text-center">
        Nguyen Art Gallery – The Space for Authentic Vietnamese Paintings & Artworks
      </footer>
      <footer className=" text-white py-4 text-center">
        Welcome to the Nguyen Art Gallery, one of the ten biggest and most famous private galleries in Vietnam. It was born to showcase original and authentic Vietnamese paintings, artworks as well as sculptures. The name Nguyen Art means “Original Art” or “Long Lasting Art”.
      </footer>
      <div className="flex flex-row mt-12 h-screen bg-[#27242E]">
      {/* Vertical Menu Bar */}
      <nav className="bg-[#27242E] text-white w-[400px] h-[867px] p-6 border-2 border-gray-700  shadow-lg">
  <h1 className="text-2xl font-bold mb-8 text-center" >About Nguyen Art Gallery</h1>
  <ul className="flex flex-col space-y-6">
    <li className="border-b-2 border-yellow-300 pb-2 cursor-pointer hover:text-yellow-300">
      NAG16NAG16
    </li>
    <li className="border-b-2 border-yellow-300 pb-2 cursor-pointer hover:text-yellow-300">
      History
    </li>
    <li className="border-b-2 border-yellow-300 pb-2 cursor-pointer hover:text-yellow-300">
      Founder's Words
    </li>
    <li className="border-b-2 border-yellow-300 pb-2 cursor-pointer hover:text-yellow-300">
      NAG'S Collection
    </li>
    
    <li className="border-b-2 border-yellow-300 pb-2 cursor-pointer hover:text-yellow-300">
    NAG'S Possession
    </li>
    <li className="border-b-2 border-yellow-300 pb-2 cursor-pointer hover:text-yellow-300">
    NAG'S people
    </li>
    <li className="border-b-2 border-yellow-300 pb-2 cursor-pointer hover:text-yellow-300">
    Happy Custommer
    </li>
  </ul>
</nav>


      {/* Main Content */}
      <div className="flex-1 flex-col  justify-center items-center">
        {/* Image Container */}
        <div className="w-full h-4/5  bg-[#27242E]  shadow-lg overflow-hidden">
          <img
            src="https://www.nguyenartgallery.com/wp-content/uploads/celebrating-nag16.jpg"
            alt="Art Image"
            className="w-full h-full object-cover"
          />
          
        </div>
        <div>
  <footer className="bg-[#27242E] text-yellow-300 text-2xl py-4 text-center">
    Nguyen Art Gallery – The Space for Authentic Vietnamese Paintings & Artworks
  </footer>
  <footer className="bg-[#27242E] text-white text-xl py-4 text-left px-8">
    In 2022, we are celebrating 16 years of Nguyen Art Gallery. The number seems to be small compared to other galleries in the world. Nguyen Art Gallery is young but we always consider it as our advantage. NAG has learned a lot from others. We may not be the first ones on this path but find our own way to make ourselves unique.
  </footer>
  <footer className="bg-[#27242E] text-white text-xl py-4 text-left px-8">
    The Gallery’s objective is to promote quality arts, particularly from Vietnam. We focus on emerging Vietnamese artists.  
    Their artworks express and communicate the imaginative 
    aspects of their culture and reflect concerns that range broadly from the spiritual and aesthetic to the social and political. Nguyen Art Gallery carries paintings using many traditional Vietnamese materials including lacquer paintings, charcoal paintings, and watercolor paintings on “Do” paper as well as paintings using popular materials such as oil on canvas, and acrylic on canvas.
  </footer>
</div>

      </div>

   
    </div>
    <div className="flex flex-col h-[760px] mt-[280px] w-screen bg-black">
  <footer className="  text-white text-3xl py-4 text-center">
        Nguyen Art Gallery – The Space for Authentic Vietnamese Paintings & Artworks
      </footer>
      <footer className="text-white ml-[180px] text-xl py-4 text-left">
  Nguyen Art gallery is established for original and high-quality Vietnamese artworks & paintings. The name Nguyen Art means
</footer>
<footer className="text-white ml-[180px] text-xl mt-[-20px] py-4 text-left">
  “Original Art”. The gallery focuses on talented young emerging artists in Vietnam and brings their finest artworks to the world.
</footer>
<footer className="  text-white text-3xl py-4 text-center">
Plan a Visit      </footer>
<footer className="  text-white text-2xl py-4 text-center">
Address 1: 31A Van Mieu Street, Dong Da District, Hanoi     </footer>
<footer className="  text-white text-2xl py-4 text-center">
Address 2: 4th Floor - Culture Avenue, Lotte West Lake, Tay Ho District, Hanoi     </footer>
<footer className="  text-white text-3xl py-4 text-center">
Hotline:      </footer>
<footer className="  text-white mt-[-20px] text-xl py-4 text-center">
+84 396 295 998     </footer>
<footer className="  text-white  mt-[-30px] text-xl py-4 text-center">
+84 909 896 286    </footer>
<footer className="  text-white mt-[-30px] text-xl py-4 text-center">
+84 981 956 281     </footer>
<footer className="  text-white text-2xl mt-[-20px] py-4 text-center">
+84 987 828 876 - Gallery Manager (Mrs Thu Hà)    </footer>
<footer className="  text-white text-2xl mt-[-30px] py-4 text-center">
Email: order@nguyenartgallery.com
Open Daily: 8:30am - 6pm     </footer>
<footer className="  text-white text-2xl mt-[-30px] py-4 text-center">
Closed on Vietnamese Public Holidays    </footer>
<footer className="  text-white text-2xl py-4 text-center">
Admission Free  </footer>
</div>

<div className="flex flex-row h-[250px] w-screen  bg-black">
<div className="w-1/6 flex-col"></div>


<div className="w-1/6 flex-col">
<footer className="text-white text-2xl ml-[20px] font-bold text-center">
About NAG
</footer>
<footer className="text-white text-xl  text-center">
Plan Your Visit</footer>
<footer className="text-white text-xl  text-center">
Exhibitions
</footer>
<footer className="text-white text-xl  text-center">
The Art Appraiser
</footer>
</div>
<div className="w-1/6 flex-col">
<footer className="text-white text-2xl font-bold text-center">
Learn & Discover
</footer>
<footer className="text-white text-xl  text-center">
Vietnam Art News</footer>

<footer className="text-white text-xl  text-center">
Paintings
</footer>
<footer className="text-white text-xl  text-center">
Vietnam Famous 
</footer>
<footer className="text-white text-xl  text-center">
Paintings
</footer>

</div>

<div className="w-1/6 flex-col">
<footer className="text-white text-2xl font-bold text-center">
Art in 
</footer>
<footer className="text-white text-xl  text-center">
Collections
</footer>
<footer className="text-white text-xl  text-center">
Artist Team
</footer>
<footer className="text-white text-xl  text-center">
Special Collections</footer>
<footer className="text-white text-xl  text-center">
Unique Chess Sets</footer>
</div>
<div className="w-1/6 flex-col">
<footer className="text-white text-2xl font-bold text-center">
Customer </footer>
<footer className="text-white text-2xl font-bold text-center">
Support
</footer>
<footer className="text-white text-xl  text-center">
Learn & Discover
</footer>

<footer className="text-white text-xl  text-center">
Purchase an Artwork</footer>
<footer className="text-white text-xl  text-center">
Packaging & Shipping
</footer>
<footer className="text-white text-xl  text-center">
User Agreement</footer>
<footer className="text-white text-xl  text-center">
Private Policy</footer>

</div>
<div className="w-1/6 flex-col"></div>




</div>
<div className='bg-slate-500 flex flex-row h-[110px] '>
  <div className='w-1/2 flex flex-col'>
  <footer className="text-white text-xl mt-2 text-center">
  Copyright © Nguyen Art Gallery 2006 - 2024 </footer>
  <img
              src="https://www.dmca.com/img/dmca-website-logo-2022.png"
              alt="Art Image 2"
              className="w-1/4 ml-[180px] h-[60PX] mt-2 object-cover  shadow-none"
            />
  </div>
  <div className='w-1/2 flex flex-row justify-center items-center'>
  <img src="https://static-00.iconduck.com/assets.00/visa-icon-1024x643-qcyg8ohm.png" alt="Visa"   className="w-[40px] rounded-xl mr-5 h-[40px] mt-2 object-cover  shadow-none"
  />
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTjuaamfXtdSB2XnjKu8vDRjwASRJSJtTjw&s" alt="Visa"   className="w-[40px] mr-5 rounded-xl  h-[40px] mt-2 object-cover  shadow-none"
          />
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_6uqSELAwS6TyMAp6oPEcpXQhEpn67Ce6Pw&s" alt="Visa"   className="w-[40px] mr-5 rounded-xl  h-[40px] mt-2 object-cover  shadow-none"
          />
  <img src="https://www.svgrepo.com/show/49021/american-express-logo.svg" alt="Visa"   className="w-[40px] rounded-xl  h-[40px] mt-2 object-cover mr-5  shadow-none"
           />
  </div>

</div>



    
    
    
    </div>
  );
};


export default AboutBody

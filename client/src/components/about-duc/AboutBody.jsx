import React from 'react';
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';

const AboutBody = () => {
  return (
    <div className="flex flex-col h-auto w-screen bg-[#27242E]">
      {/* Menu Bar */}
      <Header />
      <Menu />


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


      <Footer/>
    

  



    
    
    
    </div>
  );
};


export default AboutBody

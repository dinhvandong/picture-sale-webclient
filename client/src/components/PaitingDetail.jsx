
// import React, { useState, useRef, useEffect, useContext } from "react";
// import { FaSearchPlus, FaSearchMinus, FaExpand } from "react-icons/fa"; // Import icons
// import { findPictureArtById } from "../services/api_picture_art";
// import { API_URL_IMAGE } from "../services/api";
// import { LanguageContext } from "../LanguageContext";

// function PaitingDetail({id,  onArtistIDRetrieved}) {
//   const { language } = useContext(LanguageContext);
//   const [scale, setScale] = useState(1); // initial scale for zoom
//   const imageContainerRef = useRef(null); // reference for full-screen

//   const handleZoomIn = () => {
//     setScale((prevScale) => prevScale + 0.2); // zoom in
//   };

//   const handleZoomOut = () => {
//     setScale((prevScale) => (prevScale - 0.2 > 1 ? prevScale - 0.2 : 1)); // zoom out but not less than 1
//   };

//   const handleFullScreen = () => {
//     if (imageContainerRef.current.requestFullscreen) {
//       imageContainerRef.current.requestFullscreen(); // Fullscreen API for modern browsers
//     } else if (imageContainerRef.current.webkitRequestFullscreen) {
//       imageContainerRef.current.webkitRequestFullscreen(); // Safari support
//     } else if (imageContainerRef.current.msRequestFullscreen) {
//       imageContainerRef.current.msRequestFullscreen(); // IE/Edge support
//     }
//   };

//   const [pictureArt, setPictureArt] = useState({
//     id:id,
//     name: { vi: '', en: '' },
//     artistID: '',
//     thumb: '',
//     categoriesID: '',
//     materialsID: '',
//     size: '',
//   });

//   // Fetch data for categories, materials, and artists
//   useEffect(() => {
//     const fetchData = async () => {
//       try {

//         const pictureArtResponse = await findPictureArtById(id);
//         if (pictureArtResponse.success === 200) {
//           const fetchedData = pictureArtResponse.data;
//           console.log('fetchedData',fetchedData);

//           setPictureArt(fetchedData);

//            // Invoke callback with artistID
//            if (onArtistIDRetrieved) {
//            // onArtistIDRetrieved(fetchedData.artistID);
//            if (onArtistIDRetrieved) {
//             onArtistIDRetrieved(fetchedData.artistID, fetchedData.artist?.name);
//           }
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
//   }, [id, onArtistIDRetrieved]);

//   return (
//     <div className="bg-[#27242D] w-full md:w-full text-white flex flex-col md:flex-row  justify-center space-y-4 md:space-y-0 md:space-x-10">


//       <div className="flex flex-col w-full mt-3 md:flex-row">


//         <div
//           ref={imageContainerRef}
//           className="relative w-full md:w-[50%] h-auto overflow-hidden border-2 border-gray-300"

//         >
//           <img
//             src={API_URL_IMAGE + pictureArt.thumb}
//             alt="Curious II"
//             style={{
//               transform: `scale(${scale})`,
//               transition: "transform 0.3s ease",
//             }}
//           />

//           <div className="absolute flex space-x-2 top-2 right-2">
//             <button
//               onClick={handleZoomIn}
//               className="p-2 text-white transition duration-200 bg-blue-500 rounded-full hover:bg-blue-600"
//             >
//               <FaSearchPlus size={20} />
//             </button>
//             <button
//               onClick={handleZoomOut}
//               className="p-2 text-white transition duration-200 bg-red-500 rounded-full hover:bg-red-600"
//             >
//               <FaSearchMinus size={20} />
//             </button>
//             <button
//               onClick={handleFullScreen}
//               className="p-2 text-white transition duration-200 bg-green-500 rounded-full hover:bg-green-600"
//             >
//               <FaExpand size={20} />
//             </button>
//           </div>
//         </div>

//         <div className="w-1/2 ml-5 text-left ">
//           <p className="text-5xl font-bold">{pictureArt?.name[language]}</p>
//           <div className="h-[1px] w-[100px] bg-white"></div>
//           <p className="mt-5 text-lg"><span className="mr-5 font-bold">ARTIST:</span>{pictureArt?.artist?.name[language]}</p>
//           <div className="w-full h-[0.5px] bg-gray-300"></div>
//           <p className="text-lg "><span className="mr-5 font-bold">MATERIAL:</span>{pictureArt?.materials?.name[language]}</p>
//           <div className="w-full h-[0.5px] bg-gray-300"></div>
//           <p className="text-lg "><span className="mr-5 font-bold">SIZE:</span>{pictureArt?.size} </p>
//           <div className="w-full h-[0.5px] bg-gray-300"></div>
//           <p className="mt-3 text-md">Artist:{pictureArt?.artist?.name[language]} </p>
//           <p className="text-md">
//             Subjects: {pictureArt?.category?.name[language]}
//           </p>
//         </div>

//       </div>


//     </div>
//   );
// }

// export default PaitingDetail


import React, { useState, useRef, useEffect, useContext } from "react";
import { FaSearchPlus, FaSearchMinus, FaExpand } from "react-icons/fa";
import { findPictureArtById } from "../services/api_picture_art";
import { API_URL_IMAGE } from "../services/api";
import { LanguageContext } from "../LanguageContext";
import PayPalButtonComponent from "./PayPalButtonComponent";

function PaitingDetail({ id, onArtistIDRetrieved }) {
  const { language } = useContext(LanguageContext);
  const [scale, setScale] = useState(1); // Zoom level
  const imageContainerRef = useRef(null); // Reference for fullscreen container

  const handleZoomIn = () => {
    setScale((prevScale) => prevScale + 0.2); // Zoom in
  };

  const handleZoomOut = () => {
    setScale((prevScale) => (prevScale > 1.2 ? prevScale - 0.2 : 1)); // Zoom out with a minimum of 1
  };


  const vietsub = {
    pay_with_paypal: { vi: 'Thanh toán sử dụng Paypal', en: 'Pay with PayPal' },
  
}
  const handleFullScreen = () => {
    const elem = imageContainerRef.current; // Get the current container element
    if (elem.requestFullscreen) {
      elem.requestFullscreen(); // Standard fullscreen API
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(); // Safari
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen(); // Internet Explorer/Edge
    }
  };

  const [pictureArt, setPictureArt] = useState({
    id,
    name: { vi: "", en: "" },
    artistID: "",
    thumb: "",
    categoriesID: "",
    materialsID: "",
    size: "",
  });

  // Fetch data for the picture art
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await findPictureArtById(id);
        if (response.success === 200) {
          const fetchedData = response.data;
          setPictureArt(fetchedData);

          // Callback with artist ID
          if (onArtistIDRetrieved) {
            onArtistIDRetrieved(fetchedData.artistID, fetchedData.artist?.name);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id, onArtistIDRetrieved]);

  return (
    <div className="bg-[#27242D] w-full md:w-full text-white flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-10">
      <div className="flex flex-col w-full mt-3 md:flex-row">
        <div
          ref={imageContainerRef}
          className="relative w-full md:w-[50%] h-auto overflow-hidden border-2 border-gray-300"
        >
          <img
            src={API_URL_IMAGE + pictureArt.thumb}
            alt={pictureArt?.name[language] || "Painting"}
            style={{
              transform: `scale(${scale})`,
              transition: "transform 0.3s ease",
              width: "100%",
              height: "auto",
            }}
          />
          <div className="absolute flex space-x-2 top-2 right-2">
            <button
              onClick={handleZoomIn}
              className="p-2 text-white transition duration-200 bg-blue-500 rounded-full hover:bg-blue-600"
            >
              <FaSearchPlus size={20} />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-2 text-white transition duration-200 bg-red-500 rounded-full hover:bg-red-600"
            >
              <FaSearchMinus size={20} />
            </button>
            <button
              onClick={handleFullScreen}
              className="p-2 text-white transition duration-200 bg-green-500 rounded-full hover:bg-green-600"
            >
              <FaExpand size={20} />
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 ml-5 text-left">
          <p className="text-5xl font-bold">{pictureArt?.name[language]}</p>
          <div className="h-[1px] w-[100px] bg-white"></div>
          <p className="mt-5 text-lg">
            <span className="mr-5 font-bold">ARTIST:</span>
            {pictureArt?.artist?.name[language]}
          </p>
          <div className="w-full h-[0.5px] bg-gray-300"></div>
          <p className="text-lg">
            <span className="mr-5 font-bold">MATERIAL:</span>
            {pictureArt?.materials?.name[language]}
          </p>
          <div className="w-full h-[0.5px] bg-gray-300"></div>
          <p className="text-lg">
            <span className="mr-5 font-bold">SIZE:</span>
            {pictureArt?.size}
          </p>
          <div className="w-full h-[0.5px] bg-gray-300"></div>
          <p className="mt-3 text-md">
            Artist: {pictureArt?.artist?.name[language]}
          </p>
          <p className="text-md">
            Subjects: {pictureArt?.category?.name[language]}
          </p>
          <h1 className="text-4xl font-bold py-8">{vietsub.pay_with_paypal[language]}</h1>
          <PayPalButtonComponent ammount={50.0} />
        </div>

      </div>
    </div>
  );
}

export default PaitingDetail;

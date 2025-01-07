import { API_URL } from "./api";

// api.js
import axios from 'axios';


// Add the following lines to set the CORS headers
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // Replace '*' with the allowed origin(s) of your backend API
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'; // Specify the allowed HTTP methods
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'; // Specify the allowed headers
export const getPictureArtist = async () => {
    try {
      //const token = localStorage.getItem("token");
      const response = await axios.post(`${API_URL}/pictureArt/findAll`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  
  }

  export const createPictureArt = async (pictureData) => {

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${API_URL}/pictureArt/insert?token=${token}`, pictureData);
   //   console.log("materialData",pictureData);
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const updatePictureArt = async (pictureData) => {

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${API_URL}/pictureArt/update?token=${token}`, pictureData);
     // console.log("materialData",pictureData);
      return response;
    } catch (error) {
      throw error;
    }
  };

  export const findPictureArtById = async (pictureID) => {
    try {
      //const token = localStorage.getItem("token");
      const response = await axios.post(`${API_URL}/pictureArt/findById?id=${pictureID}`, {
        withCredentials: true,
      });
      
      return response.data;
    } catch (error) {
      throw error;
    }
  
  }

  export const deletePictureArt = async (pictureID) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(`${API_URL}/pictureArt/delete?id=${pictureID}&token=${token}`, {
        withCredentials: true,
      })
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export const findByArtistID = async (artistID) => {
    try {
        const response = await axios.get(`${API_URL}/pictureArt/findByArtistID?artistID=${artistID}`, {
          withCredentials: true,
        });
        return response.data; // Assuming the response contains the data you need
    } catch (error) {
        console.error('Error fetching data by artist ID:', error);
        throw error; // Rethrow the error for the calling function to handle
    }
};
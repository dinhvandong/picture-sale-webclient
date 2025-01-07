import { API_URL } from "./api";
// api.js
import axios from 'axios';
// Add the following lines to set the CORS headers
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // Replace '*' with the allowed origin(s) of your backend API
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE'; // Specify the allowed HTTP methods
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'; // Specify the allowed headers
export const getArtist = async () => {
    try {
      //const token = localStorage.getItem("token");
      const response = await axios.post(`${API_URL}/artist/findAll`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  
  }
  export const findArtistById = async (id) => {
    try {
      //const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/artist/findById?id=${id}`, {
        withCredentials: true,
      });
      
      return response.data;
    } catch (error) {
      throw error;
    }
    
  
  }
import axios from "axios";
import { API_URL } from "./api";

export const getHeaderImage = async () => {

    try {
        const response = await axios.get(`${API_URL}/header-settings/1`, {
            withCredentials: true,
        });

        console.log("header_data", response.data);

        //   const response = await axios.get(`${API_URL}/pricetimes/getPriceByDate?date=${dateString}`,

        return response.data;
    } catch (error) {
        throw error;
    }
}
//http://localhost:8081/api/picture-topic/key/header-topic
export const findPictureTopicByKey = async (key) => {
    try {
      const response = await axios.get(`${API_URL}/picture-topic/key/${key}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
import axios from "axios";
import { API_URL } from "./api";

// Base API URL for Feedback
//const API_URL = "http://localhost:8081/api/feedbacks";

// Utility to fetch token from localStorage
const getToken = () => localStorage.getItem("token");

// Retrieve all Feedbacks
export const findAllFeedbacks = async () => {
  try {
    const response = await axios.get(`${API_URL}/feedbacks`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Retrieve a Feedback by ID
export const findFeedbackById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/feedbacks/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Create a new Feedback
export const createFeedback = async (feedbackData) => {
  try {
   // const token = getToken();
    const response = await axios.post(`${API_URL}/feedbacks`, feedbackData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Update an existing Feedback
export const updateFeedback = async (id, feedbackData) => {
  try {
    const token = getToken();
    const response = await axios.put(`${API_URL}/feedbacks/${id}`, feedbackData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Delete a Feedback by ID
export const deleteFeedback = async (id) => {
  try {
    const token = getToken();
    const response = await axios.delete(`${API_URL}/feedbacks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

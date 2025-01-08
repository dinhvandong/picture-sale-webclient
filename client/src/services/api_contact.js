import axios from "axios";
import { ROOT_URL } from "./api";

//onst BASE_URL = "http://localhost:8080/api/contacts"; // Replace with your backend URL

/**
 * Fetch all contacts.
 * @returns {Promise} A promise with the list of contacts.
 */
export const getAllContacts = async () => {
  try {
    const response = await axios.get(ROOT_URL + '/api/contacts');
    return response.data;
  } catch (error) {
    console.error("Error fetching all contacts:", error);
    throw error;
  }
};

/**
 * Fetch a contact by ID.
 * @param {string} id - The ID of the contact.
 * @returns {Promise} A promise with the contact data.
 */
export const getContactById = async (id) => {
  try {
    const response = await axios.get(`${ROOT_URL}/api/contacts/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching contact with ID ${id}:`, error);
    throw error;
  }
};

/**
 * Create or update a contact.
 * @param {Object} contact - The contact data to save.
 * @returns {Promise} A promise with the saved contact data.
 */
export const saveContact = async (contact) => {
  try {
    const response = await axios.post(ROOT_URL + '/api/contacts', contact);
    return response.data;
  } catch (error) {
    console.error("Error saving contact:", error);
    throw error;
  }
};

/**
 * Delete a contact by ID.
 * @param {string} id - The ID of the contact to delete.
 * @returns {Promise} A promise indicating success or failure.
 */
export const deleteContact = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/api/contacts/${id}`);
    return { success: true };
  } catch (error) {
    console.error(`Error deleting contact with ID ${id}:`, error);
    throw error;
  }
};

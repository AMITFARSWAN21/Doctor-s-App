import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/appointments'; // Spring Boot API

// Save appointment to backend
export const saveAppointment = async (appointmentData) => {
  try {
    const response = await axios.post(BASE_URL, appointmentData);
    return response.data;
  } catch (error) {
    console.error('Error saving appointment:', error);
    throw error;
  }
};

// Get all appointments
export const getAppointments = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching appointments:', error);
    throw error;
  }
};

// Optional: Delete appointment by ID
export const deleteAppointment = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    return true;
  } catch (error) {
    console.error('Error deleting appointment:', error);
    throw error;
  }
};

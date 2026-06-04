import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

// Add JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerStudent = async (formData) => {
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  return api.post('/students/register', formData, config);
};

export const loginAdmin = async (email, password) => {
  return api.post('/auth/login', { email, password });
};

export const getCourses = async () => {
  return api.get('/courses');
};

export const getGallery = async () => {
  return api.get('/gallery');
};

export const getStudents = async () => {
  return api.get('/students');
};

export default api;
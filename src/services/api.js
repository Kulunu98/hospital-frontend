import axios from 'axios';

const BASE_URL = 'https://backend.ops-company.com/api';

// Axios instance for authenticated requests
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Attach the token to every request automatically
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// API endpoints
export const fetchPatients = () => axiosInstance.get('/patients');
export const fetchMedicines = () => axiosInstance.get('/medicines');
export const createRecord = (type, data) => axiosInstance.post(`/${type}`, data);
export const updateRecord = (type, id, data) => axiosInstance.put(`/${type}/${id}`, data);
export const deleteRecord = (type, id) => axiosInstance.delete(`/${type}/${id}`);
export const fetchById = (type, id) => axiosInstance.get(`/${type}/${id}`);

// Login request (no token needed here)
export const loginUser = (credentials) => axios.post(`${BASE_URL}/auth/login`, credentials);




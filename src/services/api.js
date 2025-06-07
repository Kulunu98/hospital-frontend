import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';

export const fetchPatients = () => axios.get(`${BASE_URL}/patients`);
export const fetchMedicines = () => axios.get(`${BASE_URL}/medicines`);
export const createRecord = (type, data) => axios.post(`${BASE_URL}/${type}`, data);
export const updateRecord = (type, id, data) => axios.put(`${BASE_URL}/${type}/${id}`, data);
export const deleteRecord = (type, id) => axios.delete(`${BASE_URL}/${type}/${id}`);
export const fetchById = (type, id) => axios.get(`${BASE_URL}/${type}/${id}`);

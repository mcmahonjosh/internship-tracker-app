// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

// Applications API
export const fetchApplications = () => API.get('/applications');

// Later, I will add more like:
// export const createApplication = (newApp) => API.post('/applications', newApp);

export default API;

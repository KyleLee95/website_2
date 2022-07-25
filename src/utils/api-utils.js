import axios from 'axios';

/*
utility function to save on writing setup code to make API calls. 
Uses singleton pattern so that we only instantiate axios once.
*/
export const api = axios.create({
  baseURL: process.env.API_BASE_URL || '/api',
});

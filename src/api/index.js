import axios from 'axios';
export const baseURL = 'http://localhost:8000';
// export const baseURL = 'https://prp.webeyez.com';
export const instance = axios.create({
  baseURL,
});

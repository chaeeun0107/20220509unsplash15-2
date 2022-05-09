import axios from 'axios';

import { API_URL, CLIENT_ID } from '../config';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    timeout: 4000,
    Authorization: `Client-ID ${CLIENT_ID}`,
  },
});

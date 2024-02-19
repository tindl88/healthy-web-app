import Axios from 'axios';

const defaultBaseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const createAxiosInstance = (baseURL = defaultBaseURL) => {
  return Axios.create({
    baseURL,
    timeout: 90000,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

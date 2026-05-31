import axios from "axios";

const BASE_URL = "https://reqres.in/api";

const headers = {
  "x-api-key": import.meta.env.VITE_REQRES_API_KEY,
};

export const loginUser = async (email, password) => {
  const response = await axios.post(
    `${BASE_URL}/login`,
    { email, password },
    { headers }
  );
  return response.data;
};

export const registerUser = async (email, password) => {
  const response = await axios.post(
    `${BASE_URL}/register`,
    { email, password },
    { headers }
  );
  return response.data;
};





// import axios from 'axios';

// const BASE_URL = 'https://reqres.in/api';

// export const loginUser = async (email, password) => {
//   const response = await axios.post(`${BASE_URL}/login`, { email, password });
//   return response.data;
// };

// export const registerUser = async (email, password) => {
//   const response = await axios.post(`${BASE_URL}/register`, { email, password });
//   return response.data;
// };

import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_API_URL;

export const fetchRecipes = async (query) => {
  const response = await axios.get(`${BASE_URL}/complexSearch`, {
    params: {
      apiKey: API_KEY,
      query,
    },
  });
  return response.data.results;
};

export const fetchRecipeById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}/information`, {
    params: {
      apiKey: API_KEY,
    },
  });

  return response.data;
};

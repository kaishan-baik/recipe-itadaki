import axios from 'axios';
import { apiKey } from '../apiKey';

const API_KEY = `${apiKey}`;
const BASE_URL = 'https://api.spoonacular.com/recipes';

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

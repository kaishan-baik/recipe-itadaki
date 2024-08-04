import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
// import { fetchRecipes } from '../services/api';
import { mockRecipes } from '../data/mockData';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  //   const handleSearch = async (query) => {
  //     const data = await fetchRecipes(query);
  //     console.log('recipes found >>', data);
  //     setRecipes(data);
  //   };

  const handleSearch = (query) => {
    // const filteredRecipes = mockRecipes.filter((recipe) => {
    //   recipe.title.toLowerCase().includes(query.toLowerCase());
    // });
    const filteredRecipes = mockRecipes.filter((recipe) => recipe.id == query);
    console.log('filteredRecipes >>', filteredRecipes);
    setRecipes(filteredRecipes);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Recipe Finder</h1>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default HomePage;

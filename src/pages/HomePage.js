import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
// import { fetchRecipes } from '../services/api';
import { mockRecipes } from '../data/mockData';
import bgDark from './../img/bgHome.png';

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
    console.log('query >>', query);
    console.log('query >>', typeof query);
    const filteredRecipes = mockRecipes.filter(
      (recipe) => recipe.id === parseInt(query)
    );
    console.log('filteredRecipes >>', filteredRecipes);
    setRecipes(filteredRecipes);
  };

  return (
    <div
      className="flex flex-col h-screen w-screen bg-cover bg-center px-4 items-center justify-center"
      style={{ backgroundImage: `url(${bgDark})` }}
    >
      <div className="min-h-[20%] max-h-[80%] w-[60%] bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 flex flex-col items-center text-white justify-center">
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-3xl font-bold m-4 mt-[4rem] text-white">
            Recipe Itadaki
          </h1>
          <p className="text-black">- Comfort food for the soul -</p>
        </div>
        <SearchBar onSearch={handleSearch} />
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import { fetchRecipes } from '../services/api';
// import { mockData } from '../data/mockData';
import bgDark from './../img/bgHome.png';
import { Alert, Stack } from '@mui/material';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleSearch = async (query) => {
    const data = await fetchRecipes(query);
    console.log('recipes found >>', data);
    setRecipes(data);
  };

  // const handleSearch = (query) => {
  //   // const filteredRecipes = mockData.filter((recipe) => {
  //   //   recipe.title.toLowerCase().includes(query.toLowerCase());
  //   // });
  //   console.log('query >>', query);
  //   const filteredRecipes = mockData.filter(
  //     (recipe) => recipe.id === parseInt(query)
  //   );
  //   if (filteredRecipes.length > 0) {
  //     setRecipes(filteredRecipes);

  //     setAlertType('success');

  //     setAlertMessage(`Found recipes related to ${query}`);

  //     setAlertVisible(true);

  //     console.log('alert');
  //   } else {
  //     setRecipes([]);

  //     setAlertType('error');

  //     setAlertMessage('No recipes found!');

  //     setAlertVisible(true);
  //   }

  //   setTimeout(() => setAlertVisible(false), 3000);
  // };

  return (
    <div
      className="flex flex-col h-screen w-screen bg-cover bg-center px-4 items-center justify-center"
      style={{ backgroundImage: `url(${bgDark})` }}
    >
      {alertVisible ? (
        <Stack className="-mt-8 absolute top-[8%] right-0">
          <Alert variant="filled" severity={alertType}>
            {alertMessage}
          </Alert>
        </Stack>
      ) : (
        <></>
      )}
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

import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import { fetchRecipes } from '../services/api';
// import { mockData } from '../data/mockData';
import bgDark from './../img/bgHome.png';
import { Alert, Stack } from '@mui/material';
import Loader from '../components/Loader';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const [loaderVisible, setLoaderVisible] = useState(false);

  useEffect(() => {
    onReset();
  }, []);

  const onReset = () => {
    setRecipes([]);
    setAlertVisible(false);
    setAlertMessage('');
    setAlertType('');
    setLoaderVisible(false);
  };

  const handleSearch = async (query) => {
    setLoaderVisible(true);
    if (query) {
      const data = await fetchRecipes(query);

      if (data.length > 0) {
        setRecipes(data);

        setAlertType('success');
        setAlertMessage(`Found recipes related to ${query}`);
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 3000);
      } else {
        setAlertType('error');
        setAlertMessage('No recipes found!');
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 3000);
        setRecipes([]);
      }
    } else {
      setRecipes([]);
    }
    setLoaderVisible(false);
  };

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
          <p className="text-yellow-200 font-semibold">
            - Comfort food for the soul -
          </p>
        </div>
        <SearchBar onSearch={handleSearch} />
        {loaderVisible ? <Loader /> : <></>}
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
};

export default HomePage;

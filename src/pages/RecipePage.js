import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeDetail from '../components/RecipeDetail';
import { fetchRecipeById } from '../services/api';
// import { mockData } from '../data/mockData';
// import { mockRecipeDetails } from '../data/mockRecipe';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRecipeById(id);
      console.log('fetched data >>', data);
      setRecipe(data);
    };
    fetchData();
  }, [id]);

  // useEffect(() => {
  //   const recipeSteps = mockRecipeDetails.find(
  //     (recipe) => recipe.id === parseInt(id)
  //   );

  //   setRecipe(recipeSteps);
  // }, [id]);

  return <RecipeDetail recipe={recipe} />;
};

export default RecipePage;

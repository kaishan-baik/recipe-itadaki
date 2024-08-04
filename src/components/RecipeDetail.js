import React from 'react';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-2xl font-bold mt-4">{recipe.title}</h1>
      <h2 className="text-lg font-normal mt-2">Source: {recipe.sourceUrl}</h2>
      <h2 className="text-lg font-semibold mt-2">Summary:</h2>
      <h3>{recipe.summary}</h3>
      {/* <h2 className="text-lg font-semibold mt-2">Ingredients:</h2> */}
      {/* <ul className="list-disc pl-5">
        {recipe.instructions.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
        {recipe}
      </ul> */}
      <h2 className="text-lg font-semibold mt-2">Instructions:</h2>
      <p>{recipe.summary}</p>
    </div>
  );
};

export default RecipeDetail;

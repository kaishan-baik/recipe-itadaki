import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="border rounded-lg p-4 shadow">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-48 object-cover rounded"
          />
          <h2 className="mt-2 text-lg font-semibold">{recipe.title}</h2>
          <Link
            to={`/recipe/${recipe.id}`}
            className="text-blue-500 hover:underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  return (
    <div className="flex flex-col m-2 overflow-y-scroll">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="grid grid-cols-2 border rounded-lg p-4 shadow m-4"
        >
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-[100%] object-contain rounded-xl border-4 border-white"
          />
          <div className=" flex flex-col ml-3 bg-yellow-900  bg-opacity-50 rounded-lg p-3 justify-center items-center text-center">
            <h2 className="mt-2 text-2xl font-semibold">{recipe.title}</h2>
            <Link
              to={`/recipe/${recipe.id}`}
              className="h-[20%] w-[60%] flex items-center justify-center mt-2 bg-orange-500  rounded-lg bg-opacity-70 duration-300 hover:scale-110 hover:bg-yellow-300 hover:text-orange-500 hover:font-bold"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

import React, { useEffect, useState } from 'react';
import RecipeBG from './../img/bgTable2.png';
import parse from 'html-react-parser';
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

const RecipeDetail = ({ recipe }) => {
  const [ingredients, setIngredients] = useState([]);
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    if (
      recipe &&
      recipe.analyzedInstructions &&
      recipe.analyzedInstructions.length > 0
    ) {
      let ingredientsList = [];
      let equipmentList = [];
      let dataBulk = recipe.analyzedInstructions[0].steps;

      for (let i = 0; i < dataBulk.length; i++) {
        if (dataBulk[i].equipment.length > 0) {
          for (let j = 0; j < dataBulk[i].equipment.length; j++) {
            equipmentList.push({
              name: dataBulk[i].equipment[j].name,
              src: dataBulk[i].equipment[j].image,
            });
          }
        }
        if (dataBulk[i].ingredients.length > 0) {
          for (let j = 0; j < dataBulk[i].ingredients.length; j++) {
            ingredientsList.push({
              name: dataBulk[i].ingredients[j].name,
              src: dataBulk[i].ingredients[j].image,
            });
          }
          ingredientsList.reduce((acc, current) => {
            const x = acc.find((item) => item.name === current.name);
            if (!x) {
              acc.push(current);
            }
            return acc;
          }, []);
        }
      }
      let finalEquipmentList = equipmentList.reduce((acc, current) => {
        const x = acc.find((item) => item.name === current.name);
        if (!x) {
          acc.push(current);
        }
        return acc;
      }, []);

      let finalIngredientsList = ingredientsList.reduce((acc, current) => {
        const x = acc.find((item) => item.name === current.name);
        if (!x) {
          acc.push(current);
        }
        return acc;
      }, []);
      setIngredients(finalIngredientsList);
      setEquipment(finalEquipmentList);
    }
  }, [recipe]);

  if (!recipe) {
    return <p>Loading ...</p>;
  }

  return (
    <div
      className="flex flex-col h-full w-full bg-cover bg-center px-4 items-center justify-center text-justify"
      style={{ backgroundImage: `url(${RecipeBG})` }}
    >
      <div className=" h-[80%] w-[60%] bg-gray-600 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border border-gray-100  items-center text-white  py-4 px-10 overflow-y-scroll flex flex-col">
        <div className="text-center flex flex-col">
          <h1 className="text-3xl font-bold m-4 underline">{recipe.title}</h1>
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-[18rem] object-contain rounded-lg"
          />
          <h2 className="text-lg font-normal mt-2">
            Source:{' '}
            <a href={recipe.sourceUrl} className="text-orange-400">
              {recipe.sourceUrl}
            </a>
          </h2>
        </div>
        <div>
          <h1 className="text-2xl font-bold m-4 text-center ">
            Dietary Restrictions:
          </h1>
          <div className="flex space-x-2">
            <p>
              Vegetarian{' '}
              {recipe.vegetarian ? (
                <CheckIcon sx={{ color: '#45f542' }} />
              ) : (
                <DoNotDisturbIcon color="error" />
              )}
            </p>
            <p>
              Vegan{' '}
              {recipe.vegan ? (
                <CheckIcon sx={{ color: '#45f542' }} />
              ) : (
                <DoNotDisturbIcon color="error" />
              )}
            </p>
            <p>
              Gluten-free{' '}
              {recipe.glutenFree ? (
                <CheckIcon sx={{ color: '#45f542' }} />
              ) : (
                <DoNotDisturbIcon color="error" />
              )}
            </p>
            <p>
              Dairy Free{' '}
              {recipe.dairyFree ? (
                <CheckIcon sx={{ color: '#45f542' }} />
              ) : (
                <DoNotDisturbIcon color="error" />
              )}
            </p>
          </div>
        </div>
        <div className="w-full">
          <div>
            <h2 className="font-semibold text-lg my-2">Ingredients:</h2>
            <div className="grid">
              <ul className="grid grid-cols-2 list-disc list-inside gap-x-4">
                {ingredients.map((item) => (
                  <li
                    className="capitalize"
                    key={item.name + '-ingredient' + item.id}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <h2 className="font-semibold text-lg my-2">Equipment:</h2>
            <div>
              <ul className="list-disc list-inside">
                {equipment.map((item) => (
                  <li
                    className="capitalize"
                    key={item.name + '-equipment' + item.id}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold underline my-2">Summary:</h1>
          <p className="text-lg font-light">{parse(recipe.summary)}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold my-2 underline">Instructions:</h2>
          <p className="text-lg font-light">{parse(recipe.instructions)}</p>

          {recipe.analyzedInstructions[0].steps.length > 0 ? (
            <div className="my-4">
              <h1 className="text-2xl font-bold my-2 underline ">
                Detailed instructions:
              </h1>
              <ol className="list-decimal list-inside">
                {recipe.analyzedInstructions[0].steps.map((item) => (
                  <li
                    key={item.step + 1}
                    className=" list-item text-lg font-light"
                  >
                    {item.step}
                    <br />
                  </li>
                ))}
              </ol>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;

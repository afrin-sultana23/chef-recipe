import React, { useEffect, useState } from 'react';
import EachRecipes from './EachRecipes';

const ChefRecipes = ({ Chef }) => {
  const { recipes } = Chef;
  const [tallCard, setTallCard] = useState(false);

  useEffect(() => {
    const isTall = recipes.some(recipe => recipe.cooking_method.length > 300);
    setTallCard(isTall);
  }, [recipes]);

  return (
    <div className='my-16 md:my-20'>
      <div className='text-center mb-10'>
        <h2 className='text-1xl md:text-3xl'>
          <span className='underline decoration-base-200 text-4xl md:text-5xl pl-1 md:pl-2 font-bold text-red-500'>Chefs Recipes</span>
         
        </h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center items-center'>
        {
          recipes.map(recipe =>
            <EachRecipes
              key={recipe.recipe_id}
              recipe={recipe}
              tallCard={tallCard}
            >
            </EachRecipes>
          )
        }
      </div>
    </div>
  );
};

export default ChefRecipes;
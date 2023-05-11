import React, { useEffect, useState } from 'react';
import Loading from '../../../layout/Loading';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const BestRecipes = () => {
  const newArray = [];
  const [chefs, setChefs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://food-feast-server-afriin474-gmailcom.vercel.app/chefs`)
      .then(res => res.json())
      .then(data => {
        setChefs(data);
        setIsLoading(false);
      })
  }, []);

  chefs.map(chef =>
    chef.recipes.map(recipe => {
      if (recipe.rating > 4.8) {
        newArray.push(recipe);
      }
    }))

  const slicedArray = newArray.slice(0, 4);

  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div className='px-8 md:max-w-6xl my-5'>
      <div className='p-5 md:p-10'>
        <div className='text-start mb-5'>
          <h2 className='text-1xl md:text-3xl mb-5'>
            <span className='underline decoration-red-300  text-red-400 text-4xl md:text-6xl pl-1 md:pl-2 font-bold'>Recipes</span>
            <span className='text-4xl md:text-5xl text-red-800'> on the road to summer !</span>
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
          {
            slicedArray.map(recipe => {
              return (
                <div key={recipe.recipe_id} className=''>
                  <div className="card bg-slate-200 shadow-xl rounded-lg flex items-stretch">
                    <figure className="h-60 relative overflow-hidden">
                      <img className='h-full w-full object-cover transition-opacity duration-500 ease-in-out hover:opacity-50' src={recipe.recipe_url} alt="recipe" />
                      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500 ease-in-out"></div>
                    </figure>
                    <div className='p-5 mb-auto'>
                      <h2 className="card-title text-2xl text-stone-800">{recipe.recipe_name}</h2>
                      <div>
                        <span className='font-bold'>Rating</span>
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={recipe.rating}
                          readOnly />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  );
};

export default BestRecipes;
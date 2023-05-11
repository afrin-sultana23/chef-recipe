import React from 'react';
import Banner from './Banner';
import Chefs from './Chefs';
import BestRecipes from './BestRecipes';
import Categories from '../Categories';

const Home = () => {
  return (
    <div className='container mx-auto px-5 md:max-w-6xl'>
      <Banner></Banner>
      <Chefs></Chefs>
      <Categories></Categories>
      <BestRecipes></BestRecipes>
    </div>
  );
};

export default Home;
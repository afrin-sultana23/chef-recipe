import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Lottie from "lottie-react";
import foodVlogger from '../../../assets/animation/FoodVlogger.json'
import ChefRecipes from './ChefRecipes';
import { FaBriefcase } from "react-icons/fa";

const ChefDetails = () => {
  const chef = useLoaderData();
  const { chef_id, chef_name, chef_picture, years_of_experience, num_of_recipes, likes, description } = chef;
  return (
    <div className='px-5 mx-auto md:max-w-5xl'>
      <div className='p-5 md:p-10'>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center items-center'>
          <div>
            <div className="card w-80 md:w-96 bg-base-100 shadow-xl image-full">
              <figure><img src={chef_picture} alt="" /></figure>
              <div className="card-body">
                <h2 className="card-title text-3xl text-white">{chef_name}</h2>
                <div className='flex flex-col'>
                  <p className='text-2xl text-white'><span className='text-pink-200'>{years_of_experience}</span> years of experience</p>
                  <p className='text-2xl text-white'><span className='text-pink-200'>{num_of_recipes}</span> Known recipes</p>
                  <p className='text-2xl text-white'><span className='text-pink-200'>{likes}</span> likes</p>
                  <p className='text-black mt-5'><FaBriefcase className='text-2xl text-white mb-2' /><span className='text-white'>{description}</span></p>
                </div>
                <div className="card-actions justify-end">
                  <Link to='/chefs'>
                    <button className="btn btn-primary">Check Chefs list</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Lottie
              className='h-[50vh] md:h-[70vh] w-[50vh] md:w-[70vh]'
              animationData={foodVlogger}
              loop={true}
            />
          </div>
        </div>
       
        <ChefRecipes
          key={chef_id}
          chef={chef}
        >
        </ChefRecipes>
      </div>
    </div>
  );
};

export default ChefDetails;
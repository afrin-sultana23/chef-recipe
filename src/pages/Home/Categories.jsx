import React from 'react';

const Categories = () => {
    return (
        <div>
           <h1 className='text-4xl mb-5 text-center text-stone-900'>Our Most Popular Categories</h1>
           <div className='md:max-w-4xl grid grid-cols-2 md:grid-cols-4 mx-auto'>
            <div className="border py-5 border-red-300 rounded-xl bg-red-200 text-center font-bold text-xl h-16 w-44 hover:bg-slate-100 duration-500 ease-in-out">Weekly Recipes</div>
            <div className="border py-5 border-red-300 rounded-xl bg-red-200 text-center font-bold text-xl h-16 w-44 hover:bg-slate-100 duration-500 ease-in-out">Budget Recipes</div>
            <div className="border py-5 border-red-300 rounded-xl bg-red-200 text-center font-bold text-xl h-16 w-36 hover:bg-slate-100 duration-500 ease-in-out">Vagetarian</div>
            <div className="border py-5 border-red-300 rounded-xl bg-red-200 text-center font-bold text-xl h-16 w-36 hover:bg-slate-100 duration-500 ease-in-out">New Recipes</div>
           </div>
           <div className='my-10'>
           <div className="hero min-h-[60vh]" style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp7709844.jpg")` }}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-left text-neutral-content">
    <div className="text-slate-800">
      <h1 className="mb-5 text-5xl font-bold">Looking For Food <br /> Inspiration?</h1>
      <p className="mb-5 font-medium text-xl">Subscribe to our newsletters to receive fresh ideas every week, straight to your inbox!</p>
      <input type="text" placeholder="Email" className="input bg-white input-primary input-md w-full max-w-xs" />
    </div>
  </div>
</div>
           </div>
        </div>
    );
};

export default Categories;
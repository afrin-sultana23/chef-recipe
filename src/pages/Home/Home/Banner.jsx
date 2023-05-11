import React from 'react';



const Banner = () => {
    return (
        <div className=''>
           <div className="hero min-h-[80vh]" style={{ backgroundImage: `url("https://i.ibb.co/tLGmDjr/Grilled-Salmon-with-Dill-Butter.jpg")`} }>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className='font-bold text-left text-3xl md:text-5xl text-stone-600 underline'>welcome to</h1> <br />
      <span>
      <h1 className="mb-10 me-2 text-stone-800 text-4xl md:text-7xl font-bold text-left">Food Feast</h1>
      </span>
      <p className="mb-5 w-full font-semibold text-gray-900 md:text-xl">Oh! come on, Who could have guessed that we had over 7,000 recipes? our desserts and recipes will not fail to delight you. Our website may also include information on the food-related news, and interviews with renowned chefs.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>


  
      </div>
    );
};

export default Banner;
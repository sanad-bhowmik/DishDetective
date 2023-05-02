import React, { useEffect, useState } from 'react';
import './ChefCard.css'
import { FaConciergeBell } from "react-icons/fa";
import { useLoaderData } from 'react-router-dom';

const ChefCard = ({ chef }) => {
  const { chef_name, chef_picture, years_of_experience, number_of_recipes, likes } = chef;
//   const chefrecipe = useLoaderData();

  return (
    <div className='chef'>
      <div className="card w-96 font-serif bg-base-100 shadow-3xl mb-10">
        <figure><img src={chef_picture} className='h-[80%]' alt="..." /></figure>
        <div className="card-body ">
          <h2 className="card-title">{chef_name}</h2>
          <p>Experience: {years_of_experience} years</p>
          <div className='flex'>
            <button className="bg-white text-black btn gap-2  mr-6">
              <p>Recipes:</p>
              <div className="badge badge-secondary">{number_of_recipes}</div>
            </button>
            <button className="bg-white text-black btn gap-2">
              Likes
              <div className="badge badge-secondary">{likes}</div>
            </button>
          </div>
          <div className="card-actions justify-center mt-6">
            <button className="btn btn-primary">View Recipes</button>
            {/* <p>{chefrecipe.length}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Recipes.css'
import { FaStar } from "react-icons/fa";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('http://localhost:5000/recipe');
                const data = await response.json();
                const filteredRecipes = data.filter((recipe) => recipe.chef_id === id);
                setRecipes(filteredRecipes);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, [id]);

    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe._id} className=''>
                    <div className=' flex '>
                        <div className=' ml-[8%]'>
                            <h1 className='text-5xl font-serif underline'>{recipe.chef_name}</h1>
                            <p className='w-[40%] mt-10 text-xl font-serif'>{recipe.chef_bio}</p>
                            <img className=' h-[50%] ml-24 pt-32' src={recipe.chef_picture} alt="" />
                        </div>
                        <div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, modi.</p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className='ml-[40%] mt-24'>
                        <h1>Recipes</h1>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={recipe.pic} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{recipe.recipe_name}</h2>
                                <p>Ingredients</p>
                                <p> {recipe.ingredients}</p>
                                <p>Cooking method</p>
                                <p>{recipe.cooking_method}</p>
                                <div className="card-actions">
                                    <button className="btn btn-warning">Rating:{recipe.rating}<FaStar /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Recipes;
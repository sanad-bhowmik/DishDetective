import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Recipes.css'
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    const { id } = useParams();
    const [clicked, setClicked] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('http://localhost:5000/recipe');
                const data = await response.json();
                const filteredRecipes = data.filter((recipe) => recipe.chef_id === id);
                setRecipes(filteredRecipes);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, [id]);

    const handleAddToFavorites = (recipe) => {
        setFavoriteRecipes([...favoriteRecipes, recipe]);
        setClicked({ ...clicked, [recipe._id]: true });
        toast.success(`${recipe.recipe_name} has been added to favorites!`, { autoClose: 2000 });
    };


    const isFavorite = (recipe) => {
        return favoriteRecipes.some((favoriteRecipe) => favoriteRecipe._id === recipe._id);
    };

    if (loading) {
        return <div className="spinner">

        </div>

    }

    return (
        <div className='recipe-container'>
            <div className='recipe-header'>
                {recipes.map((recipe) => (
                    <div key={recipe._id} className='banner-recipe text-white'>
                        <h1 className='recipe-title'>{recipe.chef_name}</h1>
                        <p className='recipe-bio w-[50%] ml-[30%]'>{recipe.chef_bio}</p>
                            <p > {recipe.years_of_experience}</p>
                            <p>{recipe.number_of_recipes}</p>
                            <p>{recipe.likes}</p>
                            <img className=' profile-picture mb-20' src={recipe.chef_picture} alt="" />
                    </div>
                ))}
            </div>
            <div className='divider'></div>
            <div className='recipes'>
                <h1>Recipes</h1>
                <div className='recipe-cards'>
                    {recipes.map((recipe) => (
                        <div key={recipe._id} className='recipe-card'>
                            <img className='recipe-picture' src={recipe.pic} alt="Shoes" />
                            <div className='recipe-details'>
                                <h2 className='recipe-name'>{recipe.recipe_name}</h2>
                                <p className='ingredients'>Ingredients: {recipe.ingredients}</p>
                                <p className='cooking-method'>Cooking method: {recipe.cooking_method}</p>
                                <div className="card-actions">
                                    <button className="rating-btn ml-24">Rating: {recipe.rating} <FaStar /></button>
                                    <button
                                        className={`rating-btn ml-[20%] ${clicked[recipe._id] ? 'disabled' : ''}`}
                                        disabled={clicked[recipe._id]}
                                        onClick={() => handleAddToFavorites(recipe)}
                                    >
                                        {clicked[recipe._id] ? 'Added to Favorites' : 'Add to Favorites'}
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipes;

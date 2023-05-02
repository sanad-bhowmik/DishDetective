import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
                <div key={recipe._id}>
                    <h3>{recipe.recipe_name}</h3>
                    <p>Ingredients: {recipe.ingredients}</p>
                    <p>Cooking method: {recipe.cooking_method}</p>
                    <p>Rating: {recipe.rating}</p>
                </div>
            ))}
        </div>
    );
};

export default Recipes;
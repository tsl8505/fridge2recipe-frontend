// RecipeList.js
import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import { fetchRecipeSuggestions } from '../services/recipeService';

const RecipeList = ({ ingredients }) => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Simulate fetching recipes based on ingredients
  useEffect(() => {
    // Fetch recipes from your API or use a service function
    const fetchRecipes = async () => {
      const recipeResults = await fetchRecipeSuggestions(ingredients);
      setRecipes(recipeResults);
    };
    fetchRecipes();
  }, [ingredients]);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe); // Show details when a recipe is clicked
  };

  const handleBackClick = () => {
    setSelectedRecipe(null); // Reset selectedRecipe to go back to the list
  };

  return (
    <div className="recipe-list">
      {selectedRecipe ? (
        <div className="recipe-details">
          {/* Back Button */}
          <button onClick={handleBackClick} style={{ position: 'absolute', top: '10px', left: '10px' }}>
            Back
          </button>
          {/* Selected Recipe Details */}
          <h3>{selectedRecipe.name}</h3>
          <img src={selectedRecipe.image} alt={selectedRecipe.name} />
          <p>{selectedRecipe.description}</p>
          <p>Ingredients: {selectedRecipe.ingredients.join(', ')}</p>
          <p>Steps: {selectedRecipe.steps}</p>
        </div>
      ) : (
        <div className="recipes-container">
          <h2>Recipe Suggestions</h2>
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              recipe={recipe}
              onClick={() => handleRecipeClick(recipe)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;

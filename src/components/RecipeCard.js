import React from 'react';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div className="recipe-card" onClick={() => onClick(recipe)}>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;

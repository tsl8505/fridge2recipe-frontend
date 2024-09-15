// MainPage.js
import React, { useState } from 'react';
import Pantry from './Pantry'; // Or Fridge depending on the chosen name
import RecipeList from './RecipeList';

const MainPage = () => {
  const [ingredients, setIngredients] = useState([]);

  const handleAddIngredient = (ingredient) => {
    setIngredients([...ingredients, ingredient]);
  };

  const handleRemoveIngredient = (ingredient) => {
    setIngredients(ingredients.filter((item) => item !== ingredient));
  };

  return (
    <div className="main-page">
      <Pantry
        ingredients={ingredients}
        onAdd={handleAddIngredient}
        onRemove={handleRemoveIngredient}
      />
      <div className="recipe-container">
        <RecipeList ingredients={ingredients} />
      </div>
    </div>
  );
};

export default MainPage;

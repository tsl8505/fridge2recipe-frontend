import React, { useState, useEffect } from 'react';
import { fetchIngredients } from '../services/ingredientService'; // Import the fetchIngredients service

const Pantry = ({ ingredients, onAdd, onRemove }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      const loadSuggestions = async () => {
        const ingredientSuggestions = await fetchIngredients(query);
        setSuggestions(ingredientSuggestions);
      };
      loadSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleManualAdd = () => {
    // Ensure the ingredient added is a valid one
    const validIngredient = suggestions.find(suggestion => suggestion.name.toLowerCase() === query.toLowerCase());
    if (validIngredient) {
      handleAdd(validIngredient.name);
    } else {
      alert('Please select a valid ingredient.');
    }
  };

  const handleAdd = (ingredient) => {
    if (ingredients.some(existingIngredient => existingIngredient.toLowerCase() === ingredient.toLowerCase())) {
      alert('Ingredient already exists in your pantry.');
    } else {
      onAdd(ingredient);  // Add the valid ingredient
      setQuery('');  // Clear the input
      setSuggestions([]);

    };
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <div className="pantry">
      <h2>Your Pantry</h2>
      <ul>
        {ingredients
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .map((ingredient, index) => (
          <li key={index}>
            {ingredient}
            <button onClick={() => onRemove(ingredient)}>Remove</button>
          </li>
        ))}
      </ul>

      <div className="input-container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search ingredient"
          aria-expanded={suggestions.length > 0} // Accessibility enhancement
          aria-haspopup="listbox"
          aria-controls="suggestions-list"
        />
        {suggestions.length > 0 && (
          <ul id="suggestions-list" className="dropdown-menu">
            {suggestions.map((suggestion) => (
              <li key={suggestion.id} onClick={() => handleAdd(suggestion.name)}>
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={handleManualAdd}>Add Ingredient</button>
    </div>
  );
};

export default Pantry;

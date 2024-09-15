// services/recipeService.js
export const fetchRecipeSuggestions = async (ingredients) => {
    // Mock data to simulate API response

    const mockRecipes = [
        {
            name: "Spaghetti Bolognese",
            description: "A classic Italian pasta dish with rich meat sauce.",
            image: "https://www.pexels.com/photo/spaghetti-bolognese-on-a-white-plate-15500451/",
            ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic"],
            steps: "1. Cook pasta. 2. Brown meat. 3. Add sauce and simmer. 4. Serve over pasta."
        },
        {
            name: "Vegetable Stir Fry",
            description: "A quick and healthy stir fry with mixed vegetables.",
            image: "https://example.com/stirfry.jpg",
            ingredients: ["broccoli", "carrots", "soy sauce", "garlic", "ginger"],
            steps: "1. Heat oil. 2. Stir fry vegetables. 3. Add sauce. 4. Serve with rice."
        },
        {
            name: "Chicken Salad",
            description: "A fresh and light salad with grilled chicken and mixed greens.",
            image: "https://example.com/chickensalad.jpg",
            ingredients: ["chicken breast", "lettuce", "tomato", "cucumber", "olive oil"],
            steps: "1. Grill chicken. 2. Toss salad. 3. Add dressing. 4. Serve."
        },
        {
            name: "Pork Tenderloin with Apples",
            description: "A savory and slightly sweet dish featuring pork tenderloin and apples.",
            image: "https://example.com/porktenderloin.jpg",
            ingredients: ["pork tenderloin", "apples", "onion", "garlic", "cinnamon", "olive oil"],
            steps: "1. Preheat oven to 375°F (190°C). 2. Season pork with salt and pepper. 3. Sear pork in a hot skillet. 4. Add apples, onion, and garlic. 5. Transfer to oven and roast for 20 minutes. 6. Let rest before slicing. 7. Serve with apples and pan juices."
        },
        {
            name: "Pulled Pork Sandwiches",
            description: "Tender pulled pork served on buns with barbecue sauce and coleslaw.",
            image: "https://example.com/pulledpork.jpg",
            ingredients: ["pork shoulder", "barbecue sauce", "buns", "colseslaw", "onion", "salt", "pepper"],
            steps: "1. Rub pork shoulder with salt and pepper. 2. Cook pork in a slow cooker with barbecue sauce for 8 hours. 3. Shred pork and mix with additional barbecue sauce. 4. Serve on buns with coleslaw."
        },
        {
            name: "Pork Schnitzel",
            description: "Breaded and fried pork cutlets served with lemon wedges.",
            image: "https://example.com/porkschitzel.jpg",
            ingredients: ["pork cutlets", "flour", "eggs", "breadcrumbs", "lemon", "vegetable oil", "salt", "pepper"],
            steps: "1. Pound pork cutlets to an even thickness. 2. Dredge in flour, dip in beaten eggs, then coat with breadcrumbs. 3. Fry in hot oil until golden brown. 4. Drain on paper towels. 5. Serve with lemon wedges."
        }
    ];
      
  
    // Simulate filtering recipes by matching ingredients
    const filteredRecipes = mockRecipes.filter(recipe =>
      recipe.ingredients.some(ingredient => ingredients.includes(ingredient))
    );
  
    // Simulate delay for API response
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(filteredRecipes)
        resolve(filteredRecipes);
      }, 1000); // 1-second delay
    });
  };
  
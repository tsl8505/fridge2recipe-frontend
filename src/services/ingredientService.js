// services/ingredientService.js
export const fetchIngredients = async (query) => {
    // Mock data to simulate API response
    const mockIngredients = [
        { id: 1, name: 'tomato' },
        { id: 2, name: 'chicken' },
        { id: 3, name: 'garlic' },
        { id: 4, name: 'olive oil' },
        { id: 5, name: 'pork' },
        { id: 6, name: 'onion' },
        { id: 7, name: 'carrot' },
        { id: 8, name: 'broccoli' },
        { id: 9, name: 'soy sauce' },
        { id: 10, name: 'ginger' },
        { id: 11, name: 'apples' },
        { id: 12, name: 'cinnamon' },
        { id: 13, name: 'eggs' },
        { id: 14, name: 'flour' },
        { id: 15, name: 'breadcrumbs' }
    ];
    

    // Simulate filtering ingredients by query
    const filteredIngredients = mockIngredients.filter(ingredient =>
        ingredient.name.toLowerCase().startsWith(query.toLowerCase())
    );

    // Simulate delay for API response
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(filteredIngredients);
        }, 500); // 500ms delay to simulate network latency
    });
};

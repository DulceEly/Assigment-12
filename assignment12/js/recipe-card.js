// Create an object to hold information on your favorite recipe. 

// It should have properties for 

// title (a string), 
// servings (a number), and 
// ingredients (an array of strings). 

// Your object should have a publicly available method that when called, will log out the recipe within the console so that the recipe information looks like this:

// Guacamole
// Serves: 4
// Ingredients: 
// - 3 Avocados
// - 1 Lime
// - 1 Teaspoon Salt
// - 1/2 Cup Onion
// - 3 Tablespoons Cilantro
// - 2 Diced Tomatoes
// - 1 Teaspoon Garlic
// - 1 Pinch Ground Pepper


class Recipe {
    constructor(title, servings, ingredients) {
      this.title = title;
      this.servings = servings;
      this.ingredients = ingredients;
      console.log(`${this.title} Serves:${this.servings} Ingredients:${this.ingredients}`);
    }
  }
  const recipe1 = new Recipe (
      'Guacamole', 4,'\n - 3 Avocados  \n - 1 Lime \n  - 1 Teaspoon Salt \n  - 1/2 Cup Onion \n  - 3 Tablespoons Cilantro \n   - 2 Diced Tomatoes \n    - 1 Teaspoon Garlic \n    - 1 Pinch Ground Pepper'
      );


  

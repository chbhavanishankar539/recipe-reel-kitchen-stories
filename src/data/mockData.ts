
export interface Recipe {
  id: string;
  title: string;
  image: string;
  category: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  instructions: string[];
  author: string;
  description: string;
  videoId?: string;
  featured?: boolean;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  channel: string;
  views: string;
  description: string;
  url: string;
  recipeId?: string;
}

export interface Category {
  name: string;
  image: string;
  count: number;
}

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Creamy Tuscan Chicken Pasta",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    category: "Pasta",
    prepTime: "15 mins",
    cookTime: "25 mins",
    totalTime: "40 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "1 lb fettuccine pasta",
      "2 tbsp olive oil",
      "1.5 lbs chicken breast, cut into bite-sized pieces",
      "Salt and pepper, to taste",
      "4 cloves garlic, minced",
      "1 cup cherry tomatoes, halved",
      "2 cups fresh spinach",
      "1.5 cups heavy cream",
      "1/2 cup chicken broth",
      "1/2 cup grated Parmesan cheese",
      "1 tsp Italian seasoning",
      "1/4 tsp red pepper flakes (optional)",
      "Fresh basil for garnish"
    ],
    instructions: [
      "Cook pasta according to package directions. Drain and set aside.",
      "Season chicken with salt and pepper. In a large skillet, heat olive oil over medium-high heat.",
      "Add chicken and cook until golden brown and cooked through, about 5-7 minutes. Remove and set aside.",
      "In the same skillet, add garlic and cook until fragrant, about 30 seconds.",
      "Add cherry tomatoes and cook for 2-3 minutes until they begin to soften.",
      "Pour in the heavy cream and chicken broth, bring to a simmer.",
      "Add Parmesan cheese, Italian seasoning, and red pepper flakes. Stir until cheese is melted and sauce is smooth.",
      "Add spinach and stir until wilted.",
      "Return chicken to the skillet and add the cooked pasta. Toss until everything is well coated with the sauce.",
      "Serve hot, garnished with fresh basil and additional Parmesan cheese if desired."
    ],
    author: "Chef Maria",
    description: "This creamy Tuscan chicken pasta combines tender chicken, sun-dried tomatoes, and spinach in a rich, garlicky cream sauce. It's a restaurant-quality dish that's surprisingly easy to make at home.",
    videoId: "1",
    featured: true
  },
  {
    id: "2",
    title: "Classic Beef Tacos",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    category: "Mexican",
    prepTime: "10 mins",
    cookTime: "15 mins",
    totalTime: "25 mins",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "1 lb ground beef",
      "1 packet taco seasoning",
      "8 hard taco shells",
      "1 cup shredded lettuce",
      "1 cup diced tomatoes",
      "1/2 cup shredded cheddar cheese",
      "1/4 cup diced red onion",
      "1/4 cup sour cream",
      "1/4 cup salsa",
      "Fresh cilantro for garnish",
      "1 lime, cut into wedges"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C).",
      "In a large skillet over medium-high heat, cook ground beef until browned, about 5-7 minutes. Drain excess fat.",
      "Add taco seasoning and water as directed on the package. Simmer for 5 minutes.",
      "Meanwhile, place taco shells on a baking sheet and warm in the oven for 3-5 minutes.",
      "Prepare toppings: chop lettuce, dice tomatoes and onions, and shred cheese.",
      "To assemble, fill each taco shell with beef mixture, then top with lettuce, tomatoes, cheese, onions, and a dollop of sour cream.",
      "Serve with salsa, cilantro, and lime wedges on the side."
    ],
    author: "Chef Carlos",
    description: "These classic beef tacos are a family favorite - crispy corn shells filled with seasoned ground beef and topped with fresh veggies and cheese. Customize with your favorite toppings for a quick and satisfying meal!",
    videoId: "2"
  },
  {
    id: "3",
    title: "Chocolate Lava Cake",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    category: "Dessert",
    prepTime: "15 mins",
    cookTime: "12 mins",
    totalTime: "27 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "6 oz semi-sweet chocolate",
      "1/2 cup unsalted butter",
      "1/4 cup all-purpose flour",
      "1/2 cup powdered sugar",
      "2 large eggs",
      "2 egg yolks",
      "1 tsp vanilla extract",
      "Pinch of salt",
      "Butter and cocoa powder for ramekins",
      "Vanilla ice cream for serving (optional)",
      "Fresh berries for garnish (optional)"
    ],
    instructions: [
      "Preheat oven to 425°F (220°C). Butter four 6-oz ramekins and dust with cocoa powder.",
      "In a microwave-safe bowl, combine chocolate and butter. Microwave in 30-second intervals, stirring in between, until melted and smooth.",
      "In a separate bowl, whisk together flour, powdered sugar, and salt.",
      "Add eggs, egg yolks, and vanilla to the chocolate mixture. Whisk until combined.",
      "Gradually add the flour mixture to the chocolate mixture and stir until just combined.",
      "Divide the batter evenly among the prepared ramekins.",
      "Place ramekins on a baking sheet and bake for 12-14 minutes until the edges are firm but the center is still soft.",
      "Remove from oven and let stand for 1 minute.",
      "Run a knife around the edges to loosen, then invert onto serving plates.",
      "Serve immediately with vanilla ice cream and fresh berries if desired."
    ],
    author: "Chef Pierre",
    description: "Indulge in these decadent chocolate lava cakes with a perfectly crisp exterior and a warm, gooey center that flows like molten lava when you break them open. They're surprisingly easy to make but guaranteed to impress!",
    videoId: "3"
  },
  {
    id: "4",
    title: "Fresh Greek Salad",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1067&q=80",
    category: "Salad",
    prepTime: "15 mins",
    cookTime: "0 mins",
    totalTime: "15 mins",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "1 English cucumber, chopped",
      "4 Roma tomatoes, chopped",
      "1 red onion, thinly sliced",
      "1 green bell pepper, chopped",
      "1 cup Kalamata olives",
      "8 oz feta cheese, cubed",
      "2 tbsp fresh oregano, chopped",
      "1/4 cup extra virgin olive oil",
      "2 tbsp red wine vinegar",
      "1 lemon, juiced",
      "2 cloves garlic, minced",
      "1 tsp dried oregano",
      "Salt and pepper to taste"
    ],
    instructions: [
      "In a large bowl, combine cucumber, tomatoes, red onion, bell pepper, olives, and feta cheese.",
      "In a small bowl, whisk together olive oil, red wine vinegar, lemon juice, garlic, dried oregano, salt, and pepper to make the dressing.",
      "Pour the dressing over the salad and toss gently to combine.",
      "Sprinkle with fresh oregano.",
      "For best flavor, refrigerate for 30 minutes before serving to allow the flavors to meld."
    ],
    author: "Chef Elena",
    description: "This authentic Greek salad features crisp vegetables, briny Kalamata olives, and creamy feta cheese, all dressed in a simple vinaigrette. It's refreshing, healthy, and bursting with Mediterranean flavors!",
    videoId: "4"
  },
  {
    id: "5",
    title: "Spicy Thai Coconut Soup",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    category: "Soup",
    prepTime: "15 mins",
    cookTime: "20 mins",
    totalTime: "35 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "2 cans (14 oz each) coconut milk",
      "2 cups chicken broth",
      "2 tbsp Thai red curry paste",
      "2 tbsp fish sauce",
      "2 tbsp brown sugar",
      "1 lb boneless chicken thighs, thinly sliced",
      "8 oz mushrooms, sliced",
      "1 red bell pepper, sliced",
      "2 tbsp lime juice",
      "2 stalks lemongrass, bruised and cut into 4-inch pieces",
      "4 kaffir lime leaves (or 1 tbsp lime zest)",
      "1-inch piece ginger, thinly sliced",
      "Fresh cilantro for garnish",
      "Sliced Thai chilies for garnish (optional)"
    ],
    instructions: [
      "In a large pot, bring coconut milk and chicken broth to a gentle simmer over medium heat.",
      "Add curry paste, fish sauce, and brown sugar. Stir until well combined.",
      "Add lemongrass, lime leaves, and ginger. Simmer for 5 minutes to infuse flavors.",
      "Add chicken and simmer until cooked through, about 5-7 minutes.",
      "Add mushrooms and bell pepper. Cook for an additional 3-5 minutes until vegetables are tender.",
      "Remove from heat and stir in lime juice.",
      "Remove lemongrass, lime leaves, and ginger slices before serving.",
      "Serve hot, garnished with fresh cilantro and Thai chilies if desired."
    ],
    author: "Chef Somboon",
    description: "This aromatic Thai coconut soup (Tom Kha Gai) features a rich, spicy coconut broth infused with fragrant herbs and filled with tender chicken and vegetables. It's the perfect balance of spicy, sweet, and sour flavors!",
    videoId: "5"
  },
  {
    id: "6",
    title: "Homemade Margherita Pizza",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    category: "Italian",
    prepTime: "2 hours",
    cookTime: "10 mins",
    totalTime: "2 hours 10 mins",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "For the dough:",
      "3 1/2 cups all-purpose flour",
      "1 tsp sugar",
      "2 1/4 tsp active dry yeast",
      "2 tsp salt",
      "1 1/2 cups warm water",
      "2 tbsp olive oil",
      "For the topping:",
      "1 can (14 oz) San Marzano tomatoes, crushed",
      "2 cloves garlic, minced",
      "1 tbsp olive oil",
      "1 tsp salt",
      "8 oz fresh mozzarella cheese, sliced",
      "Fresh basil leaves",
      "Grated Parmesan cheese",
      "Red pepper flakes (optional)"
    ],
    instructions: [
      "For the dough, combine flour, sugar, yeast, and salt in a large bowl.",
      "Add warm water and olive oil. Mix until a dough forms.",
      "Knead on a floured surface for 5-7 minutes until smooth and elastic.",
      "Place in an oiled bowl, cover, and let rise in a warm place for 1-2 hours until doubled in size.",
      "Meanwhile, for the sauce, combine crushed tomatoes, garlic, olive oil, and salt.",
      "Preheat oven to 500°F (260°C) with a pizza stone or baking sheet inside for at least 30 minutes.",
      "Divide dough into 2 portions. Roll out each portion on a floured surface.",
      "Transfer to a pizza peel or parchment paper dusted with cornmeal.",
      "Spread sauce over dough, leaving a 1-inch border.",
      "Top with mozzarella slices.",
      "Carefully transfer to the preheated stone or baking sheet.",
      "Bake for 8-10 minutes until crust is golden and cheese is bubbly.",
      "Top with fresh basil leaves, a drizzle of olive oil, grated Parmesan, and red pepper flakes if desired."
    ],
    author: "Chef Marco",
    description: "This classic Margherita pizza features a thin, crispy crust topped with sweet tomato sauce, fresh mozzarella, and aromatic basil leaves. Simple yet sublime, it's a taste of Naples in your own kitchen!",
    videoId: "6"
  }
];

export const videos: Video[] = [
  {
    id: "1",
    title: "How to Make Perfect Creamy Tuscan Chicken Pasta",
    thumbnail: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    duration: "8:45",
    channel: "RecipeReel Kitchen",
    views: "245K",
    description: "Learn how to make the perfect creamy Tuscan chicken pasta with Chef Maria. This step-by-step tutorial shows you exactly how to get that restaurant-quality taste at home.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    recipeId: "1"
  },
  {
    id: "2",
    title: "Quick and Easy Beef Tacos | 20-Minute Meals",
    thumbnail: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    duration: "6:20",
    channel: "MexicanFoodMasters",
    views: "189K",
    description: "These quick and easy beef tacos are perfect for busy weeknights. Chef Carlos shows you his favorite shortcuts while maintaining authentic flavor.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    recipeId: "2"
  },
  {
    id: "3",
    title: "Chocolate Lava Cake | Impressive Desserts Made Simple",
    thumbnail: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    duration: "10:12",
    channel: "DessertMasters",
    views: "320K",
    description: "Master the art of chocolate lava cake with Chef Pierre. Learn the secrets to getting that perfect molten center every time.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    recipeId: "3"
  },
  {
    id: "4",
    title: "Authentic Greek Salad | Mediterranean Fresh",
    thumbnail: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1067&q=80",
    duration: "5:47",
    channel: "ElenaCooks",
    views: "127K",
    description: "Chef Elena shares her family's traditional Greek salad recipe, with tips on selecting the freshest ingredients and the perfect dressing ratio.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    recipeId: "4"
  },
  {
    id: "5",
    title: "Thai Coconut Soup (Tom Kha Gai) | Thai Cooking Essentials",
    thumbnail: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    duration: "12:35",
    channel: "ThaiCuisineAcademy",
    views: "205K",
    description: "Learn the authentic way to make Tom Kha Gai with Chef Somboon. Discover how to balance the complex flavors of this classic Thai soup.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    recipeId: "5"
  },
  {
    id: "6",
    title: "Neapolitan Pizza Masterclass | From Dough to Perfect Pie",
    thumbnail: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    duration: "18:24",
    channel: "PizzaPerfection",
    views: "412K",
    description: "Join Chef Marco for a comprehensive guide to making authentic Neapolitan pizza at home. Learn the techniques used by Italian pizza masters for generations.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    recipeId: "6"
  },
  {
    id: "7",
    title: "5 Essential Knife Skills Every Home Cook Should Master",
    thumbnail: "https://images.unsplash.com/photo-1566454292686-aa31c4b899a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    duration: "15:10",
    channel: "RecipeReel Kitchen",
    views: "765K",
    description: "Improve your cooking immediately by mastering these 5 essential knife skills. Our head chef demonstrates proper technique and safety tips.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    id: "8",
    title: "The Secret to Perfectly Fluffy Rice Every Time",
    thumbnail: "https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    duration: "7:18",
    channel: "BasicCookingSkills",
    views: "290K",
    description: "No more mushy or undercooked rice! Learn the foolproof method for cooking perfectly fluffy rice every single time, regardless of the variety.",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
];

export const categories: Category[] = [
  {
    name: "Pasta",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    count: 15
  },
  {
    name: "Dessert",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    count: 22
  },
  {
    name: "Mexican",
    image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    count: 12
  },
  {
    name: "Italian",
    image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    count: 18
  },
  {
    name: "Salad",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1070&q=80",
    count: 9
  },
  {
    name: "Soup",
    image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    count: 7
  }
];

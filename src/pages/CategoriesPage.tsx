
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { categories, recipes } from '@/data/mockData';

const CategoriesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[300px] md:h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Recipe Categories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 banner-overlay flex flex-col justify-center items-center">
            <div className="container mx-auto px-4 md:px-6 text-center text-white">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">Recipe Categories</h1>
              <p className="text-xl md:text-2xl max-w-xl mx-auto">Explore our recipes by category to find exactly what you're craving</p>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map(category => (
              <CategorySection 
                key={category.name}
                name={category.name} 
                image={category.image} 
                count={category.count} 
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Category Section Component
const CategorySection = ({ name, image, count }: { name: string; image: string; count: number }) => {
  // Get recipes for this category
  const categoryRecipes = recipes.filter(recipe => recipe.category === name).slice(0, 3);

  return (
    <div className="rounded-lg overflow-hidden border border-border">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h2 className="text-3xl font-serif text-white">{name}</h2>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-medium">{count} Recipes</h3>
          <Link 
            to={`/recipes?category=${name}`} 
            className="text-recipe-terracotta hover:underline"
          >
            View All
          </Link>
        </div>
        <ul className="space-y-3">
          {categoryRecipes.map(recipe => (
            <li key={recipe.id} className="border-b border-border pb-3 last:border-0 last:pb-0">
              <Link 
                to={`/recipe/${recipe.id}`}
                className="flex items-center gap-3 hover:text-recipe-terracotta transition-colors"
              >
                <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium line-clamp-1">{recipe.title}</h4>
                  <p className="text-sm text-muted-foreground">{recipe.totalTime} • {recipe.difficulty}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesPage;

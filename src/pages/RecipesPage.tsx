
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RecipeCard from '@/components/recipes/RecipeCard';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { recipes, categories } from '@/data/mockData';

const RecipesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [difficulty, setDifficulty] = useState<string | null>(null);

  // Filter recipes based on selected category, difficulty and search query
  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory ? recipe.category === selectedCategory : true;
    const matchesDifficulty = difficulty ? recipe.difficulty === difficulty : true;
    const matchesSearch = searchQuery.length > 0 
      ? recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) 
      : true;
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[300px] md:h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Recipes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 banner-overlay flex flex-col justify-center items-center">
            <div className="container mx-auto px-4 md:px-6 text-center text-white">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">All Recipes</h1>
              <p className="text-xl md:text-2xl max-w-xl mx-auto">Discover our collection of delicious recipes for every occasion</p>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search recipes..."
                className="w-full pl-10 pr-4 py-2 border rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                className="w-full px-4 py-2 border rounded-md"
                value={selectedCategory || ""}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category.name} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <select
                className="w-full px-4 py-2 border rounded-md"
                value={difficulty || ""}
                onChange={(e) => setDifficulty(e.target.value || null)}
              >
                <option value="">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategory || difficulty || searchQuery) && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedCategory && (
                <Badge 
                  onClick={() => setSelectedCategory(null)}
                  className="bg-recipe-terracotta hover:bg-recipe-terracotta/90 cursor-pointer"
                >
                  Category: {selectedCategory} ×
                </Badge>
              )}
              {difficulty && (
                <Badge 
                  onClick={() => setDifficulty(null)}
                  className="bg-recipe-terracotta hover:bg-recipe-terracotta/90 cursor-pointer"
                >
                  Difficulty: {difficulty} ×
                </Badge>
              )}
              {searchQuery && (
                <Badge 
                  onClick={() => setSearchQuery("")}
                  className="bg-recipe-terracotta hover:bg-recipe-terracotta/90 cursor-pointer"
                >
                  Search: "{searchQuery}" ×
                </Badge>
              )}
              <Button 
                variant="ghost" 
                className="text-sm h-6 px-2"
                onClick={() => {
                  setSelectedCategory(null);
                  setDifficulty(null);
                  setSearchQuery("");
                }}
              >
                Clear all
              </Button>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="container mx-auto px-4 md:px-6 pb-12">
          <h2 className="text-2xl font-serif mb-6">
            {filteredRecipes.length} {filteredRecipes.length === 1 ? 'Recipe' : 'Recipes'} Found
          </h2>
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredRecipes.map(recipe => (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.title}
                  image={recipe.image}
                  category={recipe.category}
                  prepTime={recipe.totalTime}
                  difficulty={recipe.difficulty}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-2xl text-muted-foreground mb-4">No recipes found.</p>
              <p className="max-w-md mx-auto">Try adjusting your filters or search query to find what you're looking for.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Create a Badge component for the filters
const Badge = ({ className, children, onClick }: { className?: string, children: React.ReactNode, onClick?: () => void }) => {
  return (
    <span 
      className={`px-3 py-1 rounded-full text-white text-sm ${className}`} 
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default RecipesPage;

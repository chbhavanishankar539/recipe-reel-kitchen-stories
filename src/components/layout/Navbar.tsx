
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-recipe-terracotta flex items-center justify-center">
            <span className="text-white font-serif text-lg font-bold">R</span>
          </div>
          <h1 className="text-2xl font-serif font-semibold">RecipeReel</h1>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-recipe-terracotta transition-colors font-medium">Home</Link>
          <Link to="/recipes" className="text-foreground hover:text-recipe-terracotta transition-colors font-medium">Recipes</Link>
          <Link to="/videos" className="text-foreground hover:text-recipe-terracotta transition-colors font-medium">Videos</Link>
          <Link to="/categories" className="text-foreground hover:text-recipe-terracotta transition-colors font-medium">Categories</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <Button className="hidden md:flex bg-recipe-terracotta hover:bg-recipe-terracotta/90">
            Submit Recipe
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

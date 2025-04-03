
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Play, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RecipeCard from '@/components/recipes/RecipeCard';
import { recipes, videos } from '@/data/mockData';

const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const recipe = recipes.find(r => r.id === id);
  const video = recipe?.videoId ? videos.find(v => v.id === recipe.videoId) : null;
  
  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-medium mb-4">Recipe not found</h2>
          <Link to="/" className="text-recipe-terracotta hover:underline">
            Return to home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px]">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 banner-overlay flex flex-col justify-end">
            <div className="container mx-auto px-4 md:px-6 pb-8 md:pb-12 text-white">
              <Button 
                asChild 
                variant="ghost" 
                className="text-white mb-4 hover:bg-black/20 -ml-2"
              >
                <Link to="/recipes">
                  <ChevronLeft className="h-5 w-5 mr-1" />
                  Back to recipes
                </Link>
              </Button>
              <Badge className="bg-recipe-terracotta mb-4">{recipe.category}</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4">{recipe.title}</h1>
              <p className="text-lg text-gray-200 mb-6 max-w-3xl">{recipe.description}</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{recipe.totalTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>Serves {recipe.servings}</span>
                </div>
                <div>
                  <Badge variant="outline" className="border-white text-white">
                    {recipe.difficulty}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Ingredients */}
            <div className="lg:col-span-1">
              <div className="bg-muted p-6 rounded-lg sticky top-24">
                <h2 className="text-2xl font-serif mb-6">Ingredients</h2>
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="bg-recipe-terracotta/20 text-recipe-terracotta w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button className="w-full bg-recipe-terracotta hover:bg-recipe-terracotta/90">
                    Print Recipe
                  </Button>
                </div>
              </div>
            </div>

            {/* Instructions and Video */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-serif mb-6">Instructions</h2>
                <ol className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-recipe-terracotta text-white flex items-center justify-center font-medium">
                        {index + 1}
                      </div>
                      <div className="pt-1">{instruction}</div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Video Section */}
              {video && (
                <div className="mt-12">
                  <h2 className="text-2xl font-serif mb-6">Watch How to Make It</h2>
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Button 
                        asChild
                        className="size-16 rounded-full bg-recipe-terracotta hover:bg-recipe-terracotta/90"
                      >
                        <a href={video.url} target="_blank" rel="noopener noreferrer">
                          <Play className="h-8 w-8" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium mt-4">{video.title}</h3>
                  <p className="text-muted-foreground">{video.description}</p>
                </div>
              )}

              {/* Chef Info */}
              <div className="mt-12 p-6 border rounded-lg">
                <h3 className="text-xl font-medium mb-2">About the Chef</h3>
                <p className="text-muted-foreground">
                  This recipe was created by <span className="font-medium text-foreground">{recipe.author}</span>, 
                  who specializes in {recipe.category.toLowerCase()} cuisine. 
                  Follow more of their recipes to master the art of cooking delicious meals at home.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Recipes */}
        <div className="bg-muted py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-serif mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes
                .filter(r => r.id !== id && r.category === recipe.category)
                .slice(0, 3)
                .map(relatedRecipe => (
                  <RecipeCard
                    key={relatedRecipe.id}
                    id={relatedRecipe.id}
                    title={relatedRecipe.title}
                    image={relatedRecipe.image}
                    category={relatedRecipe.category}
                    prepTime={relatedRecipe.totalTime}
                    difficulty={relatedRecipe.difficulty}
                  />
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RecipePage;

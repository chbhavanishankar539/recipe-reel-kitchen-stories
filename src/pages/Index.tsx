
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FeaturedRecipe from '@/components/home/FeaturedRecipe';
import RecipeCard from '@/components/recipes/RecipeCard';
import VideoCard from '@/components/videos/VideoCard';
import CategoryCard from '@/components/home/CategoryCard';
import { recipes, videos, categories } from '@/data/mockData';

const Index = () => {
  // Find the featured recipe
  const featuredRecipe = recipes.find(recipe => recipe.featured);
  // Get 3 recipes for the recent recipes section
  const recentRecipes = recipes.slice(1, 4);
  // Get 4 videos for the popular videos section
  const popularVideos = videos.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section with featured recipe */}
        <section className="container mx-auto px-4 md:px-6 pt-6 pb-12">
          {featuredRecipe && (
            <FeaturedRecipe
              id={featuredRecipe.id}
              title={featuredRecipe.title}
              image={featuredRecipe.image}
              description={featuredRecipe.description}
              cookTime={featuredRecipe.totalTime}
              author={featuredRecipe.author}
            />
          )}
        </section>

        {/* Categories section */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-serif">Popular Categories</h2>
              <Button asChild variant="link" className="text-recipe-terracotta">
                <Link to="/categories">View All</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {categories.map((category) => (
                <CategoryCard
                  key={category.name}
                  name={category.name}
                  image={category.image}
                  count={category.count}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Recent Recipes section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-serif">Recent Recipes</h2>
              <Button asChild variant="link" className="text-recipe-terracotta">
                <Link to="/recipes">View All</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {recentRecipes.map((recipe) => (
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
          </div>
        </section>

        {/* Popular Videos section */}
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-serif">Popular Videos</h2>
              <Button asChild variant="link" className="text-recipe-terracotta">
                <Link to="/videos">View All</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  id={video.id}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  duration={video.duration}
                  channel={video.channel}
                  views={video.views}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter sign-up */}
        <section className="py-16 bg-recipe-navy text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-serif mb-4">Join Our Cooking Community</h2>
            <p className="max-w-2xl mx-auto mb-8">Sign up for our newsletter to receive fresh recipes, cooking tips, and special offers delivered straight to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow text-foreground"
              />
              <Button className="bg-recipe-terracotta hover:bg-recipe-terracotta/90">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

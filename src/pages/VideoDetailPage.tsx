
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { videos, recipes } from '@/data/mockData';
import RecipeCard from '@/components/recipes/RecipeCard';

const VideoDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const video = videos.find(v => v.id === id);
  const relatedRecipe = video?.recipeId ? recipes.find(r => r.id === video.recipeId) : null;
  
  if (!video) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-medium mb-4">Video not found</h2>
          <Link to="/" className="text-recipe-terracotta hover:underline">
            Return to home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Filter videos for related content
  const relatedVideos = videos
    .filter(v => v.id !== id)
    .filter(v => {
      // Show videos with same channel first
      return v.channel === video.channel;
    })
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <Button 
            asChild 
            variant="ghost" 
            className="mb-6"
          >
            <Link to="/videos">
              <ChevronLeft className="h-5 w-5 mr-1" />
              Back to videos
            </Link>
          </Button>

          {/* Video Player */}
          <div className="relative aspect-video rounded-lg overflow-hidden bg-black mb-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <Button 
                asChild
                className="size-24 rounded-full bg-recipe-terracotta hover:bg-recipe-terracotta/90"
              >
                <a href={video.url} target="_blank" rel="noopener noreferrer">
                  <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                  </svg>
                </a>
              </Button>
            </div>
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover opacity-60"
            />
          </div>

          {/* Video Info */}
          <div className="mb-8">
            <h1 className="text-3xl font-serif mb-4">{video.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
              <span>{video.views} views</span>
              <span>•</span>
              <span>By {video.channel}</span>
              <span>•</span>
              <span>{video.duration} mins</span>
            </div>
            <p className="text-lg">{video.description}</p>
          </div>

          {/* Related Recipe */}
          {relatedRecipe && (
            <div className="mb-12">
              <h2 className="text-2xl font-serif mb-6">Get the Recipe</h2>
              <div className="max-w-md">
                <RecipeCard
                  id={relatedRecipe.id}
                  title={relatedRecipe.title}
                  image={relatedRecipe.image}
                  category={relatedRecipe.category}
                  prepTime={relatedRecipe.totalTime}
                  difficulty={relatedRecipe.difficulty}
                />
              </div>
            </div>
          )}

          {/* Related Videos */}
          <div>
            <h2 className="text-2xl font-serif mb-6">More from {video.channel}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedVideos.map(relatedVideo => (
                <VideoCard
                  key={relatedVideo.id}
                  id={relatedVideo.id}
                  title={relatedVideo.title}
                  thumbnail={relatedVideo.thumbnail}
                  duration={relatedVideo.duration}
                  channel={relatedVideo.channel}
                  views={relatedVideo.views}
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

export default VideoDetailPage;

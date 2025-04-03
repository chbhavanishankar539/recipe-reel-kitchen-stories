
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeaturedRecipeProps {
  id: string;
  title: string;
  image: string;
  description: string;
  cookTime: string;
  author: string;
}

const FeaturedRecipe: React.FC<FeaturedRecipeProps> = ({
  id,
  title,
  image,
  description,
  cookTime,
  author,
}) => {
  return (
    <div className="relative h-[500px] md:h-[600px] w-full rounded-xl overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 banner-overlay flex flex-col justify-end">
        <div className="container mx-auto px-4 md:px-6 pb-12 md:pb-20 text-white">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-serif mb-4">{title}</h1>
            <p className="text-gray-200 mb-6 line-clamp-3">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{cookTime}</span>
              </div>
              <div className="hidden sm:block h-1 w-1 rounded-full bg-white/50"></div>
              <div>By {author}</div>
            </div>
            <Button 
              asChild
              className="bg-recipe-terracotta hover:bg-recipe-terracotta/90 text-white"
            >
              <Link to={`/recipe/${id}`}>View Recipe</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipe;

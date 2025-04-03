
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  prepTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  title,
  image,
  category,
  prepTime,
  difficulty,
}) => {
  return (
    <Link to={`/recipe/${id}`} className="recipe-card block rounded-lg overflow-hidden bg-white">
      <div className="relative aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge 
          className="absolute top-3 left-3 bg-recipe-terracotta hover:bg-recipe-terracotta/90"
        >
          {category}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium line-clamp-2 mb-2">{title}</h3>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{prepTime}</span>
          </div>
          <Badge variant="outline" className={`
            ${difficulty === 'Easy' ? 'border-green-500 text-green-700' : 
              difficulty === 'Medium' ? 'border-yellow-500 text-yellow-700' : 
              'border-red-500 text-red-700'}
          `}>
            {difficulty}
          </Badge>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;

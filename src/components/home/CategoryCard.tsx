
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  name: string;
  image: string;
  count: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, count }) => {
  return (
    <Link to={`/categories/${name.toLowerCase()}`} className="recipe-card group relative rounded-lg overflow-hidden">
      <div className="aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h3 className="text-xl font-medium mb-1">{name}</h3>
          <p className="text-sm opacity-90">{count} recipes</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;

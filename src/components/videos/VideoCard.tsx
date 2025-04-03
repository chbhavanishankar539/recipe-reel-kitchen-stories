
import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  channel: string;
  views: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  thumbnail,
  duration,
  channel,
  views,
}) => {
  return (
    <Link to={`/video/${id}`} className="recipe-card block rounded-lg overflow-hidden bg-white">
      <div className="relative aspect-video">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
          <div className="w-14 h-14 rounded-full bg-recipe-terracotta flex items-center justify-center">
            <Play className="h-6 w-6 text-white" />
          </div>
        </div>
        <Badge className="absolute bottom-3 right-3 bg-black/70 hover:bg-black/70">
          {duration}
        </Badge>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium line-clamp-2 mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-1">{channel}</p>
        <p className="text-muted-foreground text-xs">{views} views</p>
      </div>
    </Link>
  );
};

export default VideoCard;

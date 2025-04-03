
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import VideoCard from '@/components/videos/VideoCard';
import { Search } from 'lucide-react';
import { videos } from '@/data/mockData';

const VideosPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter videos based on search query
  const filteredVideos = videos.filter(video => {
    return searchQuery.length > 0 
      ? video.title.toLowerCase().includes(searchQuery.toLowerCase()) 
      : true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="relative h-[300px] md:h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1618092388874-e262a562e2ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Cooking Videos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 banner-overlay flex flex-col justify-center items-center">
            <div className="container mx-auto px-4 md:px-6 text-center text-white">
              <h1 className="text-4xl md:text-5xl font-serif mb-4">Cooking Videos</h1>
              <p className="text-xl md:text-2xl max-w-xl mx-auto">Watch and learn with our step-by-step cooking tutorials</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search videos..."
              className="w-full pl-10 pr-4 py-2 border rounded-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Videos Grid */}
        <div className="container mx-auto px-4 md:px-6 pb-12">
          <h2 className="text-2xl font-serif mb-6">
            {filteredVideos.length} {filteredVideos.length === 1 ? 'Video' : 'Videos'} Found
          </h2>
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredVideos.map(video => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-2xl text-muted-foreground mb-4">No videos found.</p>
              <p className="max-w-md mx-auto">Try adjusting your search query to find what you're looking for.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VideosPage;

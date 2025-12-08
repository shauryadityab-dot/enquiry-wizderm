import { Play, Instagram } from "lucide-react";

const reels = [
  {
    id: 1,
    title: "Acne Treatment Journey",
    thumbnail: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=600&fit=crop",
    views: "12.5K",
  },
  {
    id: 2,
    title: "Laser Hair Reduction Process",
    thumbnail: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=600&fit=crop",
    views: "8.2K",
  },
  {
    id: 3,
    title: "PRP Hair Treatment",
    thumbnail: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=600&fit=crop",
    views: "15.1K",
  },
  {
    id: 4,
    title: "Dermatologist Q&A",
    thumbnail: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=600&fit=crop",
    views: "6.8K",
  },
];

const ReelsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-600 text-sm font-medium mb-4">
                <Instagram className="w-4 h-4" />
                From Our Instagram
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Watch Our Treatments in Action
              </h2>
            </div>
            <a 
              href="https://instagram.com/wizderm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors"
            >
              Follow @wizderm
              <span>→</span>
            </a>
          </div>

          {/* Reels Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Thumbnail */}
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary-foreground/30 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-1" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-medium text-primary-foreground/90 line-clamp-2 mb-1">
                    {reel.title}
                  </p>
                  <p className="text-xs text-primary-foreground/60">
                    {reel.views} views
                  </p>
                </div>

                {/* Instagram Icon */}
                <div className="absolute top-3 right-3">
                  <Instagram className="w-5 h-5 text-primary-foreground/80" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;

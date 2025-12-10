import { useState } from "react";
import { Play, Instagram, X } from "lucide-react";

const ReelsSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const openVideo = (id) => setActiveVideo(id);
  const closeVideo = () => setActiveVideo(null);

  const reels = [
    {
      id: 1,
      title: "Treatment Highlight - 1",
      videoId: "1HNST9wFo5k",
      thumbnail: "https://i.ytimg.com/vi/1HNST9wFo5k/hqdefault.jpg",
    },
    {
      id: 2,
      title: "Treatment Highlight - 2",
      videoId: "0TAxzqyx2Z4",
      thumbnail: "https://i.ytimg.com/vi/0TAxzqyx2Z4/hqdefault.jpg",
    },
    {
      id: 3,
      title: "Treatment Highlight - 3",
      videoId: "yhP2YiSyx9E",
      thumbnail: "https://i.ytimg.com/vi/yhP2YiSyx9E/hqdefault.jpg",
    },
    {
      id: 4,
      title: "Treatment Highlight - 4",
      videoId: "GF9tiUkFFVo",
      thumbnail: "https://i.ytimg.com/vi/GF9tiUkFFVo/hqdefault.jpg",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {reels.map((reel) => (
            <div
              key={reel.id}
              onClick={() => openVideo(reel.videoId)}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <Play className="absolute inset-0 m-auto text-white w-10 h-10 opacity-70" />
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]">
            <div className="relative w-full max-w-xl aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                allow="autoplay; encrypted-media"
              />
              <button
                onClick={closeVideo}
                className="absolute -top-10 right-0 text-white text-3xl"
              >
                <X />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReelsSection;

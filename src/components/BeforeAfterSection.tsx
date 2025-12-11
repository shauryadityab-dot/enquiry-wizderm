import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "Acne",
  "Pigmentation",
  "Hair Loss",
  "Scar Reduction",
  "Tattoo Removal",
];

const beforeAfterImages = [
  {
    id: 1,
    category: "Acne",
    before: "/assets/Before Acne Scars.png",
    after: "/assets/After Acne Scars.png",
    treatment: "Advanced Acne Treatment",
    duration: "3 months",
  },
  {
    id: 2,
    category: "Pigmentation",
    before: "/assets/Pigmentation Treatment before.png",
    after: "/assets/Pigmentation Treatment After.png",
    treatment: "Pigmentation Treatment with Spectra XT",
    duration: "4 sessions",
  },
    {
    id: 3,
    category: "Pigmentation",
    before: "/assets/Hydrafacial Before.png",
    after: "/assets/Hydrafacial After.png",
    treatment: "Hydrafacial",
    duration: "2 sessions",
  },
  {
    id: 4,
    category: "Hair Loss",
    before: "/assets/PRP Before.png",
    after: "/assets/PRP After.png",
    treatment: "PRP Hair Therapy",
    duration: "6 sessions",
  },
  {
    id: 5,
    category: "Scar Reduction",
    before: "/assets/Scar Reduction Treatment Before.png",
    after: "/assets/Scar Reduction Treatment After.png",
    treatment: "Scar Reduction Therapy",
    duration: "4 sessions",
  },
    {
    id: 6,
    category: "Tattoo Removal",
    before: "/assets/Tattoo removal before.png",
    after: "/assets/Tattoo removal after.png",
    treatment: "Tattoo Removal",
    duration: "1 session",
  },
];

const BeforeAfterSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = activeCategory === "All" 
    ? beforeAfterImages 
    : beforeAfterImages.filter(img => img.category === activeCategory);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Real Results, Real Transformations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the remarkable before and after results achieved by our patients under expert dermatological care.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Carousel */}
          {filteredImages.length > 0 && (
            <div className="relative">
              <div className="flex items-center justify-center gap-6">
                {/* Prev Button */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="absolute left-0 z-10 rounded-full shadow-soft hidden md:flex"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                {/* Before/After Card */}
                <div className="w-full max-w-3xl">
                  <div className="grid md:grid-cols-2 gap-6 p-6 bg-card rounded-2xl shadow-elevated border border-border">
                    {/* Before */}
                    <div className="relative">
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-foreground/80 text-primary-foreground text-xs font-medium z-10">
                        Before
                      </div>
                      <img
                        src={filteredImages[currentIndex].before}
                        alt="Before treatment"
                        className="w-full aspect-square object-cover rounded-xl"
                      />
                    </div>

                    {/* After */}
                    <div className="relative">
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium z-10">
                        After
                      </div>
                      <img
                        src={filteredImages[currentIndex].after}
                        alt="After treatment"
                        className="w-full aspect-square object-cover rounded-xl"
                      />
                    </div>

                    {/* Info */}
                    <div className="md:col-span-2 pt-4 border-t border-border text-center">
                      <p className="font-semibold text-foreground mb-1">
                        {filteredImages[currentIndex].treatment}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Treatment duration: {filteredImages[currentIndex].duration}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Next Button */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="absolute right-0 z-10 rounded-full shadow-soft hidden md:flex"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Mobile Navigation */}
              <div className="flex justify-center gap-4 mt-6 md:hidden">
                <Button variant="outline" size="icon" onClick={prevSlide}>
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" onClick={nextSlide}>
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {filteredImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-6 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;

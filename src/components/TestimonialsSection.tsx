import { Play, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Koushik Lahiri",
    role: "Senior Dermatologist, Wizderm Kolkata",
    thumbnail: "https://i.ytimg.com/vi/LXtbFehuM2M/hqdefault.jpg",
    message: "At Wizderm, we believe in providing personalized care with the most advanced technology available.",
    videoUrl: "https://youtu.be/LXtbFehuM2M",
  },
  {
    id: 2,
    name: "Dr. Harsha Sarawgi Gupta",
    role: "Consultant Dermatologist, Wizderm Hyderabad",
    thumbnail: "https://i.ytimg.com/vi/v619IxU5SGs/hqdefault.jpg",
    message: "Our PRP treatments have helped thousands of patients regain their confidence with fuller, healthier hair.",
    videoUrl: "https://youtu.be/v619IxU5SGs",
  },
  {
    id: 3,
    name: "Dr. Ishad Aggarwal",
    role: "Laser Specialist, Wizderm Ahmedabad",
    thumbnail: "https://i.ytimg.com/vi/ZV31y2ftXc8/hqdefault.jpg",
    message: "The Soprano Ice Platinum technology we use is pain-free and highly effective for all skin types.",
    videoUrl: "https://youtu.be/ZV31y2ftXc8",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Quote className="w-4 h-4" />
              Expert Insights
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Hear From Our Dermatologists
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our expert dermatologists share their insights on treatments and patient care.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <a
                key={testimonial.id}
                href={testimonial.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden bg-background border border-border hover:shadow-elevated transition-all duration-300 block"
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video">
                  <img
                    src={testimonial.thumbnail}
                    alt={testimonial.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/40 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-primary-foreground/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-elevated">
                      <Play className="w-7 h-7 text-primary fill-primary ml-1" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-primary mb-3">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    "{testimonial.message}"
                  </p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

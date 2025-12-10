import { Sparkles, Sun, Zap, Clock, Scissors, Eraser, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const treatments = [
  {
    icon: "/assets/acne.png",
    title: "Acne & Acne Scars",
    description:
      "Professional dermatological treatments that reduce active acne, prevent new breakouts, and fade stubborn acne scars with advanced lasers and peels.",
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    icon: "/assets/pigmentation.png",
    title: "Pigmentation",
    description:
      "Targeted laser and medical-grade treatments to reduce dark spots, uneven tone, melasma, and sun-induced pigmentation for visibly brighter skin.",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    icon: "/assets/laser.png",
    title: "Laser Hair Reduction",
    description:
      "Pain-free, long-term hair reduction using US-FDA approved triple-wavelength Soprano Ice Platinum lasers for smoother, hair-free skin across all body areas.",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: "/assets/botox.png",
    title: "Anti-Ageing",
    description:
      "Scientifically backed anti-ageing solutions including Botox, Fillers, and Peels that soften wrinkles, restore lost volume, and improve skin texture.",
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    icon: "/assets/hair.png",
    title: "Hair Loss & PRP",
    description:
      "Dermatologist-led hair fall diagnosis with advanced PRP/GFC therapies that strengthen roots, reactivate follicles, and promote thicker hair growth.",
    color: "from-emerald-500/20 to-green-500/20",
  },
  {
    icon: "/assets/tattoo.png",
    title: "Tattoo Removal",
    description:
      "The Q-Switched Spectra XT laser safely and effectively breaks down tattoo ink, fading unwanted tattoos with minimal discomfort and downtime.",
    color: "from-slate-500/20 to-gray-500/20",
  },
  {
    icon: "/assets/doctor.png",
    title: "Dermatologist Consultations",
    description:
      "Consult with expert dermatologists for accurate diagnosis and personalised skin and hair treatment plans tailored to your concerns.",
    color: "from-blue-500/20 to-indigo-500/20",
  },
];
const TreatmentsSection = () => {
  const scrollToForm = () => {
    document.getElementById("appointment-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="treatments" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Our Treatments
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Advanced Skin & Hair Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive dermatological treatments designed to address your unique skin and hair concerns with proven results.
            </p>
          </div>

          {/* Treatments Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${treatment.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 overflow-hidden">
                    <img
                      src={treatment.icon}
                      alt={treatment.title}
                      className="w-7 h-7 object-contain group-hover:brightness-60"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {treatment.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {treatment.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="default" size="lg" onClick={scrollToForm}>
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;

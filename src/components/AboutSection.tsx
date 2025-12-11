import { Users, MapPin, Award, Heart, Hospital } from "lucide-react";

const stats = [
  {
    icon: "/assets/Patient.png",
    number: "115+",
    label: "Expert Dermatologists",
    description: "Board-certified specialists",
  },
  {
    icon: "/assets/clinic.png",
    number: "7",
    label: "Clinics Across India",
    description: "Kolkata, Siliguri, Ahmedabad, Guwahati, Hyderabad",
  },
  {
    icon: "/assets/doctor.png",
    number: "4.83+ ⭐",
    label: "On Google Maps",
    description: "Over 3000 Positive Reviews",
  },
  {
    icon: "/assets/review.png",
    number: "1,36,957+",
    label: "Patients Treated",
    description: "Trusted by thousands",
  },
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Why Choose <span className="text-primary">Wizderm</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              India's leading dermatology chain combining expert care with
              cutting-edge technology for transformative results.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                      <img
                      src={stat.icon}
                      alt={stat.label}
                      className="w-7 h-7 object-contain group-hover:brightness-60"
                    />
                </div>

                {/* Content */}
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.number}
                </div>
                <div className="text-base font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/5 rotate-45 group-hover:bg-primary/10 transition-colors" />
                </div>
              </div>
            ))}
          </div>

          {/* Logo Display Area */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-subtle border border-border text-center">
            <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider font-medium">
              Our Commitment to Quality
            </p>

            <div className="flex flex-nowrap justify-center items-center gap-8 ">
              <div className="md:px-6 md:py-3 rounded-lg  font-medium">
                <img
                  src="/assets/logo.png"
                  alt="Times Group Award"
                  className="w-16 h-16 object-contain"
                />
              </div>

              <div className="md:px-6 md:py-3 rounded-lg  font-medium">
                <img
                  src="/assets/Logo2.png"
                  alt=""
                  className="w-16 h-16 object-contain"
                />
              </div>

              <div className="md:px-6 md:py-3 rounded-lg  font-medium">
                <img
                  src="/assets/Logo3.png"
                  alt=""
                  className="w-16 h-16 object-contain"
                />
              </div>

              <div className="md:px-6 md:py-3 rounded-lg  font-medium">
                <img
                  src="/assets/Logo4.png"
                  alt=""
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

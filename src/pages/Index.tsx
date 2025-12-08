import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AppointmentForm from "@/components/AppointmentForm";
import AboutSection from "@/components/AboutSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import ReelsSection from "@/components/ReelsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AppointmentForm />
      <section id="about">
        <AboutSection />
      </section>
      <section id="treatments">
        <TreatmentsSection />
      </section>
      <ReelsSection />
      <section id="results">
        <BeforeAfterSection />
      </section>
      <TestimonialsSection />
      <Footer />
    </main>
  );
};

export default Index;

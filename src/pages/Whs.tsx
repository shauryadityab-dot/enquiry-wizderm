import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhsForm from "@/components/WhsForm";
import { Button } from "@/components/ui/button";

const Whs = () => {
  const scrollToForm = () => {
    document.getElementById("whs-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />

      <main className="">
        {/* Hero / Banner */}
        <section className="bg-gradient-purple py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 items-center">
              <div className="space-y-8 text-primary-foreground pt-10 text-center max-w-3xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight">
                  Want your hair back?
                  <br />
                  <span className="block mt-2">
                    Start with{" "}
                    <span className="text-gradient-gold px-2 py-1 rounded-md">
                      FREE HAIR ANALYSIS
                    </span>
                  </span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                  Get a detailed hair and scalp evaluation, personalized
                  treatment recommendations, and access to advanced
                  hair-regrowth solutions at Wizderm Hair Sciences.
                </p>

                <div className="flex justify-center">
                  <Button
                    variant="hero"
                    size="lg"
                    className="px-8"
                    onClick={scrollToForm}
                  >
                    Get Your Free Hair Analysis
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="whs-form" className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <WhsForm />
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Image side */}
              <div className="relative max-w-md w-full mx-auto md:mx-0">
                <img
                  src="/assets/Derma.png"
                  alt="Free hair analysis at Wizderm Hair Sciences"
                  className="w-full rounded-2xl shadow-elevated object-cover"
                />
              </div>

              {/* Text side */}
              <div className="space-y-4 max-w-xl mx-auto md:mx-0">
                <p className="text-sm sm:text-base md:text-lg">
                  Get a Free Hair Analysis at Wizderm Hair Sciences! Fill out
                  the form above to claim your free hair analysis.
                </p>

                <ul className="space-y-2 text-sm sm:text-base leading-relaxed">
                  <li>
                    • A detailed hair and scalp evaluation by our expert
                    dermatologists
                  </li>
                  <li>
                    • Personalized treatment recommendations based on your hair
                    concerns
                  </li>
                  <li>
                    • Information on cutting-edge hair-care and hair-regrowth
                    treatments
                  </li>
                  <li>
                    • AIIMS, IIM-A and IIT-D trained, Dr. Ratul combines medical
                    excellence with advanced tech and refined systems. His
                    evidence-backed approach elevates every step of your hair
                    restoration journey.
                  </li>
                </ul>

                <p className="text-xs sm:text-sm">
                  Don’t wait — take the first step toward stronger, healthier
                  hair. Fill the form now to get started!
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Whs;

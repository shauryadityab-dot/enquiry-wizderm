import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhsForm from "@/components/WhsForm";

const Whs = () => {
  return (
    <>
      <Header />
      <main className="">
        {/* Hero / Banner */}
        <section className="bg-gradient-purple py-12">
          <div className="container mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              {/* Text side */}
              <div className="space-y-5 text-primary-foreground pt-16">

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold leading-tight">
                  Want your hair back?
                  <br />
                  <span className="block mt-1">
                    Start with{" "}
                    <span className="text-gradient-gold px-2 py-1 rounded-md">
                      FREE HAIR ANALYSIS
                    </span>
                  </span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg max-w-xl">
                  Get a Free Hair Analysis at Wizderm Hair Sciences! Fill out the
                  form below to claim your free hair analysis.
                </p>

                <ul className="space-y-2 text-sm sm:text-base">
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
                    dedicated, evidence-backed approach elevates every step of
                    your hair restoration journey.
                  </li>
                </ul>

                <p className="text-xs sm:text-sm max-w-xl">
                  Don’t wait — take the first step toward stronger, healthier
                  hair. Fill the form now to get started!
                </p>
              </div>

              {/* Image side */}
              <div className="relative max-w-md w-full mx-auto">
                <img
                  src="/assets/Derma.png"
                  alt="Free hair analysis at Wizderm Hair Sciences"
                  className="w-full rounded-2xl shadow-elevated object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Form section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto">
            <WhsForm />
          </div>
        </section>
        <Footer />  
      </main>
    </>
  );
};

export default Whs;

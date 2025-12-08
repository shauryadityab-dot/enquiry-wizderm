import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Clock } from "lucide-react";

const clinics = [
  { name: "Jodhpur Park, Kolkata", phone: "+91 75960 05359" },
  { name: "Shakespeare Sarani, Kolkata", phone: "+91 75960 05132" },
  { name: "City Centre 1, Kolkata", phone: "+91 75960 04901" },
  { name: "PBR Tower, Siliguri", phone: "+91 75960 05145" },
  { name: "D&C Majestic, Ahmedabad", phone: "+91 75960 05110" },
  { name: "Royal Arcade, Guwahati", phone: "+91 75960 04923" },
  { name: "Uptown Banjara, Hyderabad", phone: "+91 98765 43216" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  const scrollToForm = () => {
    document.getElementById("appointment-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-display font-bold mb-4">
                Wizderm
              </h3>
              <p className="text-primary-foreground/70 text-sm mb-6 leading-relaxed">
               Established in 2011, Wizderm is One of India’s most professional and advanced Skin & Hair Clinics. Wizderm is a growing chain of state-of-the-art skin & hair clinics that offer hassle-free skincare treatments at the hands of highly trained therapists and expert dermatologists.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Clock className="w-4 h-4" />
                <span>Mon - Sat: 10:00 AM - 8:00 PM</span>
              </div>
            </div>

            {/* Clinic Locations */}
            <div className="lg:col-span-2">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                Our Clinics
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {clinics.map((clinic, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm">
                    <div>
                      <p className="text-primary-foreground/90 font-medium">
                        {clinic.name}
                      </p>
                      <a 
                        href={`tel:${clinic.phone}`}
                        className="text-primary-foreground/60 hover:text-accent transition-colors"
                      >
                        {clinic.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-3 mb-6">
                <a 
                  href="mailto:info@wizderm.in"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@wizderm.in
                </a>
                <a 
                  href="tel:+91900 757 4000"
                  className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 900 757 4000
                </a>
              </div>

              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-primary/20 backdrop-blur-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-lg mb-1">
                Ready to Transform Your Skin?
              </h4>
              <p className="text-sm text-primary-foreground/70">
                Book your consultation with our expert dermatologists today.
              </p>
            </div>
            <button 
              onClick={scrollToForm}
              className="px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 Wizderm. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("appointment-form")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className={`text-2xl font-display font-bold transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              Wizderm
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#treatments"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              Treatments
            </a>
            <a
              href="#about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              About Us
            </a>
            <a
              href="#results"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              Results
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+919876543210"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              <Phone className="w-4 h-4" />
              +91 900 757 4000
            </a>
            <Button 
              variant={isScrolled ? "default" : "hero"} 
              size="default"
              onClick={scrollToForm}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? "text-foreground hover:bg-muted" 
                : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-elevated animate-fade-in">
            <nav className="container py-6 flex flex-col gap-4">
              <a
                href="#treatments"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground font-medium py-2"
              >
                Treatments
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground font-medium py-2"
              >
                About Us
              </a>
              <a
                href="#results"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground font-medium py-2"
              >
                Results
              </a>
              <a 
                href="tel:+919876543210"
                className="flex items-center gap-2 text-muted-foreground py-2"
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <Button variant="hero" size="lg" className="mt-2" onClick={scrollToForm}>
                Book Appointment
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

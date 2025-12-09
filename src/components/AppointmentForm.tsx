import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, User, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const clinicLocations = [
  "Jodhpur Park, Kolkata",
  "Shakespeare Sarani, Kolkata",
  "City Centre 1, Kolkata",
  "PBR Tower, Siliguri",
  "D&C Majestic, Ahmedabad",
  "Royal Arcade, Guwahati",
  "Uptown Banjara, Hyderabad",
];

const appointmentTiming = [
  "Today",
  "Tomorrow",
  "Within a Week",
  "Select a Specific Date",
];

const AppointmentForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    location: "",
    timing: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyhTRs8Ik1x4BV5NSW0Hk0LZgkCc18OCwHnvy5cqep4eYu6Qqx3Gw058f5-KezHbbM_Yg/exec";

    const body = new URLSearchParams({
      fullName: formData.fullName,
      mobile: formData.mobile,
      email: formData.email,
      location: formData.location,
      timing: formData.timing,
    });

    await fetch(scriptUrl, {
      method: "POST",
      mode: "no-cors", // <- key
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    });

    // You won't be able to read the response in no-cors mode
    toast({
      title: "Appointment Request Submitted!",
      description:
        "Our team will contact you within 24 hours to confirm your appointment.",
    });

    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      location: "",
      timing: "",
    });
  } catch (err) {
    console.error(err);
    toast({
      title: "Something went wrong",
      description: "Please try again.",
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section id="appointment-form" className="py-20 bg-gradient-subtle">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Calendar className="w-4 h-4" />
                Book Your Consultation
              </div>
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                Take the First Step Towards{" "}
                <span className="text-primary">Healthy Skin & Hair</span>
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Fill out the form and our team will reach out to confirm your appointment with one of our expert dermatologists.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  "Customized Treatment Plans.",
                  "Expert Dermatologist Consultation (MD/MBBS).",
                  "US-FDA Approved Procedures and Equipment.",
                  "Utmost Care Delivered by Highly Trained Therapists.",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-card rounded-2xl shadow-elevated p-8 border border-border">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="fullName"
                      placeholder="Enter your full name"
                      className="pl-11 h-12"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-sm font-medium">
                    Mobile Number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="pl-11 h-12"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email ID
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="pl-11 h-12"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-medium">
                    Select Clinic Location
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                    <Select
                      value={formData.location}
                      onValueChange={(value) => setFormData({ ...formData, location: value })}
                    >
                      <SelectTrigger className="pl-11 h-12">
                        <SelectValue placeholder="Choose a clinic" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {clinicLocations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timing" className="text-sm font-medium">
                    When do you want the appointment?
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
                    <Select
                      value={formData.timing}
                      onValueChange={(value) => setFormData({ ...formData, timing: value })}
                    >
                      <SelectTrigger className="pl-11 h-12">
                        <SelectValue placeholder="Select preferred timing" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {appointmentTiming.map((timing) => (
                          <SelectItem key={timing} value={timing}>
                            {timing}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="xl" 
                  className="w-full mt-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Book Appointment Now"}
                </Button>

                <p className="text-xs text-center text-muted-foreground pt-2">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;

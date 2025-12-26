import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, User, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const WhsForm = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    treatmentTime: "",
    fullName: "",
    mobile: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbxhBsOZiMLgoL64eYCqc1WrkPSmlvcrr7uP83MJL3wfNxDwOP8ytntd-uIJc4Lcpoqf/exec";

      const body = new URLSearchParams({
        formId: "whs", // 👈 identify this form
        treatmentTime: formData.treatmentTime,
        fullName: formData.fullName,
        mobile: formData.mobile,
        email: formData.email,
      });
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      });

      toast({
        title: "Request Submitted!",
        description: "Our team will contact you shortly.",
      });

      setFormData({
        treatmentTime: "",
        fullName: "",
        mobile: "",
        email: "",
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Submission failed",
        description: "Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container max-w-lg mx-auto bg-card p-8 rounded-2xl shadow-elevated border border-border">
        <h2 className="text-3xl font-display font-bold text-center mb-6">
          WHS Consultation Form
        </h2>

        <form id="whs-form" onSubmit={handleSubmit} autoComplete="off" className="space-y-5">
          {/* Treatment Time */}
          {/* Treatment Time */}
          <div className="space-y-2">
            <Label htmlFor="treatmentTime" className="text-sm font-medium">
              Treatment Time
            </Label>

            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />

              <Select
                value={formData.treatmentTime}
                onValueChange={(value) =>
                  setFormData({ ...formData, treatmentTime: value })
                }
              >
                <SelectTrigger className="pl-11 h-12">
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>

                <SelectContent className="bg-card border-border">
                  <SelectItem value="This Week">This Week</SelectItem>
                  <SelectItem value="Next Week">Next Week</SelectItem>
                  <SelectItem value="Next Month">Next Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="fullName"
                placeholder="Enter your name"
                className="pl-11 h-12"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Mobile */}
          <div className="space-y-2">
            <Label htmlFor="mobile">Mobile Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="mobile"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="pl-11 h-12"
                minLength={10}
                maxLength={10}
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email ID</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="pl-11 h-12"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            variant="hero"
            size="xl"
            className="w-full mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default WhsForm;

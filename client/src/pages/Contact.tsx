import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";
import { MapView } from "@/components/Map";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    interestType: "quote" as const,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitLead = trpc.leads.submit.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interestType: value as any }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitLead.mutateAsync({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        interestType: formData.interestType,
      });

      if (result.success) {
        toast.success("Thank you! We'll be in touch soon.");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
          interestType: "quote",
        });
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-slate-600 mb-12">
            Have questions about our machines or services? Contact our team in Anaheim, CA.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-slate-700 font-semibold">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-slate-700 font-semibold">
                        Company *
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-slate-700 font-semibold">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-slate-700 font-semibold">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-2"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <Label htmlFor="interestType" className="text-slate-700 font-semibold">
                        Interest Type *
                      </Label>
                      <Select value={formData.interestType} onValueChange={handleInterestTypeChange}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="quote">Request a Quote</SelectItem>
                          <SelectItem value="rental">Rental Inquiry</SelectItem>
                          <SelectItem value="demo">Schedule a Demo</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-slate-700 font-semibold">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-2"
                        placeholder="Tell us about your project..."
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Headquarters</p>
                      <p className="text-slate-600">Anaheim, CA</p>
                      <p className="text-slate-600">Southern California</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Phone</p>
                      <p className="text-slate-600">(714) 555-0123</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-slate-900">Email</p>
                      <p className="text-slate-600">info@blockmachine.co</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps */}
              <MapView
                initialCenter={{ lat: 33.8353, lng: -117.9145 }}
                initialZoom={15}
                className="rounded-lg"
                onMapReady={(map: any) => {
                  const anaheimLocation = { lat: 33.8353, lng: -117.9145 };
                  new (window as any).google.maps.Marker({
                    position: anaheimLocation,
                    map: map,
                    title: "BlockMachine Co - Anaheim, CA",
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

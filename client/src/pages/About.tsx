import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Users, Award, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About BlockMachine Co</h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Leading the concrete block industry with innovation, sustainability, and local expertise in Southern California.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                BlockMachine Co was founded with a simple mission: to provide Southern California contractors with
                reliable, efficient, and sustainable concrete block making solutions. Based in Anaheim, CA, we've spent
                over two decades perfecting our craft and building lasting relationships with our customers.
              </p>
              <p>
                What started as a small operation has grown into a trusted partner for hundreds of contractors,
                developers, and block producers across Orange County and Greater Los Angeles. We've invested heavily in
                cutting-edge technology and sustainable practices to ensure our machines deliver exceptional results
                while minimizing environmental impact.
              </p>
              <p>
                Today, BlockMachine Co stands as a regional leader in block production equipment, known for our
                commitment to quality, innovation, and customer success. Our Anaheim headquarters serves as a hub for
                sales, support, and training—ensuring fast, responsive service to our SoCal community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <Award className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We're committed to delivering the highest quality machines and service in the industry. Every product
                  is built to last and perform.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <Globe className="h-8 w-8 text-green-600 mb-4" />
                <CardTitle>Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We're passionate about reducing environmental impact through CALGreen-compliant solutions and
                  eco-friendly production methods.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-4" />
                <CardTitle>Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  We view our customers as partners. Your success is our success, and we're invested in your long-term
                  growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Headquarters */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-8">Anaheim, CA Headquarters</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Our state-of-the-art facility in Anaheim, California serves as the operational hub for BlockMachine Co.
                Located in the heart of Southern California's construction industry, our headquarters provides:
              </p>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">✓</span>
                  <span>Direct access to major ports and supply chains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">✓</span>
                  <span>Fast, responsive local support for SoCal contractors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">✓</span>
                  <span>Showroom and demonstration facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">✓</span>
                  <span>Training and operator certification programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-1">✓</span>
                  <span>Maintenance and parts inventory</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <p className="text-slate-600 text-lg font-semibold">Anaheim, CA</p>
                <p className="text-slate-500 text-sm">Southern California Headquarters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Our Team</h2>
          <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
            Our experienced team brings decades of combined expertise in concrete block production, equipment design,
            and customer service. We're dedicated to helping your business succeed.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Smith", role: "CEO & Founder" },
              { name: "Maria Garcia", role: "VP of Operations" },
              { name: "David Chen", role: "Director of Engineering" },
            ].map((member) => (
              <Card key={member.name} className="border-0 shadow-sm text-center">
                <CardContent className="pt-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                  <p className="text-slate-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Contact our Anaheim team to learn how BlockMachine Co can support your business.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

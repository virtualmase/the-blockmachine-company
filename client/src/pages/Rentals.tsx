import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Clock, Calendar, Zap, Shield } from "lucide-react";

export default function Rentals() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Machine Rentals</h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Flexible rental solutions for short-term projects and long-term operations. Get the equipment you need, when you need it.
          </p>
        </div>
      </section>

      {/* Rental Options */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Rental Options</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Short-Term Rentals */}
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle className="text-2xl">Short-Term Rentals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600">
                  Perfect for temporary projects, seasonal production, or testing new equipment before purchasing.
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Rental Periods</p>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Daily rentals (24-hour minimum)</li>
                      <li>• Weekly rentals (7-14 days)</li>
                      <li>• Monthly rentals (30-90 days)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900 mb-2">What's Included</p>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>✓ Equipment delivery & setup</li>
                      <li>✓ Basic operator training</li>
                      <li>✓ Maintenance & support</li>
                      <li>✓ Insurance coverage</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Pricing</p>
                    <p className="text-slate-600 text-sm">
                      Competitive daily/weekly/monthly rates. Volume discounts available.
                    </p>
                  </div>
                </div>

                <Link href="/contact">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Request Short-Term Rental
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Long-Term Rentals */}
            <Card className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <Calendar className="h-8 w-8 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Long-Term Rentals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600">
                  Ideal for ongoing production, seasonal operations, or businesses scaling up gradually.
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Rental Periods</p>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• 6-month contracts</li>
                      <li>• 12-month contracts</li>
                      <li>• Custom multi-year agreements</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900 mb-2">What's Included</p>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>✓ Full delivery & installation</li>
                      <li>✓ Comprehensive training program</li>
                      <li>✓ Preventive maintenance</li>
                      <li>✓ 24/7 emergency support</li>
                      <li>✓ Equipment upgrades available</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Benefits</p>
                    <p className="text-slate-600 text-sm">
                      Significant cost savings vs. short-term. Flexible upgrade options. Option to purchase.
                    </p>
                  </div>
                </div>

                <Link href="/contact">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Request Long-Term Rental
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Rent */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Why Rent From BlockMachine Co?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <Zap className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle className="text-lg">No Capital Expense</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Preserve cash flow and avoid large upfront equipment purchases.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <Shield className="h-8 w-8 text-green-600 mb-4" />
                <CardTitle className="text-lg">Full Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Maintenance, repairs, and emergency support included in your rental.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <Clock className="h-8 w-8 text-blue-600 mb-4" />
                <CardTitle className="text-lg">Fast Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Quick delivery and setup. Start production within 24-48 hours.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <Calendar className="h-8 w-8 text-slate-600 mb-4" />
                <CardTitle className="text-lg">Flexibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Upgrade, extend, or return equipment based on your changing needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Rental Process</h2>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Inquiry",
                  description: "Contact us with your rental needs, project timeline, and equipment requirements.",
                },
                {
                  step: 2,
                  title: "Consultation",
                  description: "Our team reviews your project and recommends the right equipment and rental terms.",
                },
                {
                  step: 3,
                  title: "Quote & Agreement",
                  description: "Receive a detailed quote and rental agreement. We handle all documentation.",
                },
                {
                  step: 4,
                  title: "Delivery & Setup",
                  description: "Equipment is delivered, installed, and tested at your site.",
                },
                {
                  step: 5,
                  title: "Training & Support",
                  description: "Operator training and 24/7 support throughout your rental period.",
                },
                {
                  step: 6,
                  title: "Return & Pickup",
                  description: "We handle equipment pickup and return logistics when rental ends.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500 text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Rent?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your rental needs and get a custom quote.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Request a Rental Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

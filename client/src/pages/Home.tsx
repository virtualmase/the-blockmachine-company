import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Zap, Leaf, Shield, Truck } from "lucide-react";
import TrustSignals from "@/components/TrustSignals";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Concrete Block Machines Built for SoCal
            </h1>
            <p className="text-2xl text-slate-200 mb-6 font-light">
              Smart. Sustainable. SoCal Built.
            </p>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              Industry-leading block making equipment, rentals, and sustainable solutions for Orange County and Greater Los Angeles contractors and developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/machines">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                  View Machines
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Zap className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">30% Faster Production</h3>
              <p className="text-slate-600 text-sm">Increase output and efficiency with our advanced block making technology.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Leaf className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">CALGreen Certified</h3>
              <p className="text-slate-600 text-sm">Meet California sustainability standards with our eco-friendly machines.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Shield className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Fully Supported</h3>
              <p className="text-slate-600 text-sm">24/7 technical support and maintenance included with every machine.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <Truck className="h-8 w-8 text-slate-600 mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Same-Day Delivery</h3>
              <p className="text-slate-600 text-sm">Quick deployment across Southern California with setup included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Production?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of contractors and developers across Southern California who trust BlockMachine Co.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white hover:bg-slate-100 text-orange-600 font-semibold">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

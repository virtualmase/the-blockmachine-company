import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Zap, Leaf, MapPin, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { trpc } from "@/lib/trpc";

export default function Home() {
  const { user } = useAuth();
  const [machines, setMachines] = useState<any[]>([]);
  const machinesQuery = trpc.machines.getAll.useQuery();

  useEffect(() => {
    if (machinesQuery.data) {
      setMachines(machinesQuery.data.slice(0, 3));
    }
  }, [machinesQuery.data]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Concrete Block Machines Built for SoCal
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 font-light">
              Smart. Sustainable. SoCal Built.
            </p>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl">
              Industry-leading block making equipment, rentals, and sustainable solutions for Orange County and Greater LA contractors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/machines">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-50 py-8 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-slate-900">20+</p>
              <p className="text-slate-600 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">500+</p>
              <p className="text-slate-600 text-sm">Machines Deployed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">Anaheim</p>
              <p className="text-slate-600 text-sm">SoCal Headquarters</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">CALGreen</p>
              <p className="text-slate-600 text-sm">Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Why Choose BlockMachine Co?</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            We deliver reliable, sustainable block production solutions tailored to Southern California contractors.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Zap className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle className="text-lg">Maximum Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  High-output machines designed for rapid production without compromising quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <Leaf className="h-8 w-8 text-green-600 mb-4" />
                <CardTitle className="text-lg">Eco-Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  CALGreen compliant solutions with recycled content and minimal embodied carbon.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <MapPin className="h-8 w-8 text-blue-600 mb-4" />
                <CardTitle className="text-lg">Local Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Anaheim-based team providing fast, responsive service to SoCal contractors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-slate-600 mb-4" />
                <CardTitle className="text-lg">Fast ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Flexible rental and purchase options designed to maximize your profitability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Machines */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">Featured Machines</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Explore our range of concrete block making equipment, from semi-automatic to fully-automatic systems.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {machines.length > 0 ? (
              machines.map((machine) => (
                <Link key={machine.id} href={`/machines/${machine.id}`}>
                  <Card className="border-0 shadow-sm hover:shadow-lg transition-all cursor-pointer h-full">
                    {machine.imageUrl && (
                      <div className="h-48 bg-slate-200 overflow-hidden rounded-t-lg">
                        <img
                          src={machine.imageUrl}
                          alt={machine.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-lg">{machine.name}</CardTitle>
                      <CardDescription>{machine.model}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 mb-4">{machine.description}</p>
                      <div className="space-y-2 text-sm">
                        {machine.outputPerHour && (
                          <p className="text-slate-700">
                            <span className="font-semibold">Output:</span> {machine.outputPerHour}
                          </p>
                        )}\n                        {machine.power && (
                          <p className="text-slate-700">
                            <span className="font-semibold">Power:</span> {machine.power}
                          </p>
                        )}
                      </div>
                      {machine.price && (
                        <p className="text-lg font-bold text-slate-900 mt-4">
                          ${parseFloat(machine.price).toLocaleString()}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-slate-600">Loading machines...</p>
              </div>
            )}
          </div>

          <div className="text-center mt-12">
            <Link href="/machines">
              <Button size="lg" variant="outline">
                View All Machines
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Block Production?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Contact our team today for a personalized consultation and quote.
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

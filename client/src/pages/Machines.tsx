import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Thermometer, Wind, Zap, Leaf } from "lucide-react";

export default function Machines() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const systems = [
    {
      id: 1,
      name: "Smart Residential HVAC",
      category: "residential",
      seer2: "24",
      hspf2: "12.5",
      capacity: "3-5 tons",
      price: "$4,500 - $7,500",
      features: ["AI-optimized comfort", "Smart thermostat included", "Quiet operation", "10-year warranty"],
      icon: Thermometer
    },
    {
      id: 2,
      name: "Commercial Climate System",
      category: "commercial",
      seer2: "22",
      hspf2: "11.8",
      capacity: "10-25 tons",
      price: "$12,000 - $25,000",
      features: ["Zone control", "Energy monitoring", "Remote diagnostics", "24/7 support"],
      icon: Wind
    },
    {
      id: 3,
      name: "Industrial HVAC Solution",
      category: "industrial",
      seer2: "20",
      hspf2: "10.5",
      capacity: "50+ tons",
      price: "Custom quote",
      features: ["Heavy-duty construction", "Predictive maintenance", "Custom configurations", "Dedicated support"],
      icon: Zap
    },
    {
      id: 4,
      name: "Net-Zero Ready System",
      category: "sustainable",
      seer2: "26",
      hspf2: "13.2",
      capacity: "2-4 tons",
      price: "$6,500 - $9,500",
      features: ["Ultra-efficient", "Low-GWP refrigerant", "Solar-ready", "LEED-certified"],
      icon: Leaf
    }
  ];

  const categories = [
    { id: "all", label: "All Systems" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
    { id: "sustainable", label: "Sustainable" }
  ];

  const filtered = selectedCategory === "all" 
    ? systems 
    : systems.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HVAC Systems</h1>
          <p className="text-xl text-blue-100">Intelligent climate control solutions for every application</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Grid */}
      <section className="py-16 md:py-24 bg-white flex-grow">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filtered.map(system => {
              const Icon = system.icon;
              return (
                <div key={system.id} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 flex items-center justify-center h-40">
                    <Icon className="h-16 w-16 text-blue-600 opacity-80" />
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{system.name}</h3>
                    <p className="text-slate-600 mb-6">Optimized for {system.category} applications</p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-200">
                      <div>
                        <div className="text-sm text-slate-600">SEER2</div>
                        <div className="text-2xl font-bold text-blue-600">{system.seer2}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-600">HSPF2</div>
                        <div className="text-2xl font-bold text-blue-600">{system.hspf2}</div>
                      </div>
                      <div>
                        <div className="text-sm text-slate-600">Capacity</div>
                        <div className="text-lg font-bold text-slate-900">{system.capacity}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm text-slate-600 mb-3">Key Features:</div>
                      <ul className="space-y-2">
                        {system.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-700">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm text-slate-600">Starting Price:</div>
                      <div className="text-2xl font-bold text-slate-900">{system.price}</div>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                        Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Need Help Choosing?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Our HVAC experts can help you find the perfect system for your needs. Get a free consultation today.
          </p>
          <Link href="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
              Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

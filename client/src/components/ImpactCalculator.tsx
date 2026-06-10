import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Leaf, TrendingUp, Zap, Droplet } from "lucide-react";

export default function ImpactCalculator() {
  const [projectType, setProjectType] = useState("residential");
  const [projectSize, setProjectSize] = useState(50000);
  const [duration, setDuration] = useState(12);

  // Calculate environmental impact based on inputs
  const calculateImpact = () => {
    const baseFactors: Record<string, number> = {
      residential: 0.8,
      commercial: 1.2,
      municipal: 1.5,
      industrial: 2.0
    };

    const factor = baseFactors[projectType] || 1;
    const co2Reduction = Math.round((projectSize / 1000) * factor * duration * 0.45);
    const wasteDiverted = Math.round((projectSize / 1000) * factor * duration * 0.65);
    const energySaved = Math.round((projectSize / 1000) * factor * duration * 0.35);
    const waterSaved = Math.round((projectSize / 1000) * factor * duration * 0.22);

    return { co2Reduction, wasteDiverted, energySaved, waterSaved };
  };

  const impact = calculateImpact();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Environmental Impact Calculator</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See the environmental impact of your project with BlockMachine Co
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Calculator Input */}
          <Card className="border-0 shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Project Details</h3>

            <div className="space-y-8">
              {/* Project Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Project Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "residential", label: "Residential" },
                    { value: "commercial", label: "Commercial" },
                    { value: "municipal", label: "Municipal" },
                    { value: "industrial", label: "Industrial" }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setProjectType(option.value)}
                      className={`px-4 py-3 rounded-lg font-medium transition ${
                        projectType === option.value
                          ? "bg-green-600 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Size */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Project Size (sq ft): {projectSize.toLocaleString()}
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="10000"
                  value={projectSize}
                  onChange={(e) => setProjectSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>10,000</span>
                  <span>500,000</span>
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Project Duration (months): {duration}
                </label>
                <input
                  type="range"
                  min="1"
                  max="36"
                  step="1"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>1 month</span>
                  <span>36 months</span>
                </div>
              </div>

              <button className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition">
                Calculate Impact
              </button>
            </div>
          </Card>

          {/* Impact Results */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Your Environmental Impact</h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Leaf,
                  label: "CO2 Reduced",
                  value: impact.co2Reduction,
                  unit: "tons",
                  color: "text-green-600"
                },
                {
                  icon: TrendingUp,
                  label: "Waste Diverted",
                  value: impact.wasteDiverted,
                  unit: "tons",
                  color: "text-emerald-600"
                },
                {
                  icon: Zap,
                  label: "Energy Saved",
                  value: impact.energySaved,
                  unit: "MWh",
                  color: "text-yellow-600"
                },
                {
                  icon: Droplet,
                  label: "Water Saved",
                  value: impact.waterSaved,
                  unit: "gallons",
                  color: "text-blue-600"
                }
              ].map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <Card key={idx} className="border-0 shadow-sm p-6">
                    <Icon className={`h-8 w-8 ${metric.color} mb-3`} />
                    <p className="text-sm text-slate-600 mb-2">{metric.label}</p>
                    <p className="text-3xl font-bold text-slate-900">
                      {metric.value.toLocaleString()}
                    </p>
                    <p className="text-xs text-slate-500">{metric.unit}</p>
                  </Card>
                );
              })}
            </div>

            <Card className="border-0 shadow-sm p-6 bg-green-50">
              <p className="text-sm text-slate-700 mb-4">
                <span className="font-semibold">Equivalent to:</span>
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>🚗 {Math.round(impact.co2Reduction * 2.4)} cars off the road for a year</li>
                <li>🌳 {Math.round(impact.co2Reduction * 16)} trees planted</li>
                <li>💡 {Math.round(impact.energySaved * 110)} homes powered for a year</li>
              </ul>
            </Card>

            <button className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition">
              Request a Quote for Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

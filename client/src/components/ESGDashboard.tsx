import { Card } from "@/components/ui/card";
import { TrendingUp, Award, Target, Zap, Leaf, BarChart3 } from "lucide-react";

export default function ESGDashboard() {
  // Mock ESG data - in production, this would come from Salesforce Sustainability Cloud API
  const esgMetrics = {
    carbonReduction: {
      current: 12450,
      target: 15000,
      unit: "tons CO2e",
      progress: 83,
      trend: "+12%"
    },
    wasteReduction: {
      current: 28900,
      target: 35000,
      unit: "tons diverted",
      progress: 83,
      trend: "+18%"
    },
    energyEfficiency: {
      current: 4200,
      target: 5000,
      unit: "MWh saved",
      progress: 84,
      trend: "+9%"
    },
    certifications: [
      { name: "LEED Certified", count: 127, icon: "🏗️" },
      { name: "CALGreen Tier 2", count: 89, icon: "🌿" },
      { name: "Net-Zero Ready", count: 34, icon: "⚡" },
      { name: "Circular Economy", count: 56, icon: "♻️" }
    ]
  };

  const complianceStatus = [
    { regulation: "California Climate Action Plan", status: "Compliant", icon: "✓" },
    { regulation: "CALGreen Standards", status: "Exceeding", icon: "✓" },
    { regulation: "LEED v4.1 Requirements", status: "Compliant", icon: "✓" },
    { regulation: "Net-Zero Emissions Goal", status: "On Track", icon: "→" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <BarChart3 className="h-10 w-10 text-blue-600" />
            ESG Performance Dashboard
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Real-time environmental, social, and governance metrics for your projects
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Leaf,
              title: "Carbon Reduction",
              current: esgMetrics.carbonReduction.current,
              target: esgMetrics.carbonReduction.target,
              unit: esgMetrics.carbonReduction.unit,
              progress: esgMetrics.carbonReduction.progress,
              trend: esgMetrics.carbonReduction.trend,
              color: "text-green-600"
            },
            {
              icon: TrendingUp,
              title: "Waste Diverted",
              current: esgMetrics.wasteReduction.current,
              target: esgMetrics.wasteReduction.target,
              unit: esgMetrics.wasteReduction.unit,
              progress: esgMetrics.wasteReduction.progress,
              trend: esgMetrics.wasteReduction.trend,
              color: "text-emerald-600"
            },
            {
              icon: Zap,
              title: "Energy Saved",
              current: esgMetrics.energyEfficiency.current,
              target: esgMetrics.energyEfficiency.target,
              unit: esgMetrics.energyEfficiency.unit,
              progress: esgMetrics.energyEfficiency.progress,
              trend: esgMetrics.energyEfficiency.trend,
              color: "text-yellow-600"
            }
          ].map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <Card key={idx} className="border-0 shadow-lg p-8">
                <div className="flex items-start justify-between mb-6">
                  <Icon className={`h-8 w-8 ${metric.color}`} />
                  <span className="text-sm font-semibold text-green-600">{metric.trend}</span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2">{metric.title}</h3>
                
                <div className="mb-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-3xl font-bold text-slate-900">
                      {metric.current.toLocaleString()}
                    </span>
                    <span className="text-sm text-slate-600">/ {metric.target.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-slate-600">{metric.unit}</p>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${metric.color} bg-opacity-100`}
                    style={{ width: `${metric.progress}%`, backgroundColor: metric.color.replace('text-', '').replace('-600', '') }}
                  />
                </div>
                <p className="text-xs text-slate-600 mt-2">{metric.progress}% of target</p>
              </Card>
            );
          })}
        </div>

        {/* Certifications & Compliance */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="border-0 shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Award className="h-8 w-8 text-blue-600" />
              Certifications Achieved
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {esgMetrics.certifications.map((cert, idx) => (
                <div key={idx} className="p-4 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg border border-blue-100">
                  <div className="text-3xl mb-2">{cert.icon}</div>
                  <p className="font-semibold text-slate-900 text-sm mb-1">{cert.name}</p>
                  <p className="text-2xl font-bold text-blue-600">{cert.count}</p>
                  <p className="text-xs text-slate-600">projects</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Regulatory Compliance */}
          <Card className="border-0 shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Target className="h-8 w-8 text-green-600" />
              Regulatory Compliance Status
            </h3>

            <div className="space-y-4">
              {complianceStatus.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900">{item.regulation}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      item.status === "Compliant" || item.status === "Exceeding"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {item.status}
                    </span>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Connect Your ESG Reporting</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Integrate with Salesforce Sustainability Cloud to automatically track and report your environmental impact
          </p>
          <button className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-slate-100 transition">
            Enable ESG Integration
          </button>
        </div>
      </div>
    </section>
  );
}

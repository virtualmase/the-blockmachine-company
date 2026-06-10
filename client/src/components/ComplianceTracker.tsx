import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle, Clock, TrendingUp } from "lucide-react";

export default function ComplianceTracker() {
  // Mock compliance data - in production, would integrate with regulatory intelligence APIs
  const regulations = [
    {
      id: 1,
      name: "California Climate Action Plan 2.0",
      category: "Climate",
      status: "Active",
      deadline: "2026-12-31",
      impact: "High",
      description: "Net-zero emissions by 2045 for all construction projects",
      requirements: ["Emissions tracking", "Renewable energy use", "Carbon offsets"],
      blockmachineReady: true
    },
    {
      id: 2,
      name: "CALGreen 2024 Updates",
      category: "Building Code",
      status: "Active",
      deadline: "2026-01-01",
      impact: "Critical",
      description: "Enhanced water efficiency and material sustainability requirements",
      requirements: ["Water conservation", "Material reuse", "Waste diversion"],
      blockmachineReady: true
    },
    {
      id: 3,
      name: "LEED v4.1 Certification",
      category: "Certification",
      status: "Active",
      deadline: "2027-06-30",
      impact: "High",
      description: "Updated LEED standards with enhanced environmental credits",
      requirements: ["Energy efficiency", "Indoor quality", "Sustainable sourcing"],
      blockmachineReady: true
    },
    {
      id: 4,
      name: "Orange County Sustainability Ordinance",
      category: "Local",
      status: "Proposed",
      deadline: "2026-09-15",
      impact: "Medium",
      description: "Regional requirements for sustainable construction practices",
      requirements: ["Local sourcing", "Community engagement", "Impact reporting"],
      blockmachineReady: true
    },
    {
      id: 5,
      name: "Federal Infrastructure Sustainability Standards",
      category: "Federal",
      status: "Proposed",
      deadline: "2027-03-01",
      impact: "High",
      description: "Federal requirements for infrastructure projects receiving funding",
      requirements: ["Emissions reduction", "Circular economy", "Workforce development"],
      blockmachineReady: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";
      case "Proposed":
        return "bg-yellow-100 text-yellow-700";
      case "Upcoming":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Critical":
        return "text-red-600";
      case "High":
        return "text-orange-600";
      case "Medium":
        return "text-yellow-600";
      default:
        return "text-slate-600";
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <AlertCircle className="h-10 w-10 text-blue-600" />
            Regulatory Compliance Tracker
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            Stay informed about regulatory changes and ensure your projects remain compliant
          </p>
        </div>

        {/* Compliance Summary */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Active Regulations", value: "3", icon: CheckCircle, color: "text-green-600" },
            { label: "Proposed Changes", value: "2", icon: Clock, color: "text-yellow-600" },
            { label: "BlockMachine Ready", value: "4/5", icon: TrendingUp, color: "text-blue-600" },
            { label: "Compliance Score", value: "96%", icon: CheckCircle, color: "text-emerald-600" }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx} className="border-0 shadow-sm p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-slate-600 mb-2">{item.label}</p>
                    <p className="text-3xl font-bold text-slate-900">{item.value}</p>
                  </div>
                  <Icon className={`h-8 w-8 ${item.color}`} />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Regulations List */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-900">Regulatory Updates</h3>

          {regulations.map((reg) => (
            <Card key={reg.id} className="border-0 shadow-sm p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl font-bold text-slate-900">{reg.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(reg.status)}`}>
                      {reg.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">{reg.category}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-semibold ${getImpactColor(reg.impact)}`}>
                    {reg.impact} Impact
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Deadline: {new Date(reg.deadline).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <p className="text-slate-700 mb-6">{reg.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Requirements */}
                <div>
                  <h5 className="font-semibold text-slate-900 mb-3">Key Requirements</h5>
                  <ul className="space-y-2">
                    {reg.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BlockMachine Readiness */}
                <div>
                  <h5 className="font-semibold text-slate-900 mb-3">BlockMachine Support</h5>
                  <div className={`p-4 rounded-lg ${reg.blockmachineReady ? "bg-green-50 border border-green-200" : "bg-yellow-50 border border-yellow-200"}`}>
                    <div className="flex items-center gap-2 mb-2">
                      {reg.blockmachineReady ? (
                        <>
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="font-semibold text-green-700">Fully Supported</span>
                        </>
                      ) : (
                        <>
                          <Clock className="h-5 w-5 text-yellow-600" />
                          <span className="font-semibold text-yellow-700">Coming Soon</span>
                        </>
                      )}
                    </div>
                    <p className={`text-sm ${reg.blockmachineReady ? "text-green-700" : "text-yellow-700"}`}>
                      {reg.blockmachineReady
                        ? "BlockMachine Co equipment and services meet all requirements"
                        : "BlockMachine Co is preparing support for this regulation"}
                    </p>
                  </div>
                </div>
              </div>

              <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
                Learn More & Get Compliance Guide →
              </button>
            </Card>
          ))}
        </div>

        {/* Alert Preferences */}
        <Card className="border-0 shadow-lg p-8 mt-12 bg-blue-50">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Stay Informed</h3>
          <p className="text-slate-700 mb-6">
            Get real-time alerts about regulatory changes that affect your projects
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
              Enable Compliance Alerts
            </button>
            <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition">
              Download Compliance Guide
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
}

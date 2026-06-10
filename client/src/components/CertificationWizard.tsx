import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Award, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

export default function CertificationWizard() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const certifications = [
    {
      id: "leed",
      name: "LEED Certification",
      icon: "🏗️",
      description: "Leadership in Energy and Environmental Design",
      levels: ["Certified", "Silver", "Gold", "Platinum"],
      requirements: [
        "Energy efficiency standards",
        "Water conservation",
        "Indoor environmental quality",
        "Sustainable site practices",
        "Materials & resources"
      ],
      timeline: "6-12 months",
      cost: "$$$",
      blockmachineSupport: "Sustainable concrete practices, waste diversion, material tracking"
    },
    {
      id: "calgreen",
      name: "CALGreen Certification",
      icon: "🌿",
      description: "California Green Building Standards Code",
      levels: ["Tier 1", "Tier 2"],
      requirements: [
        "Mandatory measures",
        "Elective measures",
        "Water efficiency",
        "Material efficiency",
        "Pollution prevention"
      ],
      timeline: "3-6 months",
      cost: "$$",
      blockmachineSupport: "CALGreen-compliant equipment, documentation support, compliance tracking"
    },
    {
      id: "netzero",
      name: "Net-Zero Ready",
      icon: "⚡",
      description: "Net-Zero Energy & Carbon Operations",
      levels: ["Ready", "Certified", "Net-Positive"],
      requirements: [
        "Zero operational emissions",
        "Renewable energy integration",
        "Energy storage",
        "Demand management",
        "Carbon offsets"
      ],
      timeline: "12-24 months",
      cost: "$$$",
      blockmachineSupport: "Energy-efficient operations, carbon tracking, offset programs"
    },
    {
      id: "circular",
      name: "Circular Economy",
      icon: "♻️",
      description: "Zero-Waste & Material Reuse Program",
      levels: ["Participant", "Leader", "Pioneer"],
      requirements: [
        "Material reuse planning",
        "Waste diversion targets",
        "Supplier engagement",
        "End-of-life planning",
        "Impact measurement"
      ],
      timeline: "Ongoing",
      cost: "$",
      blockmachineSupport: "Machine recycling, parts reuse, material recovery, impact tracking"
    }
  ];

  const selectedCertInfo = certifications.find(c => c.id === selectedCert);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Green Certification Pathways</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose your sustainability certification path and we'll guide you through every step
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Certification Selection */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Available Certifications</h3>

            {certifications.map((cert) => (
              <button
                key={cert.id}
                onClick={() => setSelectedCert(cert.id)}
                className={`w-full text-left p-6 rounded-lg border-2 transition ${
                  selectedCert === cert.id
                    ? "border-green-600 bg-green-50"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{cert.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900">{cert.name}</h4>
                    <p className="text-sm text-slate-600">{cert.description}</p>
                  </div>
                  {selectedCert === cert.id && (
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Certification Details */}
          {selectedCertInfo ? (
            <Card className="border-0 shadow-lg p-8 sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{selectedCertInfo.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{selectedCertInfo.name}</h3>
                  <p className="text-slate-600">{selectedCertInfo.description}</p>
                </div>
              </div>

              {/* Levels */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3">Certification Levels</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCertInfo.levels.map((level, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full"
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 mb-3">Key Requirements</h4>
                <ul className="space-y-2">
                  {selectedCertInfo.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline & Cost */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 rounded-lg">
                <div>
                  <p className="text-xs text-slate-600 font-semibold">Timeline</p>
                  <p className="text-lg font-bold text-slate-900">{selectedCertInfo.timeline}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-600 font-semibold">Investment</p>
                  <p className="text-lg font-bold text-slate-900">{selectedCertInfo.cost}</p>
                </div>
              </div>

              {/* BlockMachine Support */}
              <div className="p-4 bg-green-50 rounded-lg mb-6 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  BlockMachine Co Support
                </h4>
                <p className="text-sm text-green-800">{selectedCertInfo.blockmachineSupport}</p>
              </div>

              <button className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2">
                Start Your Certification Journey <ArrowRight className="h-4 w-4" />
              </button>
            </Card>
          ) : (
            <Card className="border-0 shadow-lg p-8 flex items-center justify-center min-h-96">
              <div className="text-center">
                <AlertCircle className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 text-lg">Select a certification to see details</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}

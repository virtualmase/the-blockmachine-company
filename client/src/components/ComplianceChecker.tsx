import { CheckCircle, AlertCircle, Info } from "lucide-react";

export default function ComplianceChecker() {
  const standards = [
    {
      name: "SEER2 Rating",
      description: "Seasonal Energy Efficiency Ratio 2 - measures cooling efficiency",
      requirement: "≥ 16 SEER2 (minimum federal standard)",
      status: "compliant",
      details: "Our systems range from SEER2 20-26, exceeding federal requirements"
    },
    {
      name: "HSPF2 Rating",
      description: "Heating Seasonal Performance Factor 2 - measures heating efficiency",
      requirement: "≥ 8.8 HSPF2 (minimum federal standard)",
      status: "compliant",
      details: "Our systems range from HSPF2 10.5-13.2, exceeding federal requirements"
    },
    {
      name: "Low-GWP Refrigerant",
      description: "Global Warming Potential - environmental impact of refrigerants",
      requirement: "GWP < 750 (EPA requirement)",
      status: "compliant",
      details: "All ClimateIQ systems use low-GWP refrigerants (GWP < 150)"
    },
    {
      name: "LEED Certification",
      description: "Leadership in Energy and Environmental Design",
      requirement: "Eligible for LEED credits",
      status: "compliant",
      details: "Our systems qualify for LEED v4.1 energy performance credits"
    },
    {
      name: "Net-Zero Ready",
      description: "Compatible with renewable energy systems (solar, geothermal)",
      requirement: "Supports grid integration and demand response",
      status: "compliant",
      details: "All systems include smart controls for net-zero integration"
    },
    {
      name: "Noise Compliance",
      description: "Outdoor unit noise levels",
      requirement: "≤ 72 dB (typical residential requirement)",
      status: "compliant",
      details: "Our systems operate at 65-70 dB, among the quietest available"
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Compliance & Standards</h3>
        <p className="text-slate-600">
          ClimateIQ systems meet or exceed all federal, state, and environmental standards
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {standards.map((standard, idx) => (
          <div key={idx} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-all">
            <div className="flex items-start gap-3 mb-3">
              {standard.status === "compliant" ? (
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <h4 className="font-semibold text-slate-900">{standard.name}</h4>
                <p className="text-sm text-slate-600">{standard.description}</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded p-3 mb-3">
              <div className="text-xs text-slate-600 font-medium mb-1">REQUIREMENT:</div>
              <div className="text-sm font-semibold text-slate-900">{standard.requirement}</div>
            </div>

            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700">{standard.details}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Full Compliance Achieved</h4>
            <p className="text-slate-700 mb-3">
              All ClimateIQ systems are fully compliant with current federal efficiency standards and qualify for incentive programs including:
            </p>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>✓ Federal Tax Credits (up to $3,200)</li>
              <li>✓ State Rebate Programs</li>
              <li>✓ Utility Company Incentives</li>
              <li>✓ LEED Certification Credits</li>
              <li>✓ Energy Star Certification</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

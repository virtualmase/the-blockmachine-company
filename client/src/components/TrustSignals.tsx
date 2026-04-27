import { Award, Leaf, CheckCircle, Shield, Zap, Globe } from "lucide-react";

export default function TrustSignals() {
  const certifications = [
    {
      icon: Award,
      title: "ISO 9001:2015",
      description: "Quality Management System Certified",
    },
    {
      icon: Leaf,
      title: "CALGreen Certified",
      description: "California Green Building Standards Compliant",
    },
    {
      icon: CheckCircle,
      title: "OSHA Compliant",
      description: "Occupational Safety & Health Standards",
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Comprehensive Liability Coverage",
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description: "EPA Tier 4 Emissions Standards",
    },
    {
      icon: Globe,
      title: "Eco-Friendly",
      description: "Sustainable Manufacturing Practices",
    },
  ];

  const metrics = [
    { value: "25+", label: "Years in Business" },
    { value: "500+", label: "Machines Deployed" },
    { value: "1000+", label: "Projects Completed" },
    { value: "98%", label: "Customer Satisfaction" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Certifications Grid */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
            Industry Certifications & Standards
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="p-6 border border-slate-200 rounded-lg hover:border-orange-500 hover:shadow-lg transition"
                >
                  <Icon className="h-8 w-8 text-orange-500 mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-12">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            Proven Track Record
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-5xl font-bold text-orange-500 mb-2">
                  {metric.value}
                </p>
                <p className="text-slate-300 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Why Contractors Trust BlockMachine Co
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="font-semibold text-slate-900 mb-2">
                Quality Guaranteed
              </h4>
              <p className="text-slate-600 text-sm">
                Every machine undergoes rigorous testing and quality control before delivery.
              </p>
            </div>
            <div className="p-6">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-slate-900 mb-2">
                24/7 Support
              </h4>
              <p className="text-slate-600 text-sm">
                Dedicated support team available around the clock for technical assistance.
              </p>
            </div>
            <div className="p-6">
              <Leaf className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h4 className="font-semibold text-slate-900 mb-2">
                Sustainable
              </h4>
              <p className="text-slate-600 text-sm">
                Eco-friendly operations with minimal environmental impact and waste reduction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

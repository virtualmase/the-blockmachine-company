import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Leaf, Zap, Recycle, CheckCircle } from "lucide-react";

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sustainability & CALGreen Compliance</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            BlockMachine Co is committed to sustainable block production that meets California's strictest environmental standards.
          </p>
        </div>
      </section>

      {/* CALGreen Overview */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">What is CALGreen?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              CALGreen (California Green Building Standards Code) is the nation's first statewide green building standards
              code. It establishes minimum environmental performance standards for all buildings in California, including
              requirements for embodied carbon, recycled content, and sustainable material sourcing.
            </p>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              For concrete block manufacturers and contractors, CALGreen compliance means using sustainable production
              methods, incorporating recycled materials, and documenting environmental product declarations (EPDs).
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="text-green-900 font-semibold mb-2">BlockMachine Co is fully CALGreen certified</p>
              <p className="text-green-800">
                All our machines and production processes meet or exceed CALGreen requirements for embodied carbon,
                recycled content, and material conservation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Sustainable Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <Recycle className="h-8 w-8 text-green-600 mb-4" />
                <CardTitle>Recycled Content Blocks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Our machines produce blocks with high recycled content, including post-consumer and post-industrial
                  waste materials. This reduces landfill waste and lowers embodied carbon.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Up to 40% recycled content
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Reduced embodied carbon by 25%
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Certified EPD documentation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <Zap className="h-8 w-8 text-orange-500 mb-4" />
                <CardTitle>Energy-Efficient Machines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Our latest generation machines use advanced hydraulics and smart controls to minimize energy
                  consumption while maximizing production output.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    30% lower power consumption
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Regenerative braking systems
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Smart scheduling for peak efficiency
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <Leaf className="h-8 w-8 text-green-600 mb-4" />
                <CardTitle>Sustainable Material Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  We partner with suppliers who meet strict environmental standards for aggregate sourcing, ensuring
                  responsible extraction and minimal environmental impact.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Certified sustainable suppliers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Local sourcing to reduce transportation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Third-party environmental audits
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
                <CardTitle>Compliance & Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  BlockMachine Co maintains comprehensive documentation and certifications to support your CALGreen
                  compliance requirements.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Environmental Product Declarations (EPDs)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    CALGreen compliance checklist
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Annual sustainability reporting
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Checklist */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">CALGreen Compliance Checklist</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Embodied Carbon Reduction</p>
                  <p className="text-slate-600 text-sm">Blocks produced with 25%+ lower embodied carbon</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Recycled Content Documentation</p>
                  <p className="text-slate-600 text-sm">Full traceability of recycled materials used</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Environmental Product Declarations</p>
                  <p className="text-slate-600 text-sm">Third-party verified EPDs for all products</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Sustainable Sourcing</p>
                  <p className="text-slate-600 text-sm">Certified suppliers meeting environmental standards</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900">Material Conservation</p>
                  <p className="text-slate-600 text-sm">Waste reduction and efficient production processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-900 to-green-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Go Green?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how BlockMachine Co can help you meet your CALGreen compliance goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

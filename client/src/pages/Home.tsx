import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Zap, Leaf, Shield, TrendingUp, Users, Award } from "lucide-react";
import { getLoginUrl } from "@/const";
import EnergySavingsCalculator from "@/components/EnergySavingsCalculator";
import ComplianceChecker from "@/components/ComplianceChecker";

export default function Home() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-block bg-green-500/20 border border-green-400 rounded-full px-4 py-2 mb-6">
              <span className="text-green-300 text-sm font-semibold">Intelligent Climate Control</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              The Future of HVAC Technology
            </h1>
            
            <p className="text-xl text-blue-100 mb-4">
              Intelligent. Sustainable. Reliable.
            </p>
            
            <p className="text-lg text-blue-100 mb-8 max-w-2xl">
              Smart HVAC systems that optimize comfort, reduce energy costs, and meet net-zero standards. Powered by AI-driven predictive maintenance and real-time performance monitoring.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/machines">
                <Button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 text-lg rounded-lg transition-all duration-300">
                  Explore Systems <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our HVAC Solutions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Energy Efficient",
                description: "Reduce energy consumption by up to 40% with AI-optimized climate control and predictive maintenance."
              },
              {
                icon: Leaf,
                title: "Sustainable",
                description: "Low-GWP refrigerants and net-zero ready systems that meet future environmental standards."
              },
              {
                icon: Shield,
                title: "Reliable",
                description: "Enterprise-grade systems with 99.9% uptime guarantee and 24/7 technical support."
              },
              {
                icon: TrendingUp,
                title: "Cost Savings",
                description: "Predictive maintenance reduces emergency repairs and extends system lifespan by 20%."
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Dedicated technical team with ASHRAE certification and 25+ years of industry experience."
              },
              {
                icon: Award,
                title: "Certified",
                description: "SEER2, HSPF2 compliant and LEED-certified systems for modern buildings."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]">
                <item.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Years in HVAC" },
              { number: "5,000+", label: "Systems Deployed" },
              { number: "40%", label: "Avg. Energy Savings" },
              { number: "98%", label: "Customer Satisfaction" }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-blue-600 mb-2">{item.number}</div>
                <div className="text-slate-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Savings Calculator */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <EnergySavingsCalculator />
        </div>
      </section>

      {/* Compliance Checker */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <ComplianceChecker />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Climate Control?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free energy audit and discover how much you can save with our intelligent HVAC solutions.
          </p>
          <Link href="/contact">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
              Start Your Free Audit <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

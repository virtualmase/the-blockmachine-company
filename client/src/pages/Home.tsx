import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, TrendingUp, Users, Zap, BarChart3, Globe } from "lucide-react";
import { getLoginUrl } from "@/const";
import { Streamdown } from 'streamdown';
import Testimonials from "@/components/Testimonials";
import TrustSignals from "@/components/TrustSignals";
import ImpactCalculator from "@/components/ImpactCalculator";
import CertificationWizard from "@/components/CertificationWizard";

export default function Home() {
  const { user, loading, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* HERO SECTION - Sustainability-First Positioning */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-500/20 border border-green-400/50 rounded-full">
              <Leaf className="h-4 w-4 text-green-400" />
              <span className="text-sm font-semibold text-green-300">Sustainable Infrastructure Innovation</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Building California's Net-Zero Future
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-2xl">
              Smart. Sustainable. SoCal Built.
            </p>

            <p className="text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed">
              BlockMachine Co is the sustainable infrastructure platform enabling California's construction industry to meet climate goals. We combine industry-leading equipment with environmental impact tracking, circular economy practices, and thought leadership to create a new category: Sustainable Concrete Infrastructure as a Service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition transform hover:scale-105"
              >
                Request a Quote <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/machines"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition"
              >
                Explore Our Solutions <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION CARDS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose BlockMachine Co</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We're not just equipment vendors—we're your partner in sustainable infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Environmental Impact Tracking",
                description: "Real-time CO2 reduction, waste diversion, and energy savings metrics for every project"
              },
              {
                icon: TrendingUp,
                title: "Regulatory Compliance",
                description: "Pre-compliance with CALGreen, LEED, and emerging climate regulations"
              },
              {
                icon: Zap,
                title: "Circular Economy",
                description: "Machine recycling, parts reuse, and material recovery programs"
              },
              {
                icon: Globe,
                title: "Market Leadership",
                description: "Industry intelligence, research, and thought leadership in sustainable construction"
              },
              {
                icon: Users,
                title: "Community Network",
                description: "Access to 1000+ eco-conscious builders, developers, and sustainability leaders"
              },
              {
                icon: BarChart3,
                title: "Sustainability ROI",
                description: "Calculate environmental and financial returns on your green projects"
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="border-0 shadow-sm hover:shadow-lg transition-shadow p-8">
                  <Icon className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <TrustSignals />

      {/* SUSTAINABILITY IMPACT SECTION */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Environmental Impact</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Quantified results from BlockMachine Co customers across California
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: "50,000+", label: "Tons CO2 Reduced", icon: "🌍" },
              { metric: "100,000+", label: "Tons Waste Diverted", icon: "♻️" },
              { metric: "500+", label: "LEED Projects Enabled", icon: "🏗️" },
              { metric: "1,000+", label: "Eco-Conscious Partners", icon: "🤝" }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-sm p-8 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-3xl font-bold text-green-600 mb-2">{item.metric}</div>
                <p className="text-slate-600 font-medium">{item.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT CALCULATOR */}
      <ImpactCalculator />

      {/* CERTIFICATION WIZARD */}
      <CertificationWizard />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* MARKET SEGMENTS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Who We Serve</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Partnering with leaders across the construction and sustainability sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                segment: "Eco-Conscious Developers",
                description: "Building LEED, Net Zero, and climate-positive projects"
              },
              {
                segment: "Sustainability Officers",
                description: "Meeting corporate ESG commitments and climate goals"
              },
              {
                segment: "Municipal Planners",
                description: "Implementing city climate action plans and regulations"
              },
              {
                segment: "Green Consultants",
                description: "Specifying sustainable solutions for clients"
              },
              {
                segment: "Impact Investors",
                description: "Building ESG-aligned portfolios and companies"
              },
              {
                segment: "Contractors",
                description: "Differentiating through sustainability credentials"
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-sm p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.segment}</h3>
                <p className="text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* THOUGHT LEADERSHIP CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Industry Intelligence & Thought Leadership</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stay ahead of sustainability trends, regulatory changes, and market innovations in construction
          </p>
          <a
            href="/resources"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-slate-100 transition"
          >
            Explore Research & Insights <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Sustainably?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join hundreds of eco-conscious builders, developers, and sustainability leaders transforming California's construction industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition"
            >
              Start Your Project <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/sustainability"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition"
            >
              Learn About Our Impact <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

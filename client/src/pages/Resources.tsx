import { Card } from "@/components/ui/card";
import { BookOpen, TrendingUp, FileText, Users, Zap, Award } from "lucide-react";

export default function Resources() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* HERO */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Industry Intelligence & Thought Leadership</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Stay ahead of sustainability trends, regulatory changes, and market innovations in California's construction industry
          </p>
        </div>
      </section>

      {/* RESEARCH & WHITEPAPERS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <FileText className="h-10 w-10 text-blue-600" />
              Research & Whitepapers
            </h2>
            <p className="text-lg text-slate-600">
              Deep-dive analysis on sustainable construction, circular economy, and climate impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "The Circular Economy in Construction: A California Roadmap",
                date: "Q2 2026",
                description: "Comprehensive analysis of material reuse, waste reduction, and circular business models in construction",
                topics: ["Circular Economy", "Waste Reduction", "Material Recovery"]
              },
              {
                title: "Net-Zero Construction: From Compliance to Competitive Advantage",
                date: "Q1 2026",
                description: "How sustainable practices create market differentiation and premium pricing opportunities",
                topics: ["Net-Zero", "Market Strategy", "Competitive Advantage"]
              },
              {
                title: "CALGreen Compliance: A Practical Guide for Contractors",
                date: "Q4 2025",
                description: "Step-by-step guide to meeting California's green building standards",
                topics: ["CALGreen", "Compliance", "Best Practices"]
              },
              {
                title: "Environmental ROI: Measuring Sustainability Impact in Construction",
                date: "Q3 2025",
                description: "Frameworks for quantifying CO2 reduction, waste diversion, and energy savings",
                topics: ["Impact Measurement", "ROI", "Sustainability Metrics"]
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-sm p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 mb-4">{item.date}</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-6">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.topics.map((topic, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
                      {topic}
                    </span>
                  ))}
                </div>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition">
                  Download Whitepaper →
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <TrendingUp className="h-10 w-10 text-green-600" />
              Case Studies
            </h2>
            <p className="text-lg text-slate-600">
              Real-world examples of sustainable projects and environmental impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                project: "SoCal Tech Campus - LEED Platinum",
                client: "Summit Development Group",
                impact: "2,500 tons CO2 reduction | 50,000 tons waste diverted",
                description: "Net-zero office campus in Orange County using sustainable concrete practices"
              },
              {
                project: "Anaheim Municipal Housing - CALGreen Certified",
                client: "City of Anaheim",
                impact: "1,200 tons CO2 reduction | 15,000 tons waste diverted",
                description: "Affordable housing project meeting CALGreen and climate action goals"
              },
              {
                project: "Eco-Industrial Park - Circular Economy Model",
                client: "Orange County Builders",
                impact: "3,000 tons CO2 reduction | 75,000 tons waste diverted",
                description: "Mixed-use development with material reuse and circular economy practices"
              },
              {
                project: "Green Retail District - Net-Zero Ready",
                client: "SoCal Developments",
                impact: "1,800 tons CO2 reduction | 30,000 tons waste diverted",
                description: "Retail center achieving net-zero operational emissions"
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-sm p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.project}</h3>
                <p className="text-sm text-slate-600 mb-4">{item.client}</p>
                <div className="p-4 bg-green-50 rounded-lg mb-6">
                  <p className="text-green-700 font-semibold text-sm">{item.impact}</p>
                </div>
                <p className="text-slate-600 mb-6">{item.description}</p>
                <button className="text-green-600 font-semibold hover:text-green-700 transition">
                  Read Full Case Study →
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY INSIGHTS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <TrendingUp className="h-10 w-10 text-orange-600" />
              Industry Insights & Trends
            </h2>
            <p className="text-lg text-slate-600">
              Market analysis, regulatory updates, and emerging opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "Regulatory",
                title: "2026 California Climate Regulations: What Contractors Need to Know",
                date: "May 2026",
                icon: Award
              },
              {
                category: "Market Trend",
                title: "ESG Investing in Construction: $500B Opportunity",
                date: "April 2026",
                icon: TrendingUp
              },
              {
                category: "Technology",
                title: "AI-Powered Sustainability Tracking in Construction",
                date: "March 2026",
                icon: Zap
              },
              {
                category: "Regulatory",
                title: "LEED v4.1 Updates: New Sustainability Requirements",
                date: "February 2026",
                icon: Award
              },
              {
                category: "Market Trend",
                title: "Circular Economy in Construction: From Niche to Mainstream",
                date: "January 2026",
                icon: TrendingUp
              },
              {
                category: "Best Practice",
                title: "Zero-Waste Construction Sites: Implementation Guide",
                date: "December 2025",
                icon: Zap
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="border-0 shadow-sm p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                    <Icon className="h-5 w-5 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.date}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMMUNITY & EVENTS */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <Users className="h-10 w-10 text-purple-600" />
              Community & Events
            </h2>
            <p className="text-lg text-slate-600">
              Connect with eco-conscious builders, developers, and sustainability leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                type: "Webinar",
                title: "Net-Zero Construction: Strategy & Implementation",
                date: "June 15, 2026",
                time: "2:00 PM PT",
                speakers: "3 industry experts"
              },
              {
                type: "Workshop",
                title: "CALGreen Compliance Workshop for Contractors",
                date: "June 22, 2026",
                time: "10:00 AM PT",
                speakers: "Compliance specialists"
              },
              {
                type: "Networking Event",
                title: "SoCal Sustainable Builders Summit",
                date: "July 10, 2026",
                time: "All day",
                speakers: "100+ attendees"
              },
              {
                type: "Roundtable",
                title: "Circular Economy in Construction: Best Practices",
                date: "July 25, 2026",
                time: "3:00 PM PT",
                speakers: "Industry leaders"
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-sm p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <div className="space-y-2 text-slate-600 mb-6">
                  <p><span className="font-semibold">Date:</span> {item.date}</p>
                  <p><span className="font-semibold">Time:</span> {item.time}</p>
                  <p><span className="font-semibold">Speakers:</span> {item.speakers}</p>
                </div>
                <button className="text-purple-600 font-semibold hover:text-purple-700 transition">
                  Register Now →
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated on Sustainability Trends</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get monthly insights on regulatory changes, market opportunities, and industry best practices
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500"
            />
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

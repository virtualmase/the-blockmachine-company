import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Michael Rodriguez",
      company: "Rodriguez Construction",
      role: "Project Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      quote:
        "BlockMachine Co's equipment transformed our production capacity. We increased output by 40% in the first month. Their support team is exceptional.",
      rating: 5,
      metric: "+40% Production Increase",
    },
    {
      id: 2,
      name: "Sarah Chen",
      company: "SoCal Developments",
      role: "Operations Director",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      quote:
        "Renting from BlockMachine Co gave us the flexibility we needed for our seasonal projects. The equipment is top-notch and delivery is always on time.",
      rating: 5,
      metric: "3 Years, 50+ Projects",
    },
    {
      id: 3,
      name: "James Thompson",
      company: "Orange County Builders",
      role: "CEO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      quote:
        "The CALGreen certified machines helped us meet sustainability requirements for our municipal contracts. BlockMachine Co is a trusted partner.",
      rating: 5,
      metric: "100% Compliance Rate",
    },
    {
      id: 4,
      name: "Lisa Martinez",
      company: "Eco-Concrete Solutions",
      role: "Sustainability Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
      quote:
        "Their commitment to sustainability aligns perfectly with our values. The energy-efficient machines reduced our carbon footprint significantly.",
      rating: 5,
      metric: "30% Energy Reduction",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Hear from contractors, developers, and businesses across Southern California who've partnered with BlockMachine Co.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-sm hover:shadow-lg transition-shadow">
              <div className="p-6 flex flex-col h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm mb-6 flex-1 italic">
                  "{testimonial.quote}"
                </p>

                {/* Metric */}
                <div className="mb-4 p-3 bg-orange-50 rounded">
                  <p className="text-orange-600 font-semibold text-sm">
                    {testimonial.metric}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-slate-600 text-xs">
                      {testimonial.role}
                    </p>
                    <p className="text-slate-500 text-xs">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Join hundreds of satisfied customers across Southern California
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded transition"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
}

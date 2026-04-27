import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Products & Equipment",
      items: [
        {
          q: "What types of machines does BlockMachine Co offer?",
          a: "We offer a comprehensive range of concrete block making machines, including standard block machines, paving block systems, interlocking block equipment, and specialized brick making machines. All machines are CALGreen certified and designed for Southern California operations.",
        },
        {
          q: "Are your machines environmentally friendly?",
          a: "Yes. All our machines meet or exceed CALGreen standards and EPA Tier 4 emissions requirements. They feature energy-efficient motors, waste reduction systems, and sustainable manufacturing practices. We're committed to minimizing environmental impact.",
        },
        {
          q: "What kind of maintenance do the machines require?",
          a: "Our machines require regular maintenance including daily cleaning, weekly lubrication, and monthly inspections. We provide comprehensive maintenance guides and 24/7 support to ensure optimal performance. Rental packages include preventive maintenance.",
        },
        {
          q: "Can I customize the machines for my specific needs?",
          a: "Absolutely. We offer customization options for block size, shape, production speed, and automation level. Contact our team to discuss your specific requirements and we'll design a solution tailored to your operation.",
        },
      ],
    },
    {
      category: "Rentals & Leasing",
      items: [
        {
          q: "What are the rental terms available?",
          a: "We offer flexible rental options: daily (24-hour minimum), weekly (7-14 days), monthly (30-90 days), and long-term contracts (6-12 months or custom). Rates vary by equipment and rental duration. Contact us for a custom quote.",
        },
        {
          q: "What's included in a rental package?",
          a: "All rentals include equipment delivery, setup, operator training, basic maintenance, insurance coverage, and 24/7 technical support. Long-term rentals also include preventive maintenance and equipment upgrades if needed.",
        },
        {
          q: "How quickly can you deliver equipment?",
          a: "We typically deliver within 24-48 hours across Southern California. For urgent requests, same-day delivery may be available. Contact us with your project timeline and we'll arrange the fastest possible delivery.",
        },
        {
          q: "What if the equipment breaks down during my rental?",
          a: "Our 24/7 support team responds immediately to any issues. We provide emergency repairs, replacement equipment if needed, and work to minimize downtime. All repairs are covered under your rental agreement.",
        },
      ],
    },
    {
      category: "Sustainability & Compliance",
      items: [
        {
          q: "Are your machines CALGreen certified?",
          a: "Yes. All our machines are certified to meet California Green Building Standards (CALGreen). This certification ensures compliance with state sustainability requirements for construction projects.",
        },
        {
          q: "How do your machines help reduce environmental impact?",
          a: "Our machines reduce environmental impact through energy efficiency (30% less energy consumption), waste reduction (up to 95% material recovery), and lower emissions (EPA Tier 4 compliant). We also support waste diversion programs.",
        },
        {
          q: "Can your equipment help with LEED certification?",
          a: "Yes. Our machines support LEED certification efforts through sustainable material sourcing, energy efficiency, and waste reduction. We can provide documentation for your LEED project requirements.",
        },
      ],
    },
    {
      category: "Service & Support",
      items: [
        {
          q: "Do you provide operator training?",
          a: "Yes. All equipment purchases and rentals include comprehensive operator training. We provide on-site training, safety certifications, and ongoing support to ensure your team operates machines safely and efficiently.",
        },
        {
          q: "What support is available after purchase?",
          a: "We offer lifetime technical support, spare parts availability, maintenance services, and equipment upgrades. Our support team is available 24/7 for emergency issues and during business hours for routine inquiries.",
        },
        {
          q: "Do you offer equipment financing?",
          a: "Yes. We work with several financing partners to offer flexible payment plans for equipment purchases. Contact our sales team to discuss financing options that fit your budget.",
        },
        {
          q: "What's your warranty coverage?",
          a: "All new machines come with a 2-year comprehensive warranty covering parts and labor. Extended warranties are available. Rental equipment is covered by our maintenance program.",
        },
      ],
    },
    {
      category: "Ordering & Pricing",
      items: [
        {
          q: "How do I get a quote?",
          a: "Visit our Contact page or call (714) 555-0123 to request a quote. Provide details about your project, equipment needs, and timeline. Our team will respond within 24 hours with a custom quote.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept wire transfers, ACH payments, credit cards, and checks. For large orders, we can arrange custom payment terms. Contact our accounting team for payment options.",
        },
        {
          q: "Is there a minimum order quantity?",
          a: "For purchases, we typically work with orders of 1 or more machines. For rentals, there's no minimum quantity. Contact us to discuss your specific needs.",
        },
        {
          q: "Do you offer volume discounts?",
          a: "Yes. We offer significant discounts for volume purchases and long-term rental agreements. Contact our sales team to discuss volume pricing for your project.",
        },
      ],
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Find answers to common questions about our machines, rentals, and services.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">{section.category}</h2>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => {
                  const globalIndex = sectionIndex * 10 + itemIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={itemIndex}
                      className="border border-slate-200 rounded-lg overflow-hidden hover:border-orange-500 transition"
                    >
                      <button
                        onClick={() => toggleAccordion(globalIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition"
                      >
                        <h3 className="font-semibold text-slate-900 text-left">{item.q}</h3>
                        <ChevronDown
                          className={`h-5 w-5 text-slate-600 flex-shrink-0 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 py-4 bg-white border-t border-slate-200">
                          <p className="text-slate-700 leading-relaxed">{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="mt-16 p-8 bg-orange-50 rounded-lg border border-orange-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Didn't find your answer?
            </h3>
            <p className="text-slate-700 mb-6">
              Our team is here to help. Contact us directly and we'll be happy to answer any questions about our products and services.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

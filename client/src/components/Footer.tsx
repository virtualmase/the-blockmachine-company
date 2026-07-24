import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">ClimateIQ</h3>
            <p className="text-slate-300 text-sm mb-6">
              Intelligent HVAC solutions for residential, commercial, and industrial applications. Smart climate control powered by AI.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+1-714-555-0123" className="hover:text-blue-400 transition">
                  (714) 555-0123
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@climateiq.co" className="hover:text-blue-400 transition">
                  info@climateiq.co
                </a>
              </div>
            </div>
          </div>

          {/* HVAC Systems */}
          <div>
            <h4 className="text-white font-semibold mb-4">HVAC Systems</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/machines" className="text-slate-300 hover:text-blue-400 transition">
                  Residential HVAC Systems
                </Link>
              </li>
              <li>
                <Link href="/machines" className="text-slate-300 hover:text-blue-400 transition">
                  Commercial Climate Control
                </Link>
              </li>
              <li>
                <Link href="/machines" className="text-slate-300 hover:text-blue-400 transition">
                  Industrial HVAC Solutions
                </Link>
              </li>
              <li>
                <Link href="/machines" className="text-slate-300 hover:text-blue-400 transition">
                  Net-Zero Ready Systems
                </Link>
              </li>
              <li>
                <Link href="/machines" className="text-slate-300 hover:text-blue-400 transition">
                  Smart Thermostats
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/rentals" className="text-slate-300 hover:text-blue-400 transition">
                  HVAC Service Plans
                </Link>
              </li>
              <li>
                <Link href="/rentals" className="text-slate-300 hover:text-blue-400 transition">
                  Predictive Maintenance
                </Link>
              </li>
              <li>
                <Link href="/rentals" className="text-slate-300 hover:text-blue-400 transition">
                  System Installation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-blue-400 transition">
                  24/7 Technical Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-blue-400 transition">
                  Energy Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Compliance */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/resources" className="text-slate-300 hover:text-blue-400 transition">
                  HVAC Guides & Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-slate-300 hover:text-blue-400 transition">
                  Energy Efficiency Standards
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-slate-300 hover:text-blue-400 transition">
                  SEER2 & HSPF2 Compliance
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-blue-400 transition">
                  FAQ & Troubleshooting
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-300 hover:text-blue-400 transition">
                  Blog & Industry News
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-blue-400 transition">
                  About ClimateIQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-blue-400 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition">
                  Partnerships
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-400 transition">
                  Press & Media
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-400">
            <p>&copy; {currentYear} ClimateIQ. All rights reserved. | Intelligent HVAC Solutions</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition">
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-blue-400 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-blue-400 transition">
              Terms of Service
            </Link>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

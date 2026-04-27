import { Link } from "wouter";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">BlockMachine Co</h3>
            <p className="text-slate-300 text-sm mb-6">
              Industry-leading concrete block machines and rental solutions for Southern California contractors and developers.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Anaheim, CA</p>
                  <p className="text-slate-400">Headquarters & Operations</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a href="tel:+1-714-555-0123" className="hover:text-orange-500 transition">
                  (714) 555-0123
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@blockmachine.co" className="hover:text-orange-500 transition">
                  info@blockmachine.co
                </a>
              </div>
            </div>
          </div>

          {/* Products & Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/machines" className="text-slate-300 hover:text-orange-500 transition">
                  Block Making Machines
                </Link>
              </li>
              <li>
                <Link href="/machines" className="text-slate-300 hover:text-orange-500 transition">
                  Concrete Block Equipment
                </Link>
              </li>
              <li>
                <Link href="/machines" className="text-slate-300 hover:text-orange-500 transition">
                  Paving Block Machines
                </Link>
              </li>
              <li>
                <Link href="/machines" className="text-slate-300 hover:text-orange-500 transition">
                  Brick Making Equipment
                </Link>
              </li>
              <li>
                <Link href="/machines" className="text-slate-300 hover:text-orange-500 transition">
                  Interlocking Block Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/rentals" className="text-slate-300 hover:text-orange-500 transition">
                  Equipment Rentals
                </Link>
              </li>
              <li>
                <Link href="/rentals" className="text-slate-300 hover:text-orange-500 transition">
                  Short-Term Rentals
                </Link>
              </li>
              <li>
                <Link href="/rentals" className="text-slate-300 hover:text-orange-500 transition">
                  Long-Term Leasing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-orange-500 transition">
                  Equipment Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-orange-500 transition">
                  Operator Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-orange-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-slate-300 hover:text-orange-500 transition">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-slate-300 hover:text-orange-500 transition">
                  CALGreen Certified
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-orange-500 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-slate-300 hover:text-orange-500 transition">
                  Request Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-300 hover:text-orange-500 transition">
                  Technical Specs
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-orange-500 transition">
                  Industry Guides
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-orange-500 transition">
                  Case Studies
                </a>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-orange-500 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-orange-500 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-slate-800 rounded-lg p-6 mb-12">
          <div className="max-w-md">
            <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
            <p className="text-slate-300 text-sm mb-4">
              Get the latest news on equipment, rentals, and industry insights.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded bg-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded font-semibold text-sm transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-orange-500 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-orange-500 transition">
                Terms of Service
              </Link>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition">
                Cookie Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-orange-500 transition">
                Sitemap
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 md:justify-end">
              <a
                href="#"
                className="text-slate-400 hover:text-orange-500 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-orange-500 transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-orange-500 transition"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-slate-400 text-sm">
            <p>
              &copy; {currentYear} BlockMachine Co. All rights reserved. | Smart. Sustainable. SoCal Built.
            </p>
            <p className="mt-2 text-xs">
              Serving Orange County, Los Angeles, San Diego, and Greater Southern California
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

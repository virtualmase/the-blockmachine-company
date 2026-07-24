import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/_core/hooks/useAuth";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { user } = useAuth();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/machines", label: "Systems" },
    { href: "/rentals", label: "Service Plans" },
    { href: "/sustainability", label: "Efficiency" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/resources", label: "Resources" },
    { href: "/faq", label: "FAQ" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CQ</span>
            </div>
            <span className="font-bold text-slate-900 hidden sm:inline">ClimateIQ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Admin */}
          <div className="hidden md:flex items-center gap-4">
            {user?.role === "admin" && (
              <Link href="/admin">
                <Button variant="outline" size="sm">
                  Admin
                </Button>
              </Link>
            )}
            <Link href="/contact">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {user?.role === "admin" && (
              <Link
                href="/admin"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50"
              >
                Admin Dashboard
              </Link>
            )}
            <Link href="/contact">
              <Button
                onClick={() => setIsOpen(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

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
    { href: "/machines", label: "Machines" },
    { href: "/sustainability", label: "Sustainability" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
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
          <Link href="/">
            <a className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BM</span>
              </div>
              <span className="font-bold text-slate-900 hidden sm:inline">BlockMachine Co</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "text-orange-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </a>
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
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                Request Quote
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
              <Link key={item.href} href={item.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-orange-50 text-orange-600"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            {user?.role === "admin" && (
              <Link href="/admin">
                <a
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50"
                >
                  Admin Dashboard
                </a>
              </Link>
            )}
            <Link href="/contact">
              <Button
                onClick={() => setIsOpen(false)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                Request Quote
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

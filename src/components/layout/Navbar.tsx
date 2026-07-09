import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoUrl from "@assets/image_1783387127939.png";

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/tours", label: "Tours" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-500 bg-primary/95 backdrop-blur-md shadow-md border-b border-accent/40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] bg-repeat"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-3">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer group">
            <img 
              src={logoUrl} 
              alt="Primates Quest Logo" 
              className="h-14 w-auto transition-all duration-500 hover:drop-shadow-[0_0_12px_rgba(201,162,39,0.6)]"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div className="relative group cursor-pointer py-2">
                <div
                  className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                    location === link.href
                      ? "text-accent"
                      : "text-primary-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                </div>
                {location === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </div>
            </Link>
          ))}
          <Link href="/contact">
            <div className="relative group overflow-hidden px-8 py-2.5 bg-accent text-primary text-sm font-bold uppercase tracking-wider cursor-pointer">
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] z-0" />
            </div>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white drop-shadow-md focus:outline-none z-[60] relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} className="text-primary-foreground" /> : <Menu size={28} className="text-primary-foreground" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 w-full h-screen bg-primary/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden z-50"
            >
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={link.href}>
                    <div
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-3xl font-display transition-colors cursor-pointer ${
                        location === link.href ? "text-accent" : "text-white hover:text-accent"
                      }`}
                    >
                      {link.label}
                    </div>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: links.length * 0.1 }}
              >
                <Link href="/contact">
                  <div 
                    onClick={() => setMobileMenuOpen(false)}
                    className="mt-6 px-10 py-4 bg-accent text-primary font-bold uppercase tracking-wider cursor-pointer text-lg"
                  >
                    Book Now
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import tmLogo from "@/assets/tm-logo.png";

const navLinks = [
{ label: "Services", href: "#services" },
{ label: "Events", href: "#events" },
{ label: "Testimonials", href: "#testimonials" },
{ label: "About Us", href: "#about" }];


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ?
      "bg-white/95 backdrop-blur-md shadow-sm" :
      "bg-transparent"}`
      }>
      
      <div className="max-w-site mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Brand name - left */}
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <span className={`font-heading italic text-lg tracking-wide transition-colors duration-500 ${
              scrolled ? "text-foreground" : "text-white"}`
            }>
              The Motivation Biohackers
            </span>
          </a>

          {/* Right nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-body tracking-wide transition-colors duration-300 ${
              scrolled ?
              "text-foreground/70 hover:text-primary" :
              "text-white/80 hover:text-white"}`
              }>
              
                {link.label}
              </a>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}>
            
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-md border-b border-border">
          
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) =>
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-body text-foreground/70 hover:text-primary transition-colors">
              
                  {link.label}
                </a>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

};

export default Navbar;
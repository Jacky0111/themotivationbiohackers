import tmLogo from "@/assets/tm-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-footer-bg text-footer-text">
      <div className="max-w-site mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={tmLogo} alt="The Motivation Biohackers" className="h-10 w-auto opacity-80" />
              <span className="font-heading italic text-lg text-footer-text/90">The Motivation Biohackers</span>
            </div>
            <div className="h-px bg-footer-text/20 mb-6 max-w-xs" />
            <p className="text-footer-text/70 text-sm font-body mb-1">JB</p>
            <p className="text-footer-text/70 text-sm font-body mb-1">The Motivation Biohackers Hub</p>
            <a href="tel:+601121172728" className="text-footer-text/70 text-sm font-body hover:text-primary transition-colors block mb-1">
              +60 11-2117 2728
            </a>
            <a href="mailto:themotivation0207@gmail.com" className="text-footer-text/70 text-sm font-body hover:text-primary transition-colors block">
              themotivation0207@gmail.com
            </a>
          </div>

          <div>
            <p className="text-footer-text/90 font-body text-base mb-4">Our Menu</p>
            <div className="h-px bg-footer-text/20 mb-4 max-w-[200px]" />
            <div className="flex flex-col gap-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "#services" },
                { label: "Events", href: "#events" },
                { label: "Testimonials", href: "#testimonials" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-footer-text/70 text-sm font-body hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-footer-text/15 mb-6" />
        <p className="text-footer-text/50 text-xs font-body text-center">
          © 2026 The Motivation Biohackers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import tmLogo from "@/assets/tm-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <img src={tmLogo} alt="The Motivation Biohackers" className="h-8 w-auto mb-4 opacity-70" />
            <p className="text-muted-foreground text-xs leading-relaxed font-body">
              Elevating well-being through science
              <br />& holistic care. Malaysia.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-foreground/60 mb-4 font-body">CONTACT</p>
            <a href="mailto:themotivation0207@gmail.com" className="text-muted-foreground text-sm font-body hover:text-primary transition-colors block">themotivation0207@gmail.com</a>
            <a href="tel:+601121172728" className="text-muted-foreground text-sm font-body mt-1 hover:text-primary transition-colors block">011-2117 2728</a>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-foreground/60 mb-4 font-body">FOLLOW</p>
            <div className="flex gap-6">
              {["Instagram", "LinkedIn", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors font-body"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-border mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-body">
            © 2026 The Motivation Biohackers. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors font-body">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors font-body">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-heading italic text-lg text-ivory mb-4">
              The Motivation Biohackers
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed font-body">
              Elevating well-being through science
              <br />& holistic care. Malaysia.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.2em] text-foreground/60 mb-4 font-body">CONTACT</p>
            <p className="text-muted-foreground text-sm font-body">info@motivationbiohackers.com</p>
            <p className="text-muted-foreground text-sm font-body mt-1">+60 12-345 6789</p>
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
          <a href="#" className="text-muted-foreground text-xs hover:text-foreground transition-colors font-body">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

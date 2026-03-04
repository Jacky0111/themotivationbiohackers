import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay bg-background">
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] text-ivory mb-8"
        >
          Elevate Your Well-Being
          <br />
          Through Science & Holistic Care
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base md:text-lg tracking-[0.3em] text-foreground/70 mb-12 font-body"
        >
          Functional · Regenerative · Longevity
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-[0.15em] hover:bg-bronze-light transition-colors duration-300"
          >
            BOOK CONSULTATION
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 border border-foreground/25 text-foreground text-sm tracking-[0.15em] hover:border-primary hover:text-primary transition-colors duration-300"
          >
            EXPLORE SERVICES
          </a>
        </motion.div>

        {/* Vertical line accent */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="w-px h-16 bg-foreground/20 mx-auto mt-16 origin-top"
        />
      </div>
    </section>
  );
};

export default HeroSection;

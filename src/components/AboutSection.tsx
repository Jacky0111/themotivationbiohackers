import { motion } from "framer-motion";
import silkTexture from "@/assets/silk-texture.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${silkTexture})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto py-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="font-heading text-5xl md:text-7xl text-foreground mb-6"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl font-body font-medium text-foreground mb-6"
        >
          Welcome to{" "}
          <span className="font-heading italic">The Motivation Biohackers</span>{" "}
          Community
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-foreground/80 leading-relaxed font-body text-sm md:text-base"
        >
          At TM, we believe true wellness is achieved when mind and body function
          in harmony. By combining functional medicine, regenerative therapies and
          longevity science approach, we help you build sustainable health with
          non-invasive and holistic solutions.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;

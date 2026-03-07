import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import silkTexture from "@/assets/silk-texture.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 md:py-[80px] overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${silkTexture})` }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-6 max-w-site mx-auto py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-heading text-4xl md:text-[48px] text-white mb-8"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl font-body font-medium text-white mb-6"
        >
          Welcome to{" "}
          <span className="font-heading italic">The Motivation Biohackers</span>{" "}
          Community
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-white/80 leading-relaxed font-body text-base md:text-lg max-w-3xl mx-auto mb-10"
        >
          At TM, we believe true wellness is achieved when mind and body function
          in harmony. By combining functional medicine, regenerative therapies and
          longevity science approach, we help you build sustainable health with
          non-invasive and holistic solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link
            to="/about"
            className="inline-block px-7 py-3 border border-white/40 text-white rounded-full text-sm font-body hover:bg-white/10 transition-colors duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

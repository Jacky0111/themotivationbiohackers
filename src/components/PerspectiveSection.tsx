import { motion } from "framer-motion";
import perspectiveMeditation from "@/assets/perspective-meditation.jpg";
import perspectiveEducation from "@/assets/perspective-education.jpg";
import perspectiveWellness from "@/assets/perspective-wellness.jpg";

const images = [
  { src: perspectiveEducation, alt: "Wellness education and learning" },
  { src: perspectiveMeditation, alt: "Mindfulness and meditation space" },
  { src: perspectiveWellness, alt: "Holistic wellness sanctuary" },
];

const PerspectiveSection = () => {
  return (
    <section className="py-20 md:py-[80px] px-6 bg-secondary">
      <div className="max-w-site mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-[48px] text-center text-foreground mb-4"
        >
          Expand Your Perspective
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-heading italic text-lg md:text-xl text-center text-foreground/80 mb-8"
        >
          Lifelong Learning Begins with Longing to Learn
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-muted-foreground font-body text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-14"
        >
          Breakthrough innovation. Groundbreaking insights. Cutting-edge science.
          All built on a foundation of continuous education and mindful awareness.
          Through our curated wellness programmes and guided meditation sessions,
          we empower you to understand your body at the deepest level — merging
          the wisdom of meditative practice with the precision of modern biohacking
          to unlock your fullest biological potential.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="overflow-hidden rounded-2xl aspect-[3/4]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerspectiveSection;

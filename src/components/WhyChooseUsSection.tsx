import { motion } from "framer-motion";

const advantages = [
  "Data-driven diagnostics",
  "Personalised treatment plans",
  "Non-invasive technologies",
  "Medical-grade supplementation",
  "Continuous monitoring & optimisation",
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-5xl text-center text-ivory mb-20"
        >
          Why Choose Us
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-3 px-6 py-4 border border-border bg-card hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
              <span className="text-foreground/80 text-sm font-body tracking-wide">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

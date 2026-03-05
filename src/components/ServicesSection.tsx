import { motion } from "framer-motion";
import servicePemf from "@/assets/service-pemf.jpg";
import serviceBioaura from "@/assets/service-bioaura.jpg";
import serviceEpigenetic from "@/assets/service-epigenetic.jpg";
import serviceAdvanced from "@/assets/service-advanced.jpg";

const services = [
  {
    title: "PEMF Therapy",
    desc: "Your body deserves healing energy",
    image: servicePemf,
  },
  {
    title: "BioAura AI",
    desc: "Your voice reveals your mental health",
    image: serviceBioaura,
  },
  {
    title: "Epigenetic Screening",
    desc: "Your genes reveal your TRUE health",
    image: serviceEpigenetic,
  },
  {
    title: "Advanced Treatment",
    desc: "Biohacking experience",
    image: serviceAdvanced,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-[80px] px-6 bg-background">
      <div className="max-w-site mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-[48px] text-center text-foreground mb-4"
        >
          Innovative Solutions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-muted-foreground font-body text-base md:text-lg max-w-2xl mx-auto mb-16"
        >
          Experience the perfect blend of science and biohacking technology, designed to provide personalized care and optimal wellness results.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-heading text-xl md:text-2xl mb-1 group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-white/70 text-sm font-body">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

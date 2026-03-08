import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import { services } from "@/data/services";

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {s.locked ? (
                <div className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-default block">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <Lock className="w-8 h-8 mb-3 opacity-70" />
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/80 animate-pulse" />
                      <span className="font-body text-xs text-white/80">Coming Soon</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-heading text-xl md:text-2xl mb-1">{s.title}</h3>
                    <p className="text-white/50 text-sm font-body">{s.desc}</p>
                  </div>
                </div>
              ) : (
                <Link
                  to={`/services/${s.slug}`}
                  className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer block"
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
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

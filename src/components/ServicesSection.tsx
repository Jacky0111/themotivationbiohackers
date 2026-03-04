import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const services = [
  {
    title: "Advanced Health Screening",
    summary: "Comprehensive biomarker analysis and full-body diagnostics.",
    detail: "Our advanced screening protocols use cutting-edge technology to map your complete biological landscape—from cellular health markers to metabolic efficiency—providing the foundation for your personalised longevity plan.",
  },
  {
    title: "PEMF Therapy",
    summary: "Pulsed electromagnetic field therapy for cellular regeneration.",
    detail: "PEMF therapy enhances cellular repair, reduces inflammation, and accelerates recovery by delivering targeted electromagnetic pulses that stimulate your body's natural healing processes at the cellular level.",
  },
  {
    title: "Cellular Detox Programs",
    summary: "Systematic detoxification at the cellular level.",
    detail: "Our evidence-based detox protocols target accumulated toxins at the cellular level, supporting mitochondrial function and restoring your body's natural detoxification pathways for sustained vitality.",
  },
  {
    title: "Epigenetic Screening",
    summary: "Unlock insights from your gene expression patterns.",
    detail: "Epigenetic screening analyses how lifestyle, environment, and nutrition influence your gene expression—enabling us to design precision interventions that optimise cellular function and slow biological aging.",
  },
  {
    title: "DNA Screening",
    summary: "Comprehensive genetic profiling for personalised health.",
    detail: "Our advanced DNA screening maps your genetic blueprint to identify predispositions, nutrient needs, and metabolic pathways—forming the foundation of a truly personalised longevity strategy.",
  },
  {
    title: "Preventive Longevity Programs",
    summary: "Proactive strategies for extending healthspan.",
    detail: "Our longevity programs combine epigenetic testing, nutrigenomics, and lifestyle medicine to create a comprehensive prevention strategy designed to add quality years to your life.",
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-5xl text-center text-foreground mb-20"
        >
          Signature Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActiveService(i)}
              className="group cursor-pointer p-8 border border-border bg-card hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(var(--bronze)/0.2)] transition-all duration-500"
            >
              <h3 className="font-heading text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">
                {s.summary}
              </p>
              <span className="text-xs tracking-[0.15em] text-primary/70 group-hover:text-primary transition-colors">
                LEARN MORE →
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-6"
            onClick={() => setActiveService(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border max-w-lg w-full p-10 relative"
            >
              <button
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
              <h3 className="font-heading text-2xl text-foreground mb-4">
                {services[activeService].title}
              </h3>
              <p className="text-foreground/70 font-body text-sm leading-relaxed">
                {services[activeService].detail}
              </p>
              <a
                href="#booking"
                onClick={() => setActiveService(null)}
                className="inline-block mt-8 px-6 py-3 bg-primary text-primary-foreground text-xs tracking-[0.15em] hover:bg-bronze-light transition-colors"
              >
                BOOK CONSULTATION
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;

import { motion } from "framer-motion";
import { Activity, RefreshCw, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Activity,
    title: "Functional Medicine",
    desc: "Root-cause diagnostics and data-driven protocols for optimal system performance.",
  },
  {
    icon: RefreshCw,
    title: "Regenerative Therapies",
    desc: "Cellular repair and rejuvenation through advanced, non-invasive treatments.",
  },
  {
    icon: TrendingUp,
    title: "Longevity Optimisation",
    desc: "Science-backed strategies to extend healthspan and sustain peak vitality.",
  },
];

const PillarsSection = () => {
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
          Our Core Pillars
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group text-center p-10 border border-border hover:border-primary/40 transition-all duration-500 bg-card"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-6 border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-ivory mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;

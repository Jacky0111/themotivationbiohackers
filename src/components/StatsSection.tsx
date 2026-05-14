import { motion } from "framer-motion";
import { Users, Clock, Sparkles, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Sparkles, value: "6", label: "Innovative Services" },
  { icon: ShieldCheck, value: "100%", label: "Non-Invasive" },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-20 px-6 bg-background border-y border-border">
      <div className="max-w-site mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="font-heading text-3xl md:text-4xl text-foreground mb-1">
                {s.value}
              </div>
              <div className="text-xs md:text-sm font-body uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;

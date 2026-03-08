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
    <section className="py-16 md:py-20 px-6 bg-secondary">
      <div className="max-w-site mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-7 h-7 text-primary mx-auto mb-3" strokeWidth={1.5} />
              <p className="font-heading text-3xl md:text-4xl text-foreground mb-1">{stat.value}</p>
              <p className="text-muted-foreground font-body text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "This program completely transformed my energy levels and overall health. I feel ten years younger.",
    name: "Dato' Ahmad R.",
    role: "CEO, Kuala Lumpur",
  },
  {
    quote: "A truly premium experience. The personalised longevity plan gave me clarity and energy I haven't felt in decades.",
    name: "Sarah L.",
    role: "Entrepreneur, Penang",
  },
  {
    quote: "Evidence-based, non-invasive, and deeply professional. The team operates at a level of excellence that inspires absolute trust.",
    name: "Dr. James T.",
    role: "Surgeon, Singapore",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-[80px] px-6 bg-background">
      <div className="max-w-site mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-[48px] text-center text-foreground mb-16"
        >
          Client Success Stories
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-250"
            >
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <p className="font-heading italic text-lg text-foreground/90 leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div>
                <p className="font-body font-semibold text-sm text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

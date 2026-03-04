import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "The Motivation Biohackers transformed my approach to health. Their data-driven diagnostics uncovered issues no one else found. I feel ten years younger.",
    name: "Dato' Ahmad R.",
    role: "CEO, KL",
  },
  {
    quote: "A truly premium experience. The personalised longevity plan gave me clarity and energy I haven't felt in decades. This is not your ordinary clinic.",
    name: "Sarah L.",
    role: "Entrepreneur, Penang",
  },
  {
    quote: "Evidence-based, non-invasive, and deeply professional. The team at TM operates at a level of excellence that inspires absolute trust.",
    name: "Dr. James T.",
    role: "Surgeon, Singapore",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-32 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-5xl text-foreground mb-20"
        >
          Testimonials
        </motion.h2>

        <div className="relative min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <p className="font-heading italic text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </p>
              <p className="text-primary text-sm tracking-[0.15em] font-body">
                {testimonials[current].name}
              </p>
              <p className="text-muted-foreground text-xs mt-1 font-body">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary transition-colors"
          >
            <ChevronLeft size={16} className="text-foreground/60" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  i === current ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary transition-colors"
          >
            <ChevronRight size={16} className="text-foreground/60" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

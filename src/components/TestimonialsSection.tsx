import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "This program completely transformed my energy levels and overall health. I feel ten years younger.",
    name: "Dato' Ahmad R.",
    role: "CEO, Kuala Lumpur",
  },
  {
    quote: "A truly premium experience. The personalised longevity plan gave me clarity and energy I haven't felt in decades.",
    name: "Sarah L.",
    role: "Entrepreneur, Johor Bahru",
  },
  {
    quote: "Evidence-based, non-invasive, and deeply professional. The team operates at a level of excellence that inspires absolute trust.",
    name: "Dr. James T.",
    role: "Surgeon, Kuala Lumpur",
  },
  {
    quote: "The PEMF therapy sessions were a game-changer for my chronic fatigue. Highly recommended for anyone serious about their health.",
    name: "Tan M.Y.",
    role: "Business Owner, Johor Bahru",
  },
  {
    quote: "Finally, a science-backed approach to wellness that actually delivers results. My sleep quality improved dramatically.",
    name: "Lim W.K.",
    role: "Engineer, Petaling Jaya",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let speed = 0.5;

    const scroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += speed;
        // Reset to start when reaching halfway (duplicate set)
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const scrollBy = (direction: number) => {
    const container = scrollRef.current;
    if (!container) return;
    container.scrollBy({ left: direction * 340, behavior: "smooth" });
  };

  // Duplicate testimonials for seamless infinite scroll
  const items = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 md:py-[80px] px-6 bg-background overflow-hidden">
      <div className="max-w-site mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-[48px] text-foreground mb-6"
        >
          Testimonials
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-muted/60 backdrop-blur-sm rounded-full px-6 py-3 mb-4"
        >
          <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse" />
          <span className="font-body text-sm text-muted-foreground">
            Coming Soon
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-muted-foreground text-base max-w-xl mx-auto"
        >
          We're currently collecting testimonials from our valued clients. This section will be updated with real success stories soon.
        </motion.p>
      </div>
    </section>
  );
};

export default TestimonialsSection;

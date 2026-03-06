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

        <div className="relative">
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-hidden scroll-smooth"
          >
            {items.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="min-w-[300px] md:min-w-[360px] flex-shrink-0 bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-sm"
              >
                <Quote className="w-7 h-7 text-primary/40 mb-4" />
                <p className="font-heading italic text-base text-foreground/90 leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-body font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => scrollBy(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm shadow-md flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

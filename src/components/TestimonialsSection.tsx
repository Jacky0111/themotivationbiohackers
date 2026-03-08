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
    const speed = 0.5;

    const scroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += speed;
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

  const items = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-20 md:py-[80px] px-6 bg-background overflow-hidden">
      <div className="max-w-site mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-[48px] text-foreground mb-4 text-center"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground font-body text-base max-w-xl mx-auto text-center mb-12"
        >
          Real experiences from those who've transformed their health with us
        </motion.p>

        {/* Navigation arrows */}
        <div className="flex justify-end gap-2 mb-6 max-w-site mx-auto">
          <button
            onClick={() => scrollBy(-1)}
            className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="p-2 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Scrolling carousel */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-hidden cursor-grab"
        >
          {items.map((t, i) => (
            <div
              key={i}
              className="min-w-[300px] max-w-[340px] flex-shrink-0 bg-secondary rounded-2xl p-8 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                <p className="font-body text-foreground text-sm leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>
              <div>
                <p className="font-heading text-base text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

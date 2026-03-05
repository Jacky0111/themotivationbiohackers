import { motion } from "framer-motion";
import eventImg from "@/assets/event-longevity.jpg";

const events = [
  {
    title: "Biohacking Your Longevity",
    date: "June 12, 2026",
    location: "Kuala Lumpur",
    desc: "An exclusive evening exploring the latest in longevity science, regenerative therapies, and personalised health optimisation.",
    image: eventImg,
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-20 md:py-[80px] px-6 bg-secondary">
      <div className="max-w-site mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-[48px] text-center text-foreground mb-16"
        >
          Upcoming Events
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-250"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={e.image}
                  alt={e.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-body font-semibold px-3 py-1.5 rounded-full">
                  {e.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-foreground mb-1">{e.title}</h3>
                <p className="text-xs text-muted-foreground font-body mb-3">{e.location}</p>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">{e.desc}</p>
                <a
                  href="#booking"
                  className="inline-block px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-body font-medium hover:bg-accent transition-colors duration-300"
                >
                  Register
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

import { motion } from "framer-motion";
import eventImg from "@/assets/event-longevity.jpg";
import eventTbWebinar from "@/assets/event-tb-webinar.png";
import eventAwareness from "@/assets/event-awareness.jpg";

const events = [
  {
    title: "《咳嗽背后的真相》世界结核病日线上讲座",
    date: "March 11, 2026",
    location: "Zoom Online Webinar",
    desc: "Co-hosted with Asclepius Healthcare Clinic & KPJ Puteri Specialist Hospital. Featuring Dr See Y.Y. (Respiratory Specialist) and Pharmacist Loh Hao Bo on TB awareness, diagnosis and treatment.",
    image: eventTbWebinar,
    link: "https://forms.gle/EtkNHqKjoNb8H97G6",
  },
  {
    title: "觉知之旅 · A Dance of Awareness",
    date: "March 15, 2026",
    location: "9:00 AM – 1:00 PM",
    desc: "静心 · 觉知 · 升华 — 一次融合天地人与身心智慧的深度体验。包含茶点与饮品，以及 BioAura AI 能量检测（价值 RM169）。课程费用：RM369 / 人。",
    image: eventAwareness,
    link: "https://wa.me/601121172728?text=Hi%2C%20I%20would%20like%20to%20register%20for%20%E8%A7%89%E7%9F%A5%E4%B9%8B%E6%97%85%20A%20Dance%20of%20Awareness%20on%20March%2015",
  },
  {
    title: "Biohacking Your Longevity",
    date: "June 12, 2026",
    location: "Kuala Lumpur",
    desc: "An exclusive evening exploring the latest in longevity science, regenerative therapies, and personalised health optimisation.",
    image: eventImg,
  },
  {
    title: "Health & Wellness Expo 2026",
    date: "TBC",
    location: "Johor Bahru (Venue TBC)",
    desc: "Experience cutting-edge biohacking technology, free health screenings, epigenetic testing demos, and live wellness consultations at our upcoming health expo.",
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
                  href={e.link || "#booking"}
                  target={e.link ? "_blank" : undefined}
                  rel={e.link ? "noopener noreferrer" : undefined}
                  className="inline-block px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-body font-medium hover:bg-accent transition-colors duration-300"
                >
                  {e.link ? "Register Now" : "Register"}
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

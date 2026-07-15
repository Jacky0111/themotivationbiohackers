import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Expand } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { getUpcomingEvents } from "@/data/events";
import { trackRegisterClick } from "@/lib/analytics";
import EventCountdown from "./EventCountdown";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const EventsSection = () => {
  const events = getUpcomingEvents();
  const [posterEvent, setPosterEvent] = useState<typeof events[number] | null>(null);

  return (
    <section id="events" className="py-20 md:py-[80px] px-6 bg-secondary">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(
          events.map((e) => {
            const isOnline = e.location.toLowerCase().includes("zoom") || e.location.toLowerCase().includes("online");
            const absImage = e.image?.startsWith("http")
              ? e.image
              : `https://themotivationbiohackers.lovable.app${e.image}`;
            return {
              "@context": "https://schema.org",
              "@type": "Event",
              name: e.title,
              startDate: e.dateISO,
              endDate: e.dateISO,
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode: isOnline
                ? "https://schema.org/OnlineEventAttendanceMode"
                : "https://schema.org/OfflineEventAttendanceMode",
              location: isOnline
                ? { "@type": "VirtualLocation", url: e.link || "https://themotivationbiohackers.lovable.app/" }
                : { "@type": "Place", name: e.location, address: { "@type": "PostalAddress", addressCountry: "MY" } },
              image: [absImage],
              description: e.desc,
              organizer: { "@type": "Organization", name: "The Motivation Biohackers", url: "https://themotivationbiohackers.lovable.app" },
              performer: { "@type": "Organization", name: "The Motivation Biohackers" },
              offers: {
                "@type": "Offer",
                url: e.link || "https://themotivationbiohackers.lovable.app/#events",
                price: "0",
                priceCurrency: "MYR",
                availability: "https://schema.org/InStock",
                validFrom: e.dateISO,
              },
            };
          })
        )}</script>
      </Helmet>
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
              <button
                type="button"
                onClick={() => setPosterEvent(e)}
                className="relative overflow-hidden aspect-[16/10] block w-full text-left group/poster"
                aria-label={`View full poster for ${e.title}`}
              >
                <img
                  src={e.image}
                  alt={e.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-body font-semibold px-3 py-1.5 rounded-full">
                  {e.date}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover/poster:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover/poster:opacity-100">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 text-foreground text-xs font-body font-medium">
                    <Expand className="w-3.5 h-3.5" /> View Poster
                  </span>
                </div>
              </button>
              <div className="p-6">
                <h3 className="font-heading text-xl text-foreground mb-1">{e.title}</h3>
                <p className="text-xs text-muted-foreground font-body mb-3">{e.location}</p>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">{e.desc}</p>
                <EventCountdown dateISO={e.dateISO} timeHint={e.location} />
                <a
                  href={e.link || "#booking"}
                  target={e.link ? "_blank" : undefined}
                  rel={e.link ? "noopener noreferrer" : undefined}
                  onClick={(e2) => {
                    if (!e.link) return;
                    // Safari blocks target=_blank navigation to wa.me/api.whatsapp.com
                    // due to Cross-Origin-Opener-Policy on the preview host. Fall back
                    // to a top-level navigation which always works.
                    e2.preventDefault();
                    window.location.href = e.link;
                  }}
                  className="inline-block px-5 py-2 bg-primary text-primary-foreground rounded-full text-sm font-body font-medium hover:bg-accent transition-colors duration-300"
                >
                  {e.link ? "Register Now" : "Register"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/past-events"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-full text-sm font-body hover:bg-muted transition-colors duration-300"
          >
            See Our Past Events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      <Dialog open={!!posterEvent} onOpenChange={(o) => !o && setPosterEvent(null)}>
        <DialogContent className="max-w-4xl p-2 sm:p-4 bg-background">
          <VisuallyHidden>
            <DialogTitle>{posterEvent?.title ?? "Event poster"}</DialogTitle>
            <DialogDescription>{posterEvent?.desc ?? ""}</DialogDescription>
          </VisuallyHidden>
          {posterEvent && (
            <img
              src={posterEvent.image}
              alt={posterEvent.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-md"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EventsSection;

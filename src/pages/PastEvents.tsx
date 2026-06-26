import { motion } from "framer-motion";
import { ArrowLeft, Expand } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import { getPastEvents } from "@/data/events";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import silkTexture from "@/assets/silk-texture.jpg";

const PastEvents = () => {
  const pastEvents = getPastEvents();
  const [posterEvent, setPosterEvent] = useState<typeof pastEvents[number] | null>(null);

  return (
    <PageTransition>
    <div className="bg-background min-h-screen">
      <SEOHead title="Past Events" description="A look back at our community events and health initiatives." path="/past-events" />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(
          pastEvents.map((e) => ({
            "@context": "https://schema.org",
            "@type": "Event",
            name: e.title,
            startDate: e.dateISO,
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            location: { "@type": "Place", name: e.location, address: { "@type": "PostalAddress", addressCountry: "MY" } },
            description: e.desc,
            organizer: { "@type": "Organization", name: "The Motivation Biohackers" },
          }))
        )}</script>
      </Helmet>
      <Navbar />

      {/* Hero banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${silkTexture})` }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6 max-w-site mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-heading text-5xl md:text-[64px] text-white mb-4"
          >
            Past Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg font-body text-white/90"
          >
            A look back at our community events and health initiatives
          </motion.p>
        </div>
      </section>

      {/* Past events grid */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-site mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-secondary rounded-xl overflow-hidden shadow-sm"
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
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-muted text-muted-foreground text-xs font-body font-semibold px-3 py-1.5 rounded-full">
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
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-full text-sm font-body hover:bg-muted transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>

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

      <Footer />
      <WhatsAppButton />
    </div>
    </PageTransition>
  );
};

export default PastEvents;

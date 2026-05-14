import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import { getPastEvents } from "@/data/events";
import silkTexture from "@/assets/silk-texture.jpg";

const PastEvents = () => {
  const pastEvents = getPastEvents();

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
            className="text-lg font-body text-white/70"
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
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-muted text-muted-foreground text-xs font-body font-semibold px-3 py-1.5 rounded-full">
                    {e.date}
                  </div>
                </div>
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

      <Footer />
      <WhatsAppButton />
    </div>
    </PageTransition>
  );
};

export default PastEvents;

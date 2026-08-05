import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CalendarDays, MapPin, Users, ListChecks } from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEOHead from "@/components/SEOHead";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import EventCountdown from "@/components/EventCountdown";
import { getEventBySlug, isUpcoming } from "@/data/events";
import { trackRegisterClick } from "@/lib/analytics";

const BASE_URL = "https://themotivationbiohackers.lovable.app";

const EventDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = getEventBySlug(slug || "");

  if (!event) {
    return (
      <div className="bg-background min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 text-center px-6">
          <h1 className="font-heading text-4xl text-foreground mb-4">Event Not Found</h1>
          <Link to="/#events" className="text-primary font-body hover:underline">
            Back to Events
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const upcoming = isUpcoming(event);
  const isOnline =
    event.location.toLowerCase().includes("zoom") ||
    event.location.toLowerCase().includes("online") ||
    event.location.includes("线上");
  const absImage = event.image?.startsWith("http") ? event.image : `${BASE_URL}${event.image}`;

  return (
    <PageTransition>
      <div className="bg-background min-h-screen">
        <SEOHead
          title={event.title}
          description={event.desc.slice(0, 155)}
          path={`/events/${event.slug}`}
        />
        <BreadcrumbJsonLd
          items={[
            { name: "Home", path: "/" },
            { name: "Events", path: "/#events" },
            { name: event.title, path: `/events/${event.slug}` },
          ]}
        />
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: event.title,
              startDate: event.dateISO,
              endDate: event.dateISO,
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode: isOnline
                ? "https://schema.org/OnlineEventAttendanceMode"
                : "https://schema.org/OfflineEventAttendanceMode",
              location: isOnline
                ? { "@type": "VirtualLocation", url: event.link || `${BASE_URL}/events/${event.slug}` }
                : {
                    "@type": "Place",
                    name: event.location,
                    address: { "@type": "PostalAddress", addressCountry: "MY" },
                  },
              image: [absImage],
              description: event.desc,
              organizer: { "@type": "Organization", name: "The Motivation Biohackers", url: BASE_URL },
              performer: event.speakers?.length
                ? event.speakers.map((s) => ({ "@type": "Person", name: s.name }))
                : { "@type": "Organization", name: "The Motivation Biohackers" },
              offers: {
                "@type": "Offer",
                url: event.link || `${BASE_URL}/events/${event.slug}`,
                price: "0",
                priceCurrency: "MYR",
                availability: upcoming ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
                validFrom: event.dateISO,
              },
            })}
          </script>
        </Helmet>

        <Navbar />

        {/* Hero */}
        <section className="relative pt-24">
          <div className="relative w-full aspect-[21/9] max-h-[440px] overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
              <div className="max-w-site mx-auto">
                <span className="inline-block mb-3 px-3 py-1 rounded-full bg-white/90 text-foreground text-xs font-body font-medium">
                  {upcoming ? "Upcoming Event" : "Past Event"}
                </span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="font-heading text-3xl md:text-[52px] leading-tight text-white max-w-3xl"
                >
                  {event.title}
                </motion.h1>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-14 md:py-20 px-6">
          <div className="max-w-site mx-auto grid lg:grid-cols-[1fr_360px] gap-10">
            <div>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                  <CalendarDays className="w-4 h-4 text-primary" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  {event.location}
                </div>
              </div>

              <h2 className="font-heading text-2xl text-foreground mb-3">About This Event</h2>
              <p className="text-muted-foreground font-body leading-relaxed whitespace-pre-line">
                {event.desc}
              </p>

              {event.agenda?.length ? (
                <div className="mt-12">
                  <h2 className="font-heading text-2xl text-foreground mb-4 flex items-center gap-2">
                    <ListChecks className="w-5 h-5 text-primary" />
                    Agenda
                  </h2>
                  <ol className="space-y-3">
                    {event.agenda.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 bg-secondary rounded-lg p-4 border-l-4 border-primary text-sm font-body text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}

              {event.speakers?.length ? (
                <div className="mt-12">
                  <h2 className="font-heading text-2xl text-foreground mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Speakers
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {event.speakers.map((s) => (
                      <div key={s.name + (s.role ?? "")} className="bg-secondary rounded-xl p-5">
                        <p className="font-heading text-lg text-foreground">{s.name}</p>
                        {s.role && (
                          <p className="text-sm font-body text-muted-foreground mt-1">{s.role}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-12">
                <Link
                  to="/#events"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-full text-sm font-body hover:bg-muted transition-colors duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  All Events
                </Link>
              </div>
            </div>

            {/* Sticky registration CTA */}
            <aside className="lg:sticky lg:top-28 h-fit">
              <div className="bg-white/70 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-sm">
                <p className="font-heading text-xl text-foreground mb-1">
                  {upcoming ? "Reserve Your Seat" : "This Event Has Ended"}
                </p>
                <p className="text-sm font-body text-muted-foreground mb-5">
                  {upcoming
                    ? "Free to attend · limited places available."
                    : "Explore our upcoming events and past highlights."}
                </p>

                {upcoming && <EventCountdown dateISO={event.dateISO} timeHint={event.location} />}

                {upcoming && event.link ? (
                  <a
                    href={event.link}
                    onClick={(e) => {
                      trackRegisterClick({
                        eventTitle: event.title,
                        eventDate: event.date,
                        destination: event.link!,
                      });
                      e.preventDefault();
                      window.location.href = event.link!;
                    }}
                    className="block w-full text-center px-6 py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-body font-semibold hover:bg-accent transition-colors duration-300"
                  >
                    Register Now
                  </a>
                ) : (
                  <Link
                    to={upcoming ? "/#booking" : "/past-events"}
                    className="block w-full text-center px-6 py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-body font-semibold hover:bg-accent transition-colors duration-300"
                  >
                    {upcoming ? "Contact Us to Register" : "See Past Events"}
                  </Link>
                )}
              </div>
            </aside>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default EventDetail;

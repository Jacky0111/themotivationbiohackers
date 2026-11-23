import type { EventItem } from "@/data/events";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/** True when the event is held online (Zoom webinars etc.). */
export const isOnlineEvent = (e: Pick<EventItem, "location">): boolean =>
  /zoom|online|线上/i.test(e.location);

/**
 * Build schema.org `Event` structured data for search engines.
 * @param pageUrl Page the data is published on; used when the event has no registration link.
 */
export const buildEventJsonLd = (e: EventItem, pageUrl: string, upcoming: boolean) => {
  const online = isOnlineEvent(e);
  const image = e.image.startsWith("http") ? e.image : `${SITE_URL}${e.image}`;
  const url = upcoming && e.link ? e.link : pageUrl;
  const organizer = { "@type": "Organization", name: SITE_NAME, url: SITE_URL };

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.title,
    startDate: e.dateISO,
    endDate: e.dateISO,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: online
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    location: online
      ? { "@type": "VirtualLocation", url }
      : {
          "@type": "Place",
          name: e.location,
          address: { "@type": "PostalAddress", addressCountry: "MY" },
        },
    image: [image],
    description: e.desc,
    organizer,
    performer: e.speakers?.length
      ? e.speakers.map((s) => ({ "@type": "Person", name: s.name }))
      : { "@type": "Organization", name: SITE_NAME },
    offers: {
      "@type": "Offer",
      url,
      price: String(e.price ?? 0),
      priceCurrency: "MYR",
      availability: upcoming ? "https://schema.org/InStock" : "https://schema.org/SoldOut",
      validFrom: e.dateISO,
    },
  };
};

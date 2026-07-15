/**
 * Lightweight, provider-agnostic analytics helper.
 *
 * Fires an event to whichever analytics library is present on `window`:
 * Google Analytics (gtag), GTM (dataLayer), Plausible, PostHog, or Umami.
 * Safe no-op when none are installed — so we can wire tracking now and
 * plug in a provider later without touching call sites.
 */
type EventProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
    plausible?: (name: string, options?: { props?: EventProps }) => void;
    posthog?: { capture: (name: string, props?: EventProps) => void };
    umami?: { track: (name: string, props?: EventProps) => void };
  }
}

export function trackEvent(name: string, props: EventProps = {}) {
  if (typeof window === "undefined") return;

  try {
    window.gtag?.("event", name, props);
    window.dataLayer?.push({ event: name, ...props });
    window.plausible?.(name, { props });
    window.posthog?.capture(name, props);
    window.umami?.track(name, props);

    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.debug("[analytics]", name, props);
    }
  } catch {
    // Never let analytics break the UI.
  }
}

export function trackRegisterClick(params: {
  eventTitle: string;
  eventDate: string;
  destination: string;
}) {
  const isWhatsApp = /wa\.me|whatsapp\.com/i.test(params.destination);
  trackEvent("register_click", {
    event_title: params.eventTitle,
    event_date: params.eventDate,
    destination: params.destination,
    channel: isWhatsApp ? "whatsapp" : "form",
  });
}

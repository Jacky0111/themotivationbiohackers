import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import EventDetail from "@/pages/EventDetail";
import { allEvents, getUpcomingEvents, getPastEvents, isUpcoming } from "@/data/events";

/**
 * Lightweight end-to-end style tests for /events/:slug.
 * They exercise real routing (react-router) + the registration CTA flow,
 * so a breaking dependency upgrade surfaces here.
 */

const renderRoute = (path: string) =>
  render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/events/:slug" element={<EventDetail />} />
          <Route path="*" element={<div>home</div>} />
        </Routes>
      </MemoryRouter>
    </HelmetProvider>,
  );

describe("event detail routing", () => {
  it("every event has a unique, url-safe slug", () => {
    const slugs = allEvents.map((e) => e.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it("renders an upcoming event page with registration CTA", () => {
    const event = getUpcomingEvents()[0];
    expect(event).toBeTruthy();

    renderRoute(`/events/${event.slug}`);

    expect(screen.getByRole("heading", { level: 1, name: event.title })).toBeInTheDocument();
    expect(screen.getByText("Upcoming Event")).toBeInTheDocument();
    expect(screen.getByText("About This Event")).toBeInTheDocument();

    const cta = event.link
      ? screen.getByRole("link", { name: /register now/i })
      : screen.getByRole("link", { name: /contact us to register/i });
    expect(cta).toBeInTheDocument();
  });

  it("renders a past event page without a live registration CTA", () => {
    const event = getPastEvents()[0];
    expect(event).toBeTruthy();

    renderRoute(`/events/${event.slug}`);

    expect(screen.getByText("Past Event")).toBeInTheDocument();
    expect(screen.getByText("This Event Has Ended")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /register now/i })).toBeNull();
  });

  it("shows a not-found state for an unknown slug", () => {
    renderRoute("/events/does-not-exist");
    expect(screen.getByRole("heading", { name: /event not found/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /back to events/i })).toBeInTheDocument();
  });

  it("every upcoming event with a link points at WhatsApp or a registration form", () => {
    for (const event of allEvents.filter(isUpcoming)) {
      if (!event.link) continue;
      expect(event.link).toMatch(/^https:\/\/(wa\.me|forms\.gle|docs\.google\.com)/);
    }
  });
});

describe("registration flow", () => {
  const originalLocation = window.location;

  beforeEach(() => {
    Object.defineProperty(window, "location", {
      configurable: true,
      writable: true,
      value: { ...originalLocation, href: originalLocation.href },
    });
  });

  afterEach(() => {
    Object.defineProperty(window, "location", {
      configurable: true,
      writable: true,
      value: originalLocation,
    });
    vi.unstubAllGlobals();
  });

  it("tracks the click and navigates to the registration destination", () => {
    const event = getUpcomingEvents().find((e) => !!e.link);
    if (!event) return;

    const gtag = vi.fn();
    (window as unknown as { gtag: typeof gtag }).gtag = gtag;

    renderRoute(`/events/${event.slug}`);
    fireEvent.click(screen.getByRole("link", { name: /register now/i }));

    expect(window.location.href).toBe(event.link);
    expect(gtag).toHaveBeenCalledWith(
      "event",
      "register_click",
      expect.objectContaining({ event_title: event.title, destination: event.link }),
    );
  });

  it("prefills the WhatsApp message with the event name for wa.me links", () => {
    const event = allEvents.find((e) => e.link?.startsWith("https://wa.me/"));
    if (!event?.link) return;

    const decoded = decodeURIComponent(new URL(event.link).searchParams.get("text") || "");
    expect(decoded).toContain(event.title.split("·")[0].trim().slice(0, 12));
    expect(decoded).toContain("register");
  });
});

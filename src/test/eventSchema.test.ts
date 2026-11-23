import { describe, it, expect } from "vitest";
import { allEvents, todayISO } from "@/data/events";
import { buildEventJsonLd, isOnlineEvent } from "@/lib/eventSchema";

describe("todayISO", () => {
  it("uses Malaysian time (UTC+8), not UTC", () => {
    // 17:00 UTC on 1 Dec is already 1:00 AM on 2 Dec in Malaysia.
    expect(todayISO(Date.parse("2026-12-01T17:00:00Z"))).toBe("2026-12-02");
    expect(todayISO(Date.parse("2026-12-01T15:59:00Z"))).toBe("2026-12-01");
  });
});

describe("buildEventJsonLd", () => {
  const online = allEvents.find((e) => isOnlineEvent(e))!;
  const paid = allEvents.find((e) => e.price)!;

  it("marks Zoom events as online and others as offline", () => {
    expect(isOnlineEvent({ location: "Zoom Online Webinar · 8:00 PM" })).toBe(true);
    expect(isOnlineEvent({ location: "R&F Mall, 新山" })).toBe(false);
  });

  it("makes image URLs absolute", () => {
    const [image] = buildEventJsonLd(online, "https://example.com/p", true).image;
    expect(image).toMatch(/^https?:\/\//);
  });

  it("reports the real ticket price instead of assuming free", () => {
    expect(buildEventJsonLd(paid, "https://example.com/p", true).offers.price).toBe(String(paid.price));
    const free = allEvents.find((e) => !e.price)!;
    expect(buildEventJsonLd(free, "https://example.com/p", true).offers.price).toBe("0");
  });

  it("flags past events as no longer available", () => {
    expect(buildEventJsonLd(online, "https://example.com/p", false).offers.availability).toBe(
      "https://schema.org/SoldOut",
    );
  });
});

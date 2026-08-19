import { describe, it, expect } from "vitest";
import {
  buildRegisterMessage,
  buildWhatsAppRegisterLink,
  normalizePhone,
} from "@/lib/whatsapp";

describe("normalizePhone", () => {
  it("strips spaces, dashes and parentheses", () => {
    expect(normalizePhone("+60 11-2117 2728")).toBe("601121172728");
    expect(normalizePhone("(601) 121-172-728")).toBe("601121172728");
  });

  it("drops a leading 00 international prefix", () => {
    expect(normalizePhone("0060112117 2728")).toBe("60112117 2728".replace(/\s/g, ""));
  });

  it("throws on an empty phone", () => {
    expect(() => normalizePhone("   ")).toThrow(/required/i);
  });
});

describe("buildRegisterMessage", () => {
  it("includes event name and date on labelled lines", () => {
    const msg = buildRegisterMessage({
      eventName: "Kombucha Workshop · Brew By Root",
      eventDate: "2026-07-20, 2:00 PM – 5:00 PM",
    });
    expect(msg).toContain("• Event: Kombucha Workshop · Brew By Root");
    expect(msg).toContain("• Date & Time: 2026-07-20, 2:00 PM – 5:00 PM");
    expect(msg).toContain("Hello The Motivation Biohackers");
  });

  it("appends venue only when provided", () => {
    const withVenue = buildRegisterMessage({
      eventName: "A Dance of Awareness",
      eventDate: "2026-03-15",
      venue: "Studio JB",
    });
    expect(withVenue).toContain("• Venue: Studio JB");

    const withoutVenue = buildRegisterMessage({
      eventName: "A Dance of Awareness",
      eventDate: "2026-03-15",
    });
    expect(withoutVenue).not.toContain("Venue:");
  });

  it("preserves unicode event names (Chinese)", () => {
    const msg = buildRegisterMessage({
      eventName: "智慧营养，聪明大脑（中文）",
      eventDate: "2026-07-23 2:00 PM",
    });
    expect(msg).toContain("智慧营养，聪明大脑（中文）");
    expect(msg).toContain("2026-07-23 2:00 PM");
  });

  it("throws on missing required fields", () => {
    expect(() =>
      buildRegisterMessage({ eventName: "", eventDate: "today" }),
    ).toThrow(/eventName/);
    expect(() =>
      buildRegisterMessage({ eventName: "x", eventDate: "  " }),
    ).toThrow(/eventDate/);
  });
});

describe("buildWhatsAppRegisterLink", () => {
  const phone = "+60 11-2117 2728";

  it("targets the wa.me domain with the normalized phone", () => {
    const link = buildWhatsAppRegisterLink({
      phone,
      eventName: "Test",
      eventDate: "2026-01-01",
    });
    expect(link.startsWith("https://wa.me/601121172728?text=")).toBe(true);
  });

  it("URL-encodes the prefilled message so it round-trips", () => {
    const link = buildWhatsAppRegisterLink({
      phone,
      eventName: "Kombucha Workshop · Brew By Root",
      eventDate: "2026-07-20, 2:00 PM – 5:00 PM",
      venue: "HRDC Office @ Iskandar",
    });
    const url = new URL(link);
    const text = url.searchParams.get("text") ?? "";
    expect(text).toContain("Kombucha Workshop · Brew By Root");
    expect(text).toContain("2026-07-20, 2:00 PM – 5:00 PM");
    expect(text).toContain("HRDC Office @ Iskandar");
    // Raw URL must not contain unencoded spaces or newlines.
    expect(link).not.toMatch(/[ \n]/);
  });

  it("encodes unicode content safely", () => {
    const link = buildWhatsAppRegisterLink({
      phone,
      eventName: "打造阅读障碍友好家庭工作坊",
      eventDate: "2026-07-20 11:00 AM",
    });
    const text = new URL(link).searchParams.get("text") ?? "";
    expect(text).toContain("打造阅读障碍友好家庭工作坊");
  });
});

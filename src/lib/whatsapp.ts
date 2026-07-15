/**
 * Build a WhatsApp "click to chat" deep link with a prefilled message.
 *
 * Uses the wa.me short domain, which works across mobile (opens the app)
 * and desktop (opens WhatsApp Web / desktop app).
 * Docs: https://faq.whatsapp.com/5913398998672934
 */

export interface WhatsAppRegisterInput {
  /** Recipient phone in international format. Non-digits are stripped; must not start with 0 or +. */
  phone: string;
  /** Event display name, e.g. "Kombucha Workshop · Brew By Root". */
  eventName: string;
  /** Human-readable date/time, e.g. "20 July 2026, 2:00 PM – 5:00 PM". */
  eventDate: string;
  /** Optional venue, appended when provided. */
  venue?: string;
  /** Optional business name used in the greeting. */
  businessName?: string;
}

const DEFAULT_BUSINESS = "The Motivation Biohackers";

/** Normalize a phone number to WhatsApp's expected digits-only form. */
export function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D+/g, "");
  if (!digits) throw new Error("WhatsApp phone number is required");
  if (digits.startsWith("00")) return digits.slice(2);
  return digits;
}

/** Build the prefilled message body (unencoded). Exposed for testing. */
export function buildRegisterMessage(input: Omit<WhatsAppRegisterInput, "phone">): string {
  const { eventName, eventDate, venue, businessName = DEFAULT_BUSINESS } = input;
  if (!eventName.trim()) throw new Error("eventName is required");
  if (!eventDate.trim()) throw new Error("eventDate is required");

  const lines = [
    `Hello ${businessName} 👋`,
    "",
    "I would like to register for the following event:",
    "",
    `• Event: ${eventName}`,
    `• Date & Time: ${eventDate}`,
  ];
  if (venue && venue.trim()) lines.push(`• Venue: ${venue}`);
  lines.push(
    "",
    "Could you please confirm my seat and share the next steps (payment, confirmation, or any preparation needed)?",
    "",
    "Thank you!",
  );
  return lines.join("\n");
}

/** Build the final wa.me deep link. */
export function buildWhatsAppRegisterLink(input: WhatsAppRegisterInput): string {
  const phone = normalizePhone(input.phone);
  const text = buildRegisterMessage(input);
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

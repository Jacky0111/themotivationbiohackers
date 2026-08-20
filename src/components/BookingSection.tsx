import { motion } from "framer-motion";
import { useState } from "react";

const BookingSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hi, I'm ${formData.name}. I'd like to book a consultation.`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      formData.message.trim() ? `Message: ${formData.message.trim()}` : "",
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/601121172728?text=${text}`, "_blank");
  };

  return (
    <section id="booking" className="py-20 md:py-[80px] px-6 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-[48px] text-foreground mb-4"
        >
          Begin Your Longevity Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground font-body text-base mb-12"
        >
          Take the first step toward sustainable vitality.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-4 text-left"
        >
          {[
            { name: "name", label: "Name", type: "text" },
            { name: "email", label: "Email", type: "email" },
            { name: "phone", label: "Phone", type: "tel" },
          ].map((field) => (
            <div key={field.name}>
              <label
                htmlFor={`booking-${field.name}`}
                className="text-sm text-muted-foreground mb-1.5 block font-body"
              >
                {field.label}
              </label>
              <input
                id={`booking-${field.name}`}
                name={field.name}
                type={field.type}
                required
                value={formData[field.name as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          ))}
          <div>
            <label
              htmlFor="booking-message"
              className="text-sm text-muted-foreground mb-1.5 block font-body"
            >
              Message
            </label>
            <textarea
              id="booking-message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white border border-border rounded-lg px-4 py-3 text-foreground font-body text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-body font-medium hover:bg-accent transition-colors duration-300 mt-2"
          >
            Request Consultation
          </button>
        </motion.form>

        <div className="mt-6">
          <a
            href="https://wa.me/601121172728"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:text-accent transition-colors font-body"
          >
            Or WhatsApp us directly →
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

import { motion } from "framer-motion";
import { useState } from "react";

const BookingSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Would integrate with booking system
    window.open(`https://wa.me/601121172728?text=Hi, I'm ${formData.name}. I'd like to book a consultation.`, "_blank");
  };

  return (
    <section id="booking" className="py-32 px-6 bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-5xl text-foreground mb-4"
        >
          Begin Your Longevity Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground font-body text-sm mb-12"
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
            { name: "name", label: "Full Name", type: "text" },
            { name: "email", label: "Email", type: "email" },
            { name: "phone", label: "Phone", type: "tel" },
          ].map((field) => (
            <div key={field.name}>
              <label className="text-xs tracking-[0.15em] text-muted-foreground mb-2 block font-body">
                {field.label.toUpperCase()}
              </label>
              <input
                type={field.type}
                required
                value={formData[field.name as keyof typeof formData]}
                onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors"
              />
            </div>
          ))}
          <div>
            <label className="text-xs tracking-[0.15em] text-muted-foreground mb-2 block font-body">
              MESSAGE
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-card border border-border px-4 py-3 text-foreground font-body text-sm focus:border-primary focus:outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-[0.15em] hover:bg-bronze-light transition-colors duration-300 mt-4"
          >
            REQUEST CONSULTATION
          </button>
        </motion.form>

        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href="https://wa.me/601121172728"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-[0.15em] text-primary hover:text-bronze-light transition-colors font-body"
          >
            WHATSAPP US →
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

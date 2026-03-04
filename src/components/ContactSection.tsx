import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-5xl text-foreground mb-16"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Phone,
              label: "CALL US",
              value: "011-2117 2728",
              href: "tel:+601121172728",
            },
            {
              icon: Mail,
              label: "EMAIL US",
              value: "themotivation0207@gmail.com",
              href: "mailto:themotivation0207@gmail.com",
            },
            {
              icon: MessageCircle,
              label: "WHATSAPP",
              value: "011-2117 2728",
              href: "https://wa.me/601121172728",
            },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === "WHATSAPP" ? "_blank" : undefined}
              rel={item.label === "WHATSAPP" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 border border-border bg-card hover:border-primary/40 transition-all duration-500 text-center"
            >
              <item.icon className="w-5 h-5 text-primary mx-auto mb-4" />
              <p className="text-xs tracking-[0.2em] text-muted-foreground mb-2 font-body">{item.label}</p>
              <p className="text-foreground/80 text-sm font-body group-hover:text-primary transition-colors">{item.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

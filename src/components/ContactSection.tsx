import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-[80px] px-6 bg-secondary">
      <div className="max-w-site mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-[48px] text-foreground mb-16"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Phone,
              label: "Call Us",
              value: "+60 11-2117 2728",
              href: "tel:+601121172728",
            },
            {
              icon: Mail,
              label: "Email Us",
              value: "themotivation0207@gmail.com",
              href: "mailto:themotivation0207@gmail.com",
            },
            {
              icon: MessageCircle,
              label: "WhatsApp",
              value: "+60 11-2117 2728",
              href: "https://wa.me/601121172728",
            },
            {
              icon: MessageCircle,
              label: "Join Our Community",
              value: "The Motivation Biohackers Hub",
              href: "https://chat.whatsapp.com/G7c59PZ1dVYBeYw0OKwLZ7?mode=gi_t",
            },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label === "WhatsApp" || item.label === "Join Our Community" ? "_blank" : undefined}
              rel={item.label === "WhatsApp" || item.label === "Join Our Community" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-250 text-center"
            >
              <item.icon className="w-6 h-6 text-primary mx-auto mb-4" />
              <p className="text-xs text-muted-foreground mb-1 font-body">{item.label}</p>
              <p className="text-foreground text-sm font-body group-hover:text-primary transition-colors">{item.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

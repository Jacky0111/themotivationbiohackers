import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getServiceBySlug } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service || service.locked) {
    return (
      <div className="bg-background min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 text-center px-6">
          <h1 className="font-heading text-4xl text-foreground mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary font-body hover:underline">Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-0 overflow-hidden">
        <div className="relative w-full aspect-[21/9] max-h-[420px] overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-site mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-[56px] text-white"
            >
              {service.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground font-body text-base md:text-lg leading-relaxed whitespace-pre-line"
          >
            {service.fullDesc}
          </motion.p>

          {/* Nutrition categories */}
          {service.nutritionCategories && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 space-y-6"
            >
              <h2 className="font-heading text-2xl md:text-3xl text-foreground">What We Offer</h2>
              {service.nutritionCategories.map((cat, i) => (
                <div
                  key={cat.name}
                  className="bg-secondary rounded-xl p-6 border-l-4 border-primary"
                >
                  <h3 className="font-heading text-lg text-foreground mb-3">
                    #{i + 1} {cat.name}
                  </h3>
                  <ul className="space-y-2">
                    {cat.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm font-body text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Link
              to="/#services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-full text-sm font-body hover:bg-muted transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              All Services
            </Link>
            <a
              href="/#booking"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-body font-medium hover:bg-accent transition-colors duration-300"
            >
              Book Consultation
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;

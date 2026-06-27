import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import silkTexture from "@/assets/silk-texture.jpg";
import SEOHead from "@/components/SEOHead";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <div className="bg-background min-h-screen">
        <SEOHead
          title="About Us"
          description="Meet the team behind The Motivation Biohackers — masters degree holders with over 10 years of experience in functional medicine and chronic disease prevention."
          path="/about"
        />
        <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} />
        <Navbar />

        {/* Hero banner */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${silkTexture})` }}
          />
          <div className="absolute inset-0 bg-black/55" />

          

          <div className="relative z-10 text-center px-6 max-w-site mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="font-heading text-5xl md:text-[64px] text-white mb-6"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl font-body font-medium text-white mb-4"
            >
              Welcome to{" "}
              <span className="font-heading italic">The Motivation Biohackers</span>{" "}
              Community
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                Through a process of motivation and education, we provide toxin-free solutions that
                integrate functional medicine with holistic healing approaches — empowering our
                clients to achieve metabolic, physical, and mental balance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-6 text-muted-foreground font-body text-base md:text-lg leading-relaxed"
            >
              <p>
                At TM, we believe true wellness is achieved when mind and body function
                in harmony. By combining functional medicine, regenerative therapies and
                longevity science approach, we help you build sustainable health with
                non-invasive and holistic solutions.
              </p>
              <p>
                Our team of masters degree holders with authentic professional certificates
                brings over 10 years of experience in the space of NCDs (non-communicable diseases)
                and chronic disease prevention and recovery journey.
              </p>
              <p>
                We are committed to providing evidence-based, personalised wellness solutions
                that empower individuals to take control of their health and live their best lives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-full text-sm font-body hover:bg-muted transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>
          </div>
        </section>

        {/* <TeamSection /> */}

        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default About;

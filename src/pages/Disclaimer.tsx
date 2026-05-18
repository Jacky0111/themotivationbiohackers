import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import PageTransition from "@/components/PageTransition";

const Disclaimer = () => {
  return (
    <PageTransition>
      <SEOHead
        title="Disclaimer & Terms"
        description="The Motivation Biohackers is a wellness center, not a medical clinic. Read our disclaimer and terms of use."
        path="/disclaimer"
      />
      <Navbar />

      <main className="pt-32 pb-24 px-6 bg-background min-h-screen">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-4">
              Legal
            </p>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Disclaimer & Terms of Use
            </h1>
            <p className="text-foreground/60 font-body text-sm mb-12">
              Last updated: May 2026
            </p>

            <div className="space-y-10 font-body text-foreground/80 leading-relaxed">
              <section>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  Wellness Center, Not a Medical Clinic
                </h2>
                <p>
                  The Motivation Biohackers is a wellness center, not a medical
                  clinic. We offer holistic wellness programs, lifestyle education,
                  and non-invasive biohacking solutions intended to support overall
                  wellbeing. Our team, services, and educational content are
                  designed to complement — not replace — professional medical care.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  No Medical Advice
                </h2>
                <p>
                  Information shared through our website, events, webinars,
                  consultations, and wellness programs is provided for general
                  educational and informational purposes only. It is not intended
                  to diagnose, treat, cure, or prevent any disease or medical
                  condition. Our services are not a substitute for medical
                  diagnosis, treatment, or professional healthcare advice. Always
                  consult a qualified medical practitioner before making changes to
                  your health, nutrition, supplementation, or lifestyle routine —
                  especially if you have an existing medical condition, are
                  pregnant, or are taking medication.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  Individual Results May Vary
                </h2>
                <p>
                  Wellness outcomes depend on many individual factors including
                  genetics, lifestyle, environment, and consistency of practice.
                  Testimonials, case studies, and shared experiences reflect
                  individual journeys and are not guarantees of specific results
                  for any other person.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  Educational Events & Webinars
                </h2>
                <p>
                  Talks, webinars, and workshops hosted or co-hosted by The
                  Motivation Biohackers are educational in nature. Guest speakers,
                  including doctors, nutritionists, and other practitioners, share
                  general wellness knowledge. Their participation does not
                  establish a doctor-patient or practitioner-client relationship
                  with attendees.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  Use of Our Services
                </h2>
                <p>
                  By engaging with our programs, attending events, or using our
                  website, you acknowledge that you do so voluntarily and at your
                  own discretion. You are responsible for evaluating whether a
                  program or recommendation is suitable for your personal health
                  circumstances, and for seeking appropriate medical guidance when
                  needed.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  Limitation of Liability
                </h2>
                <p>
                  To the fullest extent permitted by law, The Motivation
                  Biohackers, its team, partners, and contributors shall not be
                  liable for any direct, indirect, incidental, or consequential
                  outcomes arising from the use of our wellness programs, events,
                  or educational content.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl text-foreground mb-4">
                  Contact
                </h2>
                <p>
                  For questions about this disclaimer or our wellness programs,
                  please reach us at{" "}
                  <a
                    href="mailto:themotivation0207@gmail.com"
                    className="text-primary hover:underline"
                  >
                    themotivation0207@gmail.com
                  </a>{" "}
                  or{" "}
                  <a href="tel:+601121172728" className="text-primary hover:underline">
                    +60 11-2117 2728
                  </a>
                  .
                </p>
              </section>
            </div>

            <div className="mt-16 pt-8 border-t border-border">
              <Link
                to="/"
                className="text-sm font-body text-primary hover:underline"
              >
                ← Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default Disclaimer;

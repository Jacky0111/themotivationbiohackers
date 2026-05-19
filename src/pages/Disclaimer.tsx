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

      <a
        href="#disclaimer-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        Skip to main content
      </a>

      <main
        id="disclaimer-content"
        tabIndex={-1}
        aria-labelledby="disclaimer-title"
        className="pt-32 pb-24 px-6 bg-background min-h-dvh focus:outline-none"
      >
        <div className="max-w-3xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <header>
              <p className="text-sm font-body uppercase tracking-[0.2em] text-primary mb-4">
                Legal
              </p>
              <h1
                id="disclaimer-title"
                className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight"
              >
                Disclaimer & Terms of Use
              </h1>
              <p className="text-muted-foreground font-body text-sm mb-12">
                Last updated: <time dateTime="2026-05">May 2026</time>
              </p>
            </header>

            <nav aria-label="On this page" className="mb-12 rounded-lg border border-border bg-card/50 p-6">
              <h2 className="font-heading text-lg text-foreground mb-3">On this page</h2>
              <ol className="list-decimal list-inside space-y-1 font-body text-sm text-foreground">
                <li><a href="#wellness-center" className="text-primary hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Wellness Center, Not a Medical Clinic</a></li>
                <li><a href="#no-medical-advice" className="text-primary hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">No Medical Advice</a></li>
                <li><a href="#individual-results" className="text-primary hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Individual Results May Vary</a></li>
                <li><a href="#educational-events" className="text-primary hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Educational Events & Webinars</a></li>
                <li><a href="#use-of-services" className="text-primary hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Use of Our Services</a></li>
                <li><a href="#liability" className="text-primary hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Limitation of Liability</a></li>
                <li><a href="#contact" className="text-primary hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Contact</a></li>
              </ol>
            </nav>

            <div className="space-y-10 font-body text-foreground leading-relaxed">
              <section aria-labelledby="wellness-center">
                <h2 id="wellness-center" className="font-heading text-2xl text-foreground mb-4 scroll-mt-32">
                  1. Wellness Center, Not a Medical Clinic
                </h2>
                <p>
                  The Motivation Biohackers is a wellness center, not a medical
                  clinic. We offer holistic wellness programs, lifestyle education,
                  and non-invasive biohacking solutions intended to support overall
                  wellbeing. Our team, services, and educational content are
                  designed to complement — not replace — professional medical care.
                </p>
              </section>

              <section aria-labelledby="no-medical-advice">
                <h2 id="no-medical-advice" className="font-heading text-2xl text-foreground mb-4 scroll-mt-32">
                  2. No Medical Advice
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

              <section aria-labelledby="individual-results">
                <h2 id="individual-results" className="font-heading text-2xl text-foreground mb-4 scroll-mt-32">
                  3. Individual Results May Vary
                </h2>
                <p>
                  Wellness outcomes depend on many individual factors including
                  genetics, lifestyle, environment, and consistency of practice.
                  Testimonials, case studies, and shared experiences reflect
                  individual journeys and are not guarantees of specific results
                  for any other person.
                </p>
              </section>

              <section aria-labelledby="educational-events">
                <h2 id="educational-events" className="font-heading text-2xl text-foreground mb-4 scroll-mt-32">
                  4. Educational Events & Webinars
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

              <section aria-labelledby="use-of-services">
                <h2 id="use-of-services" className="font-heading text-2xl text-foreground mb-4 scroll-mt-32">
                  5. Use of Our Services
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

              <section aria-labelledby="liability">
                <h2 id="liability" className="font-heading text-2xl text-foreground mb-4 scroll-mt-32">
                  6. Limitation of Liability
                </h2>
                <p>
                  To the fullest extent permitted by law, The Motivation
                  Biohackers, its team, partners, and contributors shall not be
                  liable for any direct, indirect, incidental, or consequential
                  outcomes arising from the use of our wellness programs, events,
                  or educational content.
                </p>
              </section>

              <section aria-labelledby="contact">
                <h2 id="contact" className="font-heading text-2xl text-foreground mb-4 scroll-mt-32">
                  7. Contact
                </h2>
                <p>
                  For questions about this disclaimer or our wellness programs,
                  please reach us at{" "}
                  <a
                    href="mailto:themotivation0207@gmail.com"
                    className="text-primary underline-offset-4 hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    themotivation0207@gmail.com
                  </a>{" "}
                  or{" "}
                  <a
                    href="tel:+601121172728"
                    className="text-primary underline-offset-4 hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    +60 11-2117 2728
                  </a>
                  .
                </p>
              </section>
            </div>

            <div className="mt-16 pt-8 border-t border-border">
              <Link
                to="/"
                className="inline-flex items-center text-sm font-body text-primary underline-offset-4 hover:underline rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                ← Back to Home
              </Link>
            </div>
          </motion.article>
        </div>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default Disclaimer;

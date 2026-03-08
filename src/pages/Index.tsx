import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PerspectiveSection from "@/components/PerspectiveSection";
import EventsSection from "@/components/EventsSection";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="bg-background min-h-screen">
        <SEOHead />
        <Navbar />
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        {/* <TestimonialsSection /> */}
        <PerspectiveSection />
        <EventsSection />
        <BookingSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </div>
    </PageTransition>
  );
};

export default Index;

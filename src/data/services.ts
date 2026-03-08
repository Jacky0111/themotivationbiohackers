import servicePemf from "@/assets/service-pemf.jpg";
import serviceBioaura from "@/assets/service-bioaura.jpg";
import serviceEpigenetic from "@/assets/service-epigenetic.jpg";
import serviceAdvanced from "@/assets/service-advanced.jpg";
import serviceNutrition from "@/assets/service-nutrition.jpg";
import serviceRecognize from "@/assets/service-recognize.jpg";

export interface Service {
  title: string;
  desc: string;
  image: string;
  slug: string;
  fullDesc: string;
  locked?: boolean;
}

export const services: Service[] = [
  {
    title: "PEMF Therapy",
    desc: "Your body deserves healing energy",
    slug: "pemf-therapy",
    image: servicePemf,
    fullDesc: `Pulsed Electromagnetic Field (PEMF) Therapy uses targeted electromagnetic pulses to stimulate cellular repair and regeneration. This non-invasive treatment enhances blood circulation, reduces inflammation, and accelerates the body's natural healing processes.

Whether you're dealing with chronic pain, fatigue, or simply seeking to optimise your cellular health, PEMF therapy offers a science-backed solution that works at the deepest level of your biology.

Our sessions are personalised to your specific health needs, ensuring maximum therapeutic benefit with zero downtime.`,
  },
  {
    title: "BioAura AI",
    desc: "Your voice reveals your mental health",
    slug: "bioaura-ai",
    image: serviceBioaura,
    fullDesc: `BioAura AI is a cutting-edge voice analysis technology that provides insights into your mental and emotional wellbeing. By analysing subtle vocal biomarkers, the system can detect signs of stress, anxiety, and other psychological conditions.

This non-invasive screening takes just minutes and provides a comprehensive report on your mental health status, empowering you with actionable insights to improve your overall wellbeing.

Our trained specialists will guide you through the results and recommend personalised interventions based on your unique profile.`,
  },
  {
    title: "Epigenetic Screening",
    desc: "Your genes reveal your TRUE health",
    slug: "epigenetic-screening",
    image: serviceEpigenetic,
    fullDesc: `Epigenetic Screening goes beyond traditional genetic testing to reveal how your lifestyle, environment, and habits are actually affecting your gene expression. This powerful screening identifies nutritional deficiencies, toxin exposures, and metabolic imbalances at the cellular level.

Unlike standard blood tests, epigenetic analysis provides a comprehensive picture of your body's current state and its trajectory, allowing for truly personalised health interventions.

Our comprehensive report covers vitamins, minerals, amino acids, fatty acids, environmental toxins, and electromagnetic stress indicators.`,
  },
  {
    title: "Personalized Nutrition Solutions",
    desc: "Professional nutritionist guidance for sustainable long-term health",
    slug: "personalized-nutrition",
    image: serviceNutrition,
    fullDesc: `Personalized nutrition guidance by a professional nutritionist designed to help you regain your health. Our approach focuses on improving your wellbeing without drastically changing your lifestyle, making it easier and more sustainable to maintain long-term health.

We conduct thorough nutritional assessments, analyse your dietary habits, and create customised meal plans that work with your preferences and schedule — not against them.

Whether you're managing a chronic condition, seeking weight management, or simply wanting to feel your best, our evidence-based approach ensures lasting results.`,
  },
  {
    title: "ReCognize",
    desc: "Interactive cognitive test for early detection of memory concerns",
    slug: "recognize",
    image: serviceRecognize,
    fullDesc: `ReCognize is an interactive cognitive test designed to help detect early signs of memory loss, forgetfulness (健忘症), or dementia (老人痴呆症). Through engaging game-based assessments, it provides insights into your cognitive health and helps identify whether further professional evaluation may be needed.

Early detection is key to managing cognitive decline. ReCognize offers a comfortable, non-intimidating way to screen for potential concerns, making it accessible for individuals and families alike.

Results are reviewed by our specialists who can recommend next steps, including lifestyle modifications, cognitive training programmes, or referrals to neurological specialists if needed.`,
  },
  {
    title: "Advanced Treatment",
    desc: "Biohacking experience",
    slug: "advanced-treatment",
    image: serviceAdvanced,
    locked: true,
    fullDesc: `Our Advanced Treatment programme combines multiple cutting-edge biohacking technologies to deliver a comprehensive wellness experience. From IV nutrient therapy to photobiomodulation, each treatment is carefully selected and customised to address your specific health goals.

This premium programme is designed for individuals who are serious about optimising their health and performance, offering treatments that are typically only available at world-class longevity clinics.

Each session is supervised by our experienced medical team to ensure safety and maximum efficacy.`,
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((s) => s.slug === slug);
};

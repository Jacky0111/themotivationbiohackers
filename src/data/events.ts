import eventImg from "@/assets/event-longevity.jpg";
import eventTbWebinarAsset from "@/assets/event-tb-webinar.png.asset.json";
import eventAwarenessAsset from "@/assets/event-awareness.png.asset.json";
import eventBreastHealthAsset from "@/assets/event-breast-health.png.asset.json";
import eventMensHealthAsset from "@/assets/event-mens-health.png.asset.json";
import eventAwarenessAprilAsset from "@/assets/event-awareness-april.jpg.asset.json";
import eventDecodeHealthAsset from "@/assets/event-decode-health.png.asset.json";
import eventLiuHuaCupAsset from "@/assets/event-liu-hua-cup.jpg.asset.json";
import eventNutritionKidsAsset from "@/assets/event-nutrition-kids.jpg.asset.json";
import eventProstateHealthAsset from "@/assets/event-prostate-health.jpg.asset.json";
import eventCnySlimmingAsset from "@/assets/event-cny-slimming.jpg.asset.json";
import eventWorldHealthDayAsset from "@/assets/event-world-health-day.jpg.asset.json";
import eventDyslexiaAsset from "@/assets/event-dyslexia.png.asset.json";
import eventGutAgingAsset from "@/assets/event-gut-aging.png.asset.json";
import eventFourHighsAsset from "@/assets/event-four-highs.png.asset.json";

const eventTbWebinar = eventTbWebinarAsset.url;
const eventAwareness = eventAwarenessAsset.url;
const eventBreastHealth = eventBreastHealthAsset.url;
const eventMensHealth = eventMensHealthAsset.url;
const eventAwarenessApril = eventAwarenessAprilAsset.url;
const eventDecodeHealth = eventDecodeHealthAsset.url;
const eventLiuHuaCup = eventLiuHuaCupAsset.url;
const eventNutritionKids = eventNutritionKidsAsset.url;
const eventProstateHealth = eventProstateHealthAsset.url;
const eventCnySlimming = eventCnySlimmingAsset.url;
const eventWorldHealthDay = eventWorldHealthDayAsset.url;
const eventDyslexia = eventDyslexiaAsset.url;
const eventGutAging = eventGutAgingAsset.url;
const eventFourHighs = eventFourHighsAsset.url;


export interface EventItem {
  title: string;
  date: string;
  /** ISO date string for sorting/comparison (YYYY-MM-DD) */
  dateISO: string;
  location: string;
  desc: string;
  image: string;
  link?: string;
}

export const allEvents: EventItem[] = [
  {
    title: "The Truth Behind the Cough · World TB Day Online Webinar",
    date: "March 11, 2026",
    dateISO: "2026-03-11",
    location: "Zoom Online Webinar",
    desc: "Co-hosted with Asclepius Healthcare Clinic & KPJ Puteri Specialist Hospital. Featuring Dr See Y.Y. (Respiratory Specialist) and Pharmacist Loh Hao Bo on TB awareness, diagnosis and treatment.",
    image: eventTbWebinar,
    link: "https://forms.gle/EtkNHqKjoNb8H97G6",
  },
  {
    title: "A Dance of Awareness",
    date: "March 15, 2026",
    dateISO: "2026-03-15",
    location: "9:00 AM – 1:00 PM",
    desc: "Stillness · Awareness · Elevation — A transformative retreat blending the wisdom of heaven, earth, and the human body. Includes refreshments and BioAura AI energy screening (worth RM169). Fee: RM369 / pax.",
    image: eventAwareness,
    link: "https://wa.me/601121172728?text=Hi%2C%20I%20would%20like%20to%20register%20for%20%E8%A7%89%E7%9F%A5%E4%B9%8B%E6%97%85%20A%20Dance%20of%20Awareness%20on%20March%2015",
  },
  {
    title: "The Silent Killers in Men: What You Don't Check Is the Most Dangerous",
    date: "June 10, 2026",
    dateISO: "2026-06-10",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "An online men's health talk on the silent killers — heart disease, the 'three highs' (hypertension, high blood sugar, high cholesterol), and prostate issues. Featuring Dr Ngan (Family Physician) and Liew Wei Ting (Registered Nutritionist) on early warning signs, essential screenings after 30, and risk-reversing nutrition.",
    image: eventMensHealth,
    link: "https://forms.gle/WrcjZTB6HzM18CrP8",
  },
  {
    title: "Unlocking Potential: A Holistic Approach to Dyslexia, Learning & Brain Health",
    date: "June 30, 2026",
    dateISO: "2026-06-30",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "Series 1: Understanding Dyslexia — Beyond Reading Difficulties. With Mr Kevin (Special Needs Educator) and Dr Gan (GP, Functional Medicine) on early signs, misconceptions, and when medical evaluation helps.",
    image: eventDyslexia,
    link: "https://forms.gle/SoP4nxdhX9WakfNv5",
  },
  {
    title: "Your Gut Microbiome Decides How Fast You Age",
    date: "July 14, 2026",
    dateISO: "2026-07-14",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "Why do some 60-year-olds look 40? A Food Science Master, Registered Nutritionist, and Registered Pharmacist unpack how gut health shapes ageing. Co-hosted with Asclepius Healthcare.",
    image: eventGutAging,
    link: "https://forms.gle/ARPhL25KoZ6wUFTi8",
  },
  {
    title: "四高不高，健康更好 · 健康博览会",
    date: "July 18, 2026",
    dateISO: "2026-07-18",
    location: "富力广场 R&F Mall, 新山 · 10:00 AM – 8:00 PM",
    desc: "聚焦现代「四高」——高血压、高血糖、高胆固醇、高尿酸。亮点：前100名免费血脂检测、基础健康检查与咨询、专家健康讲座、AED & CPR 实操体验、BioAura AI 心理健康预筛、营养配对游戏。加 RM28 升级完整基础血液检测配套。立即报名，预留免费检测名额！",
    image: eventFourHighs,
    link: "https://wa.me/601121172728?text=Hi%2C%20I%20would%20like%20to%20register%20for%20the%20Four%20Highs%20Health%20Expo%20on%20July%2018%202026",
  },
  {
    title: "Health & Wellness Expo 2026",
    date: "TBC",
    dateISO: "2026-12-31",
    location: "Johor Bahru",
    desc: "Experience cutting-edge biohacking technology, free health screenings, epigenetic testing demos, and live wellness consultations at our upcoming health expo.",
    image: eventImg,
  },
  // Past events
  {
    title: "Smooth Gut Wellness Strut Health Expo",
    date: "March 22–23, 2025",
    dateISO: "2025-03-23",
    location: "Sutera Mall, Johor Bahru",
    desc: "A two-day health expo focused on gut health and overall wellness, featuring health screenings, educational talks, and wellness consultations.",
    image: eventImg,
  },
  {
    title: "The Secret Artistree Green Market",
    date: "March 7, 2025",
    dateISO: "2025-03-07",
    location: "Columbia Asia Hospital – Tebrau, Johor Bahru",
    desc: "A vibrant health and wellness market hosted at Columbia Asia Hospital Tebrau, featuring green living products, health screenings, and wellness consultations.",
    image: eventImg,
  },
  {
    title: "Technology Illuminates the Path Against Cancer",
    date: "June 16, 2025",
    dateISO: "2025-06-16",
    location: "Johor Bahru",
    desc: "A collaborative health talk in partnership with GS Health Consultancy, Guangzhou University of Chinese Medicine Jinshazhou Hospital, and Asclepius Health Care Clinic — exploring the intersection of technology and integrative oncology.",
    image: eventImg,
  },
  {
    title: "Never Alone Health Expo",
    date: "July 19, 2025",
    dateISO: "2025-07-19",
    location: "Dewanraya Jalan Rawa, Taman Perling, Johor Bahru",
    desc: "A community-driven health expo bringing together wellness practitioners, health screenings, and educational talks to empower individuals on their health journey.",
    image: eventImg,
  },
  {
    title: "Breast Health Beyond Cancer · Women's Health Month Special Webinar",
    date: "May 12, 2026",
    dateISO: "2026-05-12",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "A Women's Health Month special webinar led by a Family Physician and a Breast Cancer Integrative Care Case Manager. Covers personal breast cancer risk assessment, screening options, lifestyle and stress-based prevention, and the difference between early detection and preventive medicine.",
    image: eventBreastHealth,
  },
  {
    title: "Liu Hua Cup 2025 Pickleball Team Tournament",
    date: "November 30, 2025",
    dateISO: "2025-11-30",
    location: "City Pickle @ One City, Selangor",
    desc: "The inaugural Malaysia China-alumni pickleball team tournament. Organised by the Malaysia China Graduates Association. Co-organised by the Zhejiang University Malaysia Alumni Association.",
    image: eventLiuHuaCup,
  },
  {
    title: "A Dance of Awareness · April Edition",
    date: "April 19, 2026",
    dateISO: "2026-04-19",
    location: "9:00 AM – 1:00 PM",
    desc: "Stillness · Awareness · Elevation — A transformative retreat blending the wisdom of heaven, earth, and the human body. Includes refreshments and BioAura AI energy screening (worth RM169). Fee: RM369 / pax.",
    image: eventAwarenessApril,
    link: "https://forms.gle/rHXBd2NtjxCEKNNA7",
  },
  {
    title: "Decode Your Health, Prosper in Wellness",
    date: "January 11, 2026",
    dateISO: "2026-01-11",
    location: "Sutera Mall, Johor Bahru",
    desc: "A wellness expo combining health education, biohacking demonstrations, and personalised health consultations to help attendees decode their path to optimal wellness.",
    image: eventDecodeHealth,
  },
  {
    title: "Nutrition for Growing Children: Helping Kids Win at the Starting Line",
    date: "May 9, 2026",
    dateISO: "2026-05-09",
    location: "Atrium C, Sutera Mall, Johor Bahru · 4:30 PM",
    desc: "A free public health talk by Dr Gan CE (MBBS NCL, MC-SPMED UniMelb) on the nutrition fundamentals behind children's growth — why 'eating well' is not the same as 'absorbing well', and how absorption shapes focus, immunity, and energy. Open to all parents.",
    image: eventNutritionKids,
  },
  {
    title: "Nocturia, Frequent Urination, Poor Sleep? Decoding the Prostate Trap",
    date: "November 22, 2025",
    dateISO: "2025-11-22",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "A Movember men's health webinar decoding the prostate crisis through three expert lenses — clinical medicine, cancer genomics, and nutritional intervention. Learn the three health alarms behind nocturia, the prostate-protecting heroes and villains on your plate, and how to reverse risk at the epigenetic level. Co-hosted with Asclepius Healthcare and OLAB.",
    image: eventProstateHealth,
  },
  {
    title: "Lunar New Year Slimming Done Right: Science-Backed Beauty for the Year of the Horse",
    date: "January 24, 2026",
    dateISO: "2026-01-24",
    location: "Zoom Online Webinar · 2:00 PM",
    desc: "A Lunar New Year health webinar unpacking the real science of weight loss — why obesity is driven by insulin 'fat-locking' and inflammation, and why keto, low-carb, and OMAD often backfire. Learn how low-GI eating and magnesium support steady fat loss for postpartum mums, PCOS, perimenopause, and stubborn belly fat. Led by a practising family physician and a registered nutritionist. Co-hosted with OLAB and Asclepius Healthcare.",
    image: eventCnySlimming,
  },
  {
    title: "From Symptoms to Root Cause: Why Medication Alone Can't Resolve Chronic Disease",
    date: "April 7, 2026",
    dateISO: "2026-04-07",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "A World Health Day special talk with a practising physician and a food science specialist on why chronic conditions like hypertension, diabetes, gut issues, and fatigue rarely improve with medication alone. Explores the role of diet, metabolism, inflammation, and lifestyle in shifting from symptom control to genuine recovery. Co-hosted with Asclepius Healthcare.",
    image: eventWorldHealthDay,
  },
];



/**
 * Returns upcoming events (event date >= today).
 * Events with date on the actual day still show as upcoming; moves to past the next day.
 */
export const getUpcomingEvents = (): EventItem[] => {
  const today = new Date().toISOString().slice(0, 10);
  return allEvents
    .filter((e) => e.dateISO >= today)
    .sort((a, b) => a.dateISO.localeCompare(b.dateISO));
};

export const getPastEvents = (): EventItem[] => {
  const today = new Date().toISOString().slice(0, 10);
  return allEvents
    .filter((e) => e.dateISO < today)
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO));
};

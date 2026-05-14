import eventImg from "@/assets/event-longevity.jpg";
import eventTbWebinar from "@/assets/event-tb-webinar.png";
import eventAwareness from "@/assets/event-awareness.png";
import eventBreastHealth from "@/assets/event-breast-health.png";

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
    title: "《咳嗽背后的真相》世界结核病日线上讲座",
    date: "March 11, 2026",
    dateISO: "2026-03-11",
    location: "Zoom Online Webinar",
    desc: "Co-hosted with Asclepius Healthcare Clinic & KPJ Puteri Specialist Hospital. Featuring Dr See Y.Y. (Respiratory Specialist) and Pharmacist Loh Hao Bo on TB awareness, diagnosis and treatment.",
    image: eventTbWebinar,
    link: "https://forms.gle/EtkNHqKjoNb8H97G6",
  },
  {
    title: "觉知之旅 · A Dance of Awareness",
    date: "March 15, 2026",
    dateISO: "2026-03-15",
    location: "9:00 AM – 1:00 PM",
    desc: "Stillness · Awareness · Elevation — A transformative retreat blending the wisdom of heaven, earth, and the human body. Includes refreshments and BioAura AI energy screening (worth RM169). Fee: RM369 / pax.",
    image: eventAwareness,
    link: "https://wa.me/601121172728?text=Hi%2C%20I%20would%20like%20to%20register%20for%20%E8%A7%89%E7%9F%A5%E4%B9%8B%E6%97%85%20A%20Dance%20of%20Awareness%20on%20March%2015",
  },
  {
    title: "Biohacking Your Longevity",
    date: "June 12, 2026",
    dateISO: "2026-06-12",
    location: "Kuala Lumpur",
    desc: "An exclusive evening exploring the latest in longevity science, regenerative therapies, and personalised health optimisation.",
    image: eventImg,
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
    title: "肠来运转，健康相伴 · Smooth Gut Wellness Strut Health Expo",
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
    title: "科技照亮抗癌之路",
    date: "June 16, 2025",
    dateISO: "2025-06-16",
    location: "Johor Bahru",
    desc: "A collaborative health talk in partnership with GS Health Consultancy, 广州中医药大学金沙洲医院, and Asclepius Health Care Clinic — exploring the intersection of technology and integrative oncology.",
    image: eventImg,
  },
  {
    title: "不再孤单 · Never Alone Health Expo",
    date: "July 19, 2025",
    dateISO: "2025-07-19",
    location: "Dewanraya Jalan Rawa, Taman Perling, Johor Bahru",
    desc: "A community-driven health expo bringing together wellness practitioners, health screenings, and educational talks to empower individuals on their health journey.",
    image: eventImg,
  },
  {
    title: "留华杯2025匹克球团体赛",
    date: "November 30, 2025",
    dateISO: "2025-11-30",
    location: "City Pickle @ One City, Selangor",
    desc: "首届马来西亚留华校友匹克球团体赛。主办单位：马来西亚留华同学会。协办单位：浙江大学马来西亚校友会。",
    image: eventImg,
  },
  {
    title: "健康解码，福运随行 · Decode Your Health, Prosper in Wellness",
    date: "January 11, 2026",
    dateISO: "2026-01-11",
    location: "Sutera Mall, Johor Bahru",
    desc: "A wellness expo combining health education, biohacking demonstrations, and personalised health consultations to help attendees decode their path to optimal wellness.",
    image: eventImg,
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

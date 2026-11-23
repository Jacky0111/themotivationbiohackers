import eventImg from "@/assets/event-longevity.jpg";
import { buildWhatsAppRegisterLink } from "@/lib/whatsapp";
import { WHATSAPP_NUMBER } from "@/lib/site";
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
import eventFourHighsTalkAsset from "@/assets/event-four-highs-talk.png.asset.json";
import eventLearningBrainAsset from "@/assets/event-learning-brain.png.asset.json";
import eventDyslexiaFamilyEnAsset from "@/assets/event-dyslexia-family-en.png.asset.json";
import eventDyslexiaFamilyCnAsset from "@/assets/event-dyslexia-family-cn.png.asset.json";
import eventKombuchaAsset from "@/assets/event-kombucha.png.asset.json";
import eventSmartNutritionEnAsset from "@/assets/event-smart-nutrition-en.png.asset.json";
import eventSmartNutritionCnAsset from "@/assets/event-smart-nutrition-cn.png.asset.json";
import eventGrowthAwarenessAsset from "@/assets/event-growth-awareness.png.asset.json";

import eventMentalHealthCnAsset from "@/assets/event-mental-health-cn.png.asset.json";
import eventAdhdDyslexiaAsset from "@/assets/event-adhd-dyslexia.png.asset.json";
import eventSmartChildrenStruggleAsset from "@/assets/event-smart-children-struggle.png.asset.json";
import eventDyslexiaSeries5Asset from "@/assets/event-dyslexia-series5.png.asset.json";
import eventBreastRecoveryAsset from "@/assets/event-breast-recovery.png.asset.json";
import eventDiabetesPanelAsset from "@/assets/event-diabetes-panel.png.asset.json";
import eventGutBrainAsset from "@/assets/event-gut-brain.png.asset.json";


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
const eventFourHighsTalk = eventFourHighsTalkAsset.url;
const eventLearningBrain = eventLearningBrainAsset.url;
const eventDyslexiaFamilyEn = eventDyslexiaFamilyEnAsset.url;
const eventDyslexiaFamilyCn = eventDyslexiaFamilyCnAsset.url;
const eventKombucha = eventKombuchaAsset.url;
const eventSmartNutritionEn = eventSmartNutritionEnAsset.url;
const eventSmartNutritionCn = eventSmartNutritionCnAsset.url;
const eventGrowthAwareness = eventGrowthAwarenessAsset.url;

const eventMentalHealthCn = eventMentalHealthCnAsset.url;
const eventAdhdDyslexia = eventAdhdDyslexiaAsset.url;
const eventSmartChildrenStruggle = eventSmartChildrenStruggleAsset.url;
const eventDyslexiaSeries5 = eventDyslexiaSeries5Asset.url;
const eventBreastRecovery = eventBreastRecoveryAsset.url;
const eventDiabetesPanel = eventDiabetesPanelAsset.url;
const eventGutBrain = eventGutBrainAsset.url;


const whatsappRegister = (eventName: string, eventDate: string, venue: string) =>
  buildWhatsAppRegisterLink({ phone: WHATSAPP_NUMBER, eventName, eventDate, venue });


export interface EventSpeaker {
  name: string;
  role?: string;
}

export interface EventItem {
  title: string;
  date: string;
  /** ISO date string for sorting/comparison (YYYY-MM-DD) */
  dateISO: string;
  location: string;
  desc: string;
  image: string;
  link?: string;
  /** URL-safe identifier used by the event detail page */
  slug?: string;
  /** Optional speaker line-up */
  speakers?: EventSpeaker[];
  /** Ticket price in MYR per person. Omit for free events. */
  price?: number;
}


export const allEvents: EventItem[] = [
  {
    title: "The Truth Behind the Cough · World TB Day Online Webinar",
    date: "2026-03-11",

    dateISO: "2026-03-11",
    location: "Zoom Online Webinar",
    desc: "Co-hosted with Asclepius Healthcare Clinic & KPJ Puteri Specialist Hospital. Dr See Y.Y. (Respiratory Specialist) and Pharmacist Loh Hao Bo on TB awareness, diagnosis and treatment.",
    image: eventTbWebinar,
    link: "https://forms.gle/EtkNHqKjoNb8H97G6",
  },
  {
    title: "A Dance of Awareness",
    date: "2026-03-15",

    dateISO: "2026-03-15",
    location: "9:00 AM – 1:00 PM",
    desc: "Stillness · Awareness · Elevation — a retreat blending the wisdom of heaven, earth and body. Includes refreshments and BioAura AI energy screening (worth RM169). RM369 / pax.",
    image: eventAwareness,
    link: whatsappRegister("A Dance of Awareness", "2026-03-15, 9:00 AM – 1:00 PM", "The Motivation Biohackers Studio, Johor Bahru"),
    price: 369,
  },
  {
    title: "The Silent Killers in Men: What You Don't Check Is the Most Dangerous",
    date: "2026-06-10",

    dateISO: "2026-06-10",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "An online men's health talk on heart disease, the 'three highs' and prostate issues. Dr Ngan (Family Physician) and Liew Wei Ting (Registered Nutritionist) on early warning signs, screenings after 30, and risk-reversing nutrition.",
    image: eventMensHealth,
    link: "https://forms.gle/WrcjZTB6HzM18CrP8",
    speakers: [
      { name: "Dr Ngan", role: "Family Physician" },
      { name: "Liew Wei Ting", role: "Registered Nutritionist" },
    ],
  },
  {
    title: "Unlocking Potential: A Holistic Approach to Dyslexia, Learning & Brain Health",
    date: "2026-06-30",

    dateISO: "2026-06-30",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "Series 1: Understanding Dyslexia — Beyond Reading Difficulties. Mr Kevin (Special Needs Educator) and Dr Gan (GP, Functional Medicine) on early signs and when medical evaluation helps.",
    image: eventDyslexia,
    link: "https://forms.gle/SoP4nxdhX9WakfNv5",
    speakers: [
      { name: "Mr Kevin", role: "Special Needs Educator" },
      { name: "Dr Gan", role: "GP, Functional Medicine" },
    ],
  },
  {
    title: "Your Gut Microbiome Decides How Fast You Age",
    date: "2026-07-14",

    dateISO: "2026-07-14",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "Why do some 60-year-olds look 40? A Food Science Master, Registered Nutritionist and Registered Pharmacist unpack how gut health shapes ageing. Co-hosted with Asclepius Healthcare.",
    image: eventGutAging,
    link: "https://forms.gle/ARPhL25KoZ6wUFTi8",
    speakers: [
      { name: "Ms Gan W.S", role: "Master of Food Science & Technology" },
      { name: "Registered Nutritionist", role: "Asclepius Healthcare" },
      { name: "Registered Pharmacist", role: "Asclepius Healthcare" },
    ],
  },
  {
    title: "四高不高，健康更好 · 健康博览会",
    date: "2026-07-18",

    dateISO: "2026-07-18",
    location: "富力广场 R&F Mall, 新山 · 10:00 AM – 8:00 PM",
    desc: "聚焦现代「四高」——高血压、高血糖、高胆固醇、高尿酸。亮点：前100名免费血脂检测、基础健康检查、专家讲座、AED & CPR 实操、BioAura AI 心理预筛。加 RM28 升级完整血液检测配套。",
    image: eventFourHighs,
    link: "https://docs.google.com/forms/d/e/1FAIpQLScozLTS50eyhbU0O7H_qUBk7QIMX9AS4-utzG0TeRe-VndSfg/viewform",
  },
  {
    title: "Unlocking Potential · Series 2: Building a Stronger Learning Brain",
    date: "2026-07-28",

    dateISO: "2026-07-28",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "Learning smarter, not just harder. Mr Kevin (Special Needs Educator) shares multi-sensory learning strategies for dyslexic children; Dr Gan (GP, Functional Medicine) covers brain nutrition — Iron, Vitamin D, B12 and Omega-3.",
    image: eventLearningBrain,
    link: "https://forms.gle/7CcNyeGkGAPHM5fo6",
    speakers: [
      { name: "Mr Kevin", role: "Special Needs Educator" },
      { name: "Dr Gan", role: "GP, Functional Medicine" },
    ],
  },
  {
    title: "Raising a Dyslexia-Friendly Family Workshop",
    date: "2026-07-20",

    dateISO: "2026-07-20",
    location: "HRDCorp Office @ Iskandar · 9:00 AM – 10:30 AM",
    desc: "A National Training Week 2026 family workshop. Mr Kevin (Special Needs Educator) and Ms Punithamalar Rajagopal (Clinical Psychologist) share practical ways to support dyslexic children at home. Understand. Support. Empower.",
    image: eventDyslexiaFamilyEn,
    link: whatsappRegister("Raising a Dyslexia-Friendly Family Workshop", "2026-07-20, 9:00 AM – 10:30 AM", "HRDCorp Office @ Iskandar"),
  },
  {
    title: "打造阅读障碍友好家庭工作坊",
    date: "2026-07-20",

    dateISO: "2026-07-20",
    location: "HRDCorp 办公室 @ 依斯干达 · 11:00 AM – 12:30 PM",
    desc: "全国培训周 2026 家庭工作坊。由 Mr Kevin（特殊教育工作者）与 Dr Gan C.E.（家庭医生）主讲，分享如何在家中理解、支持并赋能阅读障碍孩子。理解 · 支持 · 赋能。",
    image: eventDyslexiaFamilyCn,
    link: whatsappRegister("打造阅读障碍友好家庭工作坊", "2026-07-20 11:00 AM – 12:30 PM", "HRDCorp 办公室 @ 依斯干达"),
  },
  {
    title: "Kombucha Workshop · Brew By Root",
    date: "2026-07-20",

    dateISO: "2026-07-20",
    location: "HRDC Office @ Iskandar · 2:00 PM – 5:00 PM",
    desc: "Curious about kombucha and how it's made? Join Junhao (Brew By Root) for a hands-on workshop on brewing your own kombucha at home. Part of National Training Week 2026.",
    image: eventKombucha,
    link: whatsappRegister("Kombucha Workshop · Brew By Root", "2026-07-20, 2:00 PM – 5:00 PM", "HRDC Office @ Iskandar"),
  },
  {
    title: "Smart Nutrition for Smart Minds (English)",
    date: "2026-07-23",

    dateISO: "2026-07-23",
    location: "ADTEC Senai (ILPPG Kampus Senai) · 1:00 PM – 2:00 PM",
    desc: "A National Training Week 2026 talk by Dr Gan C.E. (GP, Founder of Asclepius Healthcare Clinic) on how everyday nutrition fuels focus, memory and mental performance. Language: English.",
    image: eventSmartNutritionEn,
    link: whatsappRegister("Smart Nutrition for Smart Minds (English)", "2026-07-23, 1:00 PM – 2:00 PM", "ADTEC Senai (ILPPG Kampus Senai)"),
  },
  {
    title: "智慧营养，聪明大脑（中文）",
    date: "2026-07-23",

    dateISO: "2026-07-23",
    location: "ADTEC Senai（ILPPG Kampus Senai）· 2:00 PM – 3:00 PM",
    desc: "全国培训周 2026 讲座，由 Ms Gan W.S（食品科学与技术硕士）主讲，分享日常营养如何影响专注力、记忆力与大脑表现。语言：中文。",
    image: eventSmartNutritionCn,
    link: whatsappRegister("智慧营养，聪明大脑（中文）", "2026-07-23 2:00 PM – 3:00 PM", "ADTEC Senai（ILPPG Kampus Senai）"),
  },
  {
    title: "心理健康，值得被重视 · 压力与情绪管理线上讲座",
    date: "2026-08-18",

    dateISO: "2026-08-18",
    location: "Zoom 线上讲座 · 8:00 PM",
    desc: "焦虑、失眠、难以专注？长期压力不只影响情绪，也牵动睡眠、免疫力、肠道健康与慢性病风险。讲座分享如何透过营养、睡眠与运动照顾大脑与情绪。免费参与，名额有限。",
    image: eventMentalHealthCn,
    link: "https://forms.gle/v1m2VH3MB67xcbCW7",
  },
  {
    title: "Unlocking Potential · Series 3: ADHD, Dyslexia & Learning Challenges — Telling the Difference",
    date: "2026-08-25",

    dateISO: "2026-08-25",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "ADHD or dyslexia? Sometimes both. Mr Kevin (Special Needs Educator) covers overlapping symptoms and when to seek help; Dr Gan (GP, Functional Medicine) covers medical causes of poor concentration, sleep and nutrition. For parents, educators and caregivers.",
    image: eventAdhdDyslexia,
    link: "https://forms.gle/yKy71dfvhSSaNt5C6",
    speakers: [
      { name: "Mr Kevin", role: "Special Needs Educator" },
      { name: "Dr Gan", role: "GP, Functional Medicine" },
    ],
  },
  {
    title: "孩子健康成長，你真的了解嗎？｜Children's Growth Awareness Week",
    date: "2026-09-14",

    dateISO: "2026-09-14",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "儿童成长关注周线上讲座：成长不只是身高。由 Dr Gan（家庭医生）与 Mr Kevin（儿童教育工作者）主讲，探讨大脑发育、均衡营养、睡眠品质、学习表现、情绪健康与荷尔蒙发育如何影响孩子成长，并教家长辨识不容忽视的警讯。语言：中文。",
    image: eventGrowthAwareness,
    link: "https://forms.gle/1Nt5BoZgN9p5r5WEA",
    speakers: [
      { name: "Dr Gan", role: "Family Physician / GP" },
      { name: "Mr Kevin", role: "Child Educator" },
    ],
  },
  {
    title: "破茧粉红，重塑光芒 · 乳腺癌围手术期护理与科学饮食实战课",
    date: "2026-10-23",

    dateISO: "2026-10-23",
    location: "Zoom 线上直播 · 8:00 PM",
    desc: "从术后物理治疗、化疗前后的专业护理，到科学饮食与长期保健，每一步都关乎康复品质。讲座涵盖伤口愈合、淋巴水肿预防、副作用应对与分阶段精准营养，破除「发物」迷思。面向乳腺癌患者、家属及关注术后康复的人士。",
    image: eventBreastRecovery,
    link: "https://forms.gle/jvb3GzA8RvY5SnuR8",
    speakers: [
      { name: "注册营养师", role: "精准营养 · 助力康复" },
      { name: "肿瘤专科护士", role: "专业护理 · 全程守护" },
    ],
  },
  {
    title: "Unlocking Potential · Series 4: Why Smart Children Struggle in School",
    date: "2026-09-28",

    dateISO: "2026-09-28",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "A bright child may still struggle because of hidden learning challenges, processing speed, working memory, stress or poor sleep. Mr Kevin (Special Needs Educator) and Dr Gan (GP, Functional Medicine) explore how a child's brain learns best. For parents, educators and caregivers.",
    image: eventSmartChildrenStruggle,
    link: "https://forms.gle/D4UdWBdDKQEhLaye9",
    speakers: [
      { name: "Mr Kevin", role: "Special Needs Educator" },
      { name: "Dr Gan", role: "GP, Functional Medicine" },
    ],
  },

  {
    title: "Unlocking Potential · Series 5: Emotional Health & Self-Esteem in Children with Dyslexia",
    date: "2026-10-26",

    dateISO: "2026-10-26",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "Behind every learning struggle there may be an emotional struggle too. Mr Kevin (Special Needs Educator) covers frustration, anxiety, school avoidance and building resilience; Dr Gan (GP, Functional Medicine) covers stress physiology, sleep, mood and family support. For parents, educators and caregivers.",
    image: eventDyslexiaSeries5,
    link: "https://forms.gle/GL21frPJprWaeinz5",
    speakers: [
      { name: "Mr Kevin", role: "Special Need Educator" },
      { name: "Dr Gan", role: "GP, Functional Medicine" },
    ],
  },

  {
    title: "控糖新维度：血糖达标，心肾就安全吗？",
    date: "2026-11-17",

    dateISO: "2026-11-17",
    location: "Zoom 线上讲座 · 8:00 PM",
    desc: "世界糖尿病月双专家对谈：即使血糖达标，心肾仍有风险。从医学、心肾保护到营养基因组学，探讨为何规律服药血糖仍不理想，以及个体化营养如何辅助控糖。适合大众、糖尿病高风险人士、患者及家属。",
    image: eventDiabetesPanel,
    link: "https://forms.gle/mqcLQHPyNr7EHtfs9",
    speakers: [
      { name: "Dr Kim Heng Shee", role: "介入心脏科及内科专科医生" },
      { name: "Ms Gan W.S.", role: "营养基因组学教育者" },
    ],
  },
  {
    title: "Unlocking Potential · Series 6: The Gut-Brain Connection — The Hidden Link to Learning",
    date: "2026-11-30",

    dateISO: "2026-11-30",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "The final 2026 series. Mr Kevin covers the hidden discomfort children struggling to learn may not tell us; Dr Gan explores whether gut bacteria can influence how children learn. For parents, educators and caregivers.",
    image: eventGutBrain,
    link: "https://forms.gle/p9rLDGBrjno9A8Pj7",
    speakers: [
      { name: "Mr Kevin", role: "Special Need Educator" },
      { name: "Dr Gan", role: "GP, Functional Medicine" },
    ],
  },
  {
    title: "降四高 · 赢健康 健康讲座",

    date: "2026-07-18",

    dateISO: "2026-07-18",
    location: "R&F Mall 新山富力广场 · 10:00 AM – 8:00 PM",
    desc: "你以为四高是老年人的问题？NHMS 2023 显示：每3位成年人1位高胆固醇、每10位3位高血压、每6位1位糖尿病。由友德医务所创办人 Dr Gan 主讲，讲解四高的成因、预防与管理，分享实用的健康管理方法。免费参与。",
    image: eventFourHighsTalk,
    link: "https://docs.google.com/forms/d/e/1FAIpQLScozLTS50eyhbU0O7H_qUBk7QIMX9AS4-utzG0TeRe-VndSfg/viewform",
  },
  {
    title: "Health & Wellness Expo 2026",
    date: "TBC",
    dateISO: "2026-12-31",
    location: "Johor Bahru",
    desc: "Experience cutting-edge biohacking technology, free health screenings, epigenetic testing demos and live wellness consultations.",
    image: eventImg,
  },
  // Past events
  {
    title: "Smooth Gut Wellness Strut Health Expo",
    date: "2025-03-22 to 2025-03-23",

    dateISO: "2025-03-23",
    location: "Sutera Mall, Johor Bahru",
    desc: "A two-day health expo focused on gut health and overall wellness, with health screenings, educational talks and consultations.",
    image: eventImg,
  },
  {
    title: "The Secret Artistree Green Market",
    date: "2025-03-07",

    dateISO: "2025-03-07",
    location: "Columbia Asia Hospital – Tebrau, Johor Bahru",
    desc: "A health and wellness market at Columbia Asia Hospital Tebrau, featuring green living products, health screenings and wellness consultations.",
    image: eventImg,
  },
  {
    title: "Technology Illuminates the Path Against Cancer",
    date: "2025-06-16",

    dateISO: "2025-06-16",
    location: "Johor Bahru",
    desc: "A health talk with GS Health Consultancy, Guangzhou University of Chinese Medicine Jinshazhou Hospital and Asclepius Health Care Clinic — technology meets integrative oncology.",
    image: eventImg,
  },
  {
    title: "Never Alone Health Expo",
    date: "2025-07-19",

    dateISO: "2025-07-19",
    location: "Dewanraya Jalan Rawa, Taman Perling, Johor Bahru",
    desc: "A community health expo bringing together wellness practitioners, health screenings and educational talks to empower individuals on their health journey.",
    image: eventImg,
  },
  {
    title: "Breast Health Beyond Cancer · Women's Health Month Special Webinar",
    date: "2026-05-12",

    dateISO: "2026-05-12",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "A Women's Health Month webinar led by a Family Physician and a Breast Cancer Integrative Care Case Manager, covering personal risk assessment, screening options, and lifestyle-based prevention.",
    image: eventBreastHealth,
  },
  {
    title: "Liu Hua Cup 2025 Pickleball Team Tournament",
    date: "2025-11-30",

    dateISO: "2025-11-30",
    location: "City Pickle @ One City, Selangor",
    desc: "The inaugural Malaysia China-alumni pickleball team tournament, organised by the Malaysia China Graduates Association and co-organised by the Zhejiang University Malaysia Alumni Association.",
    image: eventLiuHuaCup,
  },
  {
    title: "A Dance of Awareness · April Edition",
    date: "2026-04-19",

    dateISO: "2026-04-19",
    location: "9:00 AM – 1:00 PM",
    desc: "Stillness · Awareness · Elevation — a retreat blending the wisdom of heaven, earth and body. Includes refreshments and BioAura AI energy screening (worth RM169). RM369 / pax.",
    image: eventAwarenessApril,
    link: "https://forms.gle/rHXBd2NtjxCEKNNA7",
    price: 369,
  },
  {
    title: "Decode Your Health, Prosper in Wellness",
    date: "2026-01-11",

    dateISO: "2026-01-11",
    location: "Sutera Mall, Johor Bahru",
    desc: "A wellness expo combining health education, biohacking demonstrations and personalised consultations to help attendees decode their path to optimal wellness.",
    image: eventDecodeHealth,
  },
  {
    title: "Nutrition for Growing Children: Helping Kids Win at the Starting Line",
    date: "2026-05-09",

    dateISO: "2026-05-09",
    location: "Atrium C, Sutera Mall, Johor Bahru · 4:30 PM",
    desc: "A free public health talk by Dr Gan CE (MBBS NCL, MC-SPMED UniMelb) on children's growth nutrition — why 'eating well' is not 'absorbing well', and how absorption shapes focus, immunity and energy.",
    image: eventNutritionKids,
  },
  {
    title: "Nocturia, Frequent Urination, Poor Sleep? Decoding the Prostate Trap",
    date: "2025-11-22",

    dateISO: "2025-11-22",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "A Movember men's health webinar decoding the prostate crisis through clinical medicine, cancer genomics and nutrition. Learn the alarms behind nocturia and how to reverse risk. Co-hosted with Asclepius Healthcare and OLAB.",
    image: eventProstateHealth,
  },
  {
    title: "Lunar New Year Slimming Done Right: Science-Backed Beauty for the Year of the Horse",
    date: "2026-01-24",

    dateISO: "2026-01-24",
    location: "Zoom Online Webinar · 2:00 PM",
    desc: "A Lunar New Year webinar on the real science of weight loss — insulin 'fat-locking' and inflammation, and why keto, low-carb and OMAD often backfire. Low-GI eating and magnesium for postpartum, PCOS and perimenopause. Co-hosted with OLAB and Asclepius Healthcare.",
    image: eventCnySlimming,
  },
  {
    title: "From Symptoms to Root Cause: Why Medication Alone Can't Resolve Chronic Disease",
    date: "2026-04-07",

    dateISO: "2026-04-07",
    location: "Zoom Online Webinar · 8:00 PM",
    desc: "A World Health Day talk with a physician and a food science specialist on why hypertension, diabetes, gut issues and fatigue rarely improve with medication alone — and the role of diet, metabolism and inflammation in real recovery.",
    image: eventWorldHealthDay,
  },
];

/** Build a URL-safe slug from an event title, falling back to its date. */
const slugify = (title: string, dateISO: string): string => {
  const base = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return base || `event-${dateISO}`;
};

// Assign stable, unique slugs once at module load.
const usedSlugs = new Set<string>();
allEvents.forEach((e) => {
  let slug = slugify(e.title, e.dateISO);
  if (usedSlugs.has(slug)) {
    let n = 2;
    while (usedSlugs.has(`${slug}-${n}`)) n += 1;
    slug = `${slug}-${n}`;
  }
  usedSlugs.add(slug);
  e.slug = slug;
});

export const getEventBySlug = (slug: string): EventItem | undefined =>
  allEvents.find((e) => e.slug === slug);

/** Today's date (YYYY-MM-DD) in the site's timezone, so events roll over at Malaysian midnight. */
export const todayISO = (now: number = Date.now()): string =>
  new Date(now + 8 * 3600_000).toISOString().slice(0, 10);

/** True when the event date has not passed yet. */
export const isUpcoming = (e: EventItem): boolean => e.dateISO >= todayISO();

/**
 * Returns upcoming events (event date >= today).
 * Events on the actual day still show as upcoming; they move to past the next day.
 */
export const getUpcomingEvents = (): EventItem[] =>
  allEvents.filter(isUpcoming).sort((a, b) => a.dateISO.localeCompare(b.dateISO));

export const getPastEvents = (): EventItem[] =>
  allEvents.filter((e) => !isUpcoming(e)).sort((a, b) => b.dateISO.localeCompare(a.dateISO));

import { motion } from "framer-motion";
import teamRow1 from "@/assets/team-row1.png";
import teamRow2 from "@/assets/team-row2.png";

const teamMembers = [
  { name: "Dr. Gan Ce", role: "Founder & Chief Executive Officer" },
  { name: "Wei Sien", role: "Co-Founder & Chief Scientist Officer" },
  { name: "Chee Yen", role: "Certified Clinical Nutritionist" },
  { name: "Chia Chung", role: "Market Research Director" },
  { name: "Kelwin Low", role: "Chief Operating Officer" },
  { name: "Enosh Ting", role: "Chief Business Analyst" },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 md:py-[80px] px-6 bg-secondary">
      <div className="max-w-site mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-[48px] text-foreground mb-4"
        >
          The Motivation Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground font-body text-base max-w-2xl mx-auto mb-16"
        >
          Masters degree holders with authentic professional certificates and over 10 years of experience in chronic disease prevention and recovery.
        </motion.p>

        {/* Team photos as uploaded images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <img
            src={teamRow1}
            alt="Team members: Dr. Gan Ce, Wei Sien, Chee Yen"
            className="w-full max-w-4xl mx-auto rounded-xl"
          />
          <img
            src={teamRow2}
            alt="Team members: Chia Chung, Kelwin Low, Enosh Ting"
            className="w-full max-w-4xl mx-auto rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;

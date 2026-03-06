import { motion } from "framer-motion";
import teamGance from "@/assets/team-gance.png";
import teamWeisien from "@/assets/team-weisien.png";
import teamCheeyen from "@/assets/team-cheeyen.png";
import teamChiachung from "@/assets/team-chiachung.png";
import teamKelwin from "@/assets/team-kelwin.png";
import teamEnosh from "@/assets/team-enosh.png";

const teamMembers = [
  { name: "Dr. Gan Ce", role: "Founder & Chief Executive Officer", image: teamGance },
  { name: "Wei Sien", role: "Co-Founder & Chief Scientist Officer", image: teamWeisien },
  { name: "Chee Yen", role: "Certified Clinical Nutritionist", image: teamCheeyen },
  { name: "Chia Chung", role: "Market Research Director", image: teamChiachung },
  { name: "Kelwin Low", role: "Chief Operating Officer", image: teamKelwin },
  { name: "Enosh Ting", role: "Chief Business Analyst", image: teamEnosh },
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-3 bg-background shadow-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="font-heading text-base md:text-lg text-foreground mb-0.5">{member.name}</h3>
              <p className="text-muted-foreground font-body text-xs md:text-sm leading-snug">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

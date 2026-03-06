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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden mb-4 bg-background shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="font-heading text-lg md:text-xl text-foreground mb-1">{member.name}</h3>
              <p className="text-muted-foreground font-body text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

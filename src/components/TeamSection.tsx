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
{ name: "Enosh Ting", role: "Chief Business Analyst", image: teamEnosh }];


const TeamSection = () => {
  return (
    <section className="py-20 md:py-[80px] px-6 bg-secondary">
      <div className="max-w-site mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-[48px] text-foreground mb-16"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-heading text-lg text-foreground">{member.name}</p>
              <p className="text-sm text-muted-foreground font-body">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const team = [
  { name: "Max Ferrara", role: "Co-Founder", desc: "Chaparral High School Student" },
  { name: "Mason Lovejoy", role: "Co-Founder", desc: "Chaparral High School Student" },
];

const TeamSection = () => (
  <section id="team" className="section-padding bg-card/50">
    <div className="max-w-5xl mx-auto">
      <SectionHeading label="Leadership" title="Organization & Management" description="The founding team behind Aeternum Portentum." />
      <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {team.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center text-xl font-display text-primary">
              {t.name.split(" ").map(n => n[0]).join("")}
            </div>
            <h3 className="font-display text-base mb-1">{t.name}</h3>
            <p className="text-xs tracking-widest uppercase text-primary mb-3">{t.role}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const team = [
  { name: "Alexander Voss", role: "CEO & Co-Founder", desc: "15 years at LVMH, former VP Product at Richemont" },
  { name: "Dr. Elena Chen", role: "CTO & Co-Founder", desc: "Ex-Google DeepMind, PhD in Edge AI, 12 patents" },
  { name: "Marcus Rivera", role: "Head of Design", desc: "Former lead designer at Audemars Piguet" },
  { name: "Sophia Laurent", role: "CMO", desc: "Built DTC channels for two luxury unicorns" },
];

const TeamSection = () => (
  <section id="team" className="section-padding bg-card/50">
    <div className="max-w-5xl mx-auto">
      <SectionHeading label="Leadership" title="Organization & Management" description="A world-class team at the intersection of luxury, technology, and design." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

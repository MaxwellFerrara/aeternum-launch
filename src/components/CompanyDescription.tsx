import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Shield, Cpu, Gem } from "lucide-react";

const points = [
  { icon: Shield, title: "The Problem", text: "If you want a luxury watch, you give up smart features. If you want a smartwatch, it looks and feels cheap. There's nothing out there for people who want both." },
  { icon: Cpu, title: "Our Solution", text: "Portentum is a premium watch that actually does something. We're partnering with a top AI company to build real, useful features like health tracking, smart scheduling, and a personal assistant, all right on your wrist." },
  { icon: Gem, title: "Why Us", text: "We're two high school students who saw a gap in the market and decided to fill it. We're working on a deal with an established AI company to bring the best tech into a watch that actually looks good." },
];

const CompanyDescription = () => (
  <section className="section-padding bg-card/50">
    <div className="max-w-5xl mx-auto">
      <SectionHeading label="Company" title="Why Aeternum Exists" />
      <div className="grid md:grid-cols-3 gap-10">
        {points.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <p.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="text-lg font-display mb-3">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CompanyDescription;

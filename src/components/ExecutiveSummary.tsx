import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ExecutiveSummary = () => (
  <section id="about" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionHeading
        label="Executive Summary"
        title="Redefining Luxury Tech"
        description="Aeternum Portentum is building a smartwatch that looks and feels like a luxury timepiece but is packed with real AI features. We're going after the $80B luxury market with something nobody else is offering."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { num: "$850K", label: "Seed Funding", desc: "What we need to take Portentum from prototype to a real product on shelves." },
          { num: "$80B+", label: "Market Size", desc: "The global luxury market is huge and smart wearables are one of its fastest growing segments." },
          { num: "2027", label: "Target Launch", desc: "When we plan to launch with exclusive retail partners around the world." },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors"
          >
            <p className="text-3xl font-display text-gradient-gold mb-2">{item.num}</p>
            <p className="text-sm tracking-widest uppercase text-primary mb-3">{item.label}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExecutiveSummary;

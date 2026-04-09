import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ExecutiveSummary = () => (
  <section id="about" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionHeading
        label="Executive Summary"
        title="Redefining Luxury Tech"
        description="Aeternum – Portentum bridges the gap between haute horlogerie and cutting-edge AI, creating an entirely new category in the $80B luxury goods market."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { num: "$2.5M", label: "Seed Funding", desc: "Seeking initial investment to bring Portentum from prototype to market." },
          { num: "$80B+", label: "Market Size", desc: "Global luxury goods market with rapid growth in smart wearables." },
          { num: "2027", label: "Target Launch", desc: "Full commercial launch with exclusive retail partnerships worldwide." },
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

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Shield, Cpu, Gem } from "lucide-react";

const points = [
  { icon: Shield, title: "The Problem", text: "Luxury watches lack intelligence. Smartwatches lack prestige. No product serves the affluent, tech-savvy consumer who refuses to compromise." },
  { icon: Cpu, title: "Our Solution", text: "Portentum combines Swiss-grade craftsmanship with cutting-edge on-device AI, powered through a strategic partnership with a leading AI company, delivering health insights, predictive scheduling, and a concierge assistant, all in a timepiece worthy of the boardroom." },
  { icon: Gem, title: "Why Us", text: "Our founding team blends decades of luxury brand experience with deep AI/ML expertise. We are actively pursuing a licensing partnership with an established AI firm to integrate best-in-class inference engines for wearables." },
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

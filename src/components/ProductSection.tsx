import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import lifestyleWatch from "@/assets/lifestyle-watch.jpg";
import { Brain, Heart, Globe, Fingerprint } from "lucide-react";

const features = [
  { icon: Brain, title: "On-Device AI", desc: "Partner-integrated neural engine processes 1B parameters locally. No cloud dependency." },
  { icon: Heart, title: "Health Intelligence", desc: "Medical-grade sensors with predictive health insights and early anomaly detection." },
  { icon: Globe, title: "AI Concierge", desc: "Personal assistant that learns your patterns: travel, dining, scheduling, communications." },
  { icon: Fingerprint, title: "Biometric Security", desc: "Multi-factor authentication via heartbeat signature and on-wrist detection." },
];

const ProductSection = () => (
  <section id="product" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <SectionHeading label="Product Line" title="Portentum Features" description="Engineered without compromise. Every component selected for performance and beauty." />

      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={lifestyleWatch}
            alt="Portentum on wrist lifestyle shot"
            loading="lazy"
            width={1280}
            height={720}
            className="rounded-lg glow-gold"
          />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-colors"
            >
              <f.icon className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
              <h3 className="font-display text-sm mb-2">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Specs strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Case", value: "Grade 5 Titanium + 18K Gold" },
          { label: "Display", value: "1.6\" LTPO AMOLED 2000 nits" },
          { label: "Battery", value: "7 Days / 14 Days Ambient" },
          { label: "Water Resist.", value: "10 ATM (100m)" },
        ].map((s, i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-4 text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{s.label}</p>
            <p className="text-sm font-body font-medium">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductSection;

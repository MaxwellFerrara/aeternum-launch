import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Instagram, Globe, Users, Award } from "lucide-react";

const channels = [
  { icon: Instagram, title: "Social Media", desc: "Curated campaigns on Instagram, TikTok & LinkedIn targeting UHNW audiences and tech influencers." },
  { icon: Globe, title: "DTC E-Commerce", desc: "Exclusive online boutique with white-glove concierge ordering and AR try-on." },
  { icon: Users, title: "Strategic Partnerships", desc: "Placement in Harrods, Selfridges, Dubai Mall, and invitation-only trunk shows." },
  { icon: Award, title: "Brand Ambassadors", desc: "Partnerships with elite athletes, tech founders, and cultural icons." },
];

const MarketingStrategy = () => (
  <section className="section-padding bg-card/50">
    <div className="max-w-5xl mx-auto">
      <SectionHeading label="Go-To-Market" title="Marketing & Sales Strategy" />
      <div className="grid sm:grid-cols-2 gap-6">
        {channels.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-4 bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
          >
            <c.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <h3 className="font-display text-base mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MarketingStrategy;

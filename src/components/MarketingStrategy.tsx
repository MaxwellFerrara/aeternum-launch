import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Instagram, Globe, Users, Award } from "lucide-react";

const channels = [
  { icon: Instagram, title: "Social Media", desc: "Running targeted campaigns on Instagram, TikTok, and LinkedIn to reach people who care about luxury and tech." },
  { icon: Globe, title: "Online Store", desc: "Our own website with a premium shopping experience and AR try-on so you can see it on your wrist before buying." },
  { icon: Users, title: "Retail Partners", desc: "Getting into top stores like Harrods and Dubai Mall, plus exclusive invite-only events." },
  { icon: Award, title: "Brand Partners", desc: "Working with athletes, tech founders, and well-known figures to spread the word." },
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

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const marketData = [
  { name: "Luxury Watches", value: 52, color: "hsl(40, 70%, 50%)" },
  { name: "Smartwatches", value: 45, color: "hsl(40, 60%, 35%)" },
  { name: "AI Wearables", value: 18, color: "hsl(40, 80%, 65%)" },
  { name: "Portentum TAM", value: 8, color: "hsl(40, 70%, 50%)" },
];

const competitors = [
  { name: "Apple Watch Ultra", weakness: "No luxury positioning" },
  { name: "TAG Heuer Connected", weakness: "Limited AI capabilities" },
  { name: "Garmin MARQ", weakness: "Sport-focused, not prestige" },
];

const MarketAnalysis = () => (
  <section id="market" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        label="Market Analysis"
        title="A $8B Untapped Opportunity"
        description="Luxury watches and AI wearables are two massive markets, but nobody is combining them. That's our opportunity."
      />
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-lg p-6"
        >
          <p className="text-xs tracking-widest uppercase text-primary mb-4">Market Size ($ Billions)</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={marketData}>
              <XAxis dataKey="name" tick={{ fill: "hsl(220,10%,55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "hsl(220,10%,55%)", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "hsl(220,15%,8%)", border: "1px solid hsl(40,30%,20%)", borderRadius: 6, color: "hsl(40,20%,90%)" }} />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {marketData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-widest uppercase text-primary mb-6">Competitive Landscape</p>
          <div className="space-y-4">
            {competitors.map((c, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-5 flex justify-between items-center hover:border-primary/50 transition-colors">
                <span className="font-body font-medium">{c.name}</span>
                <span className="text-xs text-muted-foreground">{c.weakness}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 border border-primary/30 rounded-lg bg-primary/5">
            <p className="text-sm font-display text-primary">Who We're Selling To</p>
            <p className="text-sm text-muted-foreground mt-2">
              Wealthy individuals aged 30 to 55 · Tech executives and founders · Luxury collectors · Focused on the US, Europe, Middle East, and Asia
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MarketAnalysis;

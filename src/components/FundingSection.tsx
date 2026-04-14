import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const fundingData = [
  { name: "R&D / Engineering", value: 40, color: "hsl(40, 80%, 65%)" },
  { name: "Manufacturing", value: 25, color: "hsl(40, 70%, 50%)" },
  { name: "Marketing & Sales", value: 20, color: "hsl(40, 60%, 35%)" },
  { name: "Operations", value: 10, color: "hsl(40, 50%, 25%)" },
  { name: "Legal & IP", value: 5, color: "hsl(40, 40%, 18%)" },
];

const FundingSection = () => (
  <section id="funding" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionHeading
        label="Investment"
        title="Funding Request"
        description="We're looking for $850K to finish building the product, lock in manufacturing, and start selling."
      />
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-lg p-6"
        >
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={fundingData} cx="50%" cy="50%" innerRadius={70} outerRadius={120} paddingAngle={3} dataKey="value">
                {fundingData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} stroke="hsl(220,15%,8%)" strokeWidth={2} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "hsl(220,15%,8%)", border: "1px solid hsl(40,30%,20%)", borderRadius: 6, color: "hsl(40,20%,90%)" }} />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
        <div className="space-y-4">
          {fundingData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4"
            >
              <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: item.color }} />
              <div className="flex-1 flex justify-between items-center border-b border-border pb-3">
                <span className="text-sm">{item.name}</span>
                <span className="text-sm text-primary font-medium">{item.value}%</span>
              </div>
            </motion.div>
          ))}
          <div className="pt-4 border-t border-border">
            <p className="text-2xl font-display text-gradient-gold">$850,000</p>
            <p className="text-xs text-muted-foreground mt-1">Total Seed Round</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FundingSection;

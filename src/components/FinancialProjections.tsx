import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const revenueData = [
  { year: "2027", revenue: 0.6, costs: 0.9 },
  { year: "2028", revenue: 2.4, costs: 1.8 },
  { year: "2029", revenue: 6.2, costs: 3.8 },
  { year: "2030", revenue: 12.0, costs: 6.5 },
  { year: "2031", revenue: 20.0, costs: 9.8 },
];

const metrics = [
  { label: "Year 1 Revenue", value: "$600K" },
  { label: "Break-Even", value: "Month 14" },
  { label: "Year 1 Net Profit", value: "−$300K" },
  { label: "Year 3 Net Profit", value: "$2.4M" },
  { label: "5-Year ROI", value: "1,250%" },
  { label: "Gross Margin", value: "65%" },
];

const FinancialProjections = () => (
  <section id="financials" className="section-padding bg-card/50">
    <div className="max-w-6xl mx-auto">
      <SectionHeading label="Projections" title="Financial Outlook" description="Conservative projections based on 250-unit Year 1 production at $2,400 ASP, scaling to 8,000 units by Year 5." />

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card border border-border rounded-lg p-5 text-center hover:border-primary/50 transition-colors"
          >
            <p className="text-2xl font-display text-gradient-gold">{m.value}</p>
            <p className="text-xs text-muted-foreground tracking-wider uppercase mt-2">{m.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-card border border-border rounded-lg p-6"
      >
        <p className="text-xs tracking-widest uppercase text-primary mb-4">Revenue vs Costs ($ Millions)</p>
        <ResponsiveContainer width="100%" height={320}>
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(40,70%,50%)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="hsl(40,70%,50%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="year" tick={{ fill: "hsl(220,10%,55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "hsl(220,10%,55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: "hsl(220,15%,8%)", border: "1px solid hsl(40,30%,20%)", borderRadius: 6, color: "hsl(40,20%,90%)" }} />
            <Area type="monotone" dataKey="revenue" stroke="hsl(40,70%,50%)" fill="url(#goldGrad)" strokeWidth={2} name="Revenue" />
            <Area type="monotone" dataKey="costs" stroke="hsl(220,10%,40%)" fill="transparent" strokeWidth={1.5} strokeDasharray="5 5" name="Costs" />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  </section>
);

export default FinancialProjections;

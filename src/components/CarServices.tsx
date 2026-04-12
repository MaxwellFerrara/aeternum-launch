import { motion } from "framer-motion";
import { Camera, Film, Palette, MonitorPlay } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Rolling Shots",
    desc: "High-speed pursuit photography capturing motion blur perfection. Shot from chase vehicles with stabilized rigs.",
    price: "From $2,500",
  },
  {
    icon: Film,
    title: "Studio Sessions",
    desc: "Controlled lighting environments for editorial and commercial work. Multi-angle setups with painterly precision.",
    price: "From $4,000",
  },
  {
    icon: Palette,
    title: "Lifestyle & Editorial",
    desc: "On-location shoots blending architecture, landscape, and automotive beauty. Perfect for brand campaigns.",
    price: "From $3,500",
  },
  {
    icon: MonitorPlay,
    title: "Video Production",
    desc: "Cinematic 4K/8K automotive films. From 30-second social cuts to full-length brand documentaries.",
    price: "From $8,000",
  },
];

const CarServices = () => (
  <section id="services" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3 font-body">What We Do</p>
        <h2 className="text-5xl md:text-7xl font-display mb-4">SERVICES</h2>
        <div className="w-16 h-0.5 bg-primary mx-auto" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-card border border-border p-8 hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500" />
            <div className="flex items-start gap-5">
              <s.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <p className="text-xs tracking-widest uppercase text-primary">{s.price}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CarServices;

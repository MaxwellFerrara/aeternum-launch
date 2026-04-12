import { motion } from "framer-motion";
import carFerrari from "@/assets/car-ferrari.jpg";
import { Camera, Aperture, Film, Zap } from "lucide-react";

const stats = [
  { num: "500+", label: "Shoots Completed" },
  { num: "12", label: "Years Experience" },
  { num: "80+", label: "Brand Partners" },
  { num: "15", label: "Countries" },
];

const CarAbout = () => (
  <section id="about" className="section-padding bg-card">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src={carFerrari}
            alt="Studio shot of a Ferrari"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full glow-red"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3 font-body">About Us</p>
          <h2 className="text-5xl md:text-6xl font-display mb-6">WE LIVE FOR THE SHOT</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            ROLLER is a premium automotive photography studio specializing in high-speed rolling shots, dramatic studio work, and cinematic lifestyle imagery. We work with the world's most prestigious automotive brands and private collectors.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Every frame is meticulously composed — from the motion blur to the light reflections on carbon fiber. We don't just photograph cars. We capture their soul.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-display text-gradient-red">{s.num}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CarAbout;

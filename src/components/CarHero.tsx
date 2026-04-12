import { motion } from "framer-motion";
import heroCar from "@/assets/hero-car.jpg";

const CarHero = () => (
  <section className="relative h-screen overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroCar}
        alt="Cinematic rolling shot of a luxury supercar"
        width={1920}
        height={1080}
        className="w-full h-full object-cover animate-scale-in"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
    </div>

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4 font-body">
          Automotive Photography
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.85] mb-6">
          CAPTURING
          <br />
          <span className="text-gradient-red">SPEED</span>
        </h1>
        <p className="text-muted-foreground max-w-lg text-lg font-light leading-relaxed mb-8">
          High-end automotive photography and rolling shots. We freeze the moment where engineering meets art.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#gallery"
            className="px-8 py-3.5 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium hover:bg-primary/80 transition-colors inline-block text-center"
          >
            View Portfolio
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 border border-border text-foreground text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-colors inline-block text-center"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
      <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
    </motion.div>
  </section>
);

export default CarHero;

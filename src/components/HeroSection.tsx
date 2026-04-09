import { motion } from "framer-motion";
import heroWatch from "@/assets/hero-watch.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background glow */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 pt-24">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 text-center lg:text-left"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4 font-body">Aeternum · Portentum</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display leading-tight mb-6">
          The First{" "}
          <span className="text-gradient-gold">AI Luxury</span>
          <br />
          Smartwatch
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 text-lg font-light leading-relaxed">
          Where centuries of horological mastery meet the boundless potential of artificial intelligence. Crafted for visionaries who demand the extraordinary.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#about"
            className="px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-medium rounded-sm hover:bg-gold-light transition-colors"
          >
            Discover More
          </a>
          <a
            href="#funding"
            className="px-8 py-3 border border-border text-foreground text-sm tracking-widest uppercase rounded-sm hover:border-primary hover:text-primary transition-colors"
          >
            Investor Deck
          </a>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex-1 flex justify-center"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/10 blur-[80px] animate-pulse-gold" />
          <img
            src={heroWatch}
            alt="Aeternum Portentum AI Luxury Smartwatch"
            width={1024}
            height={1024}
            className="relative w-[350px] md:w-[450px] lg:w-[520px] animate-float drop-shadow-2xl"
          />
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

export default HeroSection;

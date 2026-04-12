import { motion } from "framer-motion";
import { useState } from "react";
import carPorsche from "@/assets/car-porsche.jpg";
import carMercedes from "@/assets/car-mercedes.jpg";
import carBmw from "@/assets/car-bmw.jpg";
import carFerrari from "@/assets/car-ferrari.jpg";
import carMclaren from "@/assets/car-mclaren.jpg";
import heroCar from "@/assets/hero-car.jpg";

const categories = ["All", "Rolling Shots", "Studio", "Lifestyle"];

const photos = [
  { src: heroCar, title: "Aventador SVJ", category: "Rolling Shots", location: "Pacific Coast Highway" },
  { src: carPorsche, title: "911 GT3 RS", category: "Rolling Shots", location: "Coastal Road, Malibu" },
  { src: carMercedes, title: "AMG GT Black Series", category: "Rolling Shots", location: "Black Forest, Germany" },
  { src: carFerrari, title: "488 Pista", category: "Studio", location: "Studio Session, LA" },
  { src: carBmw, title: "M4 Competition", category: "Lifestyle", location: "Mojave Desert" },
  { src: carMclaren, title: "720S Spider", category: "Rolling Shots", location: "Manhattan, NYC" },
];

const CarGallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active);

  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3 font-body">Portfolio</p>
          <h2 className="text-5xl md:text-7xl font-display mb-4">SELECTED WORK</h2>
          <div className="w-16 h-0.5 bg-primary" />
        </motion.div>

        {/* Filters */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300 border ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((photo, i) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden cursor-pointer aspect-[4/3]"
            >
              <img
                src={photo.src}
                alt={`${photo.title} - ${photo.category}`}
                loading="lazy"
                width={1280}
                height={854}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-xs tracking-[0.3em] uppercase text-primary mb-1">{photo.category}</p>
                <h3 className="font-display text-2xl">{photo.title}</h3>
                <p className="text-sm text-muted-foreground">{photo.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarGallery;

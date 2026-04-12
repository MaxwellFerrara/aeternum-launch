import { motion } from "framer-motion";
import { Mail, MapPin, Instagram } from "lucide-react";

const CarContact = () => (
  <section id="contact" className="section-padding bg-card">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3 font-body">Get in Touch</p>
        <h2 className="text-5xl md:text-7xl font-display mb-4">LET'S CREATE</h2>
        <div className="w-16 h-0.5 bg-primary mx-auto" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-muted-foreground leading-relaxed">
            Ready to showcase your machine in its best light? Whether it's a private collection piece or a commercial campaign, we bring the vision.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <span className="text-sm text-muted-foreground">studio@roller.com</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <span className="text-sm text-muted-foreground">Los Angeles, CA</span>
            </div>
            <div className="flex items-center gap-4">
              <Instagram className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <span className="text-sm text-muted-foreground">@roller.studio</span>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
          />
          <select className="w-full bg-background border border-border px-4 py-3 text-sm text-muted-foreground focus:border-primary focus:outline-none transition-colors">
            <option>Select Service</option>
            <option>Rolling Shots</option>
            <option>Studio Session</option>
            <option>Lifestyle & Editorial</option>
            <option>Video Production</option>
          </select>
          <textarea
            rows={4}
            placeholder="Tell us about your project..."
            className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-primary-foreground text-xs tracking-widest uppercase hover:bg-primary/80 transition-colors"
          >
            Send Inquiry
          </button>
        </motion.form>
      </div>
    </div>
  </section>
);

export default CarContact;

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ label, title, description }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <p className="text-xs tracking-[0.4em] uppercase text-primary mb-3 font-body">{label}</p>
    <h2 className="text-3xl md:text-5xl font-display mb-4">{title}</h2>
    {description && (
      <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
    )}
    <div className="w-16 h-px bg-primary mx-auto mt-6" />
  </motion.div>
);

export default SectionHeading;

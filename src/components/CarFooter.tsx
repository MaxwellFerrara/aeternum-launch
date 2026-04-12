const CarFooter = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-display text-2xl tracking-wider text-gradient-red">ROLLER</span>
      <p className="text-xs text-muted-foreground tracking-wider">
        © {new Date().getFullYear()} ROLLER Studio. All rights reserved.
      </p>
      <div className="flex gap-6">
        {["Instagram", "YouTube", "Behance"].map((s) => (
          <a key={s} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider">
            {s}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default CarFooter;

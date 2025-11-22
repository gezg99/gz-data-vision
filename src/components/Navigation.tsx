import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 flex items-center justify-center border-2 border-primary rounded-lg glow-cyan-sm group-hover:scale-110 transition-transform">
            <span className="text-xl font-display font-bold text-primary">GZ</span>
          </div>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("experience")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Experiencia
          </button>
          <button
            onClick={() => window.open("https://linkedin.com", "_blank")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </button>
          <button className="px-4 py-2 bg-primary/10 border border-primary/50 text-primary rounded-lg hover:bg-primary/20 transition-colors">
            Contacto
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-primary"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-card border-t border-border/50"
        >
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Experiencia
            </button>
            <button
              onClick={() => window.open("https://linkedin.com", "_blank")}
              className="block w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
            >
              LinkedIn
            </button>
            <button className="w-full px-4 py-2 bg-primary/10 border border-primary/50 text-primary rounded-lg hover:bg-primary/20 transition-colors">
              Contacto
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;

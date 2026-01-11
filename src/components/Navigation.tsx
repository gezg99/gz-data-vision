import { motion } from "framer-motion";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { label: t("nav.work"), id: "work" },
    { label: t("nav.experience"), id: "experience" },
    { label: t("nav.about"), id: "about" },
    { label: t("nav.contact"), id: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">GZ</span>
          </div>
          <span className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors hidden sm:block">
            Gustavo Zuleta
          </span>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
          
          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-xs font-medium"
            aria-label="Toggle language"
          >
            <Globe className="w-3 h-3" />
            {language.toUpperCase()}
          </button>
          
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-foreground" />
            ) : (
              <Sun className="w-4 h-4 text-foreground" />
            )}
          </button>

          <Button
            size="sm"
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {t("nav.getInTouch")}
          </Button>
        </div>

        {/* Mobile menu buttons */}
        <div className="md:hidden flex items-center gap-2">
          {/* Language toggle mobile */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 rounded-md bg-secondary hover:bg-secondary/80 transition-colors text-xs font-medium"
            aria-label="Toggle language"
          >
            {language.toUpperCase()}
          </button>
          
          {/* Theme toggle mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-foreground" />
            ) : (
              <Sun className="w-4 h-4 text-foreground" />
            )}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-card border-t border-border"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection("contact")}
            >
              {t("nav.getInTouch")}
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;

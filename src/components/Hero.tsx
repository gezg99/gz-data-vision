import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const LINKEDIN_URL = "https://www.linkedin.com/in/gustavo-zuleta-guerrero-/";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16 pb-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          {t("hero.role")}
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
        >
          Gustavo Zuleta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          {t("hero.description")}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail className="mr-2 h-4 w-4" />
            {t("nav.getInTouch")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-card"
            onClick={() => window.open(LINKEDIN_URL, '_blank')}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="text-muted-foreground hover:text-foreground"
          >
            <a href="/CV_Gustavo_Zuleta.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              {t("hero.downloadCV")}
            </a>
          </Button>
        </motion.div>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {/* Block 1 - Sistema */}
          <div className="bg-card rounded-xl p-6 border border-border/50 text-left">
            <span className="text-primary font-bold text-2xl md:text-3xl">0 → 1</span>
            <p className="text-foreground font-medium text-sm mt-2">{t("hero.metric1.title")}</p>
            <p className="text-muted-foreground text-xs mt-1">{t("hero.metric1.subtitle")}</p>
            <span className="inline-block mt-3 px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded">
              {t("hero.metric1.tag")}
            </span>
          </div>

          {/* Block 2 - Eficiencia */}
          <div className="bg-card rounded-xl p-6 border border-border/50 text-left">
            <span className="text-primary font-bold text-xl md:text-2xl">{t("hero.metric2.value")}</span>
            <p className="text-foreground font-medium text-sm mt-2">{t("hero.metric2.title")}</p>
            <span className="inline-block mt-3 px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded">
              {t("hero.metric2.tag")}
            </span>
          </div>

          {/* Block 3 - Verdad financiera */}
          <div className="bg-card rounded-xl p-6 border border-border/50 text-left">
            <span className="text-primary font-bold text-xl md:text-2xl">{t("hero.metric3.value")}</span>
            <p className="text-muted-foreground text-xs mt-2">{t("hero.metric3.subtitle")}</p>
            <span className="inline-block mt-3 px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded">
              {t("hero.metric3.tag")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

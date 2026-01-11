import { motion } from "framer-motion";
import { FileCheck, Database, Eye, Target } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const HowIWork = () => {
  const { t } = useLanguage();

  const principles = [
    {
      icon: FileCheck,
      title: t("how.principle1.title"),
      description: t("how.principle1.desc"),
    },
    {
      icon: Database,
      title: t("how.principle2.title"),
      description: t("how.principle2.desc"),
    },
    {
      icon: Eye,
      title: t("how.principle3.title"),
      description: t("how.principle3.desc"),
    },
    {
      icon: Target,
      title: t("how.principle4.title"),
      description: t("how.principle4.desc"),
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">{t("how.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {t("how.title")}
          </h2>
        </motion.div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-xl bg-card border border-border/50"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <principle.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;

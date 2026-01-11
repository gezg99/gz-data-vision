import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const AboutMe = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">{t("about.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {t("about.title")}
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">GZ</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              {t("about.p1")}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {t("about.p2")}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {t("about.p3")}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

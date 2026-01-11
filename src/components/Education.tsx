import { motion } from "framer-motion";
import { GraduationCap, Award, Languages, ExternalLink } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const certifications = [
  {
    name: "SQL Advanced",
    provider: "HackerRank",
    url: "https://www.hackerrank.com/certificates/cb8304ed6dff",
    verified: true,
  },
  {
    name: "Python for Data Science",
    provider: "A2 Capacitación",
    url: null, // PDF certificate, no public link
    verified: true,
  },
  {
    name: "Excel Avanzado",
    provider: "Udemy",
    url: "https://www.udemy.com/certificate/UC-766459b9-ba9d-43a1-af6d-747b4252b8c5/",
    verified: true,
  },
];

const Education = () => {
  const { t } = useLanguage();

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
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">{t("edu.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {t("edu.title")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl p-6 border border-border/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{t("edu.degree")}</h3>
                <p className="text-xs text-muted-foreground">{t("edu.school")}</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{t("edu.period")}</p>
            <p className="text-sm text-muted-foreground">
              {t("edu.desc")}
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl p-6 border border-border/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{t("edu.certs")}</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <div className="flex-1">
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        {cert.name}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-sm text-foreground">{cert.name}</span>
                    )}
                    <p className="text-xs text-muted-foreground">{cert.provider}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl p-6 border border-border/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Languages className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{t("edu.languages")}</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">{t("edu.spanish")}</span>
                <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded">{t("edu.native")}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-foreground">{t("edu.english")}</span>
                <span className="text-xs px-2 py-0.5 bg-secondary text-muted-foreground rounded">{t("edu.professional")}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const skillCategories = [
  {
    category: "Data & Analytics",
    skills: ["SQL", "Python", "Pandas", "NumPy", "Statistical Analysis", "Cohort Analysis", "A/B Testing"],
  },
  {
    category: "BI & Visualization",
    skills: ["Metabase", "Looker", "LookML", "Grafana", "Power BI", "Tableau", "QuickSight", "Data Studio"],
  },
  {
    category: "Data Engineering",
    skills: ["Redshift", "PostgreSQL", "BigQuery", "AWS S3", "ETL/ELT", "Data Modeling", "APIs"],
  },
  {
    category: "Business & Strategy",
    skills: ["Financial Modeling", "Forecasting", "KPI Design", "Pricing", "Semantic Models", "Data Governance"],
  },
  {
    category: "Tools & Platforms",
    skills: ["HubSpot", "Intercom", "Mixpanel", "Twilio", "Kushki", "Slack Integrations", "Git"],
  },
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">{t("skills.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {t("skills.title")}
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border/50"
            >
              <h3 className="text-sm font-semibold text-primary mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs bg-secondary rounded-md text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

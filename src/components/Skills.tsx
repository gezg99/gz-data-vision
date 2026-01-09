import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Data & Analytics",
    skills: ["SQL", "Python", "Statistical Analysis", "Cohort Analysis"],
  },
  {
    category: "BI & Visualization",
    skills: ["Metabase", "Looker", "LookML", "Grafana", "Data Studio"],
  },
  {
    category: "Data Engineering",
    skills: ["Redshift", "PostgreSQL", "APIs", "ETL"],
  },
  {
    category: "Business & Strategy",
    skills: ["Financial Modeling", "Forecasting", "KPI Design", "Pricing"],
  },
  {
    category: "Tools & Platforms",
    skills: ["HubSpot", "Intercom", "Mixpanel", "Twilio", "Kushki"],
  },
];

const Skills = () => {
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
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Skills & Tooling
          </h2>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-card border border-border/50 rounded-xl p-5"
            >
              <h3 className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary/50 border border-border/30 rounded-lg text-sm text-foreground hover:border-primary/30 transition-colors"
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

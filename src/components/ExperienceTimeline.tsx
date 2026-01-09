import { motion } from "framer-motion";

const experiences = [
  {
    period: "2024 – Presente",
    role: "Data & Business Analyst Specialist",
    company: "Cometa",
    badge: "🚀",
    isCurrent: true,
    bullets: [
      "Arquitectura completa de KPIs desde cero",
      "Descubrí margen real (72% vs 45% reportado)",
      "Reduje tiempo de análisis: 80h → 1h",
    ],
  },
  {
    period: "2023 – 2024",
    role: "Data Analyst",
    company: "Cometa",
    badge: "🚀",
    isCurrent: false,
    bullets: [
      "Integré 7 fuentes de datos a Redshift (Intercom, HubSpot, Kushki, etc.)",
      "Lideré BI bake-off que seleccionó Metabase",
      "+340 errores de data corregidos vía automatización",
    ],
  },
  {
    period: "2022 – 2024",
    role: "Operations Strategy & Planning",
    company: "Nubank",
    badge: "🦄",
    isCurrent: false,
    bullets: [
      "Diseñé visibilidad operativa para +300 agentes",
      "Dashboards en Looker, scorecards, monitoreo en Grafana",
      "SLA: 78% → 91% | Incidentes: -15%",
    ],
  },
];

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Experience</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Mi Trayectoria
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div 
                  className={`absolute left-2 md:left-4 top-1 w-4 h-4 rounded-full border-2 ${
                    exp.isCurrent 
                      ? 'bg-highlight border-highlight shadow-lg shadow-highlight/30' 
                      : 'bg-card border-primary'
                  }`}
                />

                {/* Content card */}
                <div 
                  className={`bg-card border rounded-xl p-5 ${
                    exp.isCurrent 
                      ? 'border-highlight/50 shadow-lg shadow-highlight/10' 
                      : 'border-border/50'
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="font-display font-bold text-foreground">{exp.role}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-primary font-medium">{exp.company}</span>
                    <span className="text-sm">{exp.badge}</span>
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 bg-highlight/20 border border-highlight/30 rounded-full text-xs text-highlight font-medium">
                        Actual
                      </span>
                    )}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;

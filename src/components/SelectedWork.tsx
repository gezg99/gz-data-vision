import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const SelectedWork = () => {
  const { language } = useLanguage();

  const projects = language === "es" ? [
    {
      title: "Data Hub Multi-Fuente",
      description: "Unificación de fuentes críticas para eliminar silos y fricción operativa.",
      detail: "Centralicé múltiples herramientas en un hub único para habilitar análisis confiable, automatización y reporting consistente a nivel empresa.",
      tags: ["Redshift", "APIs", "ETL", "Airbyte", "S3"],
      result: "Base sólida para KPIs, automatización y modelos de negocio.",
      resultLabel: "Resultado",
    },
    {
      title: "Automatización de Reporting",
      description: "Eliminación de trabajo manual recurrente.",
      detail: "Automaticé procesos de reporting que consumían decenas de horas mensuales, habilitando dashboards y outputs reutilizables para equipos operativos y de negocio.",
      tags: ["Automation", "Metabase", "SQL", "DBT"],
      result: "~80h mensuales → reporting automatizado",
      resultLabel: "Impacto",
    },
    {
      title: "Modelo de Margen Real por Colegio",
      description: "Decisiones financieras basadas en data real, no en supuestos manuales.",
      detail: "Migré comisiones, costos y revenue desde hojas de cálculo a un modelo automatizado conectado a data real (APIs + Metabase), permitiendo calcular margen por colegio en pocos clics.",
      tags: ["SQL", "Python", "Vercel", "APIs"],
      result: "Visibilidad confiable de margen",
      resultLabel: "Impacto clave",
    },
  ] : [
    {
      title: "Multi-Source Data Hub",
      description: "Unification of critical sources to eliminate silos and operational friction.",
      detail: "Centralized multiple tools into a single hub to enable reliable analysis, automation, and consistent reporting at company level.",
      tags: ["Redshift", "APIs", "ETL", "Airbyte", "S3"],
      result: "Solid foundation for KPIs, automation and business models.",
      resultLabel: "Result",
    },
    {
      title: "Reporting Automation",
      description: "Elimination of recurring manual work.",
      detail: "Automated reporting processes that consumed dozens of monthly hours, enabling reusable dashboards and outputs for operational and business teams.",
      tags: ["Automation", "Metabase", "SQL", "DBT"],
      result: "~80h monthly → automated reporting",
      resultLabel: "Impact",
    },
    {
      title: "Real Margin Model per School",
      description: "Financial decisions based on real data, not manual assumptions.",
      detail: "Migrated commissions, costs and revenue from spreadsheets to an automated model connected to real data (APIs + Metabase), enabling margin calculation per school in a few clicks.",
      tags: ["SQL", "Python", "Vercel", "APIs"],
      result: "Reliable margin visibility",
      resultLabel: "Key Impact",
    },
  ];

  const sectionTitle = language === "es" ? "Proyectos Destacados" : "Featured Projects";

  return (
    <section id="work" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {sectionTitle}
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Title - fixed height */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors min-h-[28px]">
                {project.title}
              </h3>
              
              {/* Description - fixed height */}
              <p className="text-sm font-medium text-foreground/80 mb-2 min-h-[40px]">
                {project.description}
              </p>

              {/* Detail - flex grow to fill space */}
              <p className="text-xs text-muted-foreground mb-4 min-h-[60px]">
                {project.detail}
              </p>

              {/* Tags - fixed height area */}
              <div className="flex flex-wrap gap-2 mb-4 min-h-[32px] items-start">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-secondary rounded-md text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Spacer to push result to bottom */}
              <div className="flex-grow" />

              {/* Result - always at bottom */}
              <div className="pt-4 border-t border-border/50 mt-auto">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-1">{project.resultLabel}</p>
                <p className="text-sm font-medium text-primary">{project.result}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;

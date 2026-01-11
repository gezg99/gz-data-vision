import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const OtherProjects = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "BI", "Finance", "Strategy", "Scraping", "Operations", "Data Quality"];

  const projects = [
    {
      title: language === "es" ? "One-Pagers por Área" : "Area One-Pagers",
      category: "BI",
      description: language === "es"
        ? "Dashboards ejecutivos para AM, Onboarding, Support, Sales, Marketing y Finance integrados a reporting semanal y seguimiento de OKRs"
        : "Executive dashboards for AM, Onboarding, Support, Sales, Marketing and Finance integrated with weekly reporting and OKR tracking",
    },
    {
      title: language === "es" ? "Normalización SIGED-HubSpot" : "SIGED-HubSpot Normalization",
      category: "Data Quality",
      description: language === "es"
        ? "50k+ escuelas (CCT) consolidadas con matching determinístico por ID + estado + municipio + nombre"
        : "50k+ schools (CCT) consolidated with deterministic matching by ID + state + municipality + name",
    },
    {
      title: language === "es" ? "Enriquecimiento de Datos" : "Data Enrichment",
      category: "Scraping",
      description: language === "es"
        ? "Extracción y consolidación de datos de contacto, sitios web y redes sociales para enriquecer base de prospectos"
        : "Extraction and consolidation of contact data, websites and social media to enrich prospect database",
    },
    {
      title: language === "es" ? "Migración Metabase Cloud" : "Metabase Cloud Migration",
      category: "BI",
      description: language === "es"
        ? "Migración de Metabase Open Source a Cloud (AWS): data models, alertas automatizadas, permisos multi-nivel y governance"
        : "Migration from Metabase Open Source to Cloud (AWS): data models, automated alerts, multi-level permissions and governance",
    },
    {
      title: language === "es" ? "Data Quality Alerts" : "Data Quality Alerts",
      category: "Data Quality",
      description: language === "es"
        ? "Pipeline automático que detecta anomalías en métricas y envía alertas a Slack con contexto"
        : "Automated pipeline that detects anomalies in metrics and sends alerts to Slack with context",
    },
    {
      title: language === "es" ? "Forecast de Ventas AM" : "AM Sales Forecast",
      category: "BI",
      description: language === "es"
        ? "Tracking de metas por Account Manager: GMV, TPV y adopción por cuenta para seguimiento de cierre trimestral"
        : "Target tracking by Account Manager: GMV, TPV and adoption per account for quarterly closing follow-up",
    },
    {
      title: language === "es" ? "Automatización de Turnos" : "Shift Automation",
      category: "Operations",
      description: language === "es"
        ? "Modelo de asignación óptima de turnos en Nubank que mejoró SLA de 78% a 91%"
        : "Optimal shift assignment model at Nubank that improved SLA from 78% to 91%",
    },
    {
      title: language === "es" ? "Performance de Agentes" : "Agent Performance System",
      category: "BI",
      description: language === "es"
        ? "Sistema de evaluación y scorecards para 300+ agentes en Nubank: productividad, calidad y tracking de mejora continua"
        : "Evaluation system and scorecards for 300+ agents at Nubank: productivity, quality and continuous improvement tracking",
    },
    {
      title: language === "es" ? "Budget 2026" : "Budget 2026",
      category: "Finance",
      description: language === "es"
        ? "Modelo de presupuesto por categoría (COGS, OPEX) y por squad (Tech, Ventas, G&A, Ops) con tracking Target vs Real mensual"
        : "Budget model by category (COGS, OPEX) and by squad (Tech, Sales, G&A, Ops) with monthly Target vs Actual tracking",
    },
    {
      title: language === "es" ? "Palancas NDR +20%" : "NDR +20% Growth Levers",
      category: "Strategy",
      description: language === "es"
        ? "Consultoría estratégica: árbol de palancas para expandir revenue (comisiones, SaaS, cobranza) y adquisición de clientes referidos"
        : "Strategic consulting: growth lever tree to expand revenue (commissions, SaaS, collections) and referred customer acquisition",
    },
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">{t("projects.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {t("projects.title")}
          </h2>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-sm rounded-lg transition-all ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-5 rounded-xl border bg-card border-border/50"
            >
              <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
              <span className="inline-block px-2 py-0.5 text-xs bg-secondary rounded mb-2">
                {project.category}
              </span>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;

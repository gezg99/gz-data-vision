import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const ExperienceTimeline = () => {
  const { t, language } = useLanguage();

  const experiences = [
    {
      period: language === "es" ? "Abr 2025 – Presente" : "Apr 2025 – Present",
      role: "Data Analyst - Specialist",
      company: "Cometa",
      badge: "🚀",
      isCurrent: true,
      bullets: language === "es" 
        ? [
            "Responsable de arquitectura de métricas y modelos de negocio (GMV, margin, pricing, forecast)",
            "Partner estratégico de founders para decisiones financieras y de crecimiento",
            "Escalé sistemas de reporting y semántica para habilitar equipos no técnicos",
          ]
        : [
            "Responsible for metrics architecture and business models (GMV, margin, pricing, forecast)",
            "Strategic partner to founders for financial and growth decisions",
            "Scaled reporting and semantic systems to enable non-technical teams",
          ],
    },
    {
      period: language === "es" ? "Ago 2024 – Abr 2025" : "Aug 2024 – Apr 2025",
      role: "Data Analyst - Analytics",
      company: "Cometa",
      badge: "🚀",
      isCurrent: false,
      bullets: language === "es"
        ? [
            "Consolidé el stack analítico integrando múltiples fuentes operativas y comerciales",
            "Lideré la selección y adopción de herramientas BI para toda la compañía",
            "Implementé controles y alertas de calidad de datos para operación diaria",
          ]
        : [
            "Consolidated the analytics stack integrating multiple operational and commercial sources",
            "Led the selection and adoption of BI tools for the entire company",
            "Implemented data quality controls and alerts for daily operations",
          ],
    },
    {
      period: language === "es" ? "Ene 2023 – Ago 2024" : "Jan 2023 – Aug 2024",
      role: "Operations Strategy & Planning",
      company: "Nubank",
      badge: "💜",
      isCurrent: false,
      bullets: language === "es"
        ? [
            "Optimicé planificación operativa con enfoque en eficiencia y SLA",
            "Diseñé modelos de asignación de capacidad basados en datos",
            "Reduje tiempos de ramp-up y fricción operativa en equipos de soporte",
          ]
        : [
            "Optimized operational planning with focus on efficiency and SLA",
            "Designed data-driven capacity allocation models",
            "Reduced ramp-up times and operational friction in support teams",
          ],
    },
    {
      period: language === "es" ? "Jul 2022 – Ene 2023" : "Jul 2022 – Jan 2023",
      role: "Customer Excellence Agent",
      company: "Nubank",
      badge: "💜",
      isCurrent: false,
      bullets: language === "es"
        ? [
            "Formación en excelencia operativa y experiencia de cliente",
            "Detección temprana de fricciones en procesos y productos",
            "Participación en pilotos y validación de nuevas soluciones financieras",
          ]
        : [
            "Training in operational excellence and customer experience",
            "Early detection of friction in processes and products",
            "Participation in pilots and validation of new financial solutions",
          ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">{t("exp.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            {t("exp.title")}
          </h2>
          <p className="text-muted-foreground">{t("exp.years")}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative pl-12 pb-10 ${index === experiences.length - 1 ? 'pb-0' : ''}`}
            >
              {/* Dot */}
              <div className={`absolute left-2.5 w-3 h-3 rounded-full ${exp.isCurrent ? 'bg-primary ring-4 ring-primary/20' : 'bg-border'}`} />

              {/* Content */}
              <div>
                {/* Current badge - now on its own line */}
                {exp.isCurrent && (
                  <span className="inline-block mb-2 px-2 py-0.5 text-[10px] font-medium bg-primary text-primary-foreground rounded">
                    {t("exp.current")}
                  </span>
                )}
                
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{exp.badge}</span>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                <p className="text-sm text-primary mb-3">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;

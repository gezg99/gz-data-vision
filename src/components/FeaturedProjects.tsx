import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, TrendingUp, Database, BarChart3 } from "lucide-react";

const projects = [
  {
    id: "margin",
    icon: TrendingUp,
    title: "Modelo de Margen por Colegio",
    subtitle: "Corrigiendo años de errores financieros",
    description: "Desarrollé el primer modelo real de margen que reveló una diferencia de 27 puntos porcentuales vs lo reportado, transformando la estrategia de pricing.",
    before: { label: "Margen reportado", value: "45%", color: "text-muted-foreground" },
    after: { label: "Margen real", value: "72%", color: "text-primary" },
  },
  {
    id: "datahub",
    icon: Database,
    title: "Data Hub Multi-fuente",
    subtitle: "Unificación de 7 sistemas en Redshift",
    description: "Integré Intercom, Treble, HubSpot, Kushki, Twilio, Mixpanel y Bancometa en un data hub centralizado, habilitando análisis cross-funcional.",
    architecture: ["Intercom", "Treble", "HubSpot", "Kushki", "Twilio", "Mixpanel", "Bancometa"],
  },
  {
    id: "forecast",
    icon: BarChart3,
    title: "Sistema de Forecast Operativo",
    subtitle: "Visibilidad para +300 agentes en Nubank",
    description: "Dashboards en Looker que mejoraron el SLA de 78% a 91% y redujeron errores operativos en 15% mediante capacity planning automatizado.",
    metrics: [
      { label: "SLA", before: "78%", after: "91%" },
      { label: "Errores", change: "-15%" },
    ],
  },
];

const FeaturedProjects = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Proyectos</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-2">
            Proyectos Destacados
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className={`bg-card border rounded-xl overflow-hidden transition-all duration-300 ${
                  expandedId === project.id ? 'border-primary/40' : 'border-border/50 hover:border-primary/20'
                }`}
              >
                {/* Header - always visible */}
                <button
                  onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                  className="w-full p-5 flex items-center gap-4 text-left"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-display font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <ChevronDown 
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      expandedId === project.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Expanded content */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedId === project.id ? 'auto' : 0,
                    opacity: expandedId === project.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    {/* Before/After for margin project */}
                    {project.before && project.after && (
                      <div className="flex gap-6 justify-center">
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground mb-1">{project.before.label}</p>
                          <p className={`text-2xl font-display font-bold ${project.before.color} line-through opacity-60`}>
                            {project.before.value}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground mb-1">{project.after.label}</p>
                          <p className={`text-2xl font-display font-bold ${project.after.color}`}>
                            {project.after.value}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Architecture diagram for datahub */}
                    {project.architecture && (
                      <div className="bg-background/50 rounded-lg p-4">
                        <div className="flex flex-wrap gap-2 justify-center items-center">
                          {project.architecture.map((source, i) => (
                            <div key={source} className="flex items-center gap-2">
                              <span className="px-2 py-1 bg-card border border-border/50 rounded text-xs text-muted-foreground">
                                {source}
                              </span>
                              {i < project.architecture.length - 1 && (
                                <span className="text-primary text-xs">→</span>
                              )}
                            </div>
                          ))}
                          <span className="text-primary font-bold ml-2">→ Redshift</span>
                        </div>
                      </div>
                    )}

                    {/* Metrics for forecast */}
                    {project.metrics && (
                      <div className="flex gap-6 justify-center">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="text-center">
                            <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                            {metric.before && metric.after ? (
                              <p className="text-lg font-display font-bold">
                                <span className="text-muted-foreground">{metric.before}</span>
                                <span className="text-primary mx-1">→</span>
                                <span className="text-primary">{metric.after}</span>
                              </p>
                            ) : (
                              <p className="text-lg font-display font-bold text-primary">
                                {metric.change}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

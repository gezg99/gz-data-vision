import { motion } from "framer-motion";
import { useState } from "react";

const categories = ["All", "BI", "Automation", "Operations", "Data Quality"];

const projects = [
  {
    title: "Control Tower Operativo",
    category: "BI",
    description: "Dashboard de soporte y comunicaciones para monitoreo en tiempo real",
  },
  {
    title: "Normalización SIGED-HubSpot",
    category: "Data Quality",
    description: "50k+ escuelas limpias y normalizadas entre sistemas",
  },
  {
    title: "Alertas de Data Quality",
    category: "Automation",
    description: "Validaciones automáticas y alertas para integridad de datos",
  },
  {
    title: "Forecast Operativo",
    category: "Operations",
    description: "Capacity planning para balancear carga diaria de agentes",
  },
  {
    title: "One-Pagers de Métricas",
    category: "BI",
    description: "Resúmenes ejecutivos para ventas, soporte, AM, onboarding y finanzas",
  },
];

const OtherProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

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
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">More Work</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Otros Proyectos
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border/50 text-muted-foreground hover:border-primary/30'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-card border border-border/50 rounded-xl p-5 hover:border-primary/30 transition-colors"
            >
              <span className="inline-block px-2 py-1 bg-primary/10 rounded text-xs text-primary mb-3">
                {project.category}
              </span>
              <h3 className="text-base font-display font-bold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;

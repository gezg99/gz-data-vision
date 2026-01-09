import { motion } from "framer-motion";
import { TrendingUp, Database, Clock, ExternalLink } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: "margin",
    icon: TrendingUp,
    title: "Modelo de Margen Real por Colegio",
    problem: "Los founders tomaban decisiones con margen incorrecto (45%)",
    tags: ["SQL", "Redshift", "Metabase"],
    result: { value: "72%", label: "Margen Real Descubierto" },
  },
  {
    id: "datahub",
    icon: Database,
    title: "Data Hub Multi-Fuente",
    problem: "7 herramientas sin conexión, datos en silos",
    tags: ["APIs", "Python", "Redshift"],
    result: { value: "7→1", label: "Fuentes → Hub Unificado" },
  },
  {
    id: "automation",
    icon: Clock,
    title: "Automatización de Reporting",
    problem: "80 horas mensuales de reportes manuales",
    tags: ["SQL", "Metabase", "Python"],
    result: { value: "80h→1h", label: "Por Ciclo" },
  },
];

const SelectedWork = () => {
  return (
    <section id="work" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
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
            Proyectos Destacados
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border border-border/50 rounded-xl p-6 h-full flex flex-col hover:border-primary/30 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {project.title}
                </h3>

                {/* Problem */}
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {project.problem}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary/50 rounded text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Result */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-3xl font-display font-bold text-primary mb-1">
                    {project.result.value}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {project.result.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;

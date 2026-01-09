import { motion } from "framer-motion";
import { Target, BarChart3, Eye, Zap } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Métricas como contratos",
    description: "Antes de construir algo, aseguro que todos acuerden qué significa éxito y cómo se mide.",
  },
  {
    icon: BarChart3,
    title: "Calidad antes que dashboards",
    description: "Ninguna visualización arregla datos malos. Priorizo integridad upstream antes de delivery downstream.",
  },
  {
    icon: Eye,
    title: "Diseño para observabilidad",
    description: "Los sistemas deben decirte cuándo fallan. Construyo monitoreo y alertas en cada pipeline.",
  },
  {
    icon: Zap,
    title: "Decisiones, no solo gráficas",
    description: "El objetivo no es un dashboard bonito—es que alguien pueda actuar con confianza.",
  },
];

const HowIWork = () => {
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
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Philosophy</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Cómo Trabajo
          </h2>
        </motion.div>

        {/* Principles grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <principle.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;

import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { AnimatedKPI, LineChart, DashboardMockup, TimeReduction, MarginComparison } from "./TimelineCharts";

const CometaSpecialistBlock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Timeline node with glow for current role */}
      <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-[hsl(var(--highlight))] rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-[hsl(var(--highlight)/0.4)]">
        <div className="absolute inset-0 bg-[hsl(var(--highlight))] rounded-full animate-ping opacity-30" />
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 md:gap-10">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:pr-10 md:text-right order-2 md:order-1"
        >
          <div className="bg-card border-2 border-[hsl(var(--highlight)/0.5)] rounded-xl p-5 hover:border-[hsl(var(--highlight)/0.7)] transition-all duration-300 relative overflow-hidden shadow-lg shadow-[hsl(var(--highlight)/0.1)]">
            {/* Current role glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[hsl(var(--highlight)/0.1)] rounded-full blur-3xl" />
            
            {/* Header with badges */}
            <div className="flex items-center gap-2 md:justify-end mb-3 relative z-10">
              <span className="px-2 py-0.5 bg-[hsl(var(--highlight)/0.15)] border border-[hsl(var(--highlight)/0.3)] rounded-full text-[10px] text-[hsl(var(--highlight))] font-medium">
                ✨ Rol Actual
              </span>
              <span className="px-2 py-0.5 bg-primary/10 rounded-full text-[10px] text-primary font-medium">
                🚀 Startup
              </span>
              <Target className="w-4 h-4 text-primary" />
            </div>
            
            <h3 className="text-xl font-display font-bold text-foreground mb-1 relative z-10">
              Data & Business Analyst Specialist
            </h3>
            <p className="text-sm text-primary font-medium mb-1">Cometa</p>
            <p className="text-xs text-[hsl(var(--highlight))] font-medium mb-4">2024 – Presente</p>
            
            {/* Problem → Solution → Result structure */}
            <div className="space-y-3 text-left md:text-right relative z-10">
              <div>
                <p className="text-xs text-primary/70 uppercase tracking-wider mb-1">El problema</p>
                <p className="text-sm text-muted-foreground">
                  Los founders tomaban decisiones con datos incorrectos—el margen reportado estaba completamente errado.
                </p>
              </div>
              
              <div>
                <p className="text-xs text-primary/70 uppercase tracking-wider mb-1">Mi solución</p>
                <p className="text-sm text-muted-foreground">
                  Descubrí que el margen real era 72%, no 45%. Construí la arquitectura completa de KPIs y reduje el tiempo de análisis de 80 horas a 1 hora por ciclo.
                </p>
              </div>
              
              <div>
                <p className="text-xs text-primary/70 uppercase tracking-wider mb-1">El resultado</p>
                <div className="flex flex-wrap gap-3 md:justify-end mt-2">
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-display font-bold text-primary">72%</p>
                    <p className="text-[10px] text-muted-foreground">Margen real</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-display font-bold text-primary">-85%</p>
                    <p className="text-[10px] text-muted-foreground">Tiempo análisis</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl md:text-3xl font-display font-bold text-primary">50k+</p>
                    <p className="text-[10px] text-muted-foreground">Escuelas limpias</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right side - Charts */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:pl-10 order-1 md:order-2"
        >
          <div className="bg-card/50 border border-border/30 rounded-xl p-4 space-y-4">
            {/* KPIs Row */}
            <div className="grid grid-cols-3 gap-2">
              <AnimatedKPI label="Reinscripción" value={68} prefix="+" suffix="%" />
              <AnimatedKPI label="Morosidad" value={12} prefix="-" suffix="pts" />
              <AnimatedKPI label="Tiempo" value={85} prefix="-" suffix="%" />
            </div>

            {/* Margin comparison */}
            <MarginComparison />

            {/* Pricing correction timeline */}
            <LineChart 
              title="Pricing corregido (evolución)"
            />

            {/* Dashboard mockup */}
            <div>
              <p className="text-xs text-muted-foreground mb-2">One-pagers de métricas</p>
              <DashboardMockup />
            </div>

            {/* Time reduction */}
            <TimeReduction />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CometaSpecialistBlock;

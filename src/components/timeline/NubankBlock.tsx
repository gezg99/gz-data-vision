import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { AreaChart, ComparisonBar, LineChart, AnimatedKPI } from "./TimelineCharts";

const NubankBlock = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Timeline node */}
      <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-primary/30" />
      
      <div className="grid md:grid-cols-2 gap-6 md:gap-10">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:pr-10 md:text-right order-2 md:order-1"
        >
          <div className="bg-card border border-border/50 rounded-xl p-5 hover:border-primary/20 transition-all duration-300 group">
            {/* Header with badge */}
            <div className="flex items-center gap-2 md:justify-end mb-3">
              <span className="px-2 py-0.5 bg-primary/10 rounded-full text-[10px] text-primary font-medium">
                🦄 Unicornio
              </span>
              <BarChart3 className="w-4 h-4 text-primary" />
            </div>
            
            <h3 className="text-lg font-display font-bold text-foreground mb-1">
              Operations Strategy & Planning
            </h3>
            <p className="text-sm text-primary font-medium mb-1">Nubank</p>
            <p className="text-xs text-muted-foreground mb-4">2022 – 2024</p>
            
            {/* Problem → Solution → Result structure */}
            <div className="space-y-3 text-left md:text-right">
              <div>
                <p className="text-xs text-primary/70 uppercase tracking-wider mb-1">El problema</p>
                <p className="text-sm text-muted-foreground">
                  Operación de +300 agentes sin visibilidad de performance ni herramientas de análisis.
                </p>
              </div>
              
              <div>
                <p className="text-xs text-primary/70 uppercase tracking-wider mb-1">Mi solución</p>
                <p className="text-sm text-muted-foreground">
                  Construí desde cero dashboards en Looker, scorecards individuales y monitoreo en tiempo real con Grafana. Implementé capacity planning y asignación dinámica de scopes.
                </p>
              </div>
              
              <div>
                <p className="text-xs text-primary/70 uppercase tracking-wider mb-1">El resultado</p>
                <div className="flex flex-wrap gap-3 md:justify-end mt-2">
                  <div className="text-center">
                    <p className="text-2xl font-display font-bold text-primary">91%</p>
                    <p className="text-[10px] text-muted-foreground">SLA (era 78%)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-display font-bold text-primary">-15%</p>
                    <p className="text-[10px] text-muted-foreground">Incidentes</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-display font-bold text-primary">-15%</p>
                    <p className="text-[10px] text-muted-foreground">Contactos pico</p>
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
            {/* Area chart for contacts reduction */}
            <AreaChart 
              title="Contactos en horas pico"
              reduction="–15%"
            />

            {/* SLA Comparison */}
            <ComparisonBar 
              label="SLA cumplimiento"
              before={78}
              after={91}
            />

            {/* Forecast vs Reality */}
            <LineChart 
              title="Forecast vs carga real"
              showComparison
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NubankBlock;

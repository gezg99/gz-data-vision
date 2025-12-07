import { motion } from "framer-motion";
import { Target, Zap } from "lucide-react";
import { KPICard, LineChart, DashboardMockup } from "./TimelineCharts";

const CometaSpecialistBlock = () => {
  const impacts = [
    "Arquitectura completa de KPIs 0 → 1 (GMV, churn, margin, forecast, revenue)",
    "Reducción del tiempo de reporting de 80h → 1h por ciclo",
    "Modelo real de margen por colegio (corrigiendo pricing defectuoso histórico)",
    "One-pagers y control towers para ventas, soporte, AM, onboarding y finanzas",
    "Normalización SIGED–HubSpot (50k+ escuelas limpias)",
    "Data quality, alertas operativas y validaciones automáticas",
    "Insights financieros para founders: drivers reales de rentabilidad"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Timeline node with glow for current role */}
      <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-primary/40">
        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
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
          <div className="bg-card border border-primary/20 rounded-xl p-5 hover:border-primary/30 transition-colors duration-300 relative overflow-hidden">
            {/* Current role indicator */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-full blur-2xl" />
            
            {/* Header */}
            <div className="flex items-center gap-2 md:justify-end mb-3 relative z-10">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-xs text-primary font-medium uppercase tracking-wider">Cometa • Presente</span>
            </div>
            
            <h3 className="text-lg font-display font-bold text-foreground mb-1">
              Data & Business Analyst Specialist
            </h3>
            <p className="text-xs text-primary font-medium mb-4">2024 – Presente</p>
            
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Transformé la inteligencia operativa y financiera creando la capa central de métricas que guía decisiones de founders. Desarrollé el modelo real de margen por colegio, corrigiendo años de errores contables y redefiniendo estrategia, pricing y rentabilidad.
            </p>

            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 md:text-right">Impacto Clave</p>
              <ul className="space-y-1.5">
                {impacts.map((impact, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.03 }}
                    className="text-xs text-muted-foreground flex items-start gap-2 md:flex-row-reverse md:text-right"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                    <span>{impact}</span>
                  </motion.li>
                ))}
              </ul>
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
              <KPICard label="Reinscripción" value="+68%" trend="up" />
              <KPICard label="Morosidad" value="–12pts" trend="down" />
              <KPICard label="Tiempo análisis" value="–85%" trend="down" />
            </div>

            {/* Margin comparison */}
            <div>
              <p className="text-xs text-muted-foreground mb-2">Margen estimado vs real</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-14">Estimado</span>
                  <div className="flex-1 h-3 bg-background/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "45%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="h-full bg-muted-foreground/30 rounded-full"
                    />
                  </div>
                  <span className="text-xs w-8 text-right">45%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground w-14">Real</span>
                  <div className="flex-1 h-3 bg-background/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "72%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                  <span className="text-xs font-medium text-primary w-8 text-right">72%</span>
                </div>
              </div>
            </div>

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
            <div className="bg-background/50 border border-border/30 rounded-lg p-3 text-center">
              <p className="text-xs text-muted-foreground mb-1">Tiempo de reporting</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-base font-display text-muted-foreground line-through">80h</span>
                <Zap className="w-3 h-3 text-primary" />
                <span className="text-xl font-display font-bold text-primary">1h</span>
              </div>
              <p className="text-[10px] text-muted-foreground mt-0.5">por ciclo</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CometaSpecialistBlock;
import { motion } from "framer-motion";
import { BarChart3, Users, Clock, TrendingDown } from "lucide-react";
import { KPICard, ComparisonBar, LineChart, DonutChart } from "./TimelineCharts";

const NubankBlock = () => {
  const impacts = [
    "Dashboards en Looker/LookML para performance, SLAs, volumen y carga",
    "Scorecards para 300+ agentes (calidad, productividad, tiempos)",
    "Monitoreo en Grafana para picos, incidencias y alertas",
    "Capacity planning y forecast operativo para balancear carga diaria",
    "Asignación dinámica de scopes (chats, emails, llamadas) para reducir backlog",
    "Experiencia previa en Customer Excellence (facturación, casos complejos)",
    "Puente directo con ingeniería (Databricks) para mejoras automáticas de routing"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Timeline node */}
      <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 shadow-lg shadow-primary/30" />
      
      <div className="grid md:grid-cols-2 gap-6 md:gap-12">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:pr-12 md:text-right order-2 md:order-1"
        >
          <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
            {/* Header */}
            <div className="flex items-center gap-2 md:justify-end mb-4">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span className="text-xs text-primary font-medium uppercase tracking-wider">Nubank</span>
            </div>
            
            <h3 className="text-xl font-display font-bold text-foreground mb-2">
              Operations Strategy & Planning
            </h3>
            <p className="text-sm text-primary font-medium mb-4">2022 – 2024</p>
            
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Diseñé visibilidad operativa para una operación de +300 agentes. Creé dashboards, scorecards y monitoreo en tiempo real que mejoraron eficiencia, calidad y capacidad táctica. Gestioné carga operativa, reduje contactos en horas pico y colaboré con ingeniería para automatizar routing.
            </p>

            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 md:text-right">Impacto Clave</p>
              <ul className="space-y-2">
                {impacts.map((impact, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="text-xs text-muted-foreground flex items-start gap-2 md:flex-row-reverse md:text-right"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
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
          className="md:pl-12 order-1 md:order-2"
        >
          <div className="bg-card/60 border border-border/30 rounded-xl p-5 space-y-5">
            {/* KPIs Row */}
            <div className="grid grid-cols-3 gap-3">
              <KPICard label="Contactos pico" value="–15%" trend="down" />
              <KPICard label="SLA Respuesta" value="91%" trend="up" />
              <KPICard label="Errores op." value="–15%" trend="down" />
            </div>

            {/* SLA Comparison */}
            <ComparisonBar 
              label="SLA de respuesta"
              before={78}
              after={91}
            />

            {/* Contacts in peak hours */}
            <LineChart 
              title="Contactos en horas pico (antes vs después)"
              showComparison
            />

            {/* Distribution Donut */}
            <DonutChart 
              title="Distribución por Squad"
              segments={[
                { label: "Chats", value: 35 },
                { label: "Emails", value: 25 },
                { label: "Calls", value: 25 },
                { label: "Otros", value: 15 },
              ]}
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

import { motion } from "framer-motion";
import { Database, Workflow, CheckCircle } from "lucide-react";
import { HorizontalBarChart, BigNumber, IntegrationMap, LineChart } from "./TimelineCharts";

const CometaAnalystBlock = () => {
  const impacts = [
    "Integración de Intercom, Treble, HubSpot, Kushki, Twilio, Bancometa y Mixpanel a Redshift",
    "Modelos semánticos iniciales que permitieron reporting sin SQL",
    "Selección de Metabase como BI principal tras comparar costo, performance y facilidad",
    "Automatización de cargas y correcciones vía endpoints internos",
    "Control tower piloto para soporte/comunicaciones",
    "Resolución de tickets críticos del ciclo escolar (nombres, matrículas, conceptos) con Python y APIs"
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
        {/* Left side - Charts */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:pr-12"
        >
          <div className="bg-card/60 border border-border/30 rounded-xl p-5 space-y-5">
            {/* Channel Visibility */}
            <div>
              <p className="text-xs text-muted-foreground mb-3">Visibilidad por canal</p>
              <HorizontalBarChart 
                data={[
                  { label: "WhatsApp", value: 92 },
                  { label: "Intercom", value: 85 },
                  { label: "Treble", value: 78 },
                  { label: "Portal", value: 65 },
                ]}
              />
            </div>

            {/* Big consolidation indicator */}
            <BigNumber 
              label="Consolidación multi-fuente"
              value="0 → 1"
              subtitle="Data hub unificado"
            />

            {/* Errors corrected */}
            <div className="grid grid-cols-2 gap-3">
              <BigNumber 
                label="Errores corregidos"
                value="+340"
              />
              <div className="bg-background/50 border border-border/30 rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-2">Tendencia</p>
                <div className="flex items-end gap-1 h-10">
                  {[20, 35, 45, 60, 72, 85].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex-1 bg-primary/60 rounded-t"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Integration map */}
            <IntegrationMap 
              sources={["Intercom", "Treble", "HubSpot", "Kushki", "Twilio", "Mixpanel", "Bancometa"]}
            />
          </div>
        </motion.div>

        {/* Right side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:pl-12"
        >
          <div className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors duration-300">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-5 h-5 text-primary" />
              <span className="text-xs text-primary font-medium uppercase tracking-wider">Cometa</span>
            </div>
            
            <h3 className="text-xl font-display font-bold text-foreground mb-2">
              Data Analyst
            </h3>
            <p className="text-sm text-primary font-medium mb-4">2023 – 2024</p>
            
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Construí las bases del data hub de la empresa unificando fuentes críticas y creando los primeros modelos de reporting y forecast. También lideré el BI bake-off que definió la herramienta principal de toda la compañía.
            </p>

            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Impacto Clave</p>
              <ul className="space-y-2">
                {impacts.map((impact, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="text-xs text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                    <span>{impact}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CometaAnalystBlock;

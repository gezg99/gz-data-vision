import { motion } from "framer-motion";
import { Database } from "lucide-react";
import { HorizontalBarChart, BigNumber, IntegrationMap } from "./TimelineCharts";

const CometaAnalystBlock = () => {
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
        {/* Left side - Charts */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:pr-10"
        >
          <div className="bg-card/50 border border-border/30 rounded-xl p-4 space-y-4">
            {/* Channel Visibility */}
            <div>
              <p className="text-xs text-muted-foreground mb-2">Visibilidad por canal</p>
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
            <div className="grid grid-cols-2 gap-2">
              <BigNumber 
                label="Errores corregidos"
                value="+340"
              />
              <div className="bg-background/50 border border-border/30 rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-2">Tendencia</p>
                <div className="flex items-end gap-1 h-8">
                  {[20, 35, 50, 65, 78, 90].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex-1 bg-primary/50 rounded-t"
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
          className="md:pl-10"
        >
          <div className="bg-card border border-border/50 rounded-xl p-5 hover:border-primary/20 transition-all duration-300 group">
            {/* Header with badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2 py-0.5 bg-primary/10 rounded-full text-[10px] text-primary font-medium">
                🚀 Startup
              </span>
              <Database className="w-4 h-4 text-primary" />
            </div>
            
            <h3 className="text-lg font-display font-bold text-foreground mb-1">
              Data Analyst
            </h3>
            <p className="text-sm text-primary font-medium mb-1">Cometa</p>
            <p className="text-xs text-muted-foreground mb-4">2023 – 2024</p>
            
            {/* Problem → Solution → Result structure */}
            <div className="space-y-3">
              <div>
                <p className="text-xs text-primary/70 uppercase tracking-wider mb-1">El problema</p>
                <p className="text-sm text-muted-foreground">
                  Datos aislados en 7 sistemas diferentes sin manera de cruzar información.
                </p>
              </div>
              
              <div>
                <p className="text-xs text-primary/70 uppercase tracking-wider mb-1">Mi solución</p>
                <p className="text-sm text-muted-foreground">
                  Construí el data hub integrando todas las fuentes a Redshift, creé modelos semánticos y lideré el BI bake-off que seleccionó Metabase.
                </p>
              </div>
              
              <div>
                <p className="text-xs text-primary/70 uppercase tracking-wider mb-1">El resultado</p>
                <div className="flex flex-wrap gap-3 mt-2">
                  <div className="text-center">
                    <p className="text-2xl font-display font-bold text-primary">7</p>
                    <p className="text-[10px] text-muted-foreground">Fuentes integradas</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-display font-bold text-primary">+340</p>
                    <p className="text-[10px] text-muted-foreground">Errores corregidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CometaAnalystBlock;

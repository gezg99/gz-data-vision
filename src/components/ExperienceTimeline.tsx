import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, TrendingUp, Shield, GraduationCap } from "lucide-react";

interface TimelineItemProps {
  period: string;
  company: string;
  title: string;
  description: string;
  impact: string[];
  metrics?: Array<{ label: string; value: string; trend?: "up" | "down" }>;
  chart?: React.ReactNode;
  icon: React.ReactNode;
  delay: number;
}

const TimelineItem = ({
  period,
  company,
  title,
  description,
  impact,
  metrics,
  chart,
  icon,
  delay,
}: TimelineItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="relative pl-8 md:pl-12 pb-16 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full glow-cyan-sm" />

      {/* Timeline line */}
      <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />

      {/* Content card */}
      <div className="bg-card border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 bg-primary/10 rounded-lg glow-cyan-sm group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <div className="flex-1">
            <p className="text-sm text-primary font-medium mb-1">{period} · {company}</p>
            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
              {title}
            </h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-primary font-semibold mb-3">Impacto Clave</h4>
          <ul className="space-y-2">
            {impact.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics display */}
        {metrics && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-secondary/50 border border-primary/20 rounded-lg p-4 hover:border-primary/50 transition-colors"
              >
                <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
                <p className={`text-2xl font-bold ${
                  metric.trend === "up" ? "text-green-500" : 
                  metric.trend === "down" ? "text-red-500" : 
                  "text-primary"
                }`}>
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Chart visualization */}
        {chart && (
          <div className="bg-secondary/30 rounded-lg p-4 border border-primary/10">
            {chart}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const CometaChart = () => (
  <div className="space-y-2">
    <p className="text-xs text-muted-foreground mb-3">Crecimiento de LTV por Cohorte</p>
    <div className="flex items-end justify-between gap-2 h-32">
      {[60, 75, 85, 95, 100].map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t"
        />
      ))}
    </div>
  </div>
);

const NubankChart = () => (
  <div className="relative h-32">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative w-32 h-32">
        <svg viewBox="0 0 100 100" className="transform -rotate-90">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="hsl(var(--secondary))"
            strokeWidth="8"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ strokeDasharray: "0 251.2" }}
            animate={{ strokeDasharray: "188.4 251.2" }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">85%</span>
        </div>
      </div>
    </motion.div>
  </div>
);

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Experience & Education Timeline
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mi trayectoria transformando datos en estrategias de negocio
          </p>
        </motion.div>

        <div className="relative">
          <TimelineItem
            period="2023 - Presente"
            company="Cometa"
            title="Liderazgo en Estrategia de Datos como Data Analyst Specialist"
            description="Impacto directo en la eficiencia operativa y el crecimiento del negocio."
            impact={[
              "Implementé control towers para ventas, AM y soporte con métricas accionables semanales",
              "Análisis de cartera que redujo la morosidad e incrementó la reinscripción",
              "Desarrollé el LTV para optimizar la estrategia de adquisición de clientes"
            ]}
            metrics={[
              { label: "Reinscripción 24-25", value: "68%" },
              { label: "Report Time", value: "-85%", trend: "down" },
              { label: "Morosidad", value: "-12 pts", trend: "down" }
            ]}
            chart={<CometaChart />}
            icon={<BarChart3 className="w-6 h-6 text-primary" />}
            delay={0.1}
          />

          <TimelineItem
            period="2021 - 2023"
            company="Nubank"
            title="Análisis y Detección de Fraude como Business Analyst"
            description="Protegiendo a millones de usuarios a través de la analítica de datos."
            impact={[
              "Creé dashboards en Looker para monitorear patrones de fraude en tiempo real, mejorando la detección",
              "Reduje falsos positivos en 15% mediante la optimización de modelos de riesgo"
            ]}
            metrics={[
              { label: "Fraude Detenido", value: "+2.3M", trend: "up" },
              { label: "Falsos Positivos", value: "-15%", trend: "down" }
            ]}
            chart={<NubankChart />}
            icon={<Shield className="w-6 h-6 text-primary" />}
            delay={0.2}
          />

          <TimelineItem
            period="2016 - 2021"
            company="UNAM"
            title="Fundamentos Analíticos y Técnicos en Ingeniería Mecatrónica"
            description="Formación sólida en resolución de problemas, estadística y programación."
            impact={[
              "Programación en Python y R para análisis estadístico avanzado",
              "Diseño y ejecución de proyectos de automatización y control",
              "Desarrollo de habilidades en cálculo, álgebra lineal y estadística aplicada"
            ]}
            icon={<GraduationCap className="w-6 h-6 text-primary" />}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;

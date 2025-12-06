import { motion } from "framer-motion";
import { Zap, Database, LayoutDashboard } from "lucide-react";

const KPICard = ({ label, value, trend }: { label: string; value: string; trend?: "up" | "down" }) => (
  <div className="bg-[#0D1B2A]/80 rounded-lg p-3 border border-[#1B3A5A]/40">
    <p className="text-[#8FA3B8] text-xs mb-1">{label}</p>
    <p className={`text-lg font-bold ${trend ? "text-[#00C8FF]" : "text-[#F2F6FA]"}`}>
      {value}
    </p>
  </div>
);

const BarChart = ({ data, title }: { data: { label: string; value: number }[]; title: string }) => (
  <div className="bg-[#0D1B2A]/60 rounded-lg p-4 border border-[#1B3A5A]/30">
    <p className="text-[#8FA3B8] text-xs mb-3">{title}</p>
    <div className="space-y-2">
      {data.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-[#8FA3B8] text-xs w-16 truncate">{item.label}</span>
          <div className="flex-1 h-4 bg-[#0A1626] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.value}%` }}
              transition={{ duration: 1, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="h-full rounded-full"
              style={{ background: `linear-gradient(90deg, #0066AA ${100 - item.value}%, #00C8FF 100%)` }}
            />
          </div>
          <span className="text-[#F2F6FA] text-xs w-8">{item.value}%</span>
        </div>
      ))}
    </div>
  </div>
);

const LineChart = ({ title }: { title: string }) => (
  <div className="bg-[#0D1B2A]/60 rounded-lg p-4 border border-[#1B3A5A]/30">
    <p className="text-[#8FA3B8] text-xs mb-3">{title}</p>
    <svg viewBox="0 0 200 60" className="w-full h-12">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0066AA" />
          <stop offset="100%" stopColor="#00C8FF" />
        </linearGradient>
      </defs>
      <motion.path
        d="M 0 45 Q 30 40, 50 35 T 100 25 T 150 20 T 200 10"
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />
      {[0, 50, 100, 150, 200].map((x, i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={45 - i * 8}
          r="3"
          fill="#00C8FF"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.15 }}
          viewport={{ once: true }}
        />
      ))}
    </svg>
  </div>
);

const DonutChart = ({ segments, title }: { segments: { label: string; value: number }[]; title: string }) => {
  const total = segments.reduce((acc, s) => acc + s.value, 0);
  let cumulative = 0;
  const colors = ["#00C8FF", "#0088CC", "#005588"];

  return (
    <div className="bg-[#0D1B2A]/60 rounded-lg p-4 border border-[#1B3A5A]/30">
      <p className="text-[#8FA3B8] text-xs mb-3">{title}</p>
      <div className="flex items-center gap-4">
        <svg viewBox="0 0 36 36" className="w-16 h-16">
          {segments.map((segment, i) => {
            const strokeDasharray = `${(segment.value / total) * 100} ${100 - (segment.value / total) * 100}`;
            const strokeDashoffset = 25 - cumulative;
            cumulative += (segment.value / total) * 100;
            return (
              <motion.circle
                key={i}
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke={colors[i % colors.length]}
                strokeWidth="3"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              />
            );
          })}
        </svg>
        <div className="space-y-1">
          {segments.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: colors[i % colors.length] }} />
              <span className="text-[#8FA3B8] text-xs">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface TimelineItemProps {
  title: string;
  period: string;
  description: string;
  impacts: string[];
  icon: React.ReactNode;
  dashboard: React.ReactNode;
  index: number;
}

const TimelineItem = ({ title, period, description, impacts, icon, dashboard, index }: TimelineItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    viewport={{ once: true, margin: "-50px" }}
    className="relative grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] gap-6 lg:gap-8"
  >
    {/* Content card */}
    <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-3 lg:col-start-3'}`}>
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className="bg-[#0A1626] rounded-2xl p-6 border border-[#1B3A5A]/50 
                   hover:border-[#00C8FF]/30 hover:shadow-[0_0_30px_rgba(0,200,255,0.08)]
                   transition-all duration-300"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2.5 rounded-xl bg-[#0D1B2A] border border-[#1B3A5A]/50 text-[#00C8FF]">
            {icon}
          </div>
          <div>
            <span className="text-[#00C8FF] text-sm font-medium">{period}</span>
            <h3 className="text-[#F2F6FA] text-lg font-semibold mt-1 leading-tight">{title}</h3>
          </div>
        </div>

        <p className="text-[#8FA3B8] text-sm leading-relaxed mb-5">{description}</p>

        <div className="space-y-2">
          <p className="text-[#F2F6FA] text-xs font-semibold uppercase tracking-wider mb-3">Impacto clave</p>
          {impacts.map((impact, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-1 h-1 rounded-full bg-[#00C8FF] mt-2 shrink-0" />
              <span className="text-[#8FA3B8] text-sm">{impact}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Timeline node */}
    <div className="hidden lg:flex lg:order-2 flex-col items-center">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-4 h-4 rounded-full bg-[#00C8FF] shadow-[0_0_20px_rgba(0,200,255,0.5)] z-10"
      />
      <div className="w-px flex-1 bg-gradient-to-b from-[#00C8FF]/50 to-[#1B3A5A]/30" />
    </div>

    {/* Dashboard */}
    <div className={`${index % 2 === 0 ? 'lg:order-3' : 'lg:order-1'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="space-y-3"
      >
        {dashboard}
      </motion.div>
    </div>
  </motion.div>
);

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Data & Business Analyst Specialist – Cometa",
      period: "2024 – Presente",
      description: "Transformé la inteligencia operativa y financiera de Cometa creando la capa central de métricas que hoy guía decisiones de founders y equipos.",
      impacts: [
        "Arquitectura completa de KPIs 0 → 1 (GMV, churn, margin, forecast, revenue)",
        "Reducción de tiempos de reporting de ~80h → 1h por ciclo",
        "Modelo real de margen por colegio (corrigiendo años de errores)",
        "Control Towers para ventas, soporte, AM, onboarding y finanzas",
        "Enriquecimiento SIGED–HubSpot (+50k escuelas normalizadas)",
        "Data quality y alertas operativas multi-área"
      ],
      icon: <Zap className="w-5 h-5" />,
      dashboard: (
        <>
          <div className="grid grid-cols-3 gap-2">
            <KPICard label="Reinscripción" value="+68%" trend="up" />
            <KPICard label="Morosidad" value="–12 pts" trend="down" />
            <KPICard label="Tiempo análisis" value="–85%" trend="down" />
          </div>
          <BarChart
            title="Margen real vs estimado"
            data={[
              { label: "Estimado", value: 45 },
              { label: "Real", value: 72 }
            ]}
          />
          <LineChart title="Pricing corregido desde datos transaccionales" />
        </>
      )
    },
    {
      title: "Data Analyst – Cometa",
      period: "2023 – 2024",
      description: "Construí las bases del data hub de la empresa unificando fuentes y creando los primeros modelos para reporting y forecasting.",
      impacts: [
        "Integración de Intercom, Treble, HubSpot, Kushki, Twilio y Mixpanel",
        "Modelos semánticos iniciales en Redshift",
        "Selección y adopción de Metabase como BI principal",
        "Automatización de ETLs y validaciones internas"
      ],
      icon: <Database className="w-5 h-5" />,
      dashboard: (
        <>
          <BarChart
            title="Visibilidad por canal"
            data={[
              { label: "Intercom", value: 85 },
              { label: "Treble", value: 78 },
              { label: "WhatsApp", value: 92 },
              { label: "Portal", value: 65 }
            ]}
          />
          <div className="grid grid-cols-2 gap-2">
            <KPICard label="Visibilidad multi-fuente" value="0 → 1" />
            <KPICard label="Errores corregidos" value="+340" trend="up" />
          </div>
        </>
      )
    },
    {
      title: "Operations Strategy & Planning – Nubank",
      period: "2022 – 2024",
      description: "Diseñé visibilidad operativa para una operación de +300 agentes. Creé dashboards, métricas, scorecards y monitoreo en tiempo real que mejoraron eficiencia y decisiones tácticas.",
      impacts: [
        "Dashboards en Looker/LookML para performance, SLAs, volumen y eficiencia",
        "Scorecards para 300+ agentes: calidad, carga y productividad",
        "Monitoreo en Grafana para picos, incidencias y alertas",
        "Forecast y capacity planning para carga operativa",
        "Puente entre ingeniería (Databricks) y negocio (ML en routing)",
        "Experiencia previa en Customer Excellence (facturación y casos complejos)"
      ],
      icon: <LayoutDashboard className="w-5 h-5" />,
      dashboard: (
        <>
          <DonutChart
            title="Distribución por Squad"
            segments={[
              { label: "Soporte", value: 45 },
              { label: "Ventas", value: 30 },
              { label: "Retención", value: 25 }
            ]}
          />
          <LineChart title="Volumen diario vs capacidad" />
          <div className="grid grid-cols-2 gap-2">
            <KPICard label="Errores reporteo" value="–15%" trend="down" />
            <KPICard label="Tiempo respuesta" value="–22%" trend="down" />
          </div>
        </>
      )
    }
  ];

  return (
    <section id="experiencia" className="py-24 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #050B17 0%, #08121F 100%)' }}>
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C8FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0066AA]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#00C8FF] text-sm font-medium tracking-widest uppercase">Trayectoria</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F2F6FA] mt-3">
            Experience Timeline
          </h2>
          <p className="text-[#8FA3B8] mt-4 max-w-2xl mx-auto">
            Mi evolución: de operaciones a escala en Nubank a construir la verdad del negocio en Cometa.
          </p>
        </motion.div>

        <div className="space-y-12 lg:space-y-16">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;

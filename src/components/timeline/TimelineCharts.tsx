import { motion } from "framer-motion";

// Shared KPI Card Component
export const KPICard = ({ 
  label, 
  value, 
  trend 
}: { 
  label: string; 
  value: string; 
  trend?: "up" | "down"; 
}) => (
  <div className="bg-background/50 border border-border/30 rounded-lg p-3 text-center">
    <p className="text-xs text-muted-foreground mb-1">{label}</p>
    <p className={`text-lg font-bold font-display ${trend === "up" ? "text-primary" : trend === "down" ? "text-primary" : "text-foreground"}`}>
      {value}
    </p>
  </div>
);

// Horizontal Bar Chart
export const HorizontalBarChart = ({ 
  data 
}: { 
  data: { label: string; value: number; color?: string }[] 
}) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="space-y-3">
      {data.map((item, index) => (
        <div key={item.label} className="space-y-1">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">{item.label}</span>
            <span className="text-foreground font-medium">{item.value}%</span>
          </div>
          <div className="h-2 bg-background/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(item.value / maxValue) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

// Comparison Bar Chart
export const ComparisonBar = ({ 
  label, 
  before, 
  after, 
  beforeLabel = "Antes", 
  afterLabel = "Después" 
}: { 
  label: string; 
  before: number; 
  after: number; 
  beforeLabel?: string; 
  afterLabel?: string; 
}) => (
  <div className="space-y-2">
    <p className="text-xs text-muted-foreground">{label}</p>
    <div className="flex gap-2 items-end h-16">
      <div className="flex-1 flex flex-col items-center">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: `${(before / Math.max(before, after)) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-muted-foreground/30 rounded-t"
        />
        <span className="text-[10px] text-muted-foreground mt-1">{beforeLabel}</span>
        <span className="text-xs font-medium">{before}%</span>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: `${(after / Math.max(before, after)) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full bg-primary rounded-t"
        />
        <span className="text-[10px] text-muted-foreground mt-1">{afterLabel}</span>
        <span className="text-xs font-medium text-primary">{after}%</span>
      </div>
    </div>
  </div>
);

// Line Chart
export const LineChart = ({ 
  title,
  dataPoints = 8,
  showComparison = false 
}: { 
  title: string;
  dataPoints?: number;
  showComparison?: boolean;
}) => {
  const generatePath = (variance: number, baseline: number) => {
    const points = [];
    for (let i = 0; i < dataPoints; i++) {
      const x = (i / (dataPoints - 1)) * 100;
      const y = baseline + (Math.random() - 0.5) * variance;
      points.push(`${x},${100 - y}`);
    }
    return `M ${points.join(" L ")}`;
  };

  return (
    <div className="space-y-2">
      <p className="text-xs text-muted-foreground">{title}</p>
      <div className="h-20 bg-background/30 rounded-lg p-2 relative overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
          {showComparison && (
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              d={generatePath(20, 60)}
              fill="none"
              stroke="hsl(var(--muted-foreground))"
              strokeWidth="2"
              strokeOpacity="0.3"
            />
          )}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            d={generatePath(15, 35)}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

// Big Number Indicator
export const BigNumber = ({ 
  label, 
  value, 
  subtitle 
}: { 
  label: string; 
  value: string; 
  subtitle?: string; 
}) => (
  <div className="bg-background/50 border border-border/30 rounded-lg p-4 text-center">
    <p className="text-xs text-muted-foreground mb-2">{label}</p>
    <motion.p
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200 }}
      className="text-3xl font-bold font-display text-primary"
    >
      {value}
    </motion.p>
    {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
  </div>
);

// Mini Integration Map
export const IntegrationMap = ({ 
  sources 
}: { 
  sources: string[] 
}) => (
  <div className="bg-background/30 rounded-lg p-3">
    <p className="text-xs text-muted-foreground mb-3 text-center">Integraciones</p>
    <div className="flex flex-wrap gap-2 justify-center">
      {sources.map((source, i) => (
        <motion.div
          key={source}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="px-2 py-1 bg-card border border-border/50 rounded text-[10px] text-muted-foreground"
        >
          {source}
        </motion.div>
      ))}
    </div>
  </div>
);

// Dashboard Mockup
export const DashboardMockup = () => (
  <div className="bg-background/40 border border-border/30 rounded-lg p-3 space-y-2">
    <div className="flex gap-2">
      <div className="w-2 h-2 rounded-full bg-destructive/50" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
      <div className="w-2 h-2 rounded-full bg-green-500/50" />
    </div>
    <div className="grid grid-cols-3 gap-1">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="h-4 bg-primary/20 rounded"
        />
      ))}
    </div>
    <div className="h-8 bg-primary/10 rounded" />
  </div>
);

// Donut Chart
export const DonutChart = ({ 
  title,
  segments 
}: { 
  title: string;
  segments: { label: string; value: number }[];
}) => {
  const total = segments.reduce((acc, s) => acc + s.value, 0);
  let currentAngle = 0;

  return (
    <div className="space-y-2">
      <p className="text-xs text-muted-foreground text-center">{title}</p>
      <div className="relative w-20 h-20 mx-auto">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          {segments.map((segment, i) => {
            const angle = (segment.value / total) * 360;
            const startAngle = currentAngle;
            currentAngle += angle;
            
            const startRad = (startAngle * Math.PI) / 180;
            const endRad = ((startAngle + angle) * Math.PI) / 180;
            
            const x1 = 50 + 35 * Math.cos(startRad);
            const y1 = 50 + 35 * Math.sin(startRad);
            const x2 = 50 + 35 * Math.cos(endRad);
            const y2 = 50 + 35 * Math.sin(endRad);
            
            const largeArc = angle > 180 ? 1 : 0;
            
            return (
              <motion.path
                key={segment.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                d={`M 50 50 L ${x1} ${y1} A 35 35 0 ${largeArc} 1 ${x2} ${y2} Z`}
                fill={i === 0 ? "hsl(var(--primary))" : `hsl(var(--primary) / ${0.6 - i * 0.15})`}
              />
            );
          })}
          <circle cx="50" cy="50" r="20" fill="hsl(var(--card))" />
        </svg>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {segments.map((s, i) => (
          <span key={s.label} className="text-[9px] text-muted-foreground">{s.label}</span>
        ))}
      </div>
    </div>
  );
};

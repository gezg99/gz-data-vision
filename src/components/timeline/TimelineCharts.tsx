import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Count up animation hook
const useCountUp = (endValue: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = endValue / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= endValue) {
              setCount(endValue);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration, hasAnimated]);

  return { count, ref };
};

// Shared KPI Card Component with large numbers
export const KPICard = ({ 
  label, 
  value, 
  trend,
  large = false
}: { 
  label: string; 
  value: string; 
  trend?: "up" | "down";
  large?: boolean;
}) => (
  <div className="bg-background/50 border border-border/30 rounded-lg p-3 text-center">
    <p className="text-xs text-muted-foreground mb-1">{label}</p>
    <p className={`font-bold font-display ${large ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'} ${trend ? "text-primary" : "text-foreground"}`}>
      {value}
    </p>
  </div>
);

// Animated KPI with count-up
export const AnimatedKPI = ({
  label,
  value,
  suffix = "",
  prefix = ""
}: {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}) => {
  const { count, ref } = useCountUp(value);
  
  return (
    <div ref={ref} className="bg-background/50 border border-border/30 rounded-lg p-3 text-center">
      <p className="text-xs text-muted-foreground mb-1">{label}</p>
      <p className="text-2xl md:text-3xl font-bold font-display text-primary">
        {prefix}{count}{suffix}
      </p>
    </div>
  );
};

// Area Chart with gradient (for contacts reduction)
export const AreaChart = ({ 
  title,
  reduction
}: { 
  title: string;
  reduction: string;
}) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <p className="text-xs text-muted-foreground">{title}</p>
        <span className="text-sm font-bold text-primary">{reduction}</span>
      </div>
      <div className="h-16 bg-background/30 rounded-lg p-2 relative overflow-hidden">
        <svg viewBox="0 0 100 40" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {/* Before line (higher) */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            d="M 0,10 Q 25,12 50,15 T 100,18"
            fill="none"
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          {/* After area (lower, with gradient) */}
          <motion.path
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            d="M 0,25 Q 25,28 50,30 T 100,32 L 100,40 L 0,40 Z"
            fill="url(#areaGradient)"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            d="M 0,25 Q 25,28 50,30 T 100,32"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="flex justify-between text-[10px] text-muted-foreground">
        <span>Antes</span>
        <span>Después</span>
      </div>
    </div>
  );
};

// Animated Comparison Bar
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
    <div className="flex gap-3 items-end h-20">
      <div className="flex-1 flex flex-col items-center">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: `${(before / Math.max(before, after)) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-muted-foreground/30 rounded-t"
        />
        <span className="text-[10px] text-muted-foreground mt-1">{beforeLabel}</span>
        <span className="text-base font-bold font-display">{before}%</span>
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
        <span className="text-base font-bold font-display text-primary">{after}%</span>
      </div>
    </div>
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

// Line Chart for Forecast
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
      <div className="h-16 bg-background/30 rounded-lg p-2 relative overflow-hidden">
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
      className="text-3xl md:text-4xl font-bold font-display text-primary"
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

// Time reduction visual
export const TimeReduction = () => (
  <div className="bg-background/50 border border-border/30 rounded-lg p-4 text-center">
    <p className="text-xs text-muted-foreground mb-2">Tiempo de reporting</p>
    <div className="flex items-center justify-center gap-3">
      <div className="relative">
        <span className="text-2xl md:text-3xl font-display text-muted-foreground/50 line-through">80h</span>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
        className="text-primary"
      >
        →
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full" />
        <span className="relative text-3xl md:text-4xl font-display font-bold text-primary">1h</span>
      </motion.div>
    </div>
    <p className="text-[10px] text-muted-foreground mt-2">por ciclo</p>
  </div>
);

// Margin comparison horizontal bars
export const MarginComparison = () => (
  <div className="space-y-2">
    <p className="text-xs text-muted-foreground mb-3">Margen estimado vs real</p>
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground w-16">Estimado</span>
        <div className="flex-1 h-4 bg-background/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "45%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full bg-muted-foreground/40 rounded-full"
          />
        </div>
        <span className="text-sm font-bold w-12 text-right text-muted-foreground">45%</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-muted-foreground w-16">Real</span>
        <div className="flex-1 h-4 bg-background/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "72%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full"
          />
        </div>
        <span className="text-lg font-bold w-12 text-right text-primary">72%</span>
      </div>
    </div>
  </div>
);

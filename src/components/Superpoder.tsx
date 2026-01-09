import { motion } from "framer-motion";
import { Target, Zap, Link2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CountUpNumber = ({ 
  value, 
  suffix = "", 
  prefix = "" 
}: { 
  value: number; 
  suffix?: string; 
  prefix?: string;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
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
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="metric-xl text-primary">
      {prefix}{count}{suffix}
    </span>
  );
};

const superpowers = [
  {
    icon: Target,
    title: "Encuentro la verdad en los datos",
    description: "Descubrí que el margen real era",
    metric: { value: 72, suffix: "%", prefix: "" },
    context: "no 45% como se creía",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Automatizo lo tedioso",
    description: "Reduje",
    metric: { value: 80, suffix: "h", prefix: "" },
    context: "de reporting a 1 hora",
    color: "text-primary"
  },
  {
    icon: Link2,
    title: "Conecto silos",
    description: "Integré",
    metric: { value: 7, suffix: "", prefix: "" },
    context: "fuentes de datos en un solo hub",
    color: "text-primary"
  }
];

const Superpoder = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Mi Superpoder</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-2">
            Lo que hago diferente
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {superpowers.map((power, index) => (
            <motion.div
              key={power.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <power.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-display font-bold text-foreground mb-3">
                {power.title}
              </h3>

              {/* Description with metric */}
              <p className="text-sm text-muted-foreground mb-2">
                {power.description}
              </p>

              {/* Big metric */}
              <div className="mb-2">
                <CountUpNumber 
                  value={power.metric.value} 
                  suffix={power.metric.suffix}
                  prefix={power.metric.prefix}
                />
              </div>

              {/* Context */}
              <p className="text-xs text-muted-foreground">
                {power.context}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Superpoder;

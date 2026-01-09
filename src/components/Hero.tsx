import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CountUpNumber = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500;
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

  return <span ref={ref}>{count}{suffix}</span>;
};

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 pt-24 pb-16">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          {/* Name */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-3"
          >
            Gustavo Zuleta
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-primary font-display font-medium mb-4"
          >
            Data & Business Analyst
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Transformo datos caóticos en decisiones de negocio. He trabajado en Nubank y Cometa 
            construyendo sistemas de métricas que generan millones.
          </motion.p>
        </div>

        {/* Metric Cards */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto"
        >
          {/* Revenue Impact */}
          <div className="bg-card border border-border/50 rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
            <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
              $<CountUpNumber value={10} />M+
            </p>
            <p className="text-sm text-muted-foreground">Revenue Impact</p>
          </div>

          {/* Reporting Automation */}
          <div className="bg-card border border-border/50 rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
            <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
              80h → 1h
            </p>
            <p className="text-sm text-muted-foreground">Reporting Automation</p>
          </div>

          {/* Margin Discovery */}
          <div className="bg-card border border-border/50 rounded-xl p-6 text-center hover:border-primary/30 transition-colors">
            <p className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
              72% vs 45%
            </p>
            <p className="text-sm text-muted-foreground">Margin Discovery</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-card"
            onClick={() => window.open('https://linkedin.com/in/gustavo-zuleta', '_blank')}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-card"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

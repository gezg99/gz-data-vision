import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo with hexagonal frame */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 flex justify-center"
        >
          <div className="relative">
            <div className="w-48 h-48 flex items-center justify-center">
              {/* Hexagonal glow effect */}
              <div className="absolute inset-0 glow-cyan-sm animate-glow" style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
              }} />
              {/* Hexagonal border */}
              <div className="absolute inset-2 border-2 border-primary/50" style={{
                clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
              }} />
              {/* Logo content */}
              <div className="relative z-10">
                <span className="text-7xl font-display font-bold text-foreground">GZ</span>
              </div>
            </div>
            {/* Animated line accent */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "50%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute left-0 top-1/2 h-0.5 bg-primary"
            />
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl font-display font-bold mb-4 text-foreground"
        >
          Gustavo Zuleta
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-3xl text-primary mb-8 font-display"
        >
          Data & Business Analyst
        </motion.p>

        {/* Subtitle with powerful message */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Transformo empresas desde adentro. Convierto métricas en decisiones
          reales y el caos operativo en claridad estratégica.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan-sm transition-all duration-300 group"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explorar CV
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10"
            onClick={() => window.open('https://linkedin.com', '_blank')}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            Conectar en LinkedIn
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10"
          >
            <Mail className="mr-2 h-4 w-4" />
            Hablemos
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-muted-foreground text-sm animate-bounce"
        >
          <p className="mb-2">Scroll para descubrir impacto</p>
          <div className="w-6 h-10 mx-auto border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

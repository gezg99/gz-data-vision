import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Linkedin, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Logo with hexagonal frame */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 flex justify-center"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            {/* Outer glow */}
            <div 
              className="absolute inset-0 bg-primary/20 blur-xl animate-glow"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
              }}
            />
            {/* Hexagon background */}
            <div 
              className="absolute inset-2 bg-card/80 backdrop-blur-sm"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
              }}
            />
            {/* Hexagon border */}
            <div 
              className="absolute inset-2 border-2 border-primary/40"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
              }}
            />
            {/* Logo text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl md:text-7xl font-display font-bold text-foreground tracking-tight">GZ</span>
            </div>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-2"
        >
          Hola, soy
        </motion.p>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-3 text-foreground"
        >
          Gustavo Zuleta
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-primary mb-8 font-display font-medium"
        >
          Data & Business Analyst
        </motion.p>

        {/* Subtitle message */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transformo operaciones y estrategia desde adentro. Convierto el caos en claridad usando datos.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 transition-all duration-300 group shadow-lg shadow-primary/20"
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explorar CV
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50"
            onClick={() => window.open('https://linkedin.com', '_blank')}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Hablemos
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";

const GameChanger = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated data flow background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Flowing lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
        {/* Floating nodes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute w-2 h-2 bg-primary/40 rounded-full"
            style={{
              top: `${10 + Math.random() * 80}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Accent corner glow */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-1 h-8 bg-primary rounded-full" />
              <span className="text-primary font-display text-sm uppercase tracking-widest">Game Changer</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl lg:text-3xl font-display font-medium text-foreground leading-relaxed mb-6"
            >
              Soy un <span className="text-primary">Game Changer</span> en Operaciones, Data y Estrategia.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6"
            >
              He trabajado en unicornios como <span className="text-foreground font-medium">Nubank</span> y en startups de crecimiento acelerado como <span className="text-foreground font-medium">Cometa</span>, rediseñando métricas, operaciones, modelos financieros y sistemas completos de reporting.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Mi especialidad es <span className="text-primary font-medium">reemplazar modelos defectuosos por métricas que revelan la verdad del negocio</span>.
            </motion.p>
          </div>

          {/* Bottom accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-left"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GameChanger;

import { motion } from "framer-motion";

const GameChanger = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 relative overflow-hidden"
        >
          {/* Accent corner glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-1 h-6 bg-primary rounded-full" />
              <span className="text-primary font-display text-sm uppercase tracking-widest">Game Changer</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-foreground leading-relaxed mb-4"
            >
              Soy un <span className="text-primary font-medium">Game Changer</span> en Operaciones, Data y Estrategia.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base text-muted-foreground leading-relaxed mb-4"
            >
              He trabajado en unicornios como <span className="text-foreground font-medium">Nubank</span> y en startups de crecimiento acelerado como <span className="text-foreground font-medium">Cometa</span>, rediseñando métricas, operaciones, modelos financieros y sistemas completos de reporting.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base text-muted-foreground leading-relaxed"
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
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent origin-left"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GameChanger;
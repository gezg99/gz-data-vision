import { motion } from "framer-motion";

const GameChanger = () => {
  return (
    <section className="py-12 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card border border-border/50 rounded-2xl p-8 md:p-10 relative overflow-hidden"
        >
          {/* Dataflow background pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dataflow" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1" fill="hsl(var(--primary))" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dataflow)" />
            </svg>
            {/* Flowing lines */}
            <motion.div
              animate={{ x: [0, 100, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            />
            <motion.div
              animate={{ x: [0, -100, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            />
          </div>

          {/* Accent corner glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          {/* Content */}
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl text-foreground leading-relaxed mb-4"
            >
              Soy un <span className="text-primary font-semibold">especialista en transformar caos operativo en claridad</span> a través de datos.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base text-muted-foreground leading-relaxed mb-4"
            >
              He trabajado en unicornios como <span className="text-foreground font-medium">Nubank</span> y en startups de crecimiento acelerado como <span className="text-foreground font-medium">Cometa</span>, rediseñando métricas, operaciones, modelos financieros y sistemas completos de reporting.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base text-muted-foreground leading-relaxed"
            >
              Mi especialidad: <span className="text-primary font-medium">reemplazar modelos defectuosos por métricas que revelan la verdad del negocio</span>.
            </motion.p>
          </div>

          {/* Bottom accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent origin-left"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GameChanger;

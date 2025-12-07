import { motion } from "framer-motion";
import NubankBlock from "./timeline/NubankBlock";
import CometaAnalystBlock from "./timeline/CometaAnalystBlock";
import CometaSpecialistBlock from "./timeline/CometaSpecialistBlock";

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/2 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Trayectoria</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2">
            Experience Timeline
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Mi evolución: de operaciones a escala en Nubank a construir la verdad del negocio en Cometa.
          </p>
        </motion.div>

        {/* Timeline vertical line */}
        <div className="absolute left-0 md:left-1/2 top-40 bottom-20 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" style={{ transform: 'translateX(-50%)' }} />

        {/* Timeline blocks */}
        <div className="space-y-16 md:space-y-20 pl-6 md:pl-0">
          <NubankBlock />
          <CometaAnalystBlock />
          <CometaSpecialistBlock />
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
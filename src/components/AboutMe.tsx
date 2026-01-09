import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Sobre Mí
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 bg-card border-2 border-primary/40 rounded-full flex items-center justify-center">
              <span className="text-4xl md:text-5xl font-display font-bold text-primary">GZ</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground leading-relaxed">
              Me apasiona transformar el caos de datos en claridad estratégica. Creo firmemente que 
              los mejores insights vienen de cuestionar las métricas que todos dan por sentadas—como 
              cuando descubrí que el margen reportado de una empresa estaba 27 puntos por debajo de la realidad.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Mi filosofía es simple: los datos deben servir para tomar decisiones, no solo para 
              llenar dashboards. Por eso me enfoco en construir sistemas que no solo reportan, 
              sino que alertan, predicen y permiten actuar con confianza.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Fuera del trabajo, me interesa la intersección entre tecnología y negocios, 
              explorar nuevas herramientas de productividad y optimizar procesos—tanto 
              profesionales como personales.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

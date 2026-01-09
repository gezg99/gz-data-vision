import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Mail, Linkedin, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Contact</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Si necesitas ayuda con análisis de datos, arquitectura de métricas o 
            transformar operaciones caóticas en sistemas claros, hablemos.
          </p>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => window.location.href = 'mailto:gustavo.zuleta@email.com'}
          >
            <Mail className="mr-2 h-4 w-4" />
            Enviar Email
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-card"
            onClick={() => window.open('https://calendly.com', '_blank')}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Agendar Llamada
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-8"
        >
          <button
            onClick={() => window.location.href = 'mailto:gustavo.zuleta@email.com'}
            className="p-3 bg-card border border-border/50 rounded-lg hover:border-primary/30 transition-colors"
          >
            <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
          </button>
          <button
            onClick={() => window.open('https://linkedin.com/in/gustavo-zuleta', '_blank')}
            className="p-3 bg-card border border-border/50 rounded-lg hover:border-primary/30 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
          </button>
        </motion.div>

        {/* Freelance note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-muted-foreground"
        >
          También disponible para proyectos freelance de data analytics
        </motion.p>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 pt-8 border-t border-border/30 text-center"
      >
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Gustavo Zuleta. Todos los derechos reservados.
        </p>
      </motion.footer>
    </section>
  );
};

export default ContactSection;

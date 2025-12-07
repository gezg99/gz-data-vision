import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Calendar, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border/50 rounded-2xl p-8 md:p-12 text-center"
        >
          {/* Avatar/Logo */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-6 relative"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-glow" />
            <div className="relative w-full h-full bg-card border-2 border-primary/40 rounded-full flex items-center justify-center">
              <span className="text-3xl font-display font-bold text-foreground">GZ</span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4"
          >
            ¿Hablamos de datos, estrategia o impacto real?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground mb-8 max-w-md mx-auto"
          >
            Siempre abierto a conversar sobre operaciones, métricas y cómo los datos pueden transformar negocios.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 shadow-lg shadow-primary/20"
            >
              <Calendar className="mr-2 h-4 w-4" />
              Agendar llamada
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4"
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary hover:bg-primary/10"
              onClick={() => window.open('https://linkedin.com', '_blank')}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary hover:bg-primary/10"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-center mt-12 text-sm text-muted-foreground"
        >
          <p>© {new Date().getFullYear()} Gustavo Zuleta</p>
          <p className="text-xs mt-1">Data & Business Analyst</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default ContactSection;

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-3xl rounded-full" />
          
          <div className="relative bg-card/50 backdrop-blur border border-primary/30 rounded-2xl p-8 md:p-12 text-center glow-cyan">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                No solo analizo datos.
              </p>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-8 leading-tight">
                Rediseño la forma en que una empresa{" "}
                <span className="text-primary text-glow">entiende su propia verdad</span>.
              </h3>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan text-lg px-8 py-6 group"
                >
                  Trabajemos juntos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>

              {/* Decorative elements */}
              <div className="mt-12 flex justify-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    className="w-2 h-2 bg-primary rounded-full animate-glow"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center text-sm text-muted-foreground"
        >
          <p>© 2024 Gustavo Zuleta. Data & Business Analyst.</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default FinalCTA;

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Mail, Linkedin, Calendar } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const LINKEDIN_URL = "https://www.linkedin.com/in/gustavo-zuleta-guerrero-/";
const CAL_URL = "https://cal.com/gustavo-zuleta-guerrero-wl7rrb";
const EMAIL = "geduardozg@hotmail.com";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-4 bg-card/30">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">{t("contact.subtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("contact.description")}
          </p>
        </motion.div>

        {/* Contact buttons */}
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
            onClick={() => window.location.href = `mailto:${EMAIL}`}
          >
            <Mail className="mr-2 h-4 w-4" />
            {t("contact.sendEmail")}
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-card"
            onClick={() => window.open(CAL_URL, '_blank')}
          >
            <Calendar className="mr-2 h-4 w-4" />
            {t("contact.schedule")}
          </Button>
        </motion.div>

        {/* Contact info - only email and LinkedIn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          <a 
            href={`mailto:${EMAIL}`}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">{EMAIL}</span>
          </a>
          <a 
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </motion.div>

        {/* Availability note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-muted-foreground"
        >
          {t("contact.freelance")}
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
          © {new Date().getFullYear()} Gustavo Zuleta. {t("contact.rights")}
        </p>
      </motion.footer>
    </section>
  );
};

export default ContactSection;

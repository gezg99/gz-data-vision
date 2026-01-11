import { createContext, useContext, useEffect, useState } from "react";

type Language = "es" | "en";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

// Translations
const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    "nav.work": "Trabajo",
    "nav.experience": "Experiencia",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "nav.getInTouch": "Hablemos",
    
    // Hero
    "hero.role": "Data & Business Analyst",
    "hero.description": "Transformo datos caóticos en decisiones de negocio. He trabajado en Nubank y Cometa construyendo sistemas de métricas que permiten medir, corregir y decidir con confianza.",
    "hero.downloadCV": "Descargar CV",
    "hero.metric1.title": "KPIs de negocio",
    "hero.metric1.subtitle": "Métricas críticas a escala empresa",
    "hero.metric1.tag": "Sistema",
    "hero.metric2.value": "3–4 semanas → 2–3 horas",
    "hero.metric2.title": "Automatización de procesos críticos",
    "hero.metric2.tag": "Eficiencia",
    "hero.metric3.value": "Margen real revelado",
    "hero.metric3.subtitle": "Supuestos → ~X% real",
    "hero.metric3.tag": "Verdad financiera",
    
    // Selected Work
    "work.subtitle": "Selected Work",
    "work.title": "Proyectos Destacados",
    "work.project1.title": "Modelo de Margen Real por Colegio",
    "work.project1.problem": "Los founders tomaban decisiones con margen incorrecto (45%)",
    "work.project1.result": "Margen Real Descubierto",
    "work.project2.title": "Data Hub Multi-Fuente",
    "work.project2.problem": "7 herramientas sin conexión, datos en silos",
    "work.project2.result": "Fuentes → Hub Unificado",
    "work.project3.title": "Automatización de Reporting",
    "work.project3.problem": "80 horas mensuales de reportes manuales",
    "work.project3.result": "Por Ciclo",
    
    // How I Work
    "how.subtitle": "Philosophy",
    "how.title": "Cómo Trabajo",
    "how.principle1.title": "Métricas como contratos",
    "how.principle1.desc": "Antes de construir algo, aseguro que todos acuerden qué significa éxito y cómo se mide.",
    "how.principle2.title": "Calidad antes que dashboards",
    "how.principle2.desc": "Ninguna visualización arregla datos malos. Priorizo integridad upstream antes de delivery downstream.",
    "how.principle3.title": "Diseño para observabilidad",
    "how.principle3.desc": "Los sistemas deben decirte cuándo fallan. Construyo monitoreo y alertas en cada pipeline.",
    "how.principle4.title": "Decisiones, no solo gráficas",
    "how.principle4.desc": "El objetivo no es un dashboard bonito—es que alguien pueda actuar con confianza.",
    
    // Skills
    "skills.subtitle": "Skills",
    "skills.title": "Skills & Tooling",
    
    // Experience
    "exp.subtitle": "Experience",
    "exp.title": "Mi Trayectoria",
    "exp.years": "3+ años transformando operaciones con datos",
    "exp.current": "Actual",
    
    // Other Projects
    "projects.subtitle": "More Work",
    "projects.title": "Otros Proyectos",
    "projects.featured": "⭐ Destacado",
    
    // Education
    "edu.subtitle": "Background",
    "edu.title": "Educación & Certificaciones",
    "edu.degree": "Ingeniero Civil",
    "edu.school": "Escuela Colombiana de Ingeniería Julio Garavito",
    "edu.period": "2016 – 2021 · Bogotá, Colombia",
    "edu.desc": "Formación en análisis cuantitativo, modelado matemático y resolución de problemas complejos.",
    "edu.certs": "Certificaciones",
    "edu.languages": "Idiomas",
    "edu.spanish": "Español",
    "edu.english": "Inglés",
    "edu.native": "Nativo",
    "edu.professional": "Intermedio-Avanzado",
    
    // About
    "about.subtitle": "About",
    "about.title": "Sobre Mí",
    "about.p1": "No me conformo con que algo \"funcione\". Necesito entender por qué funciona, para quién y qué estamos dejando fuera. Esa forma de pensar me ha llevado a cuestionar métricas aceptadas, detectar inconsistencias estructurales y construir sistemas más claros y confiables.",
    "about.p2": "Me muevo con naturalidad entre análisis, contexto y criterio. Me interesa cómo las decisiones se toman en la práctica, no solo cómo se ven en un reporte. Por eso pongo tanto énfasis en la coherencia entre datos, procesos y personas.",
    "about.p3": "Trabajo mejor cuando hay complejidad real que ordenar y decisiones importantes que respaldar. Prefiero la claridad a la velocidad, la profundidad al ruido y los sistemas que generan confianza a los resultados aislados.",
    
    // Contact
    "contact.subtitle": "Contact",
    "contact.title": "Tomemos mejores decisiones",
    "contact.description": "Trabajo en la intersección entre datos, finanzas y negocio. Ayudo a equipos a identificar huecos, modelar escenarios y convertir complejidad en decisiones claras y accionables.",
    "contact.sendEmail": "Enviar Email",
    "contact.schedule": "Agendar Reunión",
    "contact.freelance": "Colaboraciones estratégicas y roles full-time.",
    "contact.rights": "Todos los derechos reservados.",
  },
  en: {
    // Navigation
    "nav.work": "Work",
    "nav.experience": "Experience",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.getInTouch": "Get in touch",
    
    // Hero
    "hero.role": "Data & Business Analyst",
    "hero.description": "I turn chaotic data into business decisions. I've worked at Nubank and Cometa building metrics systems that enable measuring, correcting, and deciding with confidence.",
    "hero.downloadCV": "Download CV",
    "hero.metric1.title": "Business KPIs",
    "hero.metric1.subtitle": "Critical metrics at company scale",
    "hero.metric1.tag": "System",
    "hero.metric2.value": "3–4 weeks → 2–3 hours",
    "hero.metric2.title": "Critical process automation",
    "hero.metric2.tag": "Efficiency",
    "hero.metric3.value": "Real margin revealed",
    "hero.metric3.subtitle": "Assumptions → ~X% real",
    "hero.metric3.tag": "Financial truth",
    
    // Selected Work
    "work.subtitle": "Selected Work",
    "work.title": "Featured Projects",
    "work.project1.title": "Real Margin Model per School",
    "work.project1.problem": "Founders were making decisions with incorrect margin (45%)",
    "work.project1.result": "Real Margin Discovered",
    "work.project2.title": "Multi-Source Data Hub",
    "work.project2.problem": "7 disconnected tools, data in silos",
    "work.project2.result": "Sources → Unified Hub",
    "work.project3.title": "Reporting Automation",
    "work.project3.problem": "80 hours monthly of manual reports",
    "work.project3.result": "Per Cycle",
    
    // How I Work
    "how.subtitle": "Philosophy",
    "how.title": "How I Work",
    "how.principle1.title": "Metrics as contracts",
    "how.principle1.desc": "Before building anything, I ensure everyone agrees on what success means and how it's measured.",
    "how.principle2.title": "Quality before dashboards",
    "how.principle2.desc": "No visualization fixes bad data. I prioritize upstream integrity before downstream delivery.",
    "how.principle3.title": "Design for observability",
    "how.principle3.desc": "Systems should tell you when they break. I build monitoring and alerts into every pipeline.",
    "how.principle4.title": "Decisions, not just charts",
    "how.principle4.desc": "The goal isn't a pretty dashboard—it's enabling someone to act with confidence.",
    
    // Skills
    "skills.subtitle": "Skills",
    "skills.title": "Skills & Tooling",
    
    // Experience
    "exp.subtitle": "Experience",
    "exp.title": "My Journey",
    "exp.years": "3+ years transforming operations with data",
    "exp.current": "Current",
    
    // Other Projects
    "projects.subtitle": "More Work",
    "projects.title": "Other Projects",
    "projects.featured": "⭐ Featured",
    
    // Education
    "edu.subtitle": "Background",
    "edu.title": "Education & Certifications",
    "edu.degree": "Civil Engineer",
    "edu.school": "Escuela Colombiana de Ingeniería Julio Garavito",
    "edu.period": "2016 – 2021 · Bogotá, Colombia",
    "edu.desc": "Training in quantitative analysis, mathematical modeling, and complex problem solving.",
    "edu.certs": "Certifications",
    "edu.languages": "Languages",
    "edu.spanish": "Spanish",
    "edu.english": "English",
    "edu.native": "Native",
    "edu.professional": "Upper-Intermediate",
    
    // About
    "about.subtitle": "About",
    "about.title": "About Me",
    "about.p1": "I don't settle for something that just \"works\". I need to understand why it works, for whom, and what we're leaving out. This way of thinking has led me to question accepted metrics, detect structural inconsistencies, and build clearer, more reliable systems.",
    "about.p2": "I move naturally between analysis, context, and judgment. I'm interested in how decisions are made in practice, not just how they look in a report. That's why I put so much emphasis on coherence between data, processes, and people.",
    "about.p3": "I work best when there's real complexity to organize and important decisions to support. I prefer clarity over speed, depth over noise, and systems that build trust over isolated results.",
    
    // Contact
    "contact.subtitle": "Contact",
    "contact.title": "Let's make better decisions",
    "contact.description": "I work at the intersection of data, finance, and business. I help teams identify gaps, model scenarios, and turn complexity into clear, actionable decisions.",
    "contact.sendEmail": "Send Email",
    "contact.schedule": "Schedule Meeting",
    "contact.freelance": "Strategic collaborations and full-time roles.",
    "contact.rights": "All rights reserved.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language;
      return saved || "es";
    }
    return "es";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

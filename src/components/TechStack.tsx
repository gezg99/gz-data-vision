import { motion } from "framer-motion";
import { 
  Database, 
  BarChart3, 
  Code, 
  Workflow, 
  MessageSquare, 
  Activity,
  Settings,
  Globe
} from "lucide-react";

const techCategories = [
  {
    category: "Analytics & BI",
    tools: [
      { name: "SQL", icon: Database },
      { name: "Looker/LookML", icon: BarChart3 },
      { name: "Metabase", icon: BarChart3 },
      { name: "Grafana", icon: Activity },
    ]
  },
  {
    category: "Data & Backend",
    tools: [
      { name: "Python", icon: Code },
      { name: "Redshift", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "APIs/ETL", icon: Workflow },
    ]
  },
  {
    category: "Integraciones",
    tools: [
      { name: "HubSpot", icon: MessageSquare },
      { name: "Intercom", icon: MessageSquare },
      { name: "Mixpanel", icon: Activity },
      { name: "Twilio", icon: Globe },
    ]
  }
];

const TechStack = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-medium tracking-widest uppercase">Herramientas</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-2">
            Stack Técnico
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="grid md:grid-cols-3 gap-6">
          {techCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-card/50 border border-border/30 rounded-xl p-5"
            >
              <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + toolIndex * 0.05 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    className="group relative"
                  >
                    <div className="bg-background/50 border border-border/50 rounded-lg p-3 flex flex-col items-center gap-2 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-default">
                      <tool.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center">
                        {tool.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

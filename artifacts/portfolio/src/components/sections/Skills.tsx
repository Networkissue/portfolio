import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Kubernetes (K8s/K3s)", "Helm", "Docker", "GitHub Actions", "Jenkins", "Terraform"]
  },
  {
    title: "Languages",
    skills: ["Python", "Java", "TypeScript", "Node.js", "React", "Shell Scripting"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Google Cloud Datastore"]
  },
  {
    title: "Security & Networking",
    skills: ["Keycloak", "Auth0", "SSL/TLS", "NGINX", "Traefik", "Ingress"]
  },
  {
    title: "Monitoring",
    skills: ["Prometheus", "Grafana", "GCP Logging"]
  },
  {
    title: "Architecture & Tools",
    skills: ["Microservices", "HL7v2", "GCP Pub/Sub", "Maven", "Selenium"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-[#9CA3AF] font-mono text-[11px] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <span className="text-[#9CA3AF]">——</span>
            02 / SKILLS
          </div>

          <h2 className="font-['Bebas_Neue'] text-[64px] leading-none mb-16 flex items-center gap-4">
            <span className="text-white">TECHNICAL</span>
            <span className="text-primary">SKILLS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#111113] border border-[#3F3F46] p-6 hover:border-primary/60 transition-colors duration-300"
              >
                <h3 className="text-white font-mono uppercase text-sm tracking-widest mb-6">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="font-mono text-xs px-3 py-1.5 bg-[#1A1A1D] text-[#9CA3AF] border border-[#3F3F46] hover:border-primary hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

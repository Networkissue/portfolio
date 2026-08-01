import { motion } from 'framer-motion';

const responsibilities = [
  "Managed microservices across AWS, GCP, and on-prem environments (Dev, QA, Staging, Production).",
  "Built and maintained CI/CD pipelines with GitHub Actions, Jenkins, Maven, and Shell Scripting.",
  "Automated QA validation by integrating Java, Selenium, and Maven into CI/CD pipelines.",
  "Deployed apps using Docker, Kubernetes, and Helm across cloud and air-gapped on-prem environments.",
  "Configured NGINX, Traefik, Ingress, SSL/TLS, Keycloak, and Auth0 for secure routing and authentication.",
  "Implemented monitoring with Prometheus, Grafana, and GCP Logging.",
  "Supported HL7v2 integrations and GCP Pub/Sub workflows.",
  "Managed PostgreSQL, MySQL, MongoDB, Redis, and Google Cloud Datastore.",
  "Coordinated web and Android releases with Dev, QA, and Mobile teams.",
  "Supported AI-powered healthcare and voice platforms in production."
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-[#9CA3AF] font-mono text-[11px] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <span className="text-[#9CA3AF]">——</span>
            03 / WORK
          </div>

          <h2 className="font-['Bebas_Neue'] text-[64px] leading-none mb-16 text-white">
            EXPERIENCE
          </h2>
          
          <div className="mb-8">
            <h3 className="font-['Bebas_Neue'] text-[48px] text-white leading-none mb-4 tracking-wide">
              ELATECARE INC
            </h3>
            <div className="text-primary font-mono text-sm tracking-widest uppercase">
              DevOps Engineer <span className="text-[#3F3F46] mx-2">——</span> Feb 2024 – Present <span className="text-[#3F3F46] mx-2">——</span> Healthcare & AI
            </div>
          </div>

          <div className="space-y-4 font-mono text-[#9CA3AF] text-sm">
            {responsibilities.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-4"
              >
                <span className="text-primary mt-[0.1em]">▪</span>
                <span className="leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

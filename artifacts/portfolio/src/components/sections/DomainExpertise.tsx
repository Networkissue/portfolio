import { motion } from 'framer-motion';
import { Activity, BrainCircuit, Mic } from 'lucide-react';

const domains = [
  {
    title: "CRITICAL CARE MANAGEMENT",
    acronym: "CCM",
    description: "Real-time monitoring and coordination platforms for critical care workflows. Engineered infrastructure to handle high-availability requirements with zero downtime tolerance.",
    icon: Activity
  },
  {
    title: "SOFIYA",
    acronym: "AI VIRTUAL NURSE",
    description: "AI-driven healthcare assistant providing automated patient interactions. Supported deployment of ML models and robust backend services across distributed clusters.",
    icon: BrainCircuit
  },
  {
    title: "ACTYRO",
    acronym: "VOICE TESTING PLATFORM",
    description: "AI voice testing and diagnostic systems. Managed complex audio processing pipelines, ensuring low-latency communication and secure data storage.",
    icon: Mic
  }
];

export function DomainExpertise() {
  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-[#9CA3AF] font-mono text-[11px] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <span className="text-[#9CA3AF]">——</span>
            04 / DOMAINS
          </div>

          <h2 className="font-['Bebas_Neue'] text-[64px] leading-none mb-16 flex items-center gap-4">
            <span className="text-white">DOMAIN</span>
            <span className="text-primary">EXPERTISE</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {domains.map((domain, idx) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={domain.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="h-full bg-[#111113] border border-[#3F3F46] p-8 hover:border-primary/60 transition-colors duration-300">
                    <div className="mb-6 text-primary">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-['Bebas_Neue'] text-[28px] text-white tracking-wide leading-none mb-2">
                      {domain.title}
                    </h3>
                    <p className="font-mono text-xs text-primary uppercase tracking-widest mb-6">
                      {domain.acronym}
                    </p>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed font-mono">
                      {domain.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

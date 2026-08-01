import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <div className="text-[#9CA3AF] font-mono text-[11px] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <span className="text-[#9CA3AF]">——</span>
            01 / PROFILE
          </div>

          <h2 className="font-['Bebas_Neue'] text-[64px] leading-none mb-12 flex items-center gap-4">
            <span className="text-white">ABOUT</span>
            <span className="text-primary">ME</span>
          </h2>

          <div className="flex gap-8 relative">
            <div className="w-[2px] bg-primary shrink-0"></div>
            <div className="font-mono text-[#9CA3AF] text-sm md:text-base leading-relaxed space-y-6">
              <p>
                I am a DevOps Engineer with 2.5 years of hands-on experience designing and managing cloud infrastructure for high-stakes environments. Currently at Elatecare Inc, a pioneering Healthcare & AI company, I ensure our platforms are scalable, secure, and resilient.
              </p>
              <p>
                My expertise lies in orchestrating microservices across AWS, GCP, and air-gapped on-premise environments. I specialize in building robust CI/CD pipelines, automating complex workflows, and maintaining strict compliance for healthcare applications.
              </p>
              <p>
                Whether it's deploying AI virtual nurses or optimizing critical care management systems, I treat infrastructure as code and operations as software engineering.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

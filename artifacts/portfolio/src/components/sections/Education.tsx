import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-[#9CA3AF] font-mono text-[11px] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <span className="text-[#9CA3AF]">——</span>
            05 / EDUCATION
          </div>

          <h2 className="font-['Bebas_Neue'] text-[64px] leading-none mb-16 text-white">
            EDUCATION
          </h2>

          <div className="bg-[#111113] border border-[#3F3F46] p-8 hover:border-primary/60 transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="text-primary shrink-0">
                <GraduationCap size={48} strokeWidth={1} />
              </div>
              <div>
                <h3 className="font-['Bebas_Neue'] text-[36px] text-white tracking-wide leading-none mb-2">
                  BACHELOR OF TECHNOLOGY
                </h3>
                <div className="font-mono text-sm text-primary tracking-widest uppercase mb-4">
                  Computer Science & Engineering
                </div>
                <div className="font-mono text-sm text-[#9CA3AF] tracking-widest">
                  CDU Warangal <span className="text-[#3F3F46] mx-2">——</span> 2019–2023
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

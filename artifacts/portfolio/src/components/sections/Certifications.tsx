import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'HIPAA Workforce Proficiency Certification',
    year: '2026',
    issuer: '4MedPlus Training',
    description:
      'Comprehensive HIPAA compliance training covering healthcare data privacy, security regulations, and workforce proficiency requirements for healthcare applications.',
    // TODO: replace with the hosted path to your own certificate PDF,
    // e.g. place the file in artifacts/portfolio/public/certificates/
    // and reference it as "/certificates/your-file.pdf"
    url: 'https://drive.google.com/file/d/1EU3skDGmedpa3xa0ZsbE45qA-M4mCcmt/view?usp=drive_link',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-[#9CA3AF] font-mono text-[11px] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <span className="text-[#9CA3AF]">——</span>
            06 / CERTIFICATIONS
          </div>

          <h2 className="font-['Bebas_Neue'] text-[64px] leading-none mb-16 flex items-center gap-4">
            <span className="text-white">MY</span>
            <span className="text-primary">CERTIFICATIONS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="h-full bg-[#111113] border border-[#3F3F46] p-8 hover:border-primary/60 transition-colors duration-300 flex flex-col">
                  <div className="mb-6 text-primary">
                    <Award size={32} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-['Bebas_Neue'] text-[28px] text-white tracking-wide leading-none mb-2">
                    {cert.title}
                  </h3>

                  <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span>{cert.issuer}</span>
                    <span className="text-[#3F3F46]">——</span>
                    <span>{cert.year}</span>
                  </div>

                  <p className="text-[#9CA3AF] text-sm leading-relaxed font-mono mb-6 flex-1">
                    {cert.description}
                  </p>

                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary hover:text-white transition-colors w-fit"
                  >
                    View Certificate
                    <ExternalLink size={14} strokeWidth={1.5} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
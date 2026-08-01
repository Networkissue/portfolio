import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center bg-background pt-24 pb-16">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="text-[#9CA3AF] font-mono text-[11px] uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
            <span className="text-[#9CA3AF]">——</span>
            DEVOPS ENGINEER • HYDERABAD, INDIA
          </div>
          
          <h1 className="font-['Bebas_Neue'] text-[80px] md:text-[96px] lg:text-[110px] leading-[0.85] tracking-tight mb-8">
            <div className="text-white">ROHITH</div>
            <div className="text-white">VADDEPALLY</div>
            <div>
              <span className="text-white">BUILDS </span>
              <span className="text-primary">INFRA.</span>
            </div>
          </h1>
          
          <p className="text-muted-foreground font-mono text-sm mb-10 tracking-wide">
            2.5 years. AWS. GCP. K8s. Zero downtime.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <Button size="lg" className="bg-accent text-white hover:bg-accent/90 rounded-none uppercase font-mono text-xs tracking-widest h-12 px-8" asChild>
              <a href="#contact">GET IN TOUCH</a>
            </Button>
            <Button size="lg" variant="outline" className="border-[#3F3F46] bg-transparent text-white hover:bg-[#111113] hover:text-white rounded-none uppercase font-mono text-xs tracking-widest h-12 px-8" asChild>
              <a href="#experience">VIEW EXPERIENCE</a>
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-[10px] sm:text-xs font-mono tracking-widest uppercase">
            <div className="flex flex-col gap-1">
              <span className="text-primary">2.5 YRS</span>
              <span className="text-white">EXPERIENCE</span>
            </div>
            <div className="w-[1px] h-8 bg-[#3F3F46]"></div>
            <div className="flex flex-col gap-1">
              <span className="text-primary">3</span>
              <span className="text-white">DOMAINS</span>
            </div>
            <div className="w-[1px] h-8 bg-[#3F3F46]"></div>
            <div className="flex flex-col gap-1">
              <span className="text-primary">24×7</span>
              <span className="text-white">UPTIME FOCUS</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full bg-[#111113] border border-[#3F3F46] p-8 aspect-square lg:aspect-auto lg:h-[600px] relative overflow-hidden flex items-center justify-center group hover:border-primary/60 transition-colors duration-500"
        >
          <svg className="w-full h-full max-w-md" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Connection Lines */}
            <motion.path
              d="M100 100 L300 100 L300 300 L100 300 Z"
              stroke="#3F3F46"
              strokeWidth="2"
            />
            <motion.path
              d="M100 100 L300 100 L300 300 L100 300 Z"
              stroke="#2DD4BF"
              strokeWidth="2"
              strokeDasharray="800"
              initial={{ strokeDashoffset: 800 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M100 300 L300 100 M100 100 L300 300"
              stroke="#3F3F46"
              strokeWidth="2"
            />
            
            {/* Nodes */}
            {/* CODE */}
            <g transform="translate(60, 80)">
              <rect width="80" height="40" fill="#111113" stroke="#2DD4BF" strokeWidth="2" />
              <text x="40" y="25" fill="#FFFFFF" fontSize="12" fontFamily="monospace" textAnchor="middle">CODE</text>
            </g>

            {/* BUILD */}
            <g transform="translate(260, 80)">
              <rect width="80" height="40" fill="#111113" stroke="#C75D3A" strokeWidth="2" />
              <text x="40" y="25" fill="#FFFFFF" fontSize="12" fontFamily="monospace" textAnchor="middle">BUILD</text>
            </g>

            {/* TEST */}
            <motion.g 
              transform="translate(160, 180)"
              animate={{ y: [180, 175, 180] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <rect width="80" height="40" fill="#111113" stroke="#2DD4BF" strokeWidth="2" />
              <text x="40" y="25" fill="#FFFFFF" fontSize="12" fontFamily="monospace" textAnchor="middle">TEST</text>
            </motion.g>

            {/* DEPLOY */}
            <g transform="translate(60, 280)">
              <rect width="80" height="40" fill="#111113" stroke="#C75D3A" strokeWidth="2" />
              <text x="40" y="25" fill="#FFFFFF" fontSize="12" fontFamily="monospace" textAnchor="middle">DEPLOY</text>
            </g>

            {/* MONITOR */}
            <g transform="translate(260, 280)">
              <rect width="80" height="40" fill="#111113" stroke="#2DD4BF" strokeWidth="2" />
              <text x="40" y="25" fill="#FFFFFF" fontSize="12" fontFamily="monospace" textAnchor="middle">MONITOR</text>
              <motion.circle 
                cx="70" cy="10" r="3" fill="#C75D3A"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </g>
          </svg>
        </motion.div>

      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background min-h-[70vh] flex flex-col justify-between">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-[#9CA3AF] font-mono text-[11px] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <span className="text-[#9CA3AF]">——</span>
            06 / CONTACT
          </div>

          <h2 className="font-['Bebas_Neue'] text-[64px] leading-none mb-16 flex items-center gap-4">
            <span className="text-white">LET'S</span>
            <span className="text-accent">CONNECT</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-[#111113] border border-[#3F3F46] p-6 hover:border-primary/60 transition-colors duration-300 flex items-start gap-4">
              <div className="text-primary mt-1"><Mail size={20} strokeWidth={1.5} /></div>
              <div>
                <div className="font-mono text-white text-sm uppercase tracking-widest mb-2">EMAIL</div>
                <a href="mailto:rohithvaddepally4@gmail.com" className="font-mono text-[#9CA3AF] text-sm hover:text-primary transition-colors break-all">
                  rohithvaddepally4@gmail.com
                </a>
              </div>
            </div>
            
            <div className="bg-[#111113] border border-[#3F3F46] p-6 hover:border-primary/60 transition-colors duration-300 flex items-start gap-4">
              <div className="text-primary mt-1"><Phone size={20} strokeWidth={1.5} /></div>
              <div>
                <div className="font-mono text-white text-sm uppercase tracking-widest mb-2">PHONE</div>
                <a href="tel:+919390086532" className="font-mono text-[#9CA3AF] text-sm hover:text-primary transition-colors">
                  +91 93900 86532
                </a>
              </div>
            </div>

            <div className="bg-[#111113] border border-[#3F3F46] p-6 hover:border-primary/60 transition-colors duration-300 flex items-start gap-4">
              <div className="text-primary mt-1"><MapPin size={20} strokeWidth={1.5} /></div>
              <div>
                <div className="font-mono text-white text-sm uppercase tracking-widest mb-2">LOCATION</div>
                <div className="font-mono text-[#9CA3AF] text-sm">
                  Hyderabad, India
                </div>
              </div>
            </div>
          </div>

          <Button size="lg" className="bg-accent text-white hover:bg-accent/90 rounded-none uppercase font-mono text-sm tracking-widest h-14 px-10" asChild>
            <a href="mailto:rohithvaddepally4@gmail.com">SEND A MESSAGE</a>
          </Button>
        </motion.div>
      </div>
      
      <footer className="mt-32 w-full text-center text-[#3F3F46] text-[10px] font-mono tracking-widest uppercase pb-8">
        —— ROHITH VADDEPALLY —— DEVOPS ENGINEER —— HYDERABAD ——
      </footer>
    </section>
  );
}

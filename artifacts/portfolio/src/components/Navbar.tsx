import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'profile', href: '#about' },
    { name: 'skills', href: '#skills' },
    { name: 'work', href: '#experience' },
    { name: 'domains', href: '#expertise' },
    { name: 'education', href: '#education' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[#3F3F46] bg-background text-foreground py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-4">
          <span className="font-['Bebas_Neue'] text-3xl text-white tracking-wider leading-none">RV</span>
          <div className="w-[1px] h-6 bg-[#3F3F46]"></div>
          <span className="font-mono text-[10px] text-primary uppercase tracking-widest leading-none mt-1">DevOps Engineer</span>
        </a>
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-mono text-muted-foreground hover:text-white transition-colors uppercase tracking-widest">
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-accent text-white hover:bg-accent/90 rounded-none uppercase font-mono text-xs tracking-widest h-9 px-6 ml-4">
            <a href="#contact">Hire Me</a>
          </Button>
        </div>
        <div className="lg:hidden">
          <Button asChild className="bg-accent text-white hover:bg-accent/90 rounded-none uppercase font-mono text-xs tracking-widest h-9 px-4">
            <a href="#contact">Hire Me</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}

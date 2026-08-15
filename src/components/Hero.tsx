import { ArrowRight } from 'lucide-react';
import { GithubIcon } from './icons';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 px-4 sm:px-6 md:pt-40 md:pb-20 min-h-[85vh] flex flex-col justify-center overflow-hidden">
      {/* Organic glow — centered behind content area */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main large glow — covers content on all screen sizes */}
        <div className="absolute top-[15%] left-0 w-[90%] md:w-[65%] h-[75%] opacity-30 dark:opacity-70" style={{ background: 'radial-gradient(ellipse at 40% 50%, rgba(234, 136, 0, 0.7) 0%, rgba(180, 83, 9, 0.3) 35%, transparent 65%)', filter: 'blur(60px)' }}></div>
        {/* Inner bright core */}
        <div className="absolute top-[25%] left-[3%] w-[70%] md:w-[45%] h-[55%] opacity-25 dark:opacity-55" style={{ background: 'radial-gradient(ellipse at 45% 45%, rgba(251, 146, 60, 0.9) 0%, rgba(217, 119, 6, 0.4) 30%, transparent 60%)', filter: 'blur(50px)' }}></div>
        {/* Top accent */}
        <div className="absolute top-[18%] left-[5%] w-[50%] md:w-[35%] h-[35%] opacity-15 dark:opacity-40" style={{ background: 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.8) 0%, transparent 55%)', filter: 'blur(40px)' }}></div>
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
          Suhas Kolhe
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-muted font-medium tracking-tight mb-6 md:mb-8 max-w-2xl">
          Android Developer <br className="md:hidden" />
          <span className="hidden md:inline"> &middot; </span>
          Computer Science Student
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-8 md:mb-12">
          Computer Science student and Android Developer with hands-on experience in building modern Android applications using Kotlin, Jetpack Compose, and modern Android architecture.
        </p>
        
        <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          
          <a 
            href="https://github.com/suhaskolhe1" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-transparent text-foreground font-medium rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
        </div>

        <div className="mt-8 md:mt-12 flex gap-6 text-sm font-medium text-muted">
          <a href="https://www.linkedin.com/in/suhaskolhe1/" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:suhaskolhe1111@gmail.com" className="hover:text-foreground transition-colors">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

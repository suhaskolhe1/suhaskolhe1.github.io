import { ArrowRight } from 'lucide-react';
import { GithubIcon } from './icons';

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 min-h-[85vh] flex flex-col justify-center">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
          Suhas Kolhe
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted font-medium tracking-tight mb-8 max-w-2xl">
          Backend Developer <br className="md:hidden" />
          <span className="hidden md:inline"> &middot; </span>
          Computer Science Student
        </h2>
        <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-12">
          Computer Science student and aspiring Backend Developer with hands-on experience in Node.js, FastAPI, MongoDB, and PostgreSQL. Built REST APIs and AI-powered applications through internships and projects.
        </p>
        
        <div className="flex flex-wrap gap-4 items-center">
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
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-transparent text-foreground font-medium rounded-lg hover:bg-black/5 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
        </div>

        <div className="mt-12 flex gap-6 text-sm font-medium text-muted">
          <a href="https://linkedin.com/in/suhas-kolhe" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:suhaskolhe@example.com" className="hover:text-foreground transition-colors">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

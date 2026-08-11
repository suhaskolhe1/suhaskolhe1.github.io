import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6">
          Let's build something useful.
        </h2>
        <p className="text-lg text-muted mb-12 max-w-2xl mx-auto">
          Open to backend, data engineering, and software engineering opportunities.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a 
            href="mailto:suhaskolhe@example.com" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email Me
          </a>
          <a 
            href="https://linkedin.com/in/suhas-kolhe" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-transparent text-foreground font-medium rounded-lg hover:bg-black/5 transition-colors"
          >
            <LinkedinIcon className="w-5 h-5" />
            LinkedIn
          </a>
          <a 
            href="https://github.com/suhaskolhe1" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-transparent text-foreground font-medium rounded-lg hover:bg-black/5 transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

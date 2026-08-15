import { GithubIcon } from './icons';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Cool CBC — Vehicle Care & Service Management Platform",
      description: "Backend platform for customer, staff, partner, and admin workflows.",
      tech: "Node.js · Express.js · MongoDB · JWT · Firebase · AWS S3",
      highlights: [
        "REST APIs",
        "Authentication & RBAC",
        "Booking workflows",
        "Vehicle lifecycle management",
        "Payments and wallet systems",
        "Real-time service tracking",
      ],
      link: "https://github.com/suhaskolhe1",
      linkText: "GitHub",
      icon: "github"
    },
    {
      title: "Status Saver",
      description: "Android application developed and published on the Play Store.",
      tech: "Kotlin · Jetpack Compose · Android Architecture · Play Store",
      highlights: [
        "Android application development",
        "Modern Android architecture",
        "Play Store publishing"
      ],
      link: "https://play.google.com/store/apps/details?id=com.sk.saver",
      linkText: "View on Google Play",
      icon: "external"
    },
    {
      title: "Aurveda",
      description: "Major Android application project built with modern Android practices.",
      tech: "Kotlin · Jetpack Compose · Room · Koin · Android SDK",
      highlights: [
        "Modern Android development",
        "Clean architecture",
        "Jetpack Compose UI"
      ],
      link: "https://github.com/suhaskolhe1/aurveda-app",
      linkText: "View on GitHub",
      icon: "github"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 bg-white/50 dark:bg-white/5 border-y border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-8 md:mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col p-5 sm:p-6 rounded-2xl border border-border bg-background hover:-translate-y-1 hover:shadow-sm transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="text-xs font-medium text-foreground mb-4">
                {project.tech}
              </div>

              {project.highlights.length > 0 && (
                <ul className="mb-6 space-y-1">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-muted flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-border flex-shrink-0"></span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto pt-4 flex gap-4 border-t border-border/50">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
                >
                  {project.icon === 'github' ? <GithubIcon className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                  {project.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

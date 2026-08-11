import { GithubIcon } from './icons';

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
      github: "https://github.com/suhaskolhe1"
    },
    {
      title: "End-to-End E-Commerce Data Warehouse & ETL Pipeline",
      description: "Scalable data pipeline for processing and transforming large-scale transaction data.",
      tech: "Python · PySpark · AWS S3 · Snowflake · SQL · GitHub Actions · Pytest",
      highlights: [
        "Processed 100K+ daily transactions",
        "Parquet-based data processing",
        "Star schema warehouse design",
        "Automated CI/CD and testing",
      ],
      github: "https://github.com/suhaskolhe1"
    },
    {
      title: "Financial Market Data Integration Pipeline",
      description: "Data engineering pipeline for collecting, transforming, and integrating financial market data.",
      tech: "Python · PySpark · AWS S3 · Snowflake · REST APIs · GitHub Actions",
      highlights: [],
      github: "https://github.com/suhaskolhe1"
    },
    {
      title: "AI-Powered Backend / Chatbot SaaS",
      description: "Backend system integrating LLMs and APIs to build AI-powered workflows.",
      tech: "FastAPI · Python · Ollama · Gemini · OpenAI API · RAG",
      highlights: [],
      github: "https://github.com/suhaskolhe1"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white/50 border-y border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col p-6 rounded-2xl border border-border bg-background hover:-translate-y-1 hover:shadow-sm transition-all duration-300"
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
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

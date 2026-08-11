export default function Skills() {
  const skillCategories = [
    {
      name: "Languages",
      skills: "Python · JavaScript · Kotlin · SQL"
    },
    {
      name: "Backend",
      skills: "Node.js · Express.js · FastAPI · REST APIs"
    },
    {
      name: "Databases",
      skills: "MongoDB · PostgreSQL · MySQL · Redis"
    },
    {
      name: "Cloud & DevOps",
      skills: "AWS · Docker · Git · GitHub Actions · Linux"
    },
    {
      name: "AI & Data",
      skills: "PySpark · LangChain · LangGraph · ChromaDB · Ollama · RAG"
    },
    {
      name: "Architecture & Security",
      skills: "JWT · RBAC · Microservices · API Security · Swagger/OpenAPI"
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-8 md:mb-12">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="flex flex-col border-b border-border/50 pb-4">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-muted">
                {category.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

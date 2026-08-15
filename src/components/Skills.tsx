export default function Skills() {
  const skillCategories = [
    {
      name: "Android Development",
      skills: "Kotlin · Jetpack Compose · Android SDK · Modern Android Architecture"
    },
    {
      name: "Databases & DI",
      skills: "Room · Firebase · Koin · SQLite"
    },
    {
      name: "Backend & Web",
      skills: "Node.js · Express.js · REST APIs · HTML/CSS"
    },
    {
      name: "Tools & DevOps",
      skills: "Git · GitHub · AWS · Docker"
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

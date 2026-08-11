export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-12">Experience</h2>
        
        <div className="relative border-l border-border pl-6 ml-2">
          {/* Timeline Dot */}
          <span className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-border border-4 border-background"></span>
          
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
            <h3 className="text-lg font-medium text-foreground">
              AI&ML Intern <span className="text-muted font-normal">— Wirerr Softlabs</span>
            </h3>
            <span className="text-sm text-muted mt-1 md:mt-0 font-medium">01/2026 – 06/2026 &middot; Pune, India</span>
          </div>
          
          <ul className="list-disc list-outside ml-4 space-y-2 text-muted leading-relaxed">
            <li>Developed 30+ REST APIs using Node.js, Express.js, and MongoDB with JWT/RBAC authentication.</li>
            <li>Optimized database performance and built scalable backend modules for vehicle service platforms.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

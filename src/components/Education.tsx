export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 px-4 sm:px-6 bg-white/50 dark:bg-white/5 border-y border-border">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground mb-8 md:mb-12">Education</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-border/50 pb-6">
          <div>
            <h3 className="text-lg font-medium text-foreground mb-1">
              B.Tech in Computer Science (AI & ML)
            </h3>
            <p className="text-muted">
              G H Raisoni College of Engineering and Management
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 text-left md:text-right">
            <p className="text-sm font-medium text-foreground">
              2022 – 2026
            </p>
            <p className="text-sm text-muted">
              Jalgaon, Maharashtra
            </p>
            <p className="text-sm font-medium text-muted mt-2">
              CGPA: 7.84/10
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ExternalLinkIcon } from './icons';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Cool CBC – Vehicle Care & Service Management Platform',
      url: '#',
      description:
        'Developed 30+ REST APIs for customer, staff, partner, and admin workflows, implementing JWT authentication, RBAC, AWS S3 storage, payment and wallet systems, booking workflows, and optimized MongoDB queries.',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'JWT', 'RBAC'],
      image: '',
    },
    {
      id: 2,
      title: 'End-to-End E-Commerce Data Warehouse & ETL Pipeline',
      url: '#',
      description:
        'Built a batch ETL pipeline processing 100K+ daily e-commerce records using PySpark, AWS S3, and Parquet, with Snowflake Star Schema warehousing, automated data loading, and CI/CD testing.',
      skills: ['Python', 'PySpark', 'AWS S3', 'Snowflake', 'SQL', 'GitHub Actions', 'Pytest'],
      image: '',
    },
    {
      id: 3,
      title: 'Modern SQL Data Warehouse',
      url: '#',
      description:
        'Designed and implemented a modern data warehouse using the Medallion architecture (Bronze, Silver, Gold) to extract, transform, and model raw ERP and CRM data into an optimized star schema for business analytics and reporting.',
      skills: ['SQL', 'Medallion Architecture', 'Data Modeling', 'ETL'],
      image: '',
    },
    {
      id: 4,
      title: 'End-to-End Application Development — Aurveda',
      url: '#',
      description:
        'Developed the Aurveda application from scratch to production, taking ownership of the complete development lifecycle while coordinating directly with the client to understand requirements, implement features, incorporate feedback, and deliver the final product.',
      skills: ['Full Stack Development', 'React', 'Node.js', 'Client Coordination'],
      image: '',
    },
  ];

  return (
    <section
      id="projects"
      className="mb-12 scroll-mt-16 md:mb-16 lg:mb-24 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>

      <div>
        <ul className="group/list">
          {projects.map((project) => (
            <li key={project.id} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.title}
                        <ExternalLinkIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 ml-1 translate-y-px" />
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">{project.description}</p>
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                    {project.skills.map((skill) => (
                      <li className="mr-1.5 mt-2" key={skill}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* 
                  To add project images later, uncomment this section. For now, it stays text-focused like the reference design.
                  <img
                    alt={`${project.title} thumbnail`}
                    loading="lazy"
                    width="200"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                    style={{ color: 'transparent' }}
                    src={project.image}
                  />
                */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;

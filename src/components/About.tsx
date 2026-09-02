const About = () => {
  return (
    <section
      id="about"
      className="mb-12 scroll-mt-16 md:mb-16 lg:mb-24 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 text-justify">
          I am a passionate Data Engineer and Full Stack Developer with a strong foundation in modern data architectures,
          ETL/ELT pipelines, and backend development. Currently pursuing a B.Tech in Computer Science with a specialization
          in AI & ML, I enjoy building robust applications from the ground up, scaling data solutions, and ensuring optimal
          performance.
        </p>
        <p className="mb-4 text-justify">
          My experience spans across designing Medallion architecture data warehouses, processing large-scale records
          with PySpark and Snowflake, and crafting REST APIs using Node.js and Express. Whether it's coordinating with
          clients to deliver end-to-end applications or leading a team in hackathons, I thrive at the intersection of
          data engineering, software development, and teamwork.
        </p>
        <p className="mb-12 text-justify">
          When I'm not writing code or optimizing queries, you can usually find me participating in hackathons, exploring
          new cloud technologies, or coordinating academic projects.
        </p>

        <h3 className="mb-4 text-lg font-bold text-slate-200">Education</h3>
        <ul className="group/list">
          <li className="mb-6">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                2022 — 2026
              </header>
              <div className="z-10 sm:col-span-6">
                <h4 className="font-medium leading-snug text-slate-200">
                  <div>
                    B.Tech in Computer Science (AI & ML)
                  </div>
                </h4>
                <p className="mt-1 text-sm text-slate-400">G H Raisoni College of Engineering and Management, Jalgaon</p>
                <p className="mt-2 text-sm leading-normal">CGPA: 7.84/10</p>
              </div>
            </div>
          </li>
          <li className="mb-6">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                2020 — 2022
              </header>
              <div className="z-10 sm:col-span-6">
                <h4 className="font-medium leading-snug text-slate-200">
                  <div>
                    HSC (Class XII)
                  </div>
                </h4>
                <p className="mt-1 text-sm text-slate-400">Balbhim Science College, Beed</p>
                <p className="mt-2 text-sm leading-normal">77.67%</p>
              </div>
            </div>
          </li>
          <li className="mb-6">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                2019 — 2020
              </header>
              <div className="z-10 sm:col-span-6">
                <h4 className="font-medium leading-snug text-slate-200">
                  <div>
                    SSC (Class X)
                  </div>
                </h4>
                <p className="mt-1 text-sm text-slate-400">D B Ghumare School, Beed</p>
                <p className="mt-2 text-sm leading-normal">90.40%</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

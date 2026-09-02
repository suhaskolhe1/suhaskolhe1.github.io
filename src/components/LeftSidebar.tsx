import { GithubIcon, LinkedinIcon, MailIcon, InstagramIcon } from './icons';

interface LeftSidebarProps {
  activeSection: string;
}

const LeftSidebar = ({ activeSection }: LeftSidebarProps) => {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <a href="/">Suhas Kolhe</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Data Engineer / Full Stack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          I engineer scalable data ecosystems, reliable APIs, and engaging digital experiences.
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`group flex items-center py-3 ${activeSection === item.id ? 'active' : ''
                    }`}
                  href={`#${item.id}`}
                >
                  <span
                    className={`nav-indicator mr-4 h-px transition-all duration-300 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${activeSection === item.id
                        ? 'w-16 bg-slate-200'
                        : 'w-8 bg-slate-600'
                      }`}
                  ></span>
                  <span
                    className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${activeSection === item.id
                        ? 'text-slate-200'
                        : 'text-slate-500'
                      }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center gap-5 lg:mt-0" aria-label="Social media">
        <li>
          <a
            className="block text-slate-400 hover:text-slate-200"
            href="https://github.com/suhaskolhe1"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            className="block text-slate-400 hover:text-slate-200"
            href="https://www.linkedin.com/in/suhaskolhe1/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            className="block text-slate-400 hover:text-slate-200"
            href="https://www.instagram.com/suhas.kolhe.1/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            className="block text-slate-400 hover:text-slate-200"
            href="mailto:suhaskolhe1111@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Email"
          >
            <MailIcon className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default LeftSidebar;

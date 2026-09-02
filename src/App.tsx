import { useState, useEffect } from 'react';
import LeftSidebar from './components/LeftSidebar';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Loader from './components/Loader';
import CursorGlow from './components/CursorGlow';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [isLoading]); // Re-run when loading is done so elements exist in DOM

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <div className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
          <CursorGlow />

          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <LeftSidebar activeSection={activeSection} />

              <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
                <About />
                <Experience />
                <Projects />

                <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                  <p>
                    Designed with inspiration from Brittany Chiang. Built with{' '}
                    <a
                      href="https://react.dev/"
                      className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      React
                    </a>{' '}
                    and{' '}
                    <a
                      href="https://tailwindcss.com/"
                      className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tailwind CSS
                    </a>
                    .
                  </p>
                </footer>
              </main>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

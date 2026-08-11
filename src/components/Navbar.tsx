import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon, SunIcon, MoonIcon } from './icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dark mode logic
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-5xl flex items-center justify-between">
        <a href="#" className="font-semibold text-lg tracking-tight hover:text-muted transition-colors">
          Suhas Kolhe
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 text-muted">
            <a 
              href="https://github.com/suhaskolhe1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/suhaskolhe1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <LinkedinIcon className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
          
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-muted hover:text-foreground transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg py-4">
          <ul className="flex flex-col px-6 space-y-4 text-sm font-medium text-foreground">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="flex gap-4 pt-4 border-t border-border">
              <a 
                href="https://github.com/suhaskolhe1" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/suhaskolhe1/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <button
                onClick={toggleDarkMode}
                className="p-2 ml-auto rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-muted hover:text-foreground transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

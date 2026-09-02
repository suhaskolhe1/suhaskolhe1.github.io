import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fade out after animation completes (2s draw + 0.5s s-fade = 2.5s)
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    // Unmount after fade out
    const unmountTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900 transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            className="loader-path fill-transparent stroke-teal-300 stroke-[3px]"
            points="50 5, 90 27.5, 90 72.5, 50 95, 10 72.5, 10 27.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="loader-text text-4xl font-bold text-teal-300">S</span>
      </div>
    </div>
  );
};

export default Loader;

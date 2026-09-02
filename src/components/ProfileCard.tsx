import { useState } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, PlayStoreIcon, PhoneIcon } from './icons';

const ProfileCard = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [openPopover, setOpenPopover] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (text: string, label: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
    } else {
      // Fallback for insecure contexts (like local network HTTP testing)
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (error) {
        console.error('Copy failed', error);
      }
      textArea.remove();
    }
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="w-full max-w-2xl bg-slate-900/60 backdrop-blur-xl border-0 sm:border sm:border-white/10 rounded-none sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col h-screen sm:h-auto sm:max-h-[85vh] animate-fade-in-up">
      {/* Scrollable Content */}
      <div className="overflow-y-auto px-6 py-8 sm:px-12 sm:py-10 custom-scrollbar">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30 shadow-sm mb-6">
            <img 
              src="/profile.jpg" 
              alt="Suhas Kolhe" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2 tracking-wide">Suhas Kolhe</h1>
          <h2 className="text-lg text-white/80 mb-6 font-light">Full Stack Developer</h2>
          
          <div className="flex gap-4 mb-8">
            <a href="https://github.com/suhaskolhe1" target="_blank" rel="noreferrer" className="p-2.5 bg-black/20 border border-white/10 rounded-lg hover:bg-white/10 text-white transition-colors" title="GitHub">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/suhaskolhe1/" target="_blank" rel="noreferrer" className="p-2.5 bg-black/20 border border-white/10 rounded-lg hover:bg-white/10 text-white transition-colors" title="LinkedIn">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            
            {/* Email Button with Popover */}
            <div className="relative">
              <button 
                onClick={() => setOpenPopover(openPopover === 'email' ? null : 'email')} 
                className="p-2.5 bg-black/20 border border-white/10 rounded-lg hover:bg-white/10 text-white transition-colors" 
                title="Email Options"
              >
                <MailIcon className="w-5 h-5" />
              </button>
              {copied === 'Email' && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
                  Copied!
                </span>
              )}
              {openPopover === 'email' && (
                <>
                  <div className="fixed inset-0 z-40 cursor-default" onClick={() => setOpenPopover(null)} />
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50 flex flex-col bg-slate-900 border border-white/20 rounded-lg shadow-xl overflow-hidden min-w-32 py-1">
                    <a href="mailto:suhaskolhe1111@gmail.com" onClick={() => setOpenPopover(null)} className="px-4 py-2 text-sm text-white/90 hover:bg-white/10 text-left whitespace-nowrap transition-colors">
                      Open Mail App
                    </a>
                    <button onClick={() => { handleCopy('suhaskolhe1111@gmail.com', 'Email'); setOpenPopover(null); }} className="px-4 py-2 text-sm text-white/90 hover:bg-white/10 text-left whitespace-nowrap transition-colors">
                      Copy Address
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Phone Button with Popover */}
            <div className="relative">
              <button 
                onClick={() => setOpenPopover(openPopover === 'phone' ? null : 'phone')} 
                className="p-2.5 bg-black/20 border border-white/10 rounded-lg hover:bg-white/10 text-white transition-colors" 
                title="Phone Options"
              >
                <PhoneIcon className="w-5 h-5" />
              </button>
              {copied === 'Phone' && (
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
                  Copied!
                </span>
              )}
              {openPopover === 'phone' && (
                <>
                  <div className="fixed inset-0 z-40 cursor-default" onClick={() => setOpenPopover(null)} />
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50 flex flex-col bg-slate-900 border border-white/20 rounded-lg shadow-xl overflow-hidden min-w-32 py-1">
                    <a href="tel:+918805848409" onClick={() => setOpenPopover(null)} className="px-4 py-2 text-sm text-white/90 hover:bg-white/10 text-left whitespace-nowrap transition-colors">
                      Open Call App
                    </a>
                    <button onClick={() => { handleCopy('+918805848409', 'Phone'); setOpenPopover(null); }} className="px-4 py-2 text-sm text-white/90 hover:bg-white/10 text-left whitespace-nowrap transition-colors">
                      Copy Number
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
          
          <p className="text-sm text-white/80 max-w-md mx-auto leading-relaxed mb-10">
            Building scalable web applications, reliable APIs, and data-driven systems. I enjoy tackling complex engineering challenges from designing database schemas to orchestrating containerized deployments.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-white/20 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }} />

        {/* Experience Section */}
        <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Experience</h3>
          <div className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <h4 className="font-semibold text-white/90">AI & ML Intern</h4>
              <span className="text-xs text-white/60">Jan 2026 - Jun 2026</span>
            </div>
            <div className="text-sm text-white/70 mb-2">Wirerr Softlabs</div>
            <ul className="list-disc ml-4 text-xs text-white/70 space-y-1">
              <li>Developed 30+ REST APIs using Node.js, Express.js, and MongoDB.</li>
              <li>Implemented JWT authentication and role-based access control.</li>
              <li>Optimized database operations for improved backend performance.</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Skills</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xs text-white/60 mb-2 uppercase tracking-wide">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'TypeScript', 'Java', 'Kotlin', 'SQL'].map(skill => (
                  <span key={skill} className="px-2.5 py-1 bg-black/30 border border-white/10 text-white/90 text-xs rounded-md shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs text-white/60 mb-2 uppercase tracking-wide">Frontend & Mobile</h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'React Native', 'Android', 'Kotlin', 'HTML', 'CSS'].map(skill => (
                  <span key={skill} className="px-2.5 py-1 bg-black/30 border border-white/10 text-white/90 text-xs rounded-md shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs text-white/60 mb-2 uppercase tracking-wide">Backend & APIs</h4>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'Python', 'FastAPI', 'REST APIs'].map(skill => (
                  <span key={skill} className="px-2.5 py-1 bg-black/30 border border-white/10 text-white/90 text-xs rounded-md shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs text-white/60 mb-2 uppercase tracking-wide">Databases & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MongoDB', 'MySQL', 'Docker', 'Git', 'Postman'].map(skill => (
                  <span key={skill} className="px-2.5 py-1 bg-black/30 border border-white/10 text-white/90 text-xs rounded-md shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Projects</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-white/90 text-sm mb-1">Cool CBC – Vehicle Management</h4>
              <p className="text-xs text-white/70 mb-2">
                Backend platform supporting workflows with secure authentication, booking, and vehicle lifecycle management.
              </p>
              <div className="flex flex-wrap gap-1">
                {['Node.js', 'MongoDB', 'JWT', 'AWS S3'].map(skill => (
                  <span key={skill} className="px-2 py-0.5 bg-black/20 border border-white/10 text-white/80 text-[10px] rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white/90 text-sm mb-1">Scalable E-Commerce Platform</h4>
              <p className="text-xs text-white/70 mb-2">
                Microservices-based platform using Docker with modular backend services and CI/CD workflows.
              </p>
              <div className="flex flex-wrap gap-1">
                {['Microservices', 'Docker', 'API Gateway'].map(skill => (
                  <span key={skill} className="px-2 py-0.5 bg-black/20 border border-white/10 text-white/80 text-[10px] rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white/90 text-sm mb-1">Aurveda — Notes Sharing App</h4>
              <p className="text-xs text-white/70 mb-2">
                Modular Android app with Student and Admin modules. Integrated Firebase Authentication, Firestore, and Razorpay using Clean Architecture and Koin.
              </p>
              <div className="flex flex-wrap gap-1">
                {['Kotlin', 'Android', 'Firebase', 'Clean Architecture'].map(skill => (
                  <span key={skill} className="px-2 py-0.5 bg-black/20 border border-white/10 text-white/80 text-[10px] rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-white/90 text-sm">Status Saver App</h4>
                <a href="https://play.google.com/store/apps/details?id=com.sk.saver" target="_blank" rel="noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors" title="View on Play Store">
                  <PlayStoreIcon className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs text-white/70 mb-2">
                Android app built using Kotlin and Jetpack Compose for saving and managing social media statuses. Published live on the Google Play Store.
              </p>
              <div className="flex flex-wrap gap-1">
                {['Kotlin', 'Jetpack Compose', 'Android'].map(skill => (
                  <span key={skill} className="px-2 py-0.5 bg-black/20 border border-white/10 text-white/80 text-[10px] rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white/90 text-sm mb-1">Resume Builder</h4>
              <p className="text-xs text-white/70 mb-2">
                React and Node.js platform integrated with Google Gemini for ATS scoring and job-description analysis.
              </p>
              <div className="flex flex-wrap gap-1">
                {['React', 'Node.js', 'Gemini AI'].map(skill => (
                  <span key={skill} className="px-2 py-0.5 bg-black/20 border border-white/10 text-white/80 text-[10px] rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileCard;

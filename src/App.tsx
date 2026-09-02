import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="h-screen w-screen overflow-hidden font-sans flex items-center justify-center p-0 sm:p-4 md:p-8 relative bg-[url('/background.png')] bg-cover bg-center">
      
      {/* Foreground Content */}
      <div className="relative w-full flex justify-center z-10">
        <ProfileCard />
      </div>
    </div>
  );
}

export default App;

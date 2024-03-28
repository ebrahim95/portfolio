import './App.css'
import Navbar from './components/Navbar.tsx';
import './components/Particles'
import ParticlesBackground from './components/Particles.tsx';
import AboutMe from './pages/AboutMe.tsx';
function App() {
  return (
    <div className='font-sans'>
      <ParticlesBackground />
      <div className="w-dvw h-dvh">
        <div className='fixed -mt-2  border-black p-3 border-4 grid grid-cols-2 bg-white w-full'>
          <h1 className="text-black roboto-slab">Ebrahim | FullStack Engineer</h1>
          <Navbar />
        </div>
        <AboutMe />
      </div>
    </div>
  );

}

export default App

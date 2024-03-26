import './App.css'
import Navbar from './components/Navbar.tsx';
import './components/Particles'
import ParticlesBackground from './components/Particles.tsx';

function App() {
  return (
    <div>
      <ParticlesBackground />
      <div className="mx-auto border-4 p-1 w-9/12">
        <Navbar />
        <h1 className="">My Portfolio</h1>
        <div className="card">
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  );

}

export default App

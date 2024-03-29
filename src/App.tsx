import './App.css'
import Navbar from './components/Navbar.tsx';
import './components/Particles'
import ParticlesBackground from './components/Particles.tsx';
import Story from './pages/Story.tsx';
//TODO need to add a small aboutme, add project cards, and values
const text_style = "ring-2 ring-black ring-offset-2 ring-offset-white bg-black text-white rounded-sm mr-3 mb-3 p-1 "
function App() {
  return (
    <main className='font-sans'>
      <ParticlesBackground />
      <div id="layout" className="w-dvw h-dvh pt-32">
        <header className='fixed top-0 border-black p-3 border-4 grid grid-cols-2 bg-indigo-300 w-full'>
          <h1 className="text-black roboto-slab">Ebrahim | FullStack Engineer</h1>
          <Navbar />
        </header>
        <section id="profile" className="grid grid-cols-2 grid-rows-2 bg-indigo-500/50 border-black border-4 w-4/12 h-5/12 mx-auto mb-2 p-4">
          <h1 className="text-black">About Me :)</h1>
          <figure>
          </figure>

          <div id="skills" className="flex flex-wrap items-start justify-start w-full col-span-2">
            <text className={`${text_style}`}>CSS</text>
            <text className={`${text_style}`}>HTML</text>
            <text className={`${text_style}`}>NextJS</text>
            <text className={`${text_style}`}>React</text>
            <text className={`${text_style}`}>JavaScript</text>
            <text className={`${text_style}`}>Typescript</text>
            <text className={`${text_style}`}>Python</text>
            <text className={`${text_style}`}>Node</text>
            <text className={`${text_style}`}>Express</text>
            <text className={`${text_style}`}>MongoDB</text>
            <text className={`${text_style}`}>RestAPI</text>
          </div>
        </section>
        <Story />
      </div >
    </main >
  );

}

export default App

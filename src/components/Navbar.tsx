//TODO Add Icons with three.js


const button = "ring-2 ring-white ring-offset-2 ring-offset-black bg-white text-black rounded-sm m-2 p-2 grow"

function Navbar() {

  return (
    <nav className="flex justify-evenly border-2 w-full h-16">
      <button className={`${button}`}>Home</button>
      <button className={`${button}`}>About Me :)</button>
      <button className={`${button}`}>Projects</button>
    </nav>
  )
}

export default Navbar

//TODO Add Icons with three.js


const button = "ring-2 ring-black ring-offset-2 ring-offset-white bg-black text-white rounded-sm m-2 p-2 grow"

function Navbar() {

  return (
    <nav className="flex justify-evenly w-6/12 h-16">
      <button className={`${button}`}>Home</button>
      <button className={`${button}`}>About Me :)</button>
      <button className={`${button}`}>Projects</button>
    </nav>
  )
}

export default Navbar

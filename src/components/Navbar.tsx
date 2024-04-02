//TODO Add Icons with three.js


const button = "mr-3"

function Navbar() {

  return (
    <nav className="flex justify-end items-center w-full h-16">
      <button className={`${button}`}>Home</button>
      <button className={`${button}`}>About Me :)</button>
      <button className={`${button}`}>Projects</button>
    </nav>
  )
}

export default Navbar

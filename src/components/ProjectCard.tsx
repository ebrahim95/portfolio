interface props {
  heading: string
  text: string
}

export default function ProjectCard({ heading, text }: props) {
  //TODO Card
  return (
    <div className="border-2 border-white place-content-center w-200 h-200">
      <h2>{heading}</h2>
      <div id="text">{text}</div>
    </div>
  )
}

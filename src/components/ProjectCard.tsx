interface props {
  heading?: string
  detail?: string
  stack?: string[]
  git_link?: string
  demo_link?: string
}

const text_style = "ring-2 ring-black ring-offset-2 ring-offset-white bg-black text-white rounded-sm mr-3 mb-3 py-1 px-3"
const button_style = "border-4 border-black rounded-md px-2 my-1 py-1 w-7/12"
export default function ProjectCard({ heading, detail, stack, git_link, demo_link }: props) {
  //TODO Card
  return (
    <div id="project_card" className="text-black mx-auto my-4 w-full border-4 border-black bg-white/75 grid grid-cols-4">
      <div id="info" className="p-3 border-r-2 border-black col-span-3 flex flex-col gap-2 items-start">
        <h2>{heading}</h2>
        <p>{detail}</p>
        <div>
          {stack?.map(s => <text className={`${text_style}`}>{s}</text>)}
        </div>
      </div>
      <div id="links" className="flex flex-col justify-center items-center">
        {git_link === "" ? "" : <button className={`${button_style}`}><a href={`${git_link}`}>Github</a></button>}
        {demo_link === "" ? "" : <button className={`${button_style}`}> <a href={`${demo_link}`}>Demo</a></button>}
      </div>
    </div >
  )
}
